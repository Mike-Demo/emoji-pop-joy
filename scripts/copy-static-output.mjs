// Ensures the static site ends up in dist/client for SpaceFast.
import { cpSync, existsSync, mkdirSync } from "node:fs";

const target = "dist/client";
const candidates = ["dist/client", ".output/public"];
const source = candidates.find((dir) => existsSync(`${dir}/index.html`));

if (!source) {
  process.stderr.write("No static index.html found in dist/client or .output/public\n");
  process.exit(1);
}

if (source !== target) {
  mkdirSync(target, { recursive: true });
  cpSync(source, target, { recursive: true });
}

process.stdout.write(`Static output ready in ${target} (from ${source})\n`);
