<template>
  <div class="min-h-screen bg-bg">
    <!-- Corporate Hero Header (Borderless) -->
    <header class="pt-32 pb-12 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl">
        <nav class="text-xs text-text-muted mb-4 flex items-center gap-2">
          <NuxtLink :to="localePath('/')" class="hover:text-primary transition-colors">Trang chủ</NuxtLink>
          <span>/</span>
          <span class="text-text-secondary">{{ $t('nav.news') || 'Tin tức' }}</span>
        </nav>
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-3">
              Thông tin &amp; Phân tích chuyên sâu
            </div>
            <h1 class="text-3xl md:text-5xl font-display font-bold text-text leading-tight uppercase">Tin Tức &amp; Sự Kiện</h1>
            <p class="text-text-secondary max-w-2xl mt-3 text-sm md:text-base leading-relaxed">
              Cập nhật liên tục biến động thị trường bất động sản, tài chính doanh nghiệp, chính sách giá và các bản tin chuyên môn từ đội ngũ thẩm định viên MHD.
            </p>
          </div>
          
          <div class="flex items-center gap-6 py-3 px-6 bg-surface rounded-2xl shadow-sm border border-black/5 dark:border-white/5">
            <div class="text-center">
              <div class="text-2xl font-bold font-display text-primary">24/7</div>
              <div class="text-xs text-text-muted uppercase font-medium">Cập nhật liên tục</div>
            </div>
            <div class="w-px h-8 bg-surface-muted"></div>
            <div class="text-center">
              <div class="text-2xl font-bold font-display text-text">100%</div>
              <div class="text-xs text-text-muted uppercase font-medium">Nguồn chuẩn xác</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <section class="py-6 pb-24 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl">
        
        <!-- Featured Editorial Hero (Spotlight Article) -->
        <div v-if="featuredPost && activeCategory === 'all'" class="mb-14" data-aos="fade-up">
          <NuxtLink 
            :to="`/tin-tuc/${featuredPost.slug}`"
            class="group block rounded-2xl overflow-hidden bg-surface shadow-corporate hover:shadow-xl transition-all duration-300 relative border border-black/5 dark:border-white/5"
          >
            <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
              <!-- Left Visual -->
              <div class="lg:col-span-7 relative overflow-hidden bg-surface-muted min-h-[300px] lg:min-h-full">
                <img 
                  :src="featuredPost.featured_image || 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop'" 
                  :alt="featuredPost.title"
                  class="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700 ease-out" 
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 lg:bg-gradient-to-r lg:from-transparent lg:to-surface/40"></div>
                
                <div class="absolute top-4 left-4">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.316.492-.474.966-.567 1.344-.197.802-.13 1.492.058 2.054a3.86 3.86 0 01-.271.442 3.862 3.862 0 01-.442.271c-.562-.187-1.252-.255-2.054-.058-.378.093-.852.251-1.344.567a4.912 4.912 0 00-.88.822 1 1 0 00.385 1.45c.42.25.867.359 1.314.415.518.065 1.077-.01 1.637-.179.09-.028.18-.056.27-.087-.04.14-.075.285-.104.436-.145.753-.16 1.545.039 2.308.199.76.621 1.487 1.257 2.083 1.272 1.192 3.12 1.47 4.793.714a1 1 0 00.575-.905v-2.02a1 1 0 00-.47-.848c-.628-.4-1.127-.92-1.439-1.55-.312-.628-.4-1.32-.256-2.016.144-.696.536-1.332 1.123-1.802a1 1 0 00.354-.78V4.542a1 1 0 00-.616-.927c-.439-.187-.887-.278-1.334-.278-.518 0-1.037.12-1.517.362z" clip-rule="evenodd" />
                    </svg>
                    Tâm điểm truyền thông
                  </span>
                </div>

                <div class="absolute bottom-4 left-4 right-4 text-white text-xs flex items-center justify-between">
                  <span>{{ formatDate(featuredPost.date) }}</span>
                  <span class="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-medium">4 phút đọc</span>
                </div>
              </div>

              <!-- Right Editorial Lead -->
              <div class="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between bg-surface">
                <div>
                  <div class="text-xs font-bold uppercase tracking-widest text-primary mb-2">Bản tin phân tích</div>
                  <h2 class="text-2xl lg:text-3xl font-bold font-display text-text mb-4 leading-snug group-hover:text-primary transition-colors" v-html="featuredPost.title"></h2>
                  <p class="text-sm text-text-secondary line-clamp-4 mb-6 leading-relaxed" v-html="featuredPost.excerpt"></p>
                </div>

                <div class="pt-6 flex items-center justify-between">
                  <span class="text-xs font-bold text-text-muted">MHD Research</span>
                  <span class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-sm group-hover:shadow-md transition-all">
                    Khám phá bài viết
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Section Title & Counter Bar (Borderless) -->
        <div class="flex items-center justify-between gap-4 mb-8">
          <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-primary text-white shadow-corporate">
            <span class="w-2 h-2 rounded-full bg-white"></span>
            Tất cả tin tức
          </div>

          <div class="text-xs text-text-muted">
            Hiển thị <strong class="text-text">{{ gridPosts.length }}</strong> bài viết
          </div>
        </div>

        <!-- Loading Skeleton with Shimmer -->
        <div v-if="pending && posts.length === 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="i in 6" :key="i" class="bg-surface rounded-3xl overflow-hidden shadow-corporate skeleton-shimmer flex flex-col h-[400px]">
            <div class="h-48 bg-bg/80 w-full"></div>
            <div class="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div class="space-y-2.5">
                <div class="h-3.5 bg-bg/80 rounded-md w-24"></div>
                <div class="h-5 bg-bg/80 rounded-md w-11/12"></div>
                <div class="h-5 bg-bg/80 rounded-md w-3/4"></div>
              </div>
              <div class="space-y-2">
                <div class="h-3 bg-bg/80 rounded-md w-full"></div>
                <div class="h-3 bg-bg/80 rounded-md w-4/5"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Posts Grid (Magazine Borderless Cards) -->
        <div v-else-if="gridPosts.length > 0">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <PostCard v-for="post in gridPosts" :key="post.id" :post="post" />
          </div>
          
          <!-- Load More Button -->
          <div v-if="hasMore" class="flex justify-center mt-8">
            <button
              @click="loadMore"
              :disabled="loadingMore"
              class="px-8 py-3.5 bg-surface rounded-full text-text hover:text-primary transition-all font-bold text-xs uppercase tracking-wider shadow-corporate hover:shadow-corporate-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ loadingMore ? 'Đang tải...' : 'Xem thêm bài viết' }}
            </button>
          </div>
        </div>
        
        <!-- Empty State -->
        <div v-else class="text-center py-20 bg-surface rounded-3xl shadow-sm">
          <p class="text-text-secondary text-lg">Chưa có bài viết nào trong chuyên mục này.</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

