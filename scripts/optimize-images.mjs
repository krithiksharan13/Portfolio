// One-off image optimizer. Converts large raster images to WebP in place
// (same basename, .webp extension), then you update references and delete the
// originals. Run: node scripts/optimize-images.mjs
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { join, extname, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const DIRS = ["public/lovable-uploads", "src/assets"];
const MAX_WIDTH = 1600;
const QUALITY = 80;
const SKIP_UNDER_BYTES = 60 * 1024; // leave small logos/icons alone

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let saved = 0;
for (const rel of DIRS) {
  const dir = join(root, rel);
  for await (const file of walk(dir)) {
    const ext = extname(file).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
    const { size } = await stat(file);
    if (size < SKIP_UNDER_BYTES) continue;

    const out = join(dirname(file), basename(file, ext) + ".webp");
    const input = await readFile(file);
    const img = sharp(input).rotate();
    const meta = await img.metadata();
    if (meta.width && meta.width > MAX_WIDTH) img.resize({ width: MAX_WIDTH });
    const buf = await img.webp({ quality: QUALITY }).toBuffer();
    await writeFile(out, buf);

    const delta = size - buf.length;
    saved += delta;
    console.log(
      `${rel}/${basename(file)}  ${(size / 1024) | 0}KB -> ${(buf.length / 1024) | 0}KB  (${basename(out)})`,
    );
  }
}
console.log(`\nTotal saved: ${(saved / 1024 / 1024).toFixed(1)} MB`);
