import 'dotenv/config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import config from '../payload.config.ts'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

async function uploadLocalAssets() {
  console.log('🚀 Initializing Payload...')
  const payload = await getPayload({ config })

  const assetsToUpload = [
    {
      sourcePath: path.resolve(dirname, '../../../frontend/public/images/hero-office.png'),
      filename: 'hero-office.png',
      alt: 'MHD Office Landmark Hero Banner',
      key: 'heroBanner'
    },
    {
      sourcePath: path.resolve(dirname, '../../../frontend/app/assets/team-photo.jpg'),
      filename: 'team-photo.jpg',
      alt: 'Đội ngũ chuyên gia và thẩm định viên MHD',
      key: 'teamPhoto'
    },
    {
      sourcePath: path.resolve(dirname, '../../../frontend/app/assets/logomhd.png'),
      filename: 'logomhd.png',
      alt: 'Logo chính thức MHD Valuation',
      key: 'companyLogo'
    }
  ]

  const uploadedMediaIds: Record<string, any> = {}

  for (const asset of assetsToUpload) {
    if (!fs.existsSync(asset.sourcePath)) {
      console.warn(`⚠️ File not found: ${asset.sourcePath}`)
      continue
    }

    console.log(`Uploading ${asset.filename}...`)
    try {
      // Check if already in media
      const existing = await payload.find({
        collection: 'media',
        where: {
          filename: { equals: asset.filename }
        },
        limit: 1
      })

      let mediaDoc
      if (existing.docs.length > 0) {
        console.log(`✓ Already exists in Media collection: ${asset.filename}`)
        mediaDoc = existing.docs[0]
      } else {
        const fileBuffer = fs.readFileSync(asset.sourcePath)
        mediaDoc = await payload.create({
          collection: 'media',
          data: {
            alt: asset.alt,
          },
          file: {
            data: fileBuffer,
            name: asset.filename,
            mimetype: asset.filename.endsWith('.png') ? 'image/png' : 'image/jpeg',
            size: fileBuffer.length,
          }
        })
        console.log(`✅ Uploaded to Media (ID: ${mediaDoc.id})`)
      }

      uploadedMediaIds[asset.key] = mediaDoc.id
    } catch (err) {
      console.error(`❌ Failed to upload ${asset.filename}:`, err)
    }
  }

  // Update SiteSettings Global
  console.log('Updating SiteSettings global...')
  try {
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        heroBanner: uploadedMediaIds.heroBanner,
        teamPhoto: uploadedMediaIds.teamPhoto,
        companyLogo: uploadedMediaIds.companyLogo,
      }
    })
    console.log('🎉 SiteSettings successfully linked to Payload Media!')
  } catch (err) {
    console.error('❌ Failed to update SiteSettings global:', err)
  }

  process.exit(0)
}

uploadLocalAssets().catch(err => {
  console.error(err)
  process.exit(1)
})
