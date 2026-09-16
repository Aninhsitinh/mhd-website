// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app/',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    geminiApiKey: process.env.GEMINI_API_KEY,
    public: {
      payloadApiUrl: process.env.PAYLOAD_API_URL || 'http://localhost:3001/api',
      aiChatbotUrl: process.env.AI_CHATBOT_URL || '/api/chat'
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'vi' },
      title: 'MHD Valuation - Công ty Cổ phần Thẩm định giá MHD',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Công ty Cổ phần Thẩm định giá MHD (MHD Valuation) cung cấp dịch vụ thẩm định giá bất động sản, doanh nghiệp, động sản chuyên nghiệp và uy tín hàng đầu Việt Nam.' },
        { property: 'og:title', content: 'MHD Valuation - Đối Tác Thẩm Định Giá Tin Cậy' },
        { property: 'og:description', content: 'Cung cấp dịch vụ thẩm định giá chuyên nghiệp, uy tín và độc lập tại Việt Nam.' },
        { property: 'og:image', content: '/images/logo-mhd.png' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxt/image'
  ],
  site: {
    url: 'https://mhdvaluation.com.vn',
    name: 'MHD Valuation'
  },
  ssr: true, // Full Server-Side Rendering for 100% SEO indexing
  image: {
    domains: [
      'localhost',
      '127.0.0.1',
      'mhdvaluation.com.vn',
      'www.mhdvaluation.com.vn',
      'cms.mhdvaluation.com.vn',
      'mhd.com.vn'
    ]
  },
  colorMode: {
    classSuffix: ''
  },
  css: ['~/assets/css/tailwind.css'],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: false
  },
  routeRules: {
    // 1. High-priority Static/Corporate Pages: ISR/SWR cache for instant 0.1s load
    '/': { swr: 3600 },
    '/gioi-thieu': { swr: 3600 },
    '/quy-trinh': { swr: 3600 },
    '/ho-so-nang-luc': { swr: 3600 },
    '/ho-so-phap-ly': { swr: 3600 },

    // 2. Dynamic Content Collections: Revalidate in background every 30 minutes
    '/du-an/**': { swr: 1800 },
    '/tin-tuc/**': { swr: 1800 },
    '/tai-lieu/**': { swr: 1800 },
    '/linh-vuc/**': { swr: 3600 },

    // 3. Dynamic Interactive & Form Pages: SSR without cache
    '/lien-he': { ssr: true },
    '/cong-thong-tin': { ssr: true },
    '/tra-cuu-chung-thu': { ssr: true },

    // 4. API Endpoints: Strictly disable cache to ensure POST bodies & rate limits work properly
    '/api/**': { cache: false, cors: true },

    // 5. Static Assets Caching: 1-year immutable cache for lightning-fast subsequent loads
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/images/**': { headers: { 'cache-control': 'public, max-age=86400, stale-while-revalidate=604800' } },
    '/favicon.png': { headers: { 'cache-control': 'public, max-age=604800' } }
  },
  nitro: {
    compressPublicAssets: true, // Enables Gzip & Brotli pre-compression for all static assets
  }
})

// Trigger restart
