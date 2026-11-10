
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { readFile, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(currentDir, "../public");

const svgPath = path.join(publicDir, "favicon.svg");
const svg = await readFile(svgPath);

async function createPng(filename, size) {
  await sharp(svg)
    .resize(size, size)
    .png()
    .toFile(path.join(publicDir, filename));

  console.log(`Created ${filename} (${size}x${size})`);
}

await createPng("favicon-16x16.png", 16);
await createPng("favicon-32x32.png", 32);
await createPng("apple-touch-icon.png", 180);

// Create an additional 48px image for the ICO file.
const temp48 = path.join(publicDir, "favicon-48-temp.png");

await sharp(svg)
  .resize(48, 48)
  .png()
  .toFile(temp48);

// Combine multiple PNG sizes into favicon.ico.
const ico = await pngToIco([
  path.join(publicDir, "favicon-16x16.png"),
  path.join(publicDir, "favicon-32x32.png"),
  temp48
]);

await writeFile(path.join(publicDir, "favicon.ico"), ico);
await rm(temp48);

console.log("All favicon files generated successfully!");
