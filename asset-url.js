import versions from "./generated/asset-versions.json";

export default function assetUrl(path) {
  const hash = versions[path];
  if (!hash) throw new Error(`Missing asset version for ${path}`);
  return `${path}?v=${hash}`;
}
