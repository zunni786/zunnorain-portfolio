import sharp from 'sharp';
import { statSync } from 'fs';

async function optimize() {
  const input = 'public/profile.png';
  const outputWebP = 'public/profile.webp';
  const outputAvif = 'public/profile.avif';

  const image = sharp(input);
  const meta = await image.metadata();
  console.log('Profile image metadata:', meta);

  await image
    .resize({ width: 840 })
    .webp({ quality: 82, effort: 6 })
    .toFile(outputWebP);

  await image
    .resize({ width: 840 })
    .avif({ quality: 55, effort: 4 })
    .toFile(outputAvif);

  console.log('Generated sizes:');
  console.log('PNG:', statSync(input).size);
  console.log('WebP:', statSync(outputWebP).size);
  console.log('AVIF:', statSync(outputAvif).size);
}

optimize().catch((error) => {
  console.error(error);
  process.exit(1);
});