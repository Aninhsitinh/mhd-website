/**
 * Enterprise Structured Data (Schema.org / JSON-LD) Generators for Google Rich Results
 * Compliant with Google Search Central guidelines for Organizations, Services, and Articles.
 */

export const SITE_URL = 'https://mhdvaluation.com.vn'
export const DEFAULT_LOGO = `${SITE_URL}/images/logo-mhd.png`

/**
 * 1. Global Organization Schema
 * Provides Google with verified corporate identity, legal entity name, tax ID, headquarters, and contacts.
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'FinancialService'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Công ty Cổ phần Thẩm định giá MHD',
    alternateName: ['MHD Valuation', 'Thẩm định giá MHD', 'MHD JSC'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#logo`,
      url: DEFAULT_LOGO,
      caption: 'MHD Valuation Logo'
    },
    image: DEFAULT_LOGO,
    description: 'Công ty Cổ phần Thẩm định giá MHD (MHD Valuation) là đơn vị thẩm định giá độc lập, uy tín hàng đầu Việt Nam chuyên sâu về Bất động sản, Doanh nghiệp, Máy móc thiết bị và Dự án đầu tư theo Tiêu chuẩn Thẩm định giá Việt Nam.',
    taxID: '0312231570',
    vatID: '0312231570',
    telephone: '+84-28-3515-3516',
    email: 'info@mhd.com.vn',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Số 52 Trần Bình Trọng, Phường Bình Lợi Trung',
      addressLocality: 'Thành phố Hồ Chí Minh',
      addressRegion: 'Hồ Chí Minh',
      postalCode: '700000',
      addressCountry: 'VN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.812922,
      longitude: 106.685259
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '08:00',
        closes: '17:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/mhd.com.vn',
      'https://zalo.me/3920702626611603828'
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Vietnam'
    },
    knowsAbout: [
      'Thẩm định giá Bất động sản',
      'Thẩm định giá Doanh nghiệp',
      'Thẩm định giá Động sản và Máy móc thiết bị',
      'Thẩm định Dự án đầu tư',
      'Thẩm định Lợi thế thương mại và Tài sản vô hình',
      'Chứng minh tài chính định cư'
    ]
  }
}

/**
 * 2. Service Schema
 * For /linh-vuc/[slug] pages to display rich service snippets in Google SERP.
 */
export function getServiceSchema(service: {
  slug: string
  title: string
  description?: string
  image?: string
}) {
  const serviceUrl = `${SITE_URL}/linh-vuc/${service.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    name: service.title,
    serviceType: 'Thẩm định giá tài sản',
    description: service.description || `Dịch vụ ${service.title} chuyên nghiệp, độc lập, bảo mật và chính xác theo Tiêu chuẩn Thẩm định giá Việt Nam tại MHD Valuation.`,
    provider: {
      '@id': `${SITE_URL}/#organization`
    },
    areaServed: {
      '@type': 'Country',
      name: 'Vietnam'
    },
    url: serviceUrl,
    image: service.image || DEFAULT_LOGO,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Danh mục dịch vụ thẩm định giá MHD',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title
          }
        }
      ]
    }
  }
}

/**
 * 3. Article / NewsArticle Schema
 * For /tin-tuc/[slug] news & editorial articles to qualify for Google News & Top Stories Carousel.
 */
export function getArticleSchema(article: {
  slug: string
  title: string
  headline?: string
  description?: string
  datePublished?: string
  dateModified?: string
  image?: string
  authorName?: string
}) {
  const articleUrl = `${SITE_URL}/tin-tuc/${article.slug}`
  const cleanTitle = (article.title || '').replace(/<[^>]*>?/gm, '').trim()
  const cleanDesc = (article.description || '').replace(/<[^>]*>?/gm, '').trim()
  const pubDate = article.datePublished ? new Date(article.datePublished).toISOString() : new Date().toISOString()
  const modDate = article.dateModified ? new Date(article.dateModified).toISOString() : pubDate

  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${articleUrl}#article`,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'MHD Valuation',
      url: SITE_URL
    },
    headline: cleanTitle,
    description: cleanDesc,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl
    },
    image: [
      article.image || DEFAULT_LOGO
    ],
    datePublished: pubDate,
    dateModified: modDate,
    author: {
      '@type': 'Organization',
      name: article.authorName || 'Ban Biên Tập MHD Valuation',
      url: SITE_URL
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`
    },
    inLanguage: 'vi-VN'
  }
}

/**
 * 4. BreadcrumbList Schema
 * Enhances search result URLs into clean breadcrumb navigation.
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  }
}

/**
 * 5. WebSite Schema (with SearchAction / Sitelinks Search Box)
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'MHD Valuation',
    alternateName: 'Công ty Cổ phần Thẩm định giá MHD',
    publisher: {
      '@id': `${SITE_URL}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/tin-tuc?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: 'vi-VN'
  }
}

