<template>
  <div>
    <div v-if="pending" class="min-h-screen pt-32 pb-20 bg-bg flex justify-center">
      <div class="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
    </div>
    
    <article v-else-if="post" class="min-h-screen bg-bg pt-32 pb-20 notranslate">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <!-- Breadcrumb -->
          <div class="flex items-center gap-2 text-sm text-text-secondary mb-8 print:hidden">
            <NuxtLink to="/" class="hover:text-primary transition-colors">Trang chủ</NuxtLink>
            <span>/</span>
            <NuxtLink to="/tai-lieu" class="hover:text-primary transition-colors">Tài liệu</NuxtLink>
            <span>/</span>
            <span class="text-text line-clamp-1">{{ post.title }}</span>
          </div>

          <!-- Header -->
          <header class="mb-10">
            <h1 class="text-3xl md:text-5xl font-bold text-text leading-tight mb-6" v-html="post.title"></h1>
            <div class="flex items-center gap-4 text-sm text-text-muted">
              <span class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ formatDate(post.date) }}
              </span>
              <span class="px-3 py-1 bg-surface rounded-full text-primary font-medium shadow-sm">
                {{ getCategoryName(post) }}
              </span>
            </div>
          </header>

          <!-- Print / Download Button -->
          <div class="flex justify-end mb-8 print:hidden">
            <button @click="printDocument" class="px-6 py-3 bg-primary text-white rounded-full flex items-center gap-2.5 hover:bg-primary-hover transition-all shadow-corporate hover:shadow-corporate-hover transform hover:-translate-y-0.5 font-bold text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Tải PDF / In tài liệu chuẩn
            </button>
          </div>

          <!-- Legal Document Sheet Container (100% Borderless) -->
          <div class="bg-surface rounded-2xl p-8 sm:p-12 md:p-16 shadow-corporate-lg mb-12 print:p-0 print:border-none print:shadow-none print:rounded-none print:bg-transparent">
            <!-- Article Content -->
            <div class="document-content leading-relaxed" v-html="processedContent">
            </div>
          </div>

          <!-- Image Gallery Carousel -->
          <div v-if="post.gallery && post.gallery.length > 0" class="mb-12 pt-8 print:hidden">
            <div class="flex items-center justify-between mb-8">
              <h3 class="text-2xl font-bold text-text">Thư viện hình ảnh</h3>
              <div class="flex gap-2">
                <button @click="scrollCarousel('left')" class="w-10 h-10 rounded-full bg-surface shadow-sm flex items-center justify-center text-text hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button @click="scrollCarousel('right')" class="w-10 h-10 rounded-full bg-surface shadow-sm flex items-center justify-center text-text hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
            
            <div ref="carouselRef" class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 no-scrollbar smooth-scroll">
              <div v-for="(img, idx) in post.gallery" :key="idx" class="flex-none w-full sm:w-[80%] md:w-[60%] lg:w-[45%] aspect-[4/3] snap-center rounded-2xl overflow-hidden relative shadow-lg bg-surface">
                <NuxtImg :src="img" :alt="post.title + ' - Hình ' + (idx + 1)" loading="lazy" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" format="webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
    
    <div v-else class="min-h-screen pt-32 pb-20 bg-bg text-center">
      <h1 class="text-3xl font-bold text-text mb-4">Tài liệu không tồn tại</h1>
      <NuxtLink to="/tai-lieu" class="text-primary hover:underline">Quay lại danh sách tài liệu</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const carouselRef = ref(null)

const scrollCarousel = (direction) => {
  if (!carouselRef.value) return
  const scrollAmount = carouselRef.value.clientWidth * 0.8
  carouselRef.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  })
}
const { fetchPosts } = usePayload()

const slug = route.params.slug
const slugWithSuffix = `${slug}-2`

// Fetch from documents or fallback to posts
const { data: postsData, pending: pendingDoc } = await fetchPosts({ slug: slug }, 'documents')
const { data: fallbackData, pending: pendingPost } = await fetchPosts({ slug: slugWithSuffix }, 'posts')

const pending = computed(() => pendingDoc.value && pendingPost.value)

const post = computed(() => {
  if (postsData.value && postsData.value.length > 0) return postsData.value[0]
  if (fallbackData.value && fallbackData.value.length > 0) return fallbackData.value[0]
  return null
})

