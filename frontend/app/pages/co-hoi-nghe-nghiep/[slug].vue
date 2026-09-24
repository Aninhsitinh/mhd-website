<template>
  <div>
    <div v-if="pending" class="min-h-screen pt-32 pb-20 bg-bg flex justify-center items-center">
      <div class="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
    </div>
    
    <article v-else-if="job" class="min-h-screen bg-bg pt-32 pb-24 notranslate">
      <div class="container mx-auto px-4 max-w-5xl">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs text-text-muted mb-8">
          <NuxtLink :to="localePath('/')" class="hover:text-primary transition-colors">{{ $t('nav.home') }}</NuxtLink>
          <span>/</span>
          <NuxtLink :to="localePath('/co-hoi-nghe-nghiep')" class="hover:text-primary transition-colors">{{ $t('careers.nav_opportunities') }}</NuxtLink>
          <span>/</span>
          <span class="text-primary font-medium line-clamp-1" v-html="job.title"></span>
        </nav>

        <!-- Editorial Role Header -->
        <header class="bg-surface p-8 md:p-12 rounded-2xl shadow-corporate mb-10 relative overflow-hidden border border-black/5 dark:border-white/5">
          <div class="flex flex-wrap items-center gap-2.5 mb-5">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary">
              Đang Tuyển Dụng
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-medium bg-bg text-text-secondary border border-black/5 dark:border-white/5">
              {{ getDiaDiem(job.categories) }}
            </span>
          </div>

          <h1 class="text-3xl md:text-5xl font-bold font-display text-text leading-tight mb-8" v-html="job.title"></h1>
          
          <!-- Key Job Spec Pills -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-xs border-t border-black/5 dark:border-white/5">
            <div class="space-y-1">
              <span class="text-text-muted uppercase text-xs font-medium block">Ngày đăng</span>
              <span class="text-text font-bold">{{ formatDate(job.date) }}</span>
            </div>
            <div class="space-y-1">
              <span class="text-text-muted uppercase text-xs font-medium block">Hình thức</span>
              <span class="text-text font-bold">Toàn thời gian</span>
            </div>
            <div class="space-y-1">
              <span class="text-text-muted uppercase text-xs font-medium block">Địa điểm</span>
              <span class="text-text font-bold">{{ getDiaDiem(job.categories) }}</span>
            </div>
            <div class="space-y-1">
              <span class="text-text-muted uppercase text-xs font-medium block">Cấp bậc</span>
              <span class="text-primary font-bold">{{ getJobRank(job) }}</span>
            </div>
          </div>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Main Content Body (8 cols) -->
          <div class="lg:col-span-8 space-y-8">
            <div class="bg-surface p-8 md:p-12 rounded-2xl shadow-corporate border border-black/5 dark:border-white/5">
              <div 
                class="rich-content prose dark:prose-invert prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary-hover prose-headings:text-text prose-headings:font-display prose-p:text-text-secondary prose-p:leading-relaxed html-content" 
                v-html="processedContent"
              ></div>
            </div>

            <!-- Image Gallery Carousel (if available) -->
            <div v-if="job.gallery && job.gallery.length > 0" class="p-8 md:p-10 rounded-3xl bg-surface shadow-corporate space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-xl font-bold font-display text-text">Môi trường làm việc thực tế</h3>
                  <p class="text-xs text-text-muted mt-1">Không gian văn phòng và hoạt động chuyên môn tại MHD</p>
                </div>
                <div class="flex gap-2">
                  <button @click="scrollCarousel('left')" class="w-9 h-9 rounded-full bg-bg shadow-sm flex items-center justify-center text-text hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button @click="scrollCarousel('right')" class="w-9 h-9 rounded-full bg-bg shadow-sm flex items-center justify-center text-text hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
              
              <div ref="carouselRef" class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 no-scrollbar smooth-scroll">
                <div v-for="(img, idx) in job.gallery" :key="idx" class="flex-none w-full sm:w-[70%] aspect-[16/10] snap-center rounded-2xl overflow-hidden shadow-sm bg-surface-muted">
                  <NuxtImg :src="img" :alt="job.title + ' - Hình ' + (idx + 1)" loading="lazy" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" format="webp" />
                </div>
              </div>
            </div>
          </div>

          <!-- Sticky Application Sidebar (4 cols) -->
          <div class="lg:col-span-4 space-y-6">
            <div class="sticky top-28 space-y-6">
              
              <!-- Quick Apply Box -->
              <div class="p-8 rounded-3xl bg-surface shadow-corporate space-y-6">
                <div>
                  <span class="text-xs font-mono font-bold text-primary uppercase tracking-wider block mb-2">ỨNG TUYỂN TRỰC TIẾP</span>
                  <h3 class="text-lg font-bold font-display text-text">Sẵn sàng gia nhập MHD?</h3>
                  <p class="text-xs text-text-secondary mt-2 leading-relaxed">
                    Gửi ngay CV &amp; hồ sơ năng lực của bạn đến phòng Nhân sự để được xếp lịch phỏng vấn sớm nhất.
                  </p>
                </div>

                <div class="space-y-3 pt-4 text-xs">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span class="text-text-muted text-[10px] block font-mono">Email nộp hồ sơ:</span>
                      <a href="mailto:info@mhd.com.vn" class="text-text font-bold hover:text-primary transition-colors">info@mhd.com.vn</a>
                    </div>
                  </div>

                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span class="text-text-muted text-[10px] block font-mono">Hotline tư vấn:</span>
                      <a href="tel:02835153516" class="text-text font-bold hover:text-primary transition-colors">(028) 3515 3516</a>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Back to list -->
              <div class="text-center">
                <NuxtLink to="/co-hoi-nghe-nghiep" class="text-xs font-bold text-text-muted hover:text-primary transition-colors inline-flex items-center gap-1.5 font-mono uppercase">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Tất cả cơ hội nghề nghiệp
                </NuxtLink>
              </div>

            </div>
          </div>

        </div>
      </div>
    </article>
    
    <!-- Not Found State -->
    <div v-else class="min-h-screen pt-32 pb-20 bg-bg text-center flex flex-col items-center justify-center">
      <div class="w-16 h-16 rounded-full bg-surface shadow-corporate flex items-center justify-center text-text-muted mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 class="text-2xl font-bold font-display text-text mb-2">Vị trí tuyển dụng không tồn tại</h1>
      <p class="text-xs text-text-secondary mb-6">Xin lỗi, vị trí bạn đang tìm kiếm không còn mở hoặc đã hết hạn nhận hồ sơ.</p>
      <NuxtLink to="/co-hoi-nghe-nghiep" class="px-6 py-2.5 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
        Quay lại danh sách tuyển dụng
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, watchEffect } from 'vue'
import { cleanLegacyHtml } from '~/utils/htmlSanitizer'
import { useLocalePath } from '#imports'