useHead({
  title: 'Tin Tức & Sự Kiện - MHD Valuation',
  meta: [
    { name: 'description', content: 'Tin tức thị trường bất động sản, tài chính doanh nghiệp, phương pháp định giá tài sản và hoạt động chuyên môn tại MHD Valuation.' }
  ]
})

import { isLegalDocument } from '~/utils/legalClassifier'
import { useLocalePath } from '#imports'

const localePath = useLocalePath()
const { fetchPosts, fetchMorePosts } = usePayload()

const PER_PAGE = 20
const activeCategory = ref('all')
const categories = [
  { id: 'all', name: 'Tất cả tin tức' },
  { id: 'thi-truong', name: 'Tin thị trường' },
  { id: 'kinh-nghiem', name: 'Kinh nghiệm kiến thức' },
  { id: 'noi-bo', name: 'Tin nội bộ' },
]

// Fetch posts
const { data: initialPosts, pending } = await fetchPosts({ per_page: PER_PAGE, page: 1 }, 'posts')

// Filter out legal documents from news listing
const posts = ref((initialPosts.value || []).filter(p => !isLegalDocument(p)))
const page = ref(1)
const hasMore = ref((initialPosts.value || []).length >= PER_PAGE)
const loadingMore = ref(false)

watch(initialPosts, (value) => {
  if (value) {
    posts.value = value.filter(p => !isLegalDocument(p))
    hasMore.value = value.length >= PER_PAGE
  }
})

const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (activeCategory.value === 'all') return posts.value
  return posts.value.filter(post =>
    post.categories?.some(cat => {
      if (typeof cat === 'object') return cat.slug === activeCategory.value
      return false
    })
  )
})

// Top 1 article for Editorial Spotlight Hero
const featuredPost = computed(() => {
  if (!posts.value || posts.value.length === 0) return null
  return posts.value[0]
})

// Grid posts excluding featuredPost when in "All" view to prevent duplicate
const gridPosts = computed(() => {
  if (activeCategory.value !== 'all' || !featuredPost.value) return filteredPosts.value
  return filteredPosts.value.filter(p => p.id !== featuredPost.value.id)
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

const loadMore = async () => {
  if (loadingMore.value || !hasMore.value) return
  loadingMore.value = true
  try {
    const nextPage = page.value + 1
    const result = await fetchMorePosts({ per_page: PER_PAGE, page: nextPage }, 'posts')
    const moreDocs = (result?.docs || []).filter(p => !isLegalDocument(p))
    const existingIds = new Set(posts.value.map(p => p.id))
    const unique = moreDocs.filter(p => !existingIds.has(p.id))
    posts.value.push(...unique)
    page.value = nextPage
    hasMore.value = (result?.docs?.length || 0) >= PER_PAGE
  } catch (error) {
    console.error('Load more news error:', error)
  } finally {
    loadingMore.value = false
  }
}
</script>
