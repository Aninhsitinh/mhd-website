import { useFetch, useRuntimeConfig, useNuxtApp } from '#app'

export const usePayload = () => {
  const config = useRuntimeConfig()
  const nuxtApp = useNuxtApp()
  const payloadUrl = config.public.payloadApiUrl || 'http://localhost:3001/api'

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
      getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key],
      transform: (res) => (res?.docs ? res.docs.map(mapPayloadPost) : [])
    })
  }

  // Fetch a single post by slug
  const fetchPage = (slug, collection = 'posts') => {
    const col = resolveCollection(collection)
    const cacheKey = `payload-single-${col}-${slug}`
    return useFetch(`${payloadUrl}/${col}`, {
      params: { 'where[slug][equals]': slug, limit: 1, depth: 1 },
      key: cacheKey,
      getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key],
      transform: (res) => (res?.docs?.length > 0 ? mapPayloadPost(res.docs[0]) : null)
    })
  }

  // Non-reactive fetch — for loadMore buttons
  const fetchMorePosts = async (params = {}, collection = 'posts') => {
    const col = resolveCollection(collection)
    const query = buildQuery(params)
    const res = await $fetch(`${payloadUrl}/${col}`, { params: query })
    return res?.docs ? res.docs.map(mapPayloadPost) : []
  }

  const fetchMedia = (id) => {
    return useFetch(`${payloadUrl}/media/${id}`, { key: `media-${id}` })
  }

  // Fetch a Payload global (e.g. 'site-settings')
  const fetchGlobal = (slug = 'site-settings') => {
    const cacheKey = `payload-global-${slug}`
    return useFetch(`${payloadUrl}/globals/${slug}`, {
      key: cacheKey,
      getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key],
      transform: (res) => {
        if (!res) return null
        const resolveUrl = (media) => {
          if (!media?.url) return null
          return media.url.startsWith('http') ? media.url : `${payloadUrl.replace('/api', '')}${media.url}`
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
        : `${payloadUrl.replace('/api', '')}${doc.featuredImage.url}`
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
        : `${payloadUrl.replace('/api', '')}${img.url}`
    }).filter(Boolean)

    // Fallback: extract image links from lexicalHtml if gallery is empty
    if (galleryImages.length === 0 && doc.lexicalHtml) {
      const inlineMatches = [...doc.lexicalHtml.matchAll(/href="(\/api\/media\/file\/[^"]+)"/g)]
      galleryImages = inlineMatches.map(m => `${payloadUrl.replace('/api', '')}${m[1]}`)
    }

    // Partners mapping
    if (doc.name !== undefined && doc.logo !== undefined) {
      let partnerLogoUrl = null
      const logoItem = doc.logo?.url ? doc.logo : doc.logo
      if (logoItem?.url) {
        partnerLogoUrl = logoItem.url.startsWith('http')
          ? logoItem.url
          : `${payloadUrl.replace('/api', '')}${logoItem.url}`
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
          : `${payloadUrl.replace('/api', '')}${photoItem.url}`
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
      gallery: galleryImages
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