const processedContent = computed(() => {
  if (!post.value || !post.value.content) return ''
  let html = post.value.content

  // 1. Normalize address
  html = html.replace(
    /(Số\s*)?52 Trần Bình Trọng[^<]*?(Hồ Chí Minh|HCM|TP\.HCM)(,\s*Việt Nam)?/gi,
    'Số 52 Trần Bình Trọng, phường Bình Lợi Trung, Thành phố Hồ Chí Minh'
  )

  // 2. Remove obstructive inline styles, font-weights, and fixed widths
  html = html.replace(/style="[^"]*"/gi, '')
  html = html.replace(/width="\d+"/gi, '')
  html = html.replace(/<span\s+lang="[^"]*">([\s\S]*?)<\/span>/gi, '$1')
  html = html.replace(/<a\s+name="[^"]*"><\/a>/gi, '')

  // 3. Normalize table cells where text is directly inside <td> without opening <p>
  html = html.replace(/<td([^>]*)>(?!\s*<p|\s*<div|\s*<table)([\s\S]*?)<\/td>/gi, (match, attrs, inner) => {
    // If it contains </p>, it might have missing opening <p>
    if (inner.includes('</p>')) {
      const parts = inner.split('</p>')
      const reconstructed = parts.map((p, idx) => {
        let trimmed = p.trim()
        if (!trimmed) return ''
        if (!trimmed.startsWith('<p')) {
          trimmed = `<p>${trimmed}</p>`
        } else {
          trimmed = `${trimmed}</p>`
        }
        return trimmed
      }).filter(Boolean).join('')
      return `<td${attrs}>${reconstructed}</td>`
    } else {
      return `<td${attrs}><p>${inner.trim()}</p></td>`
    }
  })

  // 4. Fix nested <p><p> and clean up empty heading tags or paragraphs
  while (/<p>\s*<p>/i.test(html) || /<\/p>\s*<\/p>/i.test(html)) {
    html = html.replace(/<p>\s*<p>/gi, '<p>')
    html = html.replace(/<\/p>\s*<\/p>/gi, '</p>')
  }
  html = html.replace(/class="[^"]*(?:wp-|alignleft|alignright|aligncenter|col-inner|size-)[^"]*"/gi, '')
  html = html.replace(/<h[1-6][^>]*>\s*<\/h[1-6]>/gi, '')
  html = html.replace(/<p[^>]*>\s*(&nbsp;|&#8211;| |\s)*\s*<\/p>/gi, '')

  // 5. Replace irregular underline strings in headers with clean legal divider
  html = html.replace(/(?:_|&#8212;|—|-){3,}/g, '<span class="legal-underline"></span>')

  // 6. Identify Header Table vs Footer / Signature Table
  let tableIndex = 0
  html = html.replace(/<table\b([\s\S]*?)<\/table>/gi, (match) => {
    tableIndex++
    // Check if table contains "Nơi nhận" or "KT. BỘ TRƯỞNG" or "THỨ TRƯỞNG"
    if (/Nơi nhận|KT\.\s*BỘ TRƯỞNG|THỨ TRƯỞNG|Người ký/i.test(match)) {
      return match.replace('<table', '<table class="legal-sign-table"')
    }
    // Check if table contains "CỘNG HÒA" or "CỘNG HOÀ" or "BỘ TÀI CHÍNH"
    if (/CỘNG H[OÒ]A|BỘ TÀI CHÍNH|Số:/i.test(match) || tableIndex === 1) {
      return match.replace('<table', '<table class="legal-header-table"')
    }
    return match
  })

  // 7. Standardize main legal document titles (QUYẾT ĐỊNH, THÔNG TƯ, NGHỊ ĐỊNH...)
  html = html.replace(/<(?:h[1-6]|p)[^>]*>(?:\s*<(?:b|strong|span|a)[^>]*>)*\s*(QUYẾT ĐỊNH|THÔNG TƯ|NGHỊ ĐỊNH|NGHỊ QUYẾT|LUẬT)\s*(?:<\/(?:b|strong|span|a)>\s*)*<\/(?:h[1-6]|p)>/gi, 
    '<h2 class="legal-doc-title">$1</h2>')

  // 8. Standardize system standard titles (HỆ THỐNG TIÊU CHUẨN THẨM ĐỊNH GIÁ, Tiêu chuẩn thẩm định giá...)
  html = html.replace(/<(?:h[1-6]|p)[^>]*>(?:\s*<(?:b|strong|span|a)[^>]*>)*\s*(HỆ THỐNG TIÊU CHUẨN THẨM ĐỊNH GIÁ[^<]*)\s*(?:<\/(?:b|strong|span|a)>\s*)*<\/(?:h[1-6]|p)>/gi,
    '<h3 class="legal-standard-system">$1</h3>')

  html = html.replace(/<(?:h[1-6]|p)[^>]*>(?:\s*<(?:b|strong|span|a)[^>]*>)*\s*(Tiêu chuẩn\s+thẩm định giá\s+Việt Nam\s+số\s+\d+[^<]*)\s*(?:<\/(?:b|strong|span|a)>\s*)*<\/(?:h[1-6]|p)>/gi,
    '<h3 class="legal-standard-title">$1</h3>')

  // 9. Standardize Chapter / Part titles (Chương I, Chương II, Phần I...)
  html = html.replace(/<(?:h[1-6]|p)[^>]*>(?:\s*<(?:b|strong|span|a)[^>]*>)*\s*(Chương\s+[IVXLCDM]+|Phần\s+[IVXLCDM]+|Mục\s+[IVXLCDM\d]+)\s*(?:<\/(?:b|strong|span|a)>\s*)*<\/(?:h[1-6]|p)>/gi,
    '<h4 class="legal-chapter-title">$1</h4>')

  return html
})

// Update head metadata
watchEffect(() => {
  if (post.value) {
    useHead({
      title: `${post.value.title.replace(/<[^>]*>?/gm, '')} - MHD Valuation`,
    })
  }
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}

const getCategoryName = (post) => {
  if (post.categories?.includes(94)) return 'Văn bản pháp luật'
  if (post.categories?.includes(96)) return 'Tài liệu chuyên ngành'
  return 'Tài liệu'
}

const printDocument = () => {
  window.print()
}
</script>

<style scoped lang="postcss">
/* ==========================================================================
   Chuẩn Thể thức Văn bản Pháp luật Việt Nam (Nghị định 30/2020/NĐ-CP)
   ========================================================================== */
.document-content {
  font-family: 'Times New Roman', Times, serif;
  font-size: 16px;
  line-height: 1.6;
  color: inherit;
  text-align: justify;
  text-justify: inter-word;
}

:deep(.document-content p) {
  margin-bottom: 0.75em;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.6;
}

/* Base table style for legal documents */
:deep(.document-content table) {
  width: 100% !important;
  border-collapse: collapse !important;
  border: none !important;
  margin-top: 1rem !important;
  margin-bottom: 1.5rem !important;
  background: transparent !important;
}

:deep(.document-content table td),
:deep(.document-content table th) {
  border: none !important;
  padding: 4px 8px !important;
  vertical-align: top !important;
  background: transparent !important;
}

/* -------------------------------------------------------------
   1. BẢNG TIÊU ĐỀ ĐẦU VĂN BẢN (legal-header-table)
   Bên trái: Cơ quan ban hành + Số ký hiệu
   Bên phải: Quốc hiệu, Tiêu ngữ + Địa danh, Ngày tháng năm
   ------------------------------------------------------------- */
:deep(.document-content table.legal-header-table) {
  margin-top: 0.5rem !important;
  margin-bottom: 2rem !important;
}

:deep(.document-content table.legal-header-table tr td:first-child) {
  width: 42% !important;
  text-align: center !important;
}

:deep(.document-content table.legal-header-table tr td:last-child) {
  width: 58% !important;
  text-align: center !important;
}

:deep(.document-content table.legal-header-table p) {
  margin-bottom: 0.2rem !important;
  text-align: center !important;
}

/* Dòng địa danh, ngày tháng năm ở cột bên phải luôn canh phải */
:deep(.document-content table.legal-header-table tr td:last-child p:last-child),
:deep(.document-content table.legal-header-table tr td:last-child p:has(i)),
:deep(.document-content table.legal-header-table tr td:last-child p:has(em)) {
  text-align: right !important;
  font-style: italic;
  margin-top: 0.4rem !important;
  padding-right: 0.5rem;
}

/* -------------------------------------------------------------
   2. BẢNG CHỮ KÝ & NƠI NHẬN (legal-sign-table)
   Bên trái: Nơi nhận (danh sách cơ quan, lưu VT)
   Bên phải: Quyền hạn, Chức vụ, (Đã ký), Họ và tên
   ------------------------------------------------------------- */
:deep(.document-content table.legal-sign-table) {
  margin-top: 2rem !important;
  margin-bottom: 2rem !important;
}

/* Cột bên trái: NƠI NHẬN */
:deep(.document-content table.legal-sign-table tr td:first-child) {
  width: 52% !important;
  text-align: left !important;
  font-size: 13px !important;
  line-height: 1.45 !important;
}

:deep(.document-content table.legal-sign-table tr td:first-child p) {
  text-align: left !important;
  margin-bottom: 0.2rem !important;
  font-size: 13px !important;
  line-height: 1.45 !important;
}

/* Cột bên phải: NGƯỜI KÝ DUYỆT */
:deep(.document-content table.legal-sign-table tr td:last-child) {
  width: 48% !important;
  text-align: center !important;
  vertical-align: top !important;
}

:deep(.document-content table.legal-sign-table tr td:last-child p),
:deep(.document-content table.legal-sign-table tr td:last-child h5) {
  text-align: center !important;
  margin-bottom: 0.25rem !important;
  font-size: 15px !important;
  font-weight: bold;
}

:deep(.document-content table.legal-sign-table tr td:last-child em),
:deep(.document-content table.legal-sign-table tr td:last-child i) {
  display: block;
  margin: 0.8rem 0;
  font-style: italic;
  font-weight: normal;
}

/* Khoảng trống chữ ký trước tên nếu chưa có (Đã ký) */
:deep(.document-content table.legal-sign-table tr td:last-child p:last-child) {
  margin-top: 1.5rem !important;
  font-weight: bold !important;
}

/* Đường gạch ngang chuẩn thể thức hành chính */
:deep(.document-content .legal-underline) {
  display: block;
  width: 100px;
  height: 1px;
  background-color: currentColor;
  margin: 0.35rem auto 0.5rem auto;
  opacity: 0.85;
}

/* -------------------------------------------------------------
   3. TIÊU ĐỀ VĂN BẢN (QUYẾT ĐỊNH, THÔNG TƯ, TRÍCH YẾU)
   ------------------------------------------------------------- */
:deep(.document-content h1),
:deep(.document-content h2),
:deep(.document-content h3),
:deep(.document-content h4),
:deep(.document-content h5),
:deep(.document-content h6) {
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  text-align: center !important;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  color: inherit;
}

/* Tên loại văn bản chính: QUYẾT ĐỊNH, THÔNG TƯ */
:deep(.document-content .legal-doc-title) {
  font-size: 20px !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px;
  text-align: center !important;
  margin-top: 2rem !important;
  margin-bottom: 0.75rem !important;
}

/* Tiêu đề Hệ thống tiêu chuẩn & Tiêu chuẩn số */
:deep(.document-content .legal-standard-system) {
  font-size: 18px !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  text-align: center !important;
  margin-top: 2.5rem !important;
  margin-bottom: 0.5rem !important;
}

:deep(.document-content .legal-standard-title) {
  font-size: 18px !important;
  font-weight: bold !important;
  text-align: center !important;
  margin-top: 1rem !important;
  margin-bottom: 0.5rem !important;
}

/* Tiêu đề Chương, Mục, Phần */
:deep(.document-content .legal-chapter-title) {
  font-size: 17px !important;
  font-weight: bold !important;
  text-align: center !important;
  margin-top: 1.75rem !important;
  margin-bottom: 0.5rem !important;
}

/* Trích yếu nội dung văn bản dưới tên văn bản (in hoa vừa hoặc in đậm, canh giữa) */
:deep(.document-content p[align="center"]) {
  text-align: center !important;
}

/* Các căn cứ pháp lý (Căn cứ Luật..., Căn cứ Nghị định...) */
:deep(.document-content p:has(> i:only-child)),
:deep(.document-content p:has(> em:only-child)) {
  text-align: justify !important;
  font-style: italic;
  margin-bottom: 0.4rem !important;
}

:deep(.document-content strong),
:deep(.document-content b) {
  font-weight: 700;
  color: inherit;
}

:deep(.document-content em),
:deep(.document-content i) {
  font-style: italic;
}

:deep(.document-content ul) {
  list-style-type: none;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

:deep(.document-content li) {
  margin-bottom: 0.4rem;
  text-align: justify;
}

:deep(.document-content a) {
  color: inherit;
  text-decoration: none;
}
:deep(.document-content a:hover) {
  text-decoration: underline;
}

:deep(.document-content img) {
  @apply max-w-full h-auto rounded-2xl shadow-xl my-6;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.smooth-scroll {
  scroll-behavior: smooth;
}
</style>

<style lang="postcss">
@media print {
  /* ==========================================================================
     Định dạng Trang In / Xuất PDF Chuẩn Thể thức Nhà Nước (NĐ 30/2020/NĐ-CP)
     Khổ giấy A4: 210mm x 297mm
     Lề: Trên 20mm, Dưới 20mm, Trái 30mm, Phải 15mm
     ========================================================================== */
  @page {
    size: A4 portrait;
    margin: 20mm 15mm 20mm 30mm; /* Chuẩn NĐ 30: Trái 30-35mm, Phải 15-20mm, Trên/Dưới 20-25mm */
  }

  /* Ẩn hoàn toàn các thành phần trang web thừa */
  header, 
  footer, 
  nav, 
  .print\:hidden,
  #header,
  #footer {
    display: none !important;
  }

  /* Khử nền, khử bóng, chuẩn hóa màu in */
  html, 
  body, 
  #__nuxt, 
  .min-h-screen {
    background: #ffffff !important;
    background-color: #ffffff !important;
    padding: 0 !important;
    margin: 0 !important;
    box-shadow: none !important;
    font-size: 14pt !important; /* Cỡ chữ chuẩn 13pt-14pt theo NĐ 30 */
    line-height: 1.5 !important;
  }

  /* Thân văn bản khi in */
  .document-content {
    font-family: 'Times New Roman', Times, serif !important;
    color: #000000 !important;
    font-size: 14pt !important;
    line-height: 1.5 !important;
    text-align: justify !important;
    text-justify: inter-word !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .document-content * {
    color: #000000 !important;
    background: transparent !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  /* Canh đều hai lề tuyệt đối cho mọi đoạn văn bản */
  .document-content p {
    text-align: justify !important;
    text-justify: inter-word !important;
    line-height: 1.5 !important;
    margin-bottom: 6pt !important;
    orphans: 3;
    widows: 3;
  }

  /* Bảng Quốc hiệu, Tiêu ngữ, Nơi nhận */
  .document-content table {
    width: 100% !important;
    border-collapse: collapse !important;
    border: none !important;
    page-break-inside: avoid;
  }

  .document-content td,
  .document-content th {
    border: none !important;
    padding: 2pt 4pt !important;
    vertical-align: top !important;
  }

  .document-content table.legal-header-table tr td:first-child {
    width: 42% !important;
    text-align: center !important;
  }
  .document-content table.legal-header-table tr td:last-child {
    width: 58% !important;
    text-align: center !important;
  }
  .document-content table.legal-header-table tr td:last-child p:last-child,
  .document-content table.legal-header-table tr td:last-child p:has(i),
  .document-content table.legal-header-table tr td:last-child p:has(em) {
    text-align: right !important;
    font-style: italic !important;
  }

  .document-content table.legal-sign-table tr td:first-child {
    width: 52% !important;
    text-align: left !important;
    font-size: 10.5pt !important;
    line-height: 1.3 !important;
  }
  .document-content table.legal-sign-table tr td:first-child p {
    text-align: left !important;
    font-size: 10.5pt !important;
    line-height: 1.3 !important;
    margin-bottom: 2pt !important;
  }
  .document-content table.legal-sign-table tr td:last-child {
    width: 48% !important;
    text-align: center !important;
  }
  .document-content table.legal-sign-table tr td:last-child p,
  .document-content table.legal-sign-table tr td:last-child h5 {
    text-align: center !important;
    font-size: 12pt !important;
    font-weight: bold !important;
    margin-bottom: 2pt !important;
  }
  .document-content table.legal-sign-table tr td:last-child em,
  .document-content table.legal-sign-table tr td:last-child i {
    display: block;
    margin: 8pt 0 !important;
    font-style: italic !important;
  }

  .document-content .legal-underline {
    display: block;
    width: 80pt;
    height: 1pt;
    background-color: #000000;
    margin: 3pt auto 5pt auto;
  }

  /* Ngắt trang thông minh tránh cắt ngang chữ ký và nơi nhận */
  .document-content h1,
  .document-content h2,
  .document-content h3,
  .document-content h4 {
    page-break-after: avoid;
    text-align: center !important;
  }

  /* Tránh ngắt trang giữa chừng các điều khoản */
  .document-content b,
  .document-content strong {
    font-weight: bold !important;
  }
}
</style>
