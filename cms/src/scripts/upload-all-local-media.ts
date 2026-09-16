import 'dotenv/config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import config from '../payload.config.ts'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase()
  switch (ext) {
    case '.png': return 'image/png'
    case '.jpg':
    case '.jpeg': return 'image/jpeg'
    case '.webp': return 'image/webp'
    case '.gif': return 'image/gif'
    case '.svg': return 'image/svg+xml'
    default: return 'application/octet-stream'
  }
}

function walkDir(dir: string): string[] {
  let results: string[] = []
  if (!fs.existsSync(dir)) return results
  const list = fs.readdirSync(dir)
  for (const file of list) {
    const filePath = path.resolve(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(filePath))
    } else {
      const ext = path.extname(filePath).toLowerCase()
      if (['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'].includes(ext)) {
        results.push(filePath)
      }
    }
  }
  return results
}

async function uploadAllLocalImages() {
  console.log('🚀 Initializing Payload...')
  const payload = await getPayload({ config })

  const scanDirs = [
    path.resolve(dirname, '../../../frontend/public/images'),
    path.resolve(dirname, '../../../frontend/app/assets')
  ]

  const allFiles: string[] = []
  for (const dir of scanDirs) {
    allFiles.push(...walkDir(dir))
  }

  console.log(`📁 Found ${allFiles.length} local images to verify/upload...`)

  let uploadedCount = 0
  let skippedCount = 0

  for (const filePath of allFiles) {
    const baseName = path.basename(filePath)
    const mimeType = getMimeType(filePath)

    try {
      // Check if already in Payload Media
      const existing = await payload.find({
        collection: 'media',
        where: {
          filename: { equals: baseName }
        },
        limit: 1
      })

      if (existing.docs.length > 0) {
        console.log(`✓ [Exists] ${baseName} (ID: ${existing.docs[0].id})`)
        skippedCount++
        continue
      }

      const fileBuffer = fs.readFileSync(filePath)
      const newMedia = await payload.create({
        collection: 'media',
        data: {
          alt: baseName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
        },
        file: {
          data: fileBuffer,
          name: baseName,
          mimetype: mimeType,
          size: fileBuffer.length,
        }
      })

      console.log(`✅ [Uploaded] ${baseName} -> ID: ${newMedia.id}`)
      uploadedCount++
    } catch (err) {
      console.error(`❌ [Failed] ${baseName}:`, err)
    }
  }

  console.log(`\n🎉 DONE! Uploaded: ${uploadedCount}, Already in CMS: ${skippedCount}, Total: ${allFiles.length}`)
  process.exit(0)
}

uploadAllLocalImages().catch(err => {
  console.error(err)
  process.exit(1)
})
