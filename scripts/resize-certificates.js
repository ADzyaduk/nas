import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join } from 'path'

const PUBLIC_IMG = join(import.meta.dirname, '..', 'public', 'img')
const ORIGINALS = join(PUBLIC_IMG, '_originals', 'edu')
const TARGET = join(PUBLIC_IMG, 'edu')

const originalFiles = (await readdir(ORIGINALS))
  .filter((f) => /\.jpe?g$/i.test(f))
  .sort()

const skipRotate = ['100117']

for (let i = 0; i < originalFiles.length; i++) {
  const file = originalFiles[i]
  const src = join(ORIGINALS, file)
  const dest = join(TARGET, `cert-${i + 1}.webp`)

  const isHorizontal = skipRotate.some((s) => file.includes(s))

  let pipeline = sharp(src)
  if (!isHorizontal) pipeline = pipeline.rotate(-90)

  await pipeline
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(dest)

  const destStat = await stat(dest)
  const kb = (destStat.size / 1024).toFixed(0)
  console.log(`  cert-${i + 1}.webp  ${kb} KB`)
}

console.log('\nDone!')
