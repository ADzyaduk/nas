import sharp from 'sharp'
import { mkdir, rename, stat } from 'fs/promises'
import { join } from 'path'

const PUBLIC_IMG = join(import.meta.dirname, '..', 'public', 'img')
const ORIGINALS = join(PUBLIC_IMG, '_originals')

await mkdir(ORIGINALS, { recursive: true })

const files = [
  { src: '4istka.png',       dest: '4istka.webp' },
  { src: 'face_massage.jpg', dest: 'face_massage.webp' },
  { src: 'maska.jpg',        dest: 'maska.webp' },
  { src: 'pilling.jpg',      dest: 'pilling.webp' },
  { src: 'hero_bg.png',      dest: 'hero_bg.webp' },
]

for (const { src, dest } of files) {
  const srcPath = join(PUBLIC_IMG, src)
  const destPath = join(PUBLIC_IMG, dest)
  const origPath = join(ORIGINALS, src)

  await sharp(srcPath).rotate().webp({ quality: 82 }).toFile(destPath)

  const srcStat = await stat(srcPath)
  const destStat = await stat(destPath)
  const saved = ((1 - destStat.size / srcStat.size) * 100).toFixed(1)
  console.log(`${src} -> ${dest}  (${saved}% smaller)`)

  await rename(srcPath, origPath)
}

console.log('\nDone!')
