/**
 * Downloads the AI-generated images listed in scripts/generated-images.json
 * into public/images/photos/. Skips files that already exist.
 * Usage: npm run images:fetch
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

interface Entry {
  file: string;
  url: string;
}

const root = process.cwd();
const outDir = join(root, "public/images/photos");
const list = JSON.parse(readFileSync(join(root, "scripts/generated-images.json"), "utf8")) as { images: Entry[] };

async function main() {
  mkdirSync(outDir, { recursive: true });
  let failed = 0;
  for (const img of list.images) {
    const dest = join(outDir, img.file);
    if (existsSync(dest)) {
      console.log(`skip  ${img.file} (exists)`);
      continue;
    }
    try {
      const res = await fetch(img.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
      console.log(`saved ${img.file}`);
    } catch (e) {
      failed++;
      console.error(`FAIL  ${img.file}: ${(e as Error).message}. Re-download it from the fal library and save it as ${dest}`);
    }
  }
  process.exit(failed ? 1 : 0);
}

main();
