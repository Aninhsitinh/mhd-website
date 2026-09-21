<template>
  <div class="min-h-screen bg-bg">
    <!-- Editorial Header: Archive & Standard Repository -->
    <header class="pt-32 pb-16 bg-bg notranslate">
      <div class="container mx-auto px-4 max-w-6xl">
        <nav class="text-xs text-text-muted mb-4 flex items-center gap-2">
          <NuxtLink :to="localePath('/')" class="hover:text-primary transition-colors">Trang chủ</NuxtLink>
          <span>/</span>
          <span class="text-primary font-medium">{{ $t('nav.documents') || 'Tài liệu' }}</span>
        </nav>
        
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div class="max-w-2xl">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-3">
              Kho Lưu Trữ Pháp Quy &amp; Tiêu Chuẩn Thẩm Định Giá
            </span>
            <h1 class="text-3xl md:text-5xl font-display font-bold text-text leading-tight uppercase">
              Tài Liệu &amp; Văn Bản
            </h1>
            <p class="text-text-secondary mt-3 text-sm md:text-base leading-relaxed">
              Hệ thống tra cứu các văn bản quy phạm pháp luật, Tiêu chuẩn Thẩm định giá Việt Nam và tài liệu nghiệp vụ tham chiếu phục vụ khách hàng, đối tác và các tổ chức tài chính.
            </p>
          </div>

          <!-- Quick Stats / Badges -->
          <div class="flex items-center gap-3">
            <div class="p-4 rounded-2xl bg-surface shadow-corporate text-center min-w-[100px] border border-black/5 dark:border-white/5">
              <div class="text-2xl font-bold font-display text-primary">{{ posts?.length || 10 }}</div>
              <div class="text-xs text-text-muted uppercase font-medium mt-0.5">Văn bản số hóa</div>
            </div>
            <div class="p-4 rounded-2xl bg-surface shadow-corporate text-center min-w-[100px] border border-black/5 dark:border-white/5">
              <div class="text-2xl font-bold font-display text-emerald-500">100%</div>
              <div class="text-xs text-text-muted uppercase font-medium mt-0.5">Chuẩn NĐ 30/2020</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Repository Section -->
    <section class="py-12 bg-bg notranslate">
      <div class="container mx-auto px-4 max-w-6xl">
        
        <!-- Controls Bar: Category Filter Tabs & Live Search -->
        <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          
          <!-- Category Filter Tabs (Borderless Pills) -->
          <div class="flex flex-wrap items-center gap-2">
            <button 
              v-for="tab in categories" 
              :key="tab.id"
              @click="activeCategory = tab.id"
              class="px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-black/5 dark:border-white/5"
              :class="activeCategory === tab.id ? 'bg-primary text-white shadow-corporate' : 'bg-surface text-text-secondary hover:text-primary shadow-sm'"
            >
              {{ tab.name }}
              <span class="ml-1.5 opacity-70 text-[10px]">
                ({{ getCountForCategory(tab.id) }})
              </span>
            </button>
          </div>

          <!-- Live Search Input (Borderless Floating Surface) -->
          <div class="relative min-w-[260px] md:w-72">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Tìm số hiệu, tên văn bản..." 
              class="w-full pl-10 pr-4 py-2.5 rounded-full bg-surface shadow-corporate text-xs text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <button 
              v-if="searchQuery" 
              @click="searchQuery = ''" 
              class="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text text-xs"
            >
              ✕
            </button>
          </div>

        </div>

        <!-- Documents Loading State with Shimmer -->
        <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="i in 6" :key="i" class="bg-surface rounded-3xl p-6 shadow-corporate skeleton-shimmer flex flex-col justify-between h-64">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="w-10 h-10 rounded-xl bg-bg/80"></div>
                <div class="h-4 bg-bg/80 rounded-full w-20"></div>
              </div>
              <div class="h-5 bg-bg/80 rounded-md w-full mt-4"></div>
              <div class="h-4 bg-bg/80 rounded-md w-2/3"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
              <div class="h-3 bg-bg/80 rounded-md w-24"></div>
              <div class="h-8 bg-bg/80 rounded-full w-24"></div>
            </div>
          </div>
        </div>
        
        <!-- Documents Grid -->
        <div v-else-if="filteredPosts.length > 0">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <DocumentCard 
              v-for="item in displayedPosts" 
              :key="item.id" 
              :doc="item" 
            />
          </div>
          
          <!-- Pagination / Load More -->
          <div v-if="visibleCount < filteredPosts.length" class="flex justify-center mt-10">
            <button 
              @click="loadMore" 
              class="px-8 py-3.5 bg-surface rounded-full text-text hover:text-primary transition-all font-bold text-xs uppercase tracking-wider shadow-corporate hover:shadow-corporate-hover transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Xem thêm tài liệu lưu trữ
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Empty State -->
        <div v-else class="text-center py-20 bg-surface rounded-3xl shadow-corporate max-w-xl mx-auto p-8">
          <div class="w-16 h-16 rounded-full bg-surface-muted flex items-center justify-center mx-auto text-text-muted mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="text-base font-bold text-text mb-1">Không tìm thấy tài liệu phù hợp</h3>
          <p class="text-xs text-text-secondary mb-4">Thử thay đổi từ khóa tìm kiếm hoặc chọn danh mục khác.</p>
          <button 
            @click="activeCategory = 0; searchQuery = ''" 
            class="px-5 py-2 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-corporate"
          >
            Xem tất cả tài liệu
          </button>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

