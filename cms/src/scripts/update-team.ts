import 'dotenv/config'
import payload from 'payload'
import configPromise from '../payload.config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const teamImages = [
  'tran-khanh-du.png',
  'nguyen-le-ha.png',
  'tran-minh-tuan.png',
  'ho-binh-minh.png',
  'phan-nguyen-uyen-ha.png',
  'le-ngoc-anh.png',
  'quynh.jpg',
  'lien.jpg',
  'trinh.jpg',
  'tram.jpg',
  'giang.jpg',
  'ly.jpg',
  'ngoc.jpg',
  'vy.jpg'
]

async function updateTeam() {
  await payload.init({ config: configPromise })

  console.log('Starting team update from vi.json...')

  const viPath = path.resolve(dirname, '../../../i18n/locales/vi.json')
  const viData = JSON.parse(fs.readFileSync(viPath, 'utf8'))
  const members = viData.team.members

  const teamRes = await payload.find({
    collection: 'team',
    limit: 100,
    depth: 1
  })

  for (let i = 0; i < members.length; i++) {
    const memberData = members[i]
    
    // Find the member in Payload by name or photo filename
    let existingMember = teamRes.docs.find((doc: any) => {
      return doc.name && doc.name.trim().toLowerCase() === memberData.name.trim().toLowerCase()
    })

    if (existingMember) {
      console.log(`Updating ${memberData.name}...`)
      await payload.update({
        collection: 'team',
        id: existingMember.id,
        data: {
          name: memberData.name,
          position: memberData.title,
          description: memberData.description ? memberData.description.join('\n') : '',
          experience: memberData.experience || '',
          order: i + 1
        }
      })
    } else {
      console.log(`Creating member ${memberData.name}...`)
      await payload.create({
        collection: 'team',
        data: {
          name: memberData.name,
          position: memberData.title,
          description: memberData.description ? memberData.description.join('\n') : '',
          experience: memberData.experience || '',
          order: i + 1
        }
      })
    }
  }

  console.log('Team update completed successfully!')
  process.exit(0)
}

updateTeam().catch(console.error)
