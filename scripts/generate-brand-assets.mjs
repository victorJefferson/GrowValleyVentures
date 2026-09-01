import sharp from "sharp";
import { readFileSync, mkdirSync, copyFileSync, existsSync } from "fs";

const brandDir = "public/brand";
const appDir = "src/app";
const sourceDir = "afaq-logo";

const WORDMARK_SRC = `${sourceDir}/afaq-wordmark-official.png`;
const ICON_SRC = `${sourceDir}/afaq-icon-official.png`;
const BRAND = "#1c1a4a";

mkdirSync(brandDir, { recursive: true });

async function pngToPng(input, outPath, width, height) {
  await sharp(input)
    .resize(width, height, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(outPath);
}

async function makeLightWordmark(input, outPath) {
  const { width, height } = await sharp(input).metadata();
  await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
    .then(({ data, info }) => {
      for (let i = 0; i < data.length; i += info.channels) {
        const alpha = data[i + 3];
        if (alpha > 0) {
          data[i] = 255;
          data[i + 1] = 255;
          data[i + 2] = 255;
        }
      }
      return sharp(data, {
        raw: { width: info.width, height: info.height, channels: info.channels },
      })
        .png()
        .toFile(outPath);
    });
}

async function main() {
  if (!existsSync(WORDMARK_SRC) || !existsSync(ICON_SRC)) {
    throw new Error(
      `Official source assets missing. Expected ${WORDMARK_SRC} and ${ICON_SRC}. Run scripts/extract-official-brand.py first.`,
    );
  }

  // Canonical transparent PNGs from client source
  copyFileSync(WORDMARK_SRC, `${brandDir}/afaq-wordmark.png`);
  copyFileSync(ICON_SRC, `${brandDir}/afaq-icon.png`);

  // Icon sizes
  await pngToPng(ICON_SRC, `${brandDir}/afaq-icon-32.png`, 32, 32);
  await pngToPng(ICON_SRC, `${brandDir}/afaq-icon-180.png`, 180, 180);
  await pngToPng(ICON_SRC, `${brandDir}/afaq-icon-512.png`, 512, 512);

  // Next.js app icons
  await sharp(ICON_SRC).resize(32, 32).png().toFile(`${appDir}/icon.png`);
  await sharp(ICON_SRC).resize(180, 180).png().toFile(`${appDir}/apple-icon.png`);

  // White wordmark for dark backgrounds (maintenance screen)
  await makeLightWordmark(WORDMARK_SRC, `${brandDir}/afaq-wordmark-light.png`);

  // OG image 1200x630 — white bg, centered official wordmark lockup
  const wordmarkBuf = await sharp(WORDMARK_SRC)
    .resize(720, 255, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: "#ffffff" },
  })
    .composite([{ input: wordmarkBuf, gravity: "center" }])
    .png()
    .toFile(`${brandDir}/afaq-og.png`);

  await sharp(`${brandDir}/afaq-og.png`).toFile("public/images/afaq-og.png");

  console.log("Official brand assets generated from client source PNGs.");
  console.log(`Brand color: ${BRAND}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
