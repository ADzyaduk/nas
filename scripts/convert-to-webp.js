import sharp from 'sharp'
import { readdir, mkdir, rename, stat } from 'fs/promises'
import { join, extname } from 'path'

const PUBLIC_IMG = join(import.meta.dirname, '..', 'public', 'img')
const ORIGINALS = join(PUBLIC_IMG, '_originals')

const eduFiles = (await readdir(join(PUBLIC_IMG, 'edu')))
  .filter(f => /\.jpe?g$/i.test(f))
  .sort()

const kabinetJpgs = (await readdir(join(PUBLIC_IMG, 'kabinet')))
  .filter(f => /\.jpe?g$/i.test(f))

await mkdir(join(ORIGINALS, 'edu'), { recursive: true })
await mkdir(join(ORIGINALS, 'kabinet'), { recursive: true })

async function convert(src, dest) {
  await sharp(src).webp({ quality: 82 }).toFile(dest)
  const srcStat = await stat(src)
  const destStat = await stat(dest)
  const saved = ((1 - destStat.size / srcStat.size) * 100).toFixed(1)
  console.log(`  ${src} -> ${dest}  (${saved}% smaller)`)
}

console.log('Converting master.jpg ...')
await convert(
  join(PUBLIC_IMG, 'master.jpg'),
  join(PUBLIC_IMG, 'master.webp')
)
await rename(join(PUBLIC_IMG, 'master.jpg'), join(ORIGINALS, 'master.jpg'))

console.log(`\nConverting ${eduFiles.length} edu certificates ...`)
for (let i = 0; i < eduFiles.length; i++) {
  const src = join(PUBLIC_IMG, 'edu', eduFiles[i])
  const dest = join(PUBLIC_IMG, 'edu', `cert-${i + 1}.webp`)
  await convert(src, dest)
  await rename(src, join(ORIGINALS, 'edu', eduFiles[i]))
}

console.log(`\nConverting ${kabinetJpgs.length} kabinet photo(s) ...`)
for (const file of kabinetJpgs) {
  const src = join(PUBLIC_IMG, 'kabinet', file)
  const dest = join(PUBLIC_IMG, 'kabinet', 'kabinet.webp')
  await convert(src, dest)
  await rename(src, join(ORIGINALS, 'kabinet', file))
}

console.log('\nRenaming kabinet videos ...')
const videos = [
  ['IMG_2342.mp4', 'video-1.mp4'],
  ['IMG_2433.mp4', 'video-2.mp4'],
]
for (const [from, to] of videos) {
  const src = join(PUBLIC_IMG, 'kabinet', from)
  const dest = join(PUBLIC_IMG, 'kabinet', to)
  try {
    await rename(src, dest)
    console.log(`  ${from} -> ${to}`)
  } catch (e) {
    console.log(`  ${from} not found, skipping`)
  }
}

console.log('\nDone!')
