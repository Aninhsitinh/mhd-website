import 'dotenv/config'
import payload from 'payload'
import configPromise from '../payload.config'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
import mime from 'mime-types'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function run() {
  const config = await configPromise
  await payload.init({ config })

  const collections = ['posts', 'projects', 'documents', 'jobs']
  const wpDomain = 'mhd.com.vn'

  let totalReplaced = 0

  for (const collection of collections) {
    console.log(`\n--- Processing collection: ${collection} ---`)
    let hasMore = true
    let page = 1

    while (hasMore) {
      const result = await payload.find({
        collection: collection as any,
        page,
        limit: 50,
        depth: 0,
      })

      for (const doc of result.docs) {
        let contentHtml = doc.contentHtml as string || ''
        if (!contentHtml.includes(wpDomain)) {
          continue
        }

        console.log(`Checking doc [${collection}] ID: ${doc.id}`)
        
        // Find all src="..." and href="..." containing mhd.com.vn
        const urlRegex = /(?:src|href)=["'](https?:\/\/(?:www\.)?mhd\.com\.vn\/[^"']+)["']/g
        let match
        const urlsToProcess = new Set<string>()

        while ((match = urlRegex.exec(contentHtml)) !== null) {
          urlsToProcess.add(match[1])
        }

        let needsUpdate = false

        for (const wpUrl of urlsToProcess) {
          console.log(`  Found inline media: ${wpUrl}`)
          try {
            // Check if we already uploaded this exact WP URL (we saved wpUrl in media collection)
            const existingMedia = await payload.find({
              collection: 'media',
              where: {
                wpUrl: { equals: wpUrl }
              },
              limit: 1
            })

            let newUrl = ''

            if (existingMedia.docs.length > 0) {
              newUrl = existingMedia.docs[0].url as string
              console.log(`    Already migrated: ${newUrl}`)
            } else {
              console.log(`    Downloading...`)
              const response = await fetch(wpUrl)
              if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
              
              const buffer = await response.buffer()
              
              const urlParts = wpUrl.split('/')
              let filename = urlParts[urlParts.length - 1].split('?')[0]
              // decoded
              filename = decodeURIComponent(filename)
              
              let mimeType = response.headers.get('content-type') || mime.lookup(filename) || 'application/octet-stream'
              
              const mediaDoc = await payload.create({
                collection: 'media',
                data: {
                  alt: `Inline media ${filename}`,
                  wpUrl: wpUrl,
                },
                file: {
                  data: buffer,
                  mimetype: mimeType as string,
                  name: filename,
                  size: buffer.length
                }
              })
              newUrl = mediaDoc.url as string
              console.log(`    Uploaded to: ${newUrl}`)
            }

            // Global replace in contentHtml
            const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            contentHtml = contentHtml.replace(new RegExp(escapeRegExp(wpUrl), 'g'), newUrl)
            needsUpdate = true
            totalReplaced++
            
            await delay(200) // gentle with local resources
          } catch (err: any) {
            console.error(`    Failed to migrate ${wpUrl}: ${err.message}`)
          }
        }

        if (needsUpdate) {
          try {
            await payload.update({
              collection: collection as any,
              id: doc.id,
              data: { contentHtml }
            })
            console.log(`  [OK] Updated HTML for doc ID: ${doc.id}`)
          } catch (err: any) {
            console.error(`  [ERROR] Failed to save doc ID: ${doc.id}:`, err.message)
          }
        }
      }

      if (result.hasNextPage) {
        page++
      } else {
        hasMore = false
      }
    }
  }

  console.log(`\nMigration complete. Total inline media replaced: ${totalReplaced}`)
  process.exit(0)
}

run().catch(console.error)
