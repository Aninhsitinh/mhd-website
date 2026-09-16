// @ts-nocheck
import 'dotenv/config'
import payload from 'payload'
import configPromise from '../payload.config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const teamData = {
  'tran-khanh-du': { name: 'Trần Khánh Du', position: 'Giám đốc điều hành' },
  'nguyen-le-ha': { name: 'Nguyễn Lê Hà', position: 'Phó giám đốc' },
  'ho-binh-minh': { name: 'Hồ Bình Minh', position: 'Phó giám đốc' },
  'tran-minh-tuan': { name: 'Trần Minh Tuấn', position: 'Thẩm định viên kiểm soát' },
  'phan-nguyen-uyen-ha': { name: 'Phan Nguyễn Uyên Hà', position: 'Thẩm định viên' },
  'le-ngoc-anh': { name: 'Lê Ngọc Anh', position: 'Thẩm định viên' },
}

async function migrateTeam() {
  await payload.init({
    config: configPromise,
  })

  console.log('Starting team migration...')

  const teamDir = path.resolve(dirname, '../../../app/public/images/team')
  
  if (!fs.existsSync(teamDir)) {
    console.error('Team directory not found:', teamDir)
    process.exit(1)
  }

  const files = fs.readdirSync(teamDir)

  let order = 1
  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png|webp|gif)$/i)) continue
    
    console.log(`Processing team member: ${file}`)
    const filePath = path.join(teamDir, file)
    const baseName = file.replace(/\.[^/.]+$/, '')
    
    const info = teamData[baseName] || {
      name: baseName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      position: 'Thành viên'
    }

    try {
      // 1. Upload to Media
      const mediaDoc = await payload.create({
        collection: 'media',
        data: {
          alt: `Ảnh ${info.name}`,
        },
        filePath: filePath,
      })

      // 2. Create Team member
      await payload.create({
        collection: 'team',
        data: {
          name: info.name,
          position: info.position,
          photo: mediaDoc.id,
          order: order++,
        },
      })
      
      console.log(`Successfully migrated team member: ${info.name}`)
    } catch (err) {
      console.error(`Error migrating team member ${file}:`, err)
    }
  }

  console.log('Team migration completed successfully!')
  process.exit(0)
}

migrateTeam()
