import 'dotenv/config'
import config from '../payload.config.ts'
import { getPayload } from 'payload'

function normalizeUnicodeRecursively(obj: any): any {
  if (typeof obj === 'string') {
    return obj.normalize('NFC')
  }
  if (Array.isArray(obj)) {
    return obj.map(normalizeUnicodeRecursively)
  }
  if (obj && typeof obj === 'object') {
    const newObj: Record<string, any> = {}
    for (const key of Object.keys(obj)) {
      newObj[key] = normalizeUnicodeRecursively(obj[key])
    }
    return newObj
  }
  return obj
}

async function fixAllUnicodeInCMS() {
  console.log('🚀 Initializing Payload...')
  const payload = await getPayload({ config })

  const collections = ['documents', 'posts', 'projects', 'jobs']

  for (const col of collections) {
    console.log(`\n🔍 Checking collection: ${col}...`)
    const result = await payload.find({
      collection: col as any,
      limit: 200,
      depth: 0,
    })

    for (const doc of result.docs) {
      const originalTitle = doc.title || ''
      const normalizedTitle = originalTitle.normalize('NFC')
      const normalizedContent = doc.content ? normalizeUnicodeRecursively(doc.content) : doc.content
      const normalizedExcerpt = (doc.excerpt || '').normalize('NFC')

      const needsUpdate = 
        originalTitle !== normalizedTitle || 
        (doc.excerpt && doc.excerpt !== normalizedExcerpt) ||
        JSON.stringify(doc.content) !== JSON.stringify(normalizedContent)

      if (needsUpdate) {
        console.log(`📝 Normalizing NFC for [${col}] ID: ${doc.id} - "${normalizedTitle.substring(0, 40)}..."`)
        await payload.update({
          collection: col as any,
          id: doc.id,
          data: {
            title: normalizedTitle,
            content: normalizedContent,
            excerpt: normalizedExcerpt,
          }
        })
      }
    }
  }

  console.log('\n🎉 ALL COLLECTIONS SUCCESSFULLY NORMALIZED TO UNICODE NFC!')
  process.exit(0)
}

fixAllUnicodeInCMS().catch(err => {
  console.error(err)
  process.exit(1)
})
