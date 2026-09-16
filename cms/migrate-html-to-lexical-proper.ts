import 'dotenv/config'
import payload from 'payload'
import configPromise from './src/payload.config.ts'
import { convertHTMLToLexical, consolidateHTMLConverters } from '@payloadcms/richtext-lexical'
import { JSDOM } from 'jsdom'

async function run() {
  const config = await configPromise
  await payload.init({ config })
  
  // Need JSDOM for HTML parsing in Node
  const dom = new JSDOM('')
  global.document = dom.window.document
  global.window = dom.window
  global.DOMParser = dom.window.DOMParser

  // Get the editor from the initialized payload config!
  const editorConfig = payload.config.editor
  
  // The resolved features might be available, but convertHTMLToLexical expects converters.
  // Actually, we can get default converters
  let defaultConverters;
  try {
     const { defaultEditorFeatures } = require('@payloadcms/richtext-lexical')
     defaultConverters = consolidateHTMLConverters({ features: defaultEditorFeatures, editorConfig: { resolvedFeatureMap: new Map() } })
  } catch (e) {
     console.log('Error getting converters directly', e)
     // Let's use the editorConfig from payload
     if (editorConfig.resolvedFeatureMap) {
        defaultConverters = consolidateHTMLConverters({ editorConfig: editorConfig as any })
     }
  }
  
  console.log('Converters found?', !!defaultConverters)
  
  const collections = ['posts', 'projects', 'documents', 'jobs']

  for (const collection of collections) {
    console.log(`Processing collection: ${collection}`)
    let hasMore = true
    let page = 1
    
    while (hasMore) {
      const result = await payload.find({
        collection,
        page,
        limit: 100,
        depth: 0,
      })
      
      for (const doc of result.docs) {
        let updateData: any = {}
        let needsUpdate = false
        
        // Convert contentHtml to Lexical content if content is empty
        if (doc.contentHtml && (!doc.content || Object.keys(doc.content).length === 0)) {
          try {
            const lexicalData = convertHTMLToLexical({
              html: doc.contentHtml,
              converters: defaultConverters,
            })
            updateData.content = lexicalData
            needsUpdate = true
          } catch (err) {
            console.error(`Failed to convert HTML for doc ${doc.id}:`, err)
          }
        }
        
        if (needsUpdate) {
          try {
            await payload.update({
              collection,
              id: doc.id,
              data: updateData
            })
            console.log(`Updated doc: ${doc.title} (${doc.id})`)
          } catch (e) {
             console.error(`Error updating doc ${doc.id}:`, e)
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
  
  console.log('Migration complete.')
  process.exit(0)
}

run().catch(console.error)
