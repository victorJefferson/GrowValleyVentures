import sharp from "sharp";
import { readFileSync, mkdirSync } from "fs";
import { join } from "path";

const brandDir = "public/brand";
const appDir = "src/app";
mkdirSync(brandDir, { recursive: true });

const BRAND = "#1c1a4a";

async function svgToPng(svgPath, outPath, width, height) {
  const svg = readFileSync(svgPath);
  await sharp(svg).resize(width, height, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(outPath);
}

async function main() {
  // Wordmark PNG for OG / fallback (transparent)
  await svgToPng(`${brandDir}/afaq-wordmark.svg`, `${brandDir}/afaq-wordmark.png`, 560, 96);

  // Icon sizes
  await svgToPng(`${brandDir}/afaq-icon.svg`, `${brandDir}/afaq-icon-32.png`, 32, 32);
  await svgToPng(`${brandDir}/afaq-icon.svg`, `${brandDir}/afaq-icon-180.png`, 180, 180);
  await svgToPng(`${brandDir}/afaq-icon.svg`, `${brandDir}/afaq-icon-512.png`, 512, 512);

  // Next.js app icons
  await sharp(readFileSync(`${brandDir}/afaq-icon.svg`)).resize(32, 32).png().toFile(`${appDir}/icon.png`);
  await sharp(readFileSync(`${brandDir}/afaq-icon.svg`)).resize(180, 180).png().toFile(`${appDir}/apple-icon.png`);

  // OG image 1200x630 — white bg, centered wordmark
  const wordmarkBuf = await sharp(readFileSync(`${brandDir}/afaq-wordmark.svg`))
    .resize(640, 110, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: "#ffffff" },
  })
    .composite([{ input: wordmarkBuf, gravity: "center" }])
    .png()
    .toFile(`${brandDir}/afaq-og.png`);

  // Also replace legacy path used in metadata
  await sharp(`${brandDir}/afaq-og.png`).toFile("public/images/afaq-og.png");

  console.log("Brand assets generated.");
  console.log(`Brand color: ${BRAND}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
