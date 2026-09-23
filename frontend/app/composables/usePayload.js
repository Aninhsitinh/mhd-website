import { useFetch, useRuntimeConfig, useNuxtApp } from '#app'

export const usePayload = () => {
  const config = useRuntimeConfig()
  const nuxtApp = useNuxtApp()
  // Use internal Docker URL during SSR if available, otherwise public URL
  const payloadUrl = import.meta.server
    ? (config.payloadServerUrl || config.public.payloadApiUrl || 'http://localhost:3001/api')
    : (config.public.payloadApiUrl || 'http://localhost:3001/api')

  // Public media base for URLs rendered into HTML for browser consumption
  const publicMediaBase = (config.public.payloadApiUrl || 'http://localhost:3001/api').replace('/api', '')

  // Build Payload REST query params from a plain object
  const buildQuery = (params = {}) => {
    const query = { depth: 1 }
    if (params.per_page || params.limit) query.limit = params.per_page || params.limit
    if (params.page) query.page = params.page
    if (params.sort) query.sort = params.sort
    if (params.search) query['where[or][0][title][contains]'] = params.search
    if (params.slug) query['where[slug][equals]'] = params.slug
    return query
  }

  // Determine which Payload collection to use
  // Accepts: 'posts' | 'projects' | 'documents' | 'jobs' | 'tin-tuc' | 'du-an' | etc.
  const resolveCollection = (collection = 'posts') => {
    const map = {
      'tin-tuc': 'posts',
      'du-an': 'projects',
      'tai-lieu': 'documents',
      'tuyen-dung': 'jobs',
      'co-hoi-nghe-nghiep': 'jobs',
    }
    return map[collection] || collection
  }

  // Reactive fetch — for use with await in setup()
  const fetchPosts = (params = {}, collection = 'posts') => {
    const col = resolveCollection(collection)
    const query = buildQuery(params)
    const cacheKey = `payload-${col}-${JSON.stringify(params)}`

    return useFetch(`${payloadUrl}/${col}`, {
      params: query,
      key: cacheKey,
      dedupe: 'defer',
      getCachedData(key) {
        // Return in-memory SSR payload if it exists
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
      },
      transform: (response) => {
        if (!response || !response.docs) return []
        return response.docs.map(mapPayloadPost).filter(Boolean)
      }
    })
  }

  // Pagination-aware fetch — returns docs array AND totalDocs, totalPages, page
  const fetchMorePosts = async (params = {}, collection = 'posts') => {
    const col = resolveCollection(collection)
    const query = buildQuery(params)
    const url = new URL(`${payloadUrl}/${col}`)
    Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, String(v)))

    const response = await $fetch(url.toString()).catch(() => null)
    if (!response || !response.docs) {
      return { docs: [], totalDocs: 0, totalPages: 1, page: 1 }
    }
    return {
      docs: response.docs.map(mapPayloadPost).filter(Boolean),
      totalDocs: response.totalDocs || 0,
      totalPages: response.totalPages || 1,
      page: response.page || 1
    }
  }

  // Single post / page by slug
  const fetchPage = async (slug, collection = 'posts') => {
    const col = resolveCollection(collection)
    const query = {
      'where[slug][equals]': slug,
      limit: 1,
      depth: 1
    }
    const url = new URL(`${payloadUrl}/${col}`)
    Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, String(v)))

    const response = await $fetch(url.toString()).catch(() => null)
    if (!response?.docs?.length) return null
    return mapPayloadPost(response.docs[0])
  }

  // Fetch media by ID
  const fetchMedia = async (id) => {
    if (!id) return null
    const doc = await $fetch(`${payloadUrl}/media/${id}`).catch(() => null)
    return doc || null
  }

  // Fetch Global settings (e.g. site-settings)
  const fetchGlobal = (slug = 'site-settings') => {
    const cacheKey = `payload-global-${slug}`
    return useFetch(`${payloadUrl}/globals/${slug}`, {
      key: cacheKey,
      dedupe: 'defer',
      getCachedData(key) {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
      },
      transform: (res) => {
        if (!res) return null
        const resolveUrl = (media) => {
          if (!media?.url) return null
          return media.url.startsWith('http') ? media.url : `${publicMediaBase}${media.url}`
        }
        return {
          ...res,
          heroBannerUrl: resolveUrl(res.heroBanner),
          teamPhotoUrl: resolveUrl(res.teamPhoto),
          companyLogoUrl: resolveUrl(res.companyLogo),
        }
      }
    })
  }

  // Map Payload doc → same shape that existing .vue pages expect
  const mapPayloadPost = (doc) => {
    if (!doc) return null

    let imageUrl = null
    if (doc.featuredImage?.url) {
      imageUrl = doc.featuredImage.url.startsWith('http')
        ? doc.featuredImage.url
        : `${publicMediaBase}${doc.featuredImage.url}`
    }

    // categories may be a relation (array of objects or IDs) from 'category' or 'docType'
    const rawCategories = doc.category || doc.docType || []
    const cats = rawCategories.map((c) => {
      if (typeof c === 'object' && c !== null) {
        return c.wpId !== undefined ? c.wpId : c.id
      }
      return c
    })

    // Process gallery images (from images field or extracted from lexicalHtml)
    let galleryImages = (doc.images || []).map((item) => {
      const img = item.image
      if (!img) return null
      return img.url?.startsWith('http')
        ? img.url
        : `${publicMediaBase}${img.url}`
    }).filter(Boolean)

    // Fallback: extract image links from lexicalHtml if gallery is empty
    if (galleryImages.length === 0 && doc.lexicalHtml) {
      const inlineMatches = [...doc.lexicalHtml.matchAll(/href="(\/api\/media\/file\/[^"]+)"/g)]
      galleryImages = inlineMatches.map(m => `${publicMediaBase}${m[1]}`)
    }

    // Partners mapping
    if (doc.name !== undefined && doc.logo !== undefined) {
      let partnerLogoUrl = null
      const logoItem = doc.logo?.url ? doc.logo : doc.logo
      if (logoItem?.url) {
        partnerLogoUrl = logoItem.url.startsWith('http')
          ? logoItem.url
          : `${publicMediaBase}${logoItem.url}`
      }
      return {
        id: doc.id,
        name: doc.name,
        logo: partnerLogoUrl,
        order: doc.order
      }
    }

    // Team mapping
    if (doc.name !== undefined && doc.position !== undefined) {
      let photoUrl = null
      const photoItem = doc.photo?.url ? doc.photo : doc.photo
      if (photoItem?.url) {
        photoUrl = photoItem.url.startsWith('http')
          ? photoItem.url
          : `${publicMediaBase}${photoItem.url}`
      }
      return {
        id: doc.id,
        name: doc.name,
        position: doc.position,
        description: doc.description,
        experience: doc.experience,
        photo: photoUrl,
        order: doc.order
      }
    }

    // Process file attachment (PDF, DOCX, etc.)
    let fileAttachmentData = null
    if (doc.fileAttachment) {
      const fa = doc.fileAttachment
      const fileUrl = fa.url ? (fa.url.startsWith('http') ? fa.url : `${publicMediaBase}${fa.url}`) : null
      fileAttachmentData = {
        id: fa.id,
        url: fileUrl,
        filename: fa.filename || '',
        mimeType: fa.mimeType || '',
        filesize: fa.filesize || 0,
      }
    }

    return {
      id: doc.id,
      title: doc.title || '',
      content: doc.contentHtml || doc.lexicalHtml || '',
      excerpt: stripHtml(doc.excerpt || ''),
      slug: doc.slug,
      date: doc.publishedDate || doc.createdAt,
      featured_image: imageUrl,
      categories: cats,
      featuredMediaId: doc.featuredImage?.id || null,
      gallery: galleryImages,
      fileAttachment: fileAttachmentData
    }
  }

  const stripHtml = (html) => html.replace(/<[^>]*>/g, '').trim()

  return {
    fetchPosts,
    fetchMorePosts,
    fetchPage,
    fetchMedia,
    fetchGlobal,
    resolveCollection
  }
}
