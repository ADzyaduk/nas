import sharp from 'sharp'
import { readFile, writeFile, stat } from 'fs/promises'
import { join } from 'path'

const PUBLIC_IMG = join(import.meta.dirname, '..', 'public', 'img')

const targets = [
  { file: 'face_massage.webp', maxWidth: 800 },
  { file: '4istka.webp',       maxWidth: 800 },
  { file: 'maska.webp',        maxWidth: 800 },
  { file: 'pilling.webp',      maxWidth: 800 },
  { file: 'hero_bg.webp',      maxWidth: 1920 },
]

for (const { file, maxWidth } of targets) {
  const filePath = join(PUBLIC_IMG, file)
  const before = (await stat(filePath)).size

  const inputBuf = await readFile(filePath)
  const meta = await sharp(inputBuf).metadata()

  if (meta.width <= maxWidth) {
    console.log(`${file}: ${meta.width}px -- already within ${maxWidth}px, skipping`)
    continue
  }

  const outputBuf = await sharp(inputBuf)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer()

  await writeFile(filePath, outputBuf)

  const after = outputBuf.length
  const saved = ((1 - after / before) * 100).toFixed(1)
  console.log(`${file}: ${meta.width}px -> ${maxWidth}px  (${saved}% smaller, ${(before / 1024).toFixed(0)} KiB -> ${(after / 1024).toFixed(0)} KiB)`)
}

console.log('\nDone!')
