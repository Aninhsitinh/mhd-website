/**
 * Utility to identify legal documents, decrees, circulars and standards
 */
export const isLegalDocument = (item) => {
  if (!item) return false
  const title = (item.title || '').toLowerCase()
  const slug = (item.slug || '').toLowerCase()

  // Match legal keywords
  const legalKeywords = [
    'luật',
    'nghị định',
    'thông tư',
    'quyết định',
    'nghị quyết',
    'thông báo',
    'tiêu chuẩn',
    'bộ tài chính',
    'tt-btc',
    'qd-btc',
    'nd-cp',
    'qh11',
    'qh13',
    'ubnd',
    'tđgvn',
    'ivs'
  ]

  const matchesKeyword = legalKeywords.some(kw => title.includes(kw) || slug.includes(kw))

  // Check category IDs (94: Văn bản pháp luật, 96: Tiêu chuẩn chuyên ngành, 92: Tài liệu)
  const isLegalCategory = item.categories?.some(cat => {
    const id = typeof cat === 'object' ? cat.id || cat.wpId : cat
    return id === 94 || id === 96 || id === 92
  })

  return matchesKeyword || !!isLegalCategory
}
