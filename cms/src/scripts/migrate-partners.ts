import 'dotenv/config'
import payload from 'payload'
import configPromise from '../payload.config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

async function migratePartners() {
  await payload.init({
    config: configPromise,
  })

  console.log('Starting partner migration...')

  const partnersDir = path.resolve(dirname, '../../../app/public/images/partners')
  
  if (!fs.existsSync(partnersDir)) {
    console.error('Partners directory not found:', partnersDir)
    process.exit(1)
  }

  const files = fs.readdirSync(partnersDir)

  let order = 1
  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png|webp|gif)$/i)) continue
    
    console.log(`Processing partner logo: ${file}`)
    const filePath = path.join(partnersDir, file)
    const name = file.replace(/\.[^/.]+$/, '').replace(/-/g, ' ').toUpperCase()

    try {
      // 1. Upload to Media
      const mediaDoc = await payload.create({
        collection: 'media',
        data: {
          alt: `Logo ${name}`,
        },
        filePath: filePath,
      })

      // 2. Create Partner
      await payload.create({
        collection: 'partners',
        data: {
          name: name,
          logo: mediaDoc.id,
          order: order++,
        },
      })
      
      console.log(`Successfully migrated partner: ${name}`)
    } catch (err) {
      console.error(`Error migrating partner ${file}:`, err)
    }
  }

  console.log('Partner migration completed successfully!')
  process.exit(0)
}

migratePartners()
