import { spawn } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const url = process.argv[2] || "https://gauravsharma.cc/";
const mobile = process.argv.includes("--mobile");
const profile = await mkdtemp(path.join(tmpdir(), "portfolio-perf-"));
const chrome = spawn(
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  [
    "--headless=new",
    "--no-first-run",
    "--no-default-browser-check",
    "--remote-debugging-port=0",
    `--user-data-dir=${profile}`,
    "about:blank",
  ],
  { stdio: "ignore" }
);

let socket;
try {
  let port;
  for (let attempt = 0; attempt < 100; attempt++) {
    try {
      port = (await readFile(path.join(profile, "DevToolsActivePort"), "utf8")).split("\n")[0];
      break;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  if (!port) throw new Error("Chrome did not start");
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  const target = tabs.find((tab) => tab.type === "page");
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.onopen = resolve;
    socket.onerror = reject;
  });

  let id = 0;
  const pending = new Map();
  const requests = new Map();
  let loadResolve;
  const loaded = new Promise((resolve) => { loadResolve = resolve; });
  socket.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    if (message.id) {
      const callback = pending.get(message.id);
      pending.delete(message.id);
      callback?.(message);
    }
    if (message.method === "Network.requestWillBeSent") {
      requests.set(message.params.requestId, {
        url: message.params.request.url,
        type: message.params.type,
        bytes: 0,
      });
    }
    if (message.method === "Network.loadingFinished") {
      const request = requests.get(message.params.requestId);
      if (request) request.bytes = message.params.encodedDataLength;
    }
    if (message.method === "Page.loadEventFired") loadResolve();
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const requestId = ++id;
    pending.set(requestId, (message) => message.error ? reject(Error(message.error.message)) : resolve(message.result));
    socket.send(JSON.stringify({ id: requestId, method, params }));
  });

  await Promise.all([send("Page.enable"), send("Network.enable"), send("Runtime.enable")]);
  await send("Network.setCacheDisabled", { cacheDisabled: true });
  if (mobile) {
    await send("Emulation.setDeviceMetricsOverride", {
      width: 390, height: 844, deviceScaleFactor: 2, mobile: true,
    });
    await send("Emulation.setUserAgentOverride", {
      userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    });
  }
  await send("Page.addScriptToEvaluateOnNewDocument", {
    source: `window.__lastLcp = 0; new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) window.__lastLcp = entry.startTime;
    }).observe({type: 'largest-contentful-paint', buffered: true});`,
  });
  await send("Page.navigate", { url });
  const loadCompleted = await Promise.race([
    loaded.then(() => true),
    new Promise((resolve) => setTimeout(() => resolve(false), 15000)),
  ]);
  if (loadCompleted) await new Promise((resolve) => setTimeout(resolve, 1500));
  const result = await send("Runtime.evaluate", {
    expression: `JSON.stringify({navigation: performance.getEntriesByType('navigation')[0].toJSON(), paints: performance.getEntriesByType('paint').map(x => ({name:x.name,startTime:x.startTime})), lcp: window.__lastLcp, resources: performance.getEntriesByType('resource').map(x => ({name:x.name,start:Math.round(x.startTime),end:Math.round(x.responseEnd),duration:Math.round(x.duration)}))})`,
    returnByValue: true,
  });
  const metrics = JSON.parse(result.result.value);
  const resources = [...requests.values()].filter((request) => request.url.startsWith(url.replace(/\/$/, "")));
  console.log(JSON.stringify({
    mode: mobile ? "mobile" : "desktop",
    url,
    loadCompleted,
    ttfb: Math.round(metrics.navigation.responseStart),
    domContentLoaded: Math.round(metrics.navigation.domContentLoadedEventEnd),
    load: Math.round(metrics.navigation.loadEventEnd),
    firstPaint: Math.round(metrics.paints.find((paint) => paint.name === "first-paint")?.startTime || 0),
    firstContentfulPaint: Math.round(metrics.paints.find((paint) => paint.name === "first-contentful-paint")?.startTime || 0),
    lcp: Math.round(metrics.lcp),
    requests: resources.length,
    bytes: resources.reduce((sum, request) => sum + request.bytes, 0),
    resources: resources.sort((a, b) => b.bytes - a.bytes).slice(0, 8),
    unfinishedRequests: [...requests.values()].filter((request) => !request.bytes),
    slowest: metrics.resources.sort((a, b) => b.duration - a.duration).slice(0, 12),
  }, null, 2));
} finally {
  socket?.close();
  chrome.kill();
  await new Promise((resolve) => chrome.once("exit", resolve));
  await rm(profile, { recursive: true, force: true }).catch(() => {});
}
