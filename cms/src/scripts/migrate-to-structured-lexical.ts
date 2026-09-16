// @ts-nocheck
import 'dotenv/config'
import payload from 'payload'
import configPromise from '../payload.config'
import { JSDOM } from 'jsdom'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function parseHTMLToLexical(htmlString: string) {
  const dom = new JSDOM(htmlString)
  const doc = dom.window.document
  
  // 1. Extract all images
  const images = Array.from(doc.querySelectorAll('img'))
  const imageUrls = images.map(img => img.src)
  
  // Remove images from DOM so they don't get converted to text
  images.forEach(img => img.remove())
  
  // Clean up empty paragraphs left behind
  doc.querySelectorAll('p').forEach(p => {
    if (!p.textContent?.trim() && !p.querySelector('br')) {
      p.remove()
    }
  })

  // Helper to convert format
  const getFormat = (el: Element | null): number => {
    if (!el) return 0
    let format = 0
    let curr: Element | null = el
    while (curr && curr.tagName !== 'BODY') {
      const tag = curr.tagName.toUpperCase()
      if (tag === 'STRONG' || tag === 'B') format |= 1
      if (tag === 'EM' || tag === 'I') format |= 2
      if (tag === 'S' || tag === 'STRIKE') format |= 4
      if (tag === 'U') format |= 8
      if (tag === 'CODE') format |= 16
      if (tag === 'SUB') format |= 32
      if (tag === 'SUP') format |= 64
      curr = curr.parentElement
    }
    return format
  }

  // 2. Recursive DOM to Lexical Nodes
  function domToLexical(node: Node): any {
    if (node.nodeType === 3) { // Text node
      let text = node.textContent || ''
      // Only trim if it's purely whitespace and has newlines
      if (!text.trim() && text.includes('\n')) return null
      // Replace multiple newlines/spaces with single space unless it's just a space
      text = text.replace(/\s+/g, ' ')
      if (!text) return null
      
      return {
        type: 'text',
        format: getFormat(node.parentElement),
        style: '',
        mode: 'normal',
        text: text,
        version: 1
      }
    }
    
    if (node.nodeType === 1) { // Element node
      const el = node as Element
      const tagName = el.tagName.toLowerCase()
      
      // Ignore some tags
      if (['style', 'script', 'head', 'meta', 'title'].includes(tagName)) return null
      
      // Inline elements
      if (['strong', 'b', 'em', 'i', 'u', 's', 'strike', 'code', 'span', 'a'].includes(tagName)) {
        const children = Array.from(el.childNodes).map(domToLexical).filter(Boolean).flat()
        // If it's an 'a' tag, maybe wrap in a link node, but for simplicity we just return the text nodes with formats
        // Wait, Lexical requires LinkNode for 'a'. Let's do a simple LinkNode if it's 'a'
        if (tagName === 'a') {
           return {
             type: 'link',
             format: '',
             direction: 'ltr',
             indent: 0,
             version: 1,
             fields: {
               url: el.getAttribute('href') || '#',
               newTab: el.getAttribute('target') === '_blank',
               linkType: 'custom'
             },
             children: children.length > 0 ? children : [{ type: 'text', text: el.getAttribute('href')||'', format:0, version:1 }]
           }
        }
        return children
      }
      
      // BR tag
      if (tagName === 'br') {
        return { type: 'linebreak', version: 1 }
      }
      
      // Block elements
      let type = ''
      if (tagName === 'p') {
        type = 'paragraph'
      } else if (tagName === 'h1' || tagName === 'h2' || tagName === 'h3' || tagName === 'h4' || tagName === 'h5' || tagName === 'h6') {
        type = 'heading'
      } else if (tagName === 'ul' || tagName === 'ol') {
        type = 'list'
      } else if (tagName === 'li') {
        type = 'listitem'
      } else if (tagName === 'blockquote') {
        type = 'quote'
      } else if (tagName === 'div' || tagName === 'section' || tagName === 'article') {
        // Just return children flattened for container elements to avoid nested paragraphs
        return Array.from(el.childNodes).map(domToLexical).filter(Boolean).flat()
      } else {
        // Unknown tags treated as paragraph
        type = 'paragraph'
      }
      
      const children = Array.from(el.childNodes).map(domToLexical).filter(Boolean).flat()
      
      const nodeData: any = {
        type,
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: children.length > 0 ? children : []
      }

      if (type === 'heading') {
        nodeData.tag = tagName
      } else if (type === 'list') {
        nodeData.listType = tagName === 'ol' ? 'number' : 'bullet'
        nodeData.start = 1
        nodeData.tag = tagName
      } else if (type === 'listitem') {
         nodeData.value = 1
      }

      return nodeData
    }
    return null
  }

  // Parse body children
  let rootChildren = Array.from(doc.body.childNodes)
    .map(domToLexical)
    .filter(Boolean)
    .flat()

  // Ensure root children are block nodes (wrap inline nodes in a paragraph)
  const normalizedRootChildren = []
  let currentParagraphChildren: any[] = []

  const flushParagraph = () => {
    if (currentParagraphChildren.length > 0) {
      normalizedRootChildren.push({
        type: 'paragraph',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: currentParagraphChildren
      })
      currentParagraphChildren = []
    }
  }

  for (const node of rootChildren) {
    if (['paragraph', 'heading', 'list', 'quote'].includes(node.type)) {
      flushParagraph()
      // Make sure block node has at least one text or linebreak child if empty
      if (node.children.length === 0) {
        node.children.push({ type: 'text', text: '', format: 0, version: 1 })
      }
      normalizedRootChildren.push(node)
    } else {
      // Inline node (text, link, linebreak)
      currentParagraphChildren.push(node)
    }
  }
  flushParagraph()
  
  if (normalizedRootChildren.length === 0) {
     normalizedRootChildren.push({
        type: 'paragraph',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [{ type: 'text', text: '', format: 0, version: 1 }]
     })
  }

  const lexicalAST = {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      direction: 'ltr',
      children: normalizedRootChildren
    }
  }

  return { lexicalAST, imageUrls }
}

