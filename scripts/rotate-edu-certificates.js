import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join } from 'path'

const PUBLIC_IMG = join(import.meta.dirname, '..', 'public', 'img')
const ORIGINALS = join(PUBLIC_IMG, '_originals')

const originalEduDir = join(ORIGINALS, 'edu')
const targetEduDir = join(PUBLIC_IMG, 'edu')

const originalFiles = (await readdir(originalEduDir))
  .filter((f) => /\.jpe?g$/i.test(f))
  .sort()

console.log(`Rotating ${originalFiles.length} edu certificates ...`)

for (let i = 0; i < originalFiles.length; i++) {
  const file = originalFiles[i]
  const src = join(originalEduDir, file)
  const dest = join(targetEduDir, `cert-${i + 1}.webp`)

  // Этот файл уже лежит горизонтально в оригинале — не трогаем ориентацию
  const isAlreadyHorizontal = file.includes('100117')

  const img = sharp(src)
  // Неправильно ориентированные были «на боку» — поворачиваем их на -90°
  const pipeline = isAlreadyHorizontal ? img : img.rotate(-90)

  await pipeline.webp({ quality: 82 }).toFile(dest)
  console.log(
    `  ${isAlreadyHorizontal ? 'kept' : 'rotated'} ${src} -> ${dest}`,
  )
}

console.log('Done rotating certificates.')

