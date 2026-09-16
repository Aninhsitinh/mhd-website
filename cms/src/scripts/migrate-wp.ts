/* eslint-disable */
// @ts-nocheck
import 'dotenv/config'
import payload from 'payload'
import config from '../payload.config.ts'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import https from 'https'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const WP_API = 'https://mhd.com.vn/wp-json/wp/v2'

async function downloadImage(url: string, destPath: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const file = fs.createWriteStream(destPath)
    https.get(url, (response) => {
      response.pipe(file)
      file.on('finish', () => {
        file.close()
        resolve()
      })
    }).on('error', (err: Error) => {
      fs.unlink(destPath, () => reject(err))
    })
  })
}

async function migrate() {
  await payload.init({
    config,
  })

  console.log('Starting migration from WordPress...')

  // Migrate Categories
  console.log('Fetching Categories...')
  const catsRes = await fetch(`${WP_API}/categories?per_page=100`)
  const wpCats: any[] = await catsRes.json()

  const catMap: Record<number, string | number> = {}

  for (const wpCat of wpCats) {
    console.log(`Migrating Category: ${wpCat.name}`)
    try {
      const doc = await payload.create({
        collection: 'categories',
        data: {
          name: wpCat.name,
          slug: wpCat.slug,
          description: wpCat.description || '',
          wpId: wpCat.id,
        },
      })
      catMap[wpCat.id] = doc.id
    } catch (e) {
      console.error(`Error migrating category ${wpCat.name}:`, e)
    }
  }

  // Update Category Parents
  for (const wpCat of wpCats) {
    if (wpCat.parent && catMap[wpCat.id] && catMap[wpCat.parent]) {
      await payload.update({
        collection: 'categories',
        id: catMap[wpCat.id] as string,
        data: {
          parent: catMap[wpCat.parent],
        },
      })
    }
  }

  console.log('Categories migration completed.')

  // Create media directory if not exists
  const mediaDir = path.resolve(dirname, '../../media')
  if (!fs.existsSync(mediaDir)) {
    fs.mkdirSync(mediaDir, { recursive: true })
  }

  // We will migrate posts in chunks
  console.log('Fetching Posts...')
  let page = 1
  let totalPages = 1
  let hasMore = true

  const mediaMap: Record<string, string | number> = {}

  const COLLECTION_MAP: Record<string, 'posts' | 'projects' | 'documents' | 'jobs'> = {
    '16': 'projects',
    '92': 'documents',
    '94': 'documents',
    '96': 'documents',
    '6': 'jobs',
  }

  while (hasMore) {
    console.log(`Fetching Posts Page ${page}...`)
    const res = await fetch(`${WP_API}/posts?per_page=50&page=${page}&_embed=true`)

    if (page === 1) {
      totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1')
      console.log(`Total Pages to fetch: ${totalPages}`)
    }

    const posts: any[] = await res.json()

    for (const wpPost of posts) {
      console.log(`Migrating Post: ${wpPost.title?.rendered || wpPost.id}`)

      let collectionName: 'posts' | 'projects' | 'documents' | 'jobs' = 'posts'
      const wpCatIds: number[] = wpPost.categories || []

      for (const catId of wpCatIds) {
        if (COLLECTION_MAP[String(catId)]) {
          collectionName = COLLECTION_MAP[String(catId)]
          break
        }
      }

      // Handle Featured Image
      let featuredImageId: string | number | null = null
      const featuredMedia = wpPost._embedded?.['wp:featuredmedia']?.[0]
      if (featuredMedia && featuredMedia.source_url) {
        const sourceUrl: string = featuredMedia.source_url
        if (mediaMap[sourceUrl]) {
          featuredImageId = mediaMap[sourceUrl]
        } else {
          try {
            const imgFilename = path.basename(sourceUrl)
            const destPath = path.join(mediaDir, imgFilename)
            await downloadImage(sourceUrl, destPath)

            const mediaDoc = await payload.create({
              collection: 'media',
              data: {
                alt: featuredMedia.alt_text || wpPost.title?.rendered,
                wpId: featuredMedia.id,
                wpUrl: sourceUrl,
              },
              filePath: destPath,
            })

            featuredImageId = mediaDoc.id
            mediaMap[sourceUrl] = mediaDoc.id
          } catch (err) {
            console.error(`Error downloading image ${featuredMedia.source_url}:`, err)
          }
        }
      }

      // Map Categories
      const payloadCats = wpCatIds.map((id: number) => catMap[id]).filter(Boolean)

      // Create Document
      try {
        await payload.create({
          collection: collectionName,
          data: {
            title: wpPost.title?.rendered || '',
            slug: wpPost.slug,
            contentHtml: wpPost.content?.rendered || '',
            excerpt: wpPost.excerpt?.rendered || '',
            publishedDate: wpPost.date,
            status: 'published',
            category: payloadCats.length > 0 ? payloadCats : undefined,
            featuredImage: featuredImageId,
            wpId: wpPost.id,
          },
        })
      } catch (err) {
        console.error(`Error migrating post ${wpPost.id}:`, err)
      }
    }

    if (page >= totalPages) {
      hasMore = false
    } else {
      page++
    }
  }

  console.log('Migration completed successfully!')
  process.exit(0)
}

migrate()