async function run() {
  const config = await configPromise
  await payload.init({ config })

  const collections = ['posts', 'projects', 'documents', 'jobs']

  let totalUpdated = 0

  for (const collection of collections) {
    console.log(`\n--- Processing collection: ${collection} ---`)
    let hasMore = true
    let page = 1

    while (hasMore) {
      const result = await payload.find({
        collection: collection as any,
        page,
        limit: 50,
        depth: 0, // don't populate relations to avoid overhead
      })

      for (const doc of result.docs) {
        let contentHtml = doc.contentHtml as string || ''
        if (!contentHtml) continue
        
        console.log(`Converting doc [${collection}] ID: ${doc.id}`)
        
        const { lexicalAST, imageUrls } = parseHTMLToLexical(contentHtml)
        
        // Find media IDs for the extracted URLs
        let imageIds: number[] = []
        for (const url of imageUrls) {
           let filename = ''
           // Extract filename from URL like /api/media/file/name.jpg
           if (url.includes('/api/media/file/')) {
               filename = url.split('/api/media/file/')[1].split('?')[0]
           } else {
               filename = url.split('/').pop()?.split('?')[0] || ''
           }
           
           filename = decodeURIComponent(filename)
           if (filename) {
               const mediaRes = await payload.find({
                   collection: 'media',
                   where: { filename: { equals: filename } },
                   limit: 1
               })
               if (mediaRes.docs.length > 0) {
                   imageIds.push(mediaRes.docs[0].id as number)
               }
           }
        }
        
        // Map to the gallery format: { image: mediaId }
        const galleryItems = imageIds.map(id => ({ image: id }))

        try {
          await payload.update({
            collection: collection as any,
            id: doc.id,
            data: { 
              content: lexicalAST,
              images: galleryItems
            }
          })
          console.log(`  [OK] Converted to Lexical + Extracted ${galleryItems.length} images`)
          totalUpdated++
          await delay(100) // gentle with local resources
        } catch (err: any) {
          console.error(`  [ERROR] Failed to save doc ID: ${doc.id}:`, err.message)
        }
      }

      if (result.hasNextPage) {
        page++
      } else {
        hasMore = false
      }
    }
  }

  console.log(`\nMigration complete. Total documents fully converted: ${totalUpdated}`)
  process.exit(0)
}

run().catch(console.error)
