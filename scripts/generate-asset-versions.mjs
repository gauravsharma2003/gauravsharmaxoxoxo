import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assetsRoot = path.join(root, "public", "assets");
const output = path.join(root, "generated", "asset-versions.json");
const versions = {};

async function visit(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await visit(filename);
    } else if (entry.isFile()) {
      const url = `/assets/${path.relative(assetsRoot, filename).split(path.sep).join("/")}`;
      const bytes = await readFile(filename);
      versions[url] = createHash("sha256").update(bytes).digest("hex").slice(0, 16);
    }
  }
}

await visit(assetsRoot);
const favicon = await readFile(path.join(root, "public", "favicon.ico"));
versions["/favicon.ico"] = createHash("sha256")
  .update(favicon)
  .digest("hex")
  .slice(0, 16);
await mkdir(path.dirname(output), { recursive: true });
const next = `${JSON.stringify(versions, null, 2)}\n`;
const previous = await readFile(output, "utf8").catch(() => "");
if (next !== previous) await writeFile(output, next);
