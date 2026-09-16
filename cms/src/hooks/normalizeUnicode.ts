import type { CollectionBeforeChangeHook } from 'payload'

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

export const normalizeUnicodeHook: CollectionBeforeChangeHook = async ({ data }) => {
  if (!data) return data
  return normalizeUnicodeRecursively(data)
}
