// @ts-nocheck
import 'dotenv/config'
import payload from 'payload'
import configPromise from '../payload.config'

const WP_API = 'https://mhd.com.vn/wp-json/wp/v2'

async function syncDocumentsRawHtml() {
  const config = await configPromise
  await payload.init({ config })

  console.log('--- Syncing clean original HTML from WordPress for documents ---')
  const res = await payload.find({
    collection: 'documents',
    limit: 100,
    depth: 0,
  })

  console.log(`Found ${res.docs.length} documents in Payload.`)

  for (const doc of res.docs) {
    if (!doc.wpId) continue
    try {
      console.log(`Fetching WP Post ID ${doc.wpId} for "${doc.title}"...`)
      const wpRes = await fetch(`${WP_API}/posts/${doc.wpId}`)
      const wpPost = await wpRes.json()

      if (wpPost && wpPost.content && wpPost.content.rendered) {
        let rawHtml = wpPost.content.rendered

        // Replace old address if any
        rawHtml = rawHtml.replace(
          /(Số\s*)?52 Trần Bình Trọng[^<]*?(Hồ Chí Minh|HCM|TP\.HCM)(,\s*Việt Nam)?/gi,
          'Số 52 Trần Bình Trọng, phường Bình Lợi Trung, Thành phố Hồ Chí Minh'
        )

        await payload.update({
          collection: 'documents',
          id: doc.id,
          data: {
            contentHtml: rawHtml
          }
        })
        console.log(`[SUCCESS] Saved original contentHtml for doc: ${doc.title} (${rawHtml.length} bytes)`)
      }
    } catch (err) {
      console.error(`Error syncing doc ID ${doc.id}:`, err)
    }
  }

  console.log('--- Completed sync documents HTML ---')
  process.exit(0)
}

syncDocumentsRawHtml().catch(console.error)
