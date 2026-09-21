/**
 * Utility to thoroughly sanitize and beautify legacy HTML (WordPress / flatsome leftovers,
 * nested paragraph tags, raw inline styles, fixed widths, broken table structures, etc.)
 */
export function cleanLegacyHtml(rawHtml) {
  if (!rawHtml || typeof rawHtml !== 'string') return ''

  let html = rawHtml

  // 1. Remove script and style tags completely
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  html = html.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')

  // 2. Normalize MHD address across all legacy records
  html = html.replace(
    /(Số\s*)?52 Trần Bình Trọng[^<]*?(Hồ Chí Minh|HCM|TP\.HCM)(,\s*Việt Nam)?/gi,
    'Số 52 Trần Bình Trọng, phường Bình Lợi Trung, Thành phố Hồ Chí Minh'
  )

  // 3. Remove raw media file links that leaked from WP attachments
  html = html.replace(/<p>\s*<a[^>]+href="\/api\/media\/file\/[^"]+"[^>]*>.*?<\/a>\s*<\/p>/gi, '')
  html = html.replace(/<a[^>]+href="\/api\/media\/file\/[^"]+"[^>]*>.*?<\/a>/gi, '')

  // 4. Strip out WordPress / Flatsome specific wrappers and classes
  html = html.replace(/<\/?(?:div|section|span|p)[^>]*?(?:row|col|col-inner|ux-|wp-block|wp-container)[^>]*?>/gi, '')
  html = html.replace(/class="[^"]*(?:wp-|alignleft|alignright|aligncenter|col-inner|size-)[^"]*"/gi, '')

  // 5. Remove obstructive inline styling & fixed dimensions, backgrounds and text colors
  // Specifically strip color: ..., background: ..., background-color: ..., font-family: ...
  html = html.replace(/\s*(?:style|width|height)="[^"]*"/gi, '')
  html = html.replace(/\s*(?:bgcolor|color|background|border|cellspacing|cellpadding)="[^"]*"/gi, '')

  // 6. Clean useless Microsoft Word / WP artifacts like <span lang="...">
  html = html.replace(/<span\s+lang="[^"]*">([\s\S]*?)<\/span>/gi, '$1')
  html = html.replace(/<font[^>]*>([\s\S]*?)<\/font>/gi, '$1')
  html = html.replace(/<a\s+name="[^"]*"><\/a>/gi, '')

  // 7. Fix deeply nested paragraph tags: <p><p>... -> <p>... and </p></p> -> </p>
  while (/<p>\s*<p>/i.test(html) || /<\/p>\s*<\/p>/i.test(html)) {
    html = html.replace(/<p>\s*<p>/gi, '<p>')
    html = html.replace(/<\/p>\s*<\/p>/gi, '</p>')
  }

  // 8. Normalize &nbsp; and non-breaking spaces
  html = html.replace(/&nbsp;/gi, ' ')
  html = html.replace(/ /g, ' ')

  // 9. Clean empty paragraphs, headings or rogue spans
  html = html.replace(/<p[^>]*>\s*<\/p>/gi, '')
  html = html.replace(/<h[1-6][^>]*>\s*<\/h[1-6]>/gi, '')
  html = html.replace(/<span>\s*<\/span>/gi, '')

  // 10. Automatically wrap any tables that are not already wrapped in .rich-table-wrapper
  // Avoid double-wrapping
  html = html.replace(/(?:<div class="rich-table-wrapper">)?\s*(<table[\s\S]*?<\/table>)\s*(?:<\/div>)?/gi, (match, tableContent) => {
    return `<div class="rich-table-wrapper">${tableContent}</div>`
  })

  // 11. Trim whitespace
  return html.trim()
}
