<template>
  <div>
    <!-- Loading skeleton -->
    <div v-if="pending" class="min-h-screen pt-32 pb-20 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="animate-pulse space-y-8">
          <div class="h-6 bg-surface w-48 rounded-xl"></div>
          <div class="h-14 bg-surface w-3/4 rounded-2xl"></div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2 h-96 bg-surface rounded-3xl"></div>
            <div class="h-96 bg-surface rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
    
    <article v-else-if="project" class="min-h-screen bg-bg">
      <!-- 1. Streamlined Clean Header (Borderless & No Redundant Duplicate Stats) -->
      <header class="relative pt-32 pb-10 overflow-hidden bg-bg">
        <!-- Ambient Glow Backdrops -->
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute -top-40 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div class="container mx-auto px-4 max-w-7xl relative z-10" data-aos="fade-up">
          <!-- Breadcrumbs -->
          <nav class="flex items-center gap-2 text-xs text-text-muted mb-4">
            <NuxtLink :to="localePath('/')" class="hover:text-primary transition-colors">{{ $t('nav.home') }}</NuxtLink>
            <span>/</span>
            <NuxtLink :to="localePath('/du-an')" class="hover:text-primary transition-colors">{{ $t('nav.projects') || 'Dự án' }}</NuxtLink>
            <span>/</span>
            <span class="text-primary font-medium">{{ getCategoryName(project) }}</span>
          </nav>
                <!-- Category & Status Badge -->
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary">
              {{ getCategoryName(project) }}
            </span>
            <span v-if="specs.badge" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-surface text-text-secondary shadow-sm border border-black/5 dark:border-white/5">
              {{ specs.badge }}
            </span>
            <span class="text-xs text-text-muted">Hồ sơ thẩm định hoàn tất</span>
          </div>

          <!-- Project Title -->
          <h1 class="text-3xl md:text-5xl font-display font-bold text-text leading-tight mb-4 max-w-5xl" v-html="project.title"></h1>
          
          <!-- Quick Highlight Subtitle -->
          <p 
            v-if="specs.highlight || project.excerpt" 
            class="text-base md:text-lg text-text-secondary leading-relaxed max-w-4xl font-normal"
            v-html="specs.highlight || project.excerpt"
          ></p>
        </div>
      </header>

      <!-- 2. Main Natural Reading Stream -->
      <div class="container mx-auto px-4 max-w-7xl pb-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column (8 cols): Continuous Editorial Flow -->
          <div class="lg:col-span-8 space-y-10">
            
            <!-- Clean Hero Image -->
            <div v-if="project.featured_image" class="rounded-2xl overflow-hidden shadow-corporate relative aspect-[16/9] bg-surface-muted border border-black/5 dark:border-white/5">
              <img 
                :src="project.featured_image" 
                :alt="project.title" 
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Structured Corporate Dossier Section -->
            <div class="p-8 md:p-10 rounded-2xl bg-surface shadow-corporate space-y-8 border border-black/5 dark:border-white/5">
              <div>
                <div class="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  THÔNG TIN KHẢO SÁT &amp; THẨM ĐỊNH GIÁ
                </div>
                <h2 class="text-xl md:text-2xl font-bold font-display text-text mb-4">Nội dung khảo sát &amp; phương pháp định giá</h2>
                
                <!-- Executive Lead Paragraph -->
                <div 
                  v-if="dossier" 
                  class="text-sm md:text-base text-text-secondary leading-relaxed font-normal bg-bg p-5 rounded-xl border border-black/5 dark:border-white/5"
                  v-html="dossier.overview"
                ></div>
                <div 
                  v-else-if="cleanedContent"
                  class="rich-content prose dark:prose-invert prose-lg max-w-none prose-headings:text-text prose-p:text-text-secondary leading-relaxed html-content bg-bg p-5 rounded-xl border border-black/5 dark:border-white/5"
                  v-html="cleanedContent"
                ></div>
              </div>

              <!-- Structured Dossier Sections -->
              <div v-if="dossier && dossier.sections" class="space-y-6 pt-2">
                <div 
                  v-for="(sec, sIdx) in dossier.sections" 
                  :key="sIdx"
                  class="p-6 rounded-xl bg-bg border border-black/5 dark:border-white/5 space-y-4"
                >
                  <!-- Section Header -->
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                      0{{ sIdx + 1 }}
                    </div>
                    <h3 class="text-base font-bold font-display text-text">{{ sec.title }}</h3>
                  </div>

                  <!-- Section Content -->
                  <p class="text-xs md:text-sm text-text-secondary leading-relaxed pl-11">
                    {{ sec.content }}
                  </p>

                  <!-- Bullets (Checklist Style) -->
                  <div v-if="sec.bullets && sec.bullets.length > 0" class="pl-11 space-y-2">
                    <div 
                      v-for="(bullet, bIdx) in sec.bullets" 
                      :key="bIdx"
                      class="flex items-start gap-2.5 text-xs md:text-sm text-text"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span class="leading-relaxed">{{ bullet }}</span>
                    </div>
                  </div>

                  <!-- Embedded Metrics Stats Grid -->
                  <div v-if="sec.stats && sec.stats.length > 0" class="pl-11 pt-2">
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div 
                        v-for="(st, stIdx) in sec.stats" 
                        :key="stIdx"
                        class="p-3 rounded-lg bg-surface border border-black/5 dark:border-white/5"
                      >
                        <div class="text-xs text-text-muted uppercase font-medium">{{ st.label }}</div>
                        <div class="text-xs font-bold text-primary truncate mt-0.5">{{ st.value }}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Executive Conclusion Box -->
                <div v-if="dossier.conclusion" class="p-5 rounded-xl bg-primary/5 text-xs md:text-sm text-text leading-relaxed flex items-start gap-3 border border-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div class="space-y-1">
                    <span class="font-bold text-primary uppercase text-xs block">Đánh giá &amp; Kết luận thẩm định MHD</span>
                    <p class="text-text-secondary">{{ dossier.conclusion }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Field Inspection Gallery -->
            <div v-if="galleryImages.length > 0" class="p-8 md:p-10 rounded-2xl bg-surface shadow-corporate space-y-6 border border-black/5 dark:border-white/5">
              <div class="flex items-center justify-between">
                <div>
                  <div class="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                    HÌNH ẢNH KHẢO SÁT HIỆN TRƯỜNG
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold font-display text-text">Hình ảnh thực tế tại dự án</h3>
                  <p class="text-xs text-text-muted mt-1">Gồm {{ galleryImages.length }} ảnh chụp khảo sát thực tế (Bấm vào ảnh để phóng to toàn màn hình)</p>
                </div>
              </div>

              <!-- Gallery Grid -->
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                <div 
                  v-for="(img, idx) in galleryImages" 
                  :key="idx" 
                  class="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm bg-surface-muted cursor-zoom-in group"
                  @click="openLightbox(idx)"
                >
                  <img :src="img" :alt="`${project.title} - Ảnh ${idx + 1}`" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div class="opacity-0 group-hover:opacity-100 p-2 rounded-full bg-white/90 text-text transition-all transform scale-75 group-hover:scale-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  <div class="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/70 text-white">
                    #{{ idx + 1 }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Technical Milestone Timeline -->
            <div class="p-8 md:p-10 rounded-2xl bg-surface shadow-corporate border border-black/5 dark:border-white/5">
              <h3 class="text-lg font-bold font-display text-text mb-6">
                Quy trình thực hiện hồ sơ
              </h3>
              <div class="space-y-4">
                <div class="flex items-start gap-4 p-4 rounded-xl bg-bg border border-black/5 dark:border-white/5">
                  <span class="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs flex-shrink-0">1</span>
                  <div>
                    <h4 class="text-xs font-bold text-text uppercase tracking-wide">Tiếp nhận hồ sơ &amp; Thẩm tra pháp lý</h4>
                    <p class="text-xs text-text-secondary mt-0.5">Xác minh quy hoạch, giấy phép đầu tư, hồ sơ xuất xứ thiết bị và hợp đồng liên quan.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-4 rounded-xl bg-bg border border-black/5 dark:border-white/5">
                  <span class="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs flex-shrink-0">2</span>
                  <div>
                    <h4 class="text-xs font-bold text-text uppercase tracking-wide">Khảo sát hiện trường &amp; Đo đạc thực địa</h4>
                    <p class="text-xs text-text-secondary mt-0.5">Đội ngũ thẩm định viên trực tiếp thị sát, lập biên bản khảo sát hiện trạng công trình/máy móc.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-4 rounded-xl bg-bg border border-black/5 dark:border-white/5">
                  <span class="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs flex-shrink-0">3</span>
                  <div>
                    <h4 class="text-xs font-bold text-text uppercase tracking-wide">Mô hình hóa tài chính &amp; Đối chiếu thị trường</h4>
                    <p class="text-xs text-text-secondary mt-0.5">Áp dụng phương pháp định giá tiêu chuẩn kết hợp thu thập báo giá đối tác quốc tế.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-4 rounded-xl bg-bg border border-black/5 dark:border-white/5">
                  <span class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs flex-shrink-0">4</span>
                  <div>
                    <h4 class="text-xs font-bold text-text uppercase tracking-wide">Phát hành Báo cáo &amp; Chứng thư thẩm định giá</h4>
                    <p class="text-xs text-text-secondary mt-0.5">Chứng thư hợp pháp phục vụ trực tiếp thế chấp ngân hàng, M&amp;A hoặc cổ phần hóa.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Subtle Compact Share Bar -->
            <div class="flex items-center justify-between py-4 px-6 rounded-xl bg-surface shadow-sm text-xs border border-black/5 dark:border-white/5">
              <span class="text-text-muted font-medium uppercase text-xs">Chia sẻ hồ sơ dự án:</span>
              <SocialShare />
            </div>

          </div>

          <!-- Right Column (4 cols): Sticky Complete Specs Sidebar & Consultation -->
          <div class="lg:col-span-4 space-y-6">
            <div class="sticky top-28 space-y-6">
              
              <!-- Comprehensive Technical Specs Card -->
              <div class="p-5 sm:p-6 rounded-2xl bg-surface shadow-corporate border border-black/5 dark:border-white/5">
                <div class="flex items-center justify-between pb-4 mb-4 border-b border-black/5 dark:border-white/5">
                  <h3 class="text-xs font-bold uppercase tracking-wider text-text">Thông số hồ sơ kỹ thuật</h3>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600">Hoàn tất thẩm định</span>
                </div>

                <div class="space-y-4 text-xs">
                  <div class="space-y-0.5">
                    <span class="text-text-muted block text-xs">Khách hàng / Đối tác:</span>
                    <span class="font-bold text-text text-sm leading-snug break-words">{{ specs.client || 'Khách hàng Doanh nghiệp' }}</span>
                  </div>

                  <div class="space-y-0.5">
                    <span class="text-text-muted block text-xs">Loại hình tài sản:</span>
                    <span class="font-bold text-text break-words">{{ specs.assetType || getCategoryName(project) }}</span>
                  </div>

                  <div class="space-y-0.5">
                    <span class="text-text-muted block text-xs">Quy mô diện tích / Công suất:</span>
                    <span class="font-bold text-primary break-words">{{ specs.scale || 'Hồ sơ tiêu chuẩn' }}</span>
                  </div>

                  <div class="space-y-0.5">
                    <span class="text-text-muted block text-xs">Địa bàn thẩm định:</span>
                    <span class="font-bold text-text break-words">{{ specs.location || 'Việt Nam' }}</span>
                  </div>

                  <div class="space-y-0.5">
                    <span class="text-text-muted block text-xs">Phương pháp thẩm định:</span>
                    <span class="font-bold text-text break-words">{{ specs.method || 'Tiêu chuẩn Thẩm định giá Việt Nam' }}</span>
                  </div>

                  <div class="space-y-0.5">
                    <span class="text-text-muted block text-xs">Mục đích thẩm định:</span>
                    <span class="font-semibold text-text break-words">{{ specs.purpose || 'Tài trợ vốn tín dụng & xác định giá trị tài sản' }}</span>
                  </div>

                  <div class="space-y-0.5">
                    <span class="text-text-muted block text-xs">Đơn vị thẩm định:</span>
                    <span class="font-semibold text-secondary break-words">MHD Valuation (Chính thức)</span>
                  </div>
                </div>
              </div>

              <!-- Consultation CTA Card -->
              <div class="p-6 rounded-2xl bg-primary text-white shadow-xl relative overflow-hidden">
                <div class="relative z-10">
                  <span class="inline-block px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-sm mb-3">Tư vấn chuyên gia</span>
                  <h4 class="text-lg font-bold font-display leading-snug mb-2">Thẩm định dự án tương tự?</h4>
                  <p class="text-xs text-white/90 leading-relaxed mb-5">
                    Đội ngũ chuyên gia thẩm định giá viên của MHD sẵn sàng tư vấn phương pháp định giá tối ưu cho doanh nghiệp và ngân hàng.
                  </p>
                  <NuxtLink 
                    to="/lien-he" 
                    class="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-primary font-bold text-xs uppercase tracking-wider shadow-md hover:bg-white/90 transition-all transform hover:-translate-y-0.5"
                  >
                    Gửi yêu cầu thẩm định
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>

              <!-- Back to list link -->
              <div class="text-center">
                <NuxtLink to="/du-an" class="text-xs font-bold text-text-muted hover:text-primary transition-colors inline-flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Quay lại tất cả dự án
                </NuxtLink>
              </div>

            </div>
          </div>

        </div>
      </div>
    </article>
    
    <div v-else class="min-h-screen pt-32 pb-20 bg-bg text-center">
      <h1 class="text-3xl font-bold text-text mb-4">Dự án không tồn tại</h1>
      <NuxtLink to="/du-an" class="text-primary hover:underline">Quay lại danh sách dự án</NuxtLink>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isLightboxOpen" class="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-md" @click="closeLightbox">
          
          <!-- Close Button -->
          <button class="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-[1000] transition-colors" @click.stop="closeLightbox">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Prev Button -->
          <button v-if="galleryImages.length > 1" class="absolute left-4 md:left-10 text-white/70 hover:text-white p-4 z-[1000] transition-colors" @click.stop="prevImage">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Main Image -->
          <div class="relative max-w-[90vw] max-h-[90vh]" @click.stop>
            <img :src="galleryImages[currentImageIndex]" loading="lazy" class="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl" alt="Ảnh thực địa" />
            
            <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/80 text-xs font-mono px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md">
              Ảnh hiện trường {{ currentImageIndex + 1 }} / {{ galleryImages.length }}
            </div>
          </div>

          <!-- Next Button -->
          <button v-if="galleryImages.length > 1" class="absolute right-4 md:right-10 text-white/70 hover:text-white p-4 z-[1000] transition-colors" @click.stop="nextImage">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped lang="postcss">
:deep(.html-content a[href*="/api/media/file/"]) {
  display: none !important;
}

:deep(.html-content p:empty) {
  display: none !important;
}

:deep(.html-content) {
  @apply text-text-secondary text-base leading-relaxed;
}

:deep(.html-content p) {
  @apply mb-4 leading-relaxed;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script setup>
import { useRoute } from 'vue-router'
import { computed, watchEffect, ref } from 'vue'
import { getProjectSpecs } from '~/data/projectSpecs'
import { getProjectDossier } from '~/data/projectDossiers'
import { cleanLegacyHtml } from '~/utils/htmlSanitizer'
import { useLocalePath, useI18n } from '#imports'

const route = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()
const { fetchPosts } = usePayload()

// Lightbox state
const isLightboxOpen = ref(false)
const currentImageIndex = ref(0)

// Fetch project by slug
const { data: projectsData, pending } = await fetchPosts({ slug: route.params.slug }, 'projects')

const project = computed(() => {
  return projectsData.value && projectsData.value.length > 0 ? projectsData.value[0] : null
})

const specs = computed(() => getProjectSpecs(project.value?.slug))
const dossier = computed(() => getProjectDossier(project.value?.slug))
const galleryImages = computed(() => project.value?.gallery || [])

// Clean content fallback
const cleanedContent = computed(() => {
  if (!project.value || !project.value.content) return ''
  return cleanLegacyHtml(project.value.content)
})

const openLightbox = (index) => {
  currentImageIndex.value = index
  isLightboxOpen.value = true
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

const nextImage = () => {
  if (galleryImages.value.length > 0) {
    currentImageIndex.value = (currentImageIndex.value + 1) % galleryImages.value.length
  }
}

const prevImage = () => {
  if (galleryImages.value.length > 0) {
    currentImageIndex.value = (currentImageIndex.value - 1 + galleryImages.value.length) % galleryImages.value.length
  }
}

import { getBreadcrumbSchema, SITE_URL, DEFAULT_LOGO } from '~/utils/seoSchema'

// SEO Meta
watchEffect(() => {
  if (project.value) {
    const rawTitle = project.value.title || ''
    const cleanTitle = rawTitle.replace(/<[^>]*>?/gm, '').trim()
    const titleText = `${cleanTitle} - Hồ Sơ Năng Lực Thẩm Định MHD`
    const descText = specs.value.highlight || (project.value.excerpt ? project.value.excerpt.replace(/<[^>]*>?/gm, '').substring(0, 160) : '')
    const projectImage = project.value.featured_image || DEFAULT_LOGO
    
    useSeoMeta({
      title: titleText,
      ogTitle: titleText,
      description: descText,
      ogDescription: descText,
      ogImage: projectImage
    })

    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            '@id': `${SITE_URL}/du-an/${project.value.slug}#project`,
            headline: cleanTitle,
            description: descText,
            image: [projectImage],
            author: {
              '@type': 'Organization',
              name: 'MHD Valuation',
              url: SITE_URL
            },
            publisher: {
              '@id': `${SITE_URL}/#organization`
            }
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify(getBreadcrumbSchema([
            { name: t('nav.home') || 'Trang chủ', url: localePath('/') },
            { name: t('nav.projects') || 'Dự án', url: localePath('/du-an') },
            { name: cleanTitle, url: localePath(`/du-an/${project.value.slug}`) }
          ]))
        }
      ]
    })
  }
})

const getCategoryName = (project) => {
  if (!project) return 'Thẩm định giá'
  if (project.categories?.includes(64)) return 'Dự án Bất động sản'
  if (project.categories?.includes(66)) return 'Dự án Doanh nghiệp'
  if (project.categories?.includes(70)) return 'Máy móc thiết bị'
  return 'Hồ sơ năng lực'
}
</script>
