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
  image: {
    domains: ['localhost', '127.0.0.1']
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
    // Enable Stale-While-Revalidate (SWR) caching for all pages only in production
    // This dramatically increases load speed and reduces WP backend queries.
    '/**': process.env.NODE_ENV === 'production' ? { swr: 3600 } : {},
    // Do not cache API routes to avoid consuming POST bodies prematurely
    '/api/**': { cache: false }
  }
})

// Trigger restart
