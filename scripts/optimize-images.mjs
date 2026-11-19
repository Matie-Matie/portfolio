// Turns the hand-made sources in assets-src/ into the web-ready files in public/images/.
// The cutout comes from `npx hyperframes remove-background assets-src/portrait-original.png -o assets-src/portrait-cutout.png`.
import sharp from 'sharp'

await sharp('assets-src/portrait-cutout.png')
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 86, alphaQuality: 90, effort: 6 })
  .toFile('public/images/portrait.webp')

await sharp('assets-src/portrait-cutout.png')
  .resize({ width: 640 })
  .webp({ quality: 82, alphaQuality: 90, effort: 6 })
  .toFile('public/images/portrait-640.webp')

console.log('images done')
