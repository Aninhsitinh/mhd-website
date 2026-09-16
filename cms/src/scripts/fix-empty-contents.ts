// @ts-nocheck
import 'dotenv/config'
import payload from 'payload'
import configPromise from '../payload.config'
import { JSDOM } from 'jsdom'

const WP_API = 'https://mhd.com.vn/wp-json/wp/v2'

function parseHTMLToLexical(htmlString: string) {
  const dom = new JSDOM(htmlString)
  const doc = dom.window.document
  
  // 1. Extract all images
  const images = Array.from(doc.querySelectorAll('img'))
  const imageUrls = images.map(img => img.src)
  
  // Remove images from DOM
  images.forEach(img => img.remove())
  
  // Clean empty paragraphs
  doc.querySelectorAll('p').forEach(p => {
    if (!p.textContent?.trim() && !p.querySelector('br')) {
      p.remove()
    }
  })

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

  function domToLexical(node: Node): any {
    if (node.nodeType === 3) {
      let text = node.textContent || ''
      if (!text.trim() && text.includes('\n')) return null
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
    
    if (node.nodeType === 1) {
      const el = node as Element
      const tagName = el.tagName.toLowerCase()
      
      if (['style', 'script', 'head', 'meta', 'title'].includes(tagName)) return null
      
      if (['strong', 'b', 'em', 'i', 'u', 's', 'strike', 'code', 'span', 'a'].includes(tagName)) {
        const children = Array.from(el.childNodes).map(domToLexical).filter(Boolean).flat()
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
      
      if (tagName === 'br') {
        return { type: 'linebreak', version: 1 }
      }
      
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
        return Array.from(el.childNodes).map(domToLexical).filter(Boolean).flat()
      } else {
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

  let rootChildren = Array.from(doc.body.childNodes)
    .map(domToLexical)
    .filter(Boolean)
    .flat()

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
      if (node.children.length === 0) {
        node.children.push({ type: 'text', text: '', format: 0, version: 1 })
      }
      normalizedRootChildren.push(node)
    } else {
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

async function fixEmptyContents() {
  await payload.init({ config: configPromise })

  const collections = ['posts', 'documents']
  
  for (const coll of collections) {
    console.log(`\n--- Fetching ${coll} ---`)
    let page = 1
    let hasMore = true
    
    while (hasMore) {
      const res = await payload.find({
        collection: coll as any,
        page,
        limit: 10,
        depth: 0,
      })
      
      for (const doc of res.docs) {
        if (!doc.wpId) continue
        
        try {
          console.log(`Fetching WP Post ${doc.wpId}...`)
          const wpRes = await fetch(`${WP_API}/posts/${doc.wpId}`)
          const wpPost = await wpRes.json()
          
          if (wpPost && wpPost.content && wpPost.content.rendered) {
            const { lexicalAST } = parseHTMLToLexical(wpPost.content.rendered)
            
            await payload.update({
              collection: coll as any,
              id: doc.id,
              data: {
                content: lexicalAST
              }
            })
            console.log(`[OK] Updated ${doc.title}`)
          }
        } catch (e) {
          console.error(`Error processing ${doc.id}`, e)
        }
      }
      
      if (res.hasNextPage) page++
      else hasMore = false
    }
  }
  
  console.log('Fix completed.')
  process.exit(0)
}

fixEmptyContents().catch(console.error)