useHead({
  title: 'Tài Liệu & Văn Bản Pháp Quy - MHD Valuation',
  meta: [
    {
      name: 'description',
      content: 'Thư viện tài liệu pháp quy, văn bản pháp luật và Tiêu chuẩn Thẩm định giá Việt Nam được số hóa chuẩn thể thức Nghị định 30/2020/NĐ-CP bởi MHD Valuation.'
    }
  ]
})

import { useLocalePath } from '#imports'

const localePath = useLocalePath()
const { fetchPosts } = usePayload()

const activeCategory = ref(0) // 0 = Tất cả
const searchQuery = ref('')
const visibleCount = ref(9)

const categories = [
  { id: 0, name: 'Tất cả tài liệu' },
  { id: 94, name: 'Văn bản pháp luật' },
  { id: 96, name: 'Tiêu chuẩn chuyên ngành' },
]

import { isLegalDocument } from '~/utils/legalClassifier'

// Lấy danh sách tài liệu từ Payload documents collection + các văn bản pháp luật từ posts
const { data: rawDocuments, pending: docPending } = await fetchPosts({ per_page: 100 }, 'documents')
const { data: rawPosts, pending: postPending } = await fetchPosts({ per_page: 100 }, 'posts')

const pending = computed(() => docPending.value || postPending.value)

// Combined unique list of documents
const posts = computed(() => {
  const list = [...(rawDocuments.value || [])]
  const existingSlugs = new Set(list.map(d => d.slug.replace(/-2$/, '')))
  
  if (rawPosts.value) {
    rawPosts.value.forEach(p => {
      if (isLegalDocument(p)) {
        const baseSlug = p.slug.replace(/-2$/, '')
        if (!existingSlugs.has(baseSlug)) {
          existingSlugs.add(baseSlug)
          list.push({
            ...p,
            slug: baseSlug
          })
        }
      }
    })
  }
  return list
})

const getCountForCategory = (catId) => {
  if (!posts.value) return 0
  if (catId === 0) return posts.value.length
  return posts.value.filter(doc => {
    if (catId === 94) {
      return doc.categories?.includes(94) || /thông tư|quyết định|nghị định|luật/i.test(doc.title || '')
    }
    if (catId === 96) {
      return doc.categories?.includes(96) || /tiêu chuẩn|tài liệu/i.test(doc.title || '')
    }
    return doc.categories?.includes(catId)
  }).length
}

const filteredPosts = computed(() => {
  if (!posts.value) return []
  
  let result = posts.value

  // Lọc theo Category
  if (activeCategory.value === 94) {
    result = result.filter(doc => doc.categories?.includes(94) || /thông tư|quyết định|nghị định|luật/i.test(doc.title || ''))
  } else if (activeCategory.value === 96) {
    result = result.filter(doc => doc.categories?.includes(96) || /tiêu chuẩn|tài liệu/i.test(doc.title || ''))
  }

  // Lọc theo search query
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase()
    result = result.filter(doc => {
      const titleMatch = doc.title?.toLowerCase().includes(q)
      const excerptMatch = doc.excerpt?.toLowerCase().includes(q)
      return titleMatch || excerptMatch
    })
  }

  return result
})

const displayedPosts = computed(() => {
  return filteredPosts.value.slice(0, visibleCount.value)
})

const loadMore = () => {
  visibleCount.value += 6
}

watch([activeCategory, searchQuery], () => {
  visibleCount.value = 9
})
</script>