const route = useRoute()
const localePath = useLocalePath()
const carouselRef = ref(null)

const scrollCarousel = (direction) => {
  if (!carouselRef.value) return
  const scrollAmount = carouselRef.value.clientWidth * 0.7
  carouselRef.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  })
}
const { fetchPosts } = usePayload()

// Fetch job by slug
const { data: postsData, pending } = await fetchPosts({ slug: route.params.slug }, 'jobs')

const job = computed(() => {
  return postsData.value && postsData.value.length > 0 ? postsData.value[0] : null
})

const processedContent = computed(() => {
  if (!job.value || !job.value.content) return ''
  return cleanLegacyHtml(job.value.content)
})

const getDiaDiem = (catIds) => {
  if (!catIds || !Array.isArray(catIds)) return 'TP. Hồ Chí Minh'
  const locs = []
  if (catIds.includes(12)) locs.push('TP. Hồ Chí Minh')
  if (catIds.includes(14)) locs.push('Quy Nhơn')
  if (catIds.includes(13)) locs.push('Đà Nẵng')
  return locs.length > 0 ? locs.join(', ') : 'TP. Hồ Chí Minh'
}

const getJobRank = (job) => {
  if (/thực tập/i.test(job?.title || '')) return 'Thực tập sinh'
  if (/quản lý|trưởng phòng/i.test(job?.title || '')) return 'Cấp quản lý'
  return 'Chuyên viên'
}

const formatDate = (dateString) => {
  if (!dateString) return 'Đang tuyển'
  try {
    const d = new Date(dateString)
    if (isNaN(d.getTime())) return 'Đang tuyển'
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(d)
  } catch {
    return 'Đang tuyển'
  }
}

watchEffect(() => {
  if (job.value) {
    useHead({
      title: `${job.value.title.replace(/<[^>]*>?/gm, '')} - Tuyển Dụng MHD Valuation`,
    })
  }
})
</script>

<style scoped lang="postcss">
:deep(.prose table) {
  @apply w-full border-collapse rounded-2xl overflow-hidden shadow-sm my-6 bg-surface;
}
:deep(.prose th) {
  @apply bg-primary/10 text-text font-bold px-4 py-3 text-left;
}
:deep(.prose td) {
  @apply px-4 py-3 text-text-secondary;
}
:deep(.prose ul) {
  @apply list-none pl-0 space-y-3 my-4;
}
:deep(.prose li) {
  @apply relative pl-6 text-text-secondary leading-relaxed;
}
:deep(.prose li::before) {
  content: "";
  @apply absolute left-1 top-2.5 w-2 h-2 rounded-full bg-primary/70 flex-shrink-0;
}
:deep(.prose img) {
  @apply max-w-full h-auto rounded-2xl shadow-sm mx-auto my-4;
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
