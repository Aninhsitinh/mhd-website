<template>
  <div class="min-h-screen bg-bg">
    <!-- Corporate Header -->
    <header class="pt-32 pb-16 bg-bg">
      <div class="container mx-auto px-4 max-w-5xl">
        <nav class="text-xs text-text-muted mb-3 flex items-center gap-2">
          <NuxtLink to="/" class="hover:text-primary transition-colors">Trang chủ</NuxtLink>
          <span>/</span>
          <span class="text-text-secondary">{{ $t('nav.legal') || 'Hồ sơ pháp lý' }}</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-display font-bold text-text leading-tight uppercase">Hồ Sơ Pháp Lý</h1>
        <p class="text-text-secondary max-w-xl mt-3 text-base leading-relaxed">
          MHD Valuation hoạt động dựa trên cơ sở pháp lý minh bạch, được cấp phép đầy đủ bởi Bộ Tài chính và các cơ quan quản lý nhà nước có thẩm quyền.
        </p>
      </div>
    </header>

    <!-- Legal Documents Grid -->
    <section class="py-20 relative">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <!-- Document 1: Giấy chứng nhận ĐKDN -->
          <div class="bg-surface rounded-2xl p-7 shadow-corporate hover:shadow-corporate-hover transition-all duration-300 group flex flex-col">
            <div class="aspect-[3/4] rounded-xl bg-bg overflow-hidden mb-6 relative shadow-inner">
              <!-- Carousel Images -->
              <img :src="docs[0].images[docs[0].current]" :alt="docs[0].title" class="w-full h-full object-cover transition-opacity duration-300 cursor-pointer" @click="openLightbox(0, docs[0].current)">
              
              <!-- Carousel Controls -->
              <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                <button class="text-white/80 hover:text-white transition-colors" @click.stop="prevSlide(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <span class="text-white/90 text-sm font-medium">{{ docs[0].current + 1 }} / {{ docs[0].images.length }}</span>
                <button class="text-white/80 hover:text-white transition-colors" @click.stop="nextSlide(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>

              <!-- Zoom overlay -->
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <div class="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                </div>
              </div>
            </div>
            <h3 class="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">Giấy chứng nhận đăng ký doanh nghiệp</h3>
            <p class="text-text-secondary text-sm line-clamp-3">
              Giấy chứng nhận đăng ký doanh nghiệp Công ty TNHH Thẩm định giá MHD do Sở KH&amp;ĐT TP.HCM cấp, mã số doanh nghiệp 0312231570.
            </p>
          </div>

          <!-- Document 2: GCN đủ điều kiện kinh doanh -->
          <div class="bg-surface rounded-2xl p-7 shadow-corporate hover:shadow-corporate-hover transition-all duration-300 group flex flex-col">
            <div class="aspect-[3/4] rounded-xl bg-bg overflow-hidden mb-6 relative shadow-inner">
              <!-- Carousel Images -->
              <img :src="docs[1].images[docs[1].current]" :alt="docs[1].title" class="w-full h-full object-cover transition-opacity duration-300 cursor-pointer" @click="openLightbox(1, docs[1].current)">
              
              <!-- Carousel Controls -->
              <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                <button class="text-white/80 hover:text-white transition-colors" @click.stop="prevSlide(1)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <span class="text-white/90 text-sm font-medium">{{ docs[1].current + 1 }} / {{ docs[1].images.length }}</span>
                <button class="text-white/80 hover:text-white transition-colors" @click.stop="nextSlide(1)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>

              <!-- Zoom overlay -->
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <div class="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                </div>
              </div>
            </div>
            <h3 class="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">Giấy chứng nhận đủ điều kiện kinh doanh</h3>
            <p class="text-text-secondary text-sm line-clamp-3">
              Cấp bởi Bộ Tài chính, mã số 056/TĐG. Chứng nhận MHD đáp ứng đủ các điều kiện kinh doanh dịch vụ thẩm định giá.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="lightbox.open" class="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8" @click="closeLightbox">
          <!-- Close Button -->
          <button class="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/10 rounded-full z-[1000]" @click.stop="closeLightbox">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <!-- Prev Button -->
          <button class="absolute left-4 md:left-10 text-white/70 hover:text-white p-4 z-[1000] transition-colors" @click.stop="lightboxPrev">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Main Image -->
          <div class="relative max-w-[90vw] max-h-[90vh]" @click.stop>
            <img :src="lightboxCurrentImage" class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" alt="Giấy phép pháp lý" />
            <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {{ lightbox.imageIndex + 1 }} / {{ lightboxImages.length }}
            </div>
          </div>

          <!-- Next Button -->
          <button class="absolute right-4 md:right-10 text-white/70 hover:text-white p-4 z-[1000] transition-colors" @click.stop="lightboxNext">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useHead } from '#imports'

useHead({
  title: 'Hồ sơ pháp lý - MHD Valuation',
  meta: [
    { name: 'description', content: 'Hồ sơ pháp lý, giấy phép hoạt động và chứng nhận đủ điều kiện kinh doanh của MHD Valuation.' }
  ]
})

const docs = reactive([
  {
    title: 'Giấy chứng nhận đăng ký doanh nghiệp',
    images: ['/images/legal/PL1.jpg', '/images/legal/PL2.jpg'],
    current: 0
  },
  {
    title: 'Giấy chứng nhận đủ điều kiện kinh doanh',
    images: ['/images/legal/PL3.jpg', '/images/legal/PL4.jpg'],
    current: 0
  }
])

const nextSlide = (docIndex) => {
  const doc = docs[docIndex]
  doc.current = (doc.current + 1) % doc.images.length
}

const prevSlide = (docIndex) => {
  const doc = docs[docIndex]
  doc.current = (doc.current - 1 + doc.images.length) % doc.images.length
}

// Lightbox
const lightbox = reactive({ open: false, docIndex: 0, imageIndex: 0 })

const lightboxImages = computed(() => docs[lightbox.docIndex]?.images || [])
const lightboxCurrentImage = computed(() => lightboxImages.value[lightbox.imageIndex] || '')

const openLightbox = (docIndex, imageIndex) => {
  lightbox.docIndex = docIndex
  lightbox.imageIndex = imageIndex
  lightbox.open = true
  if (typeof document !== 'undefined') document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightbox.open = false
  if (typeof document !== 'undefined') document.body.style.overflow = ''
}

const lightboxNext = () => {
  lightbox.imageIndex = (lightbox.imageIndex + 1) % lightboxImages.value.length
}

const lightboxPrev = () => {
  lightbox.imageIndex = (lightbox.imageIndex - 1 + lightboxImages.value.length) % lightboxImages.value.length
}
</script>
