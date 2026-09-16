<template>
  <div class="py-24 pt-32 min-h-screen">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
        <h1 class="text-3xl md:text-5xl font-bold text-text mb-4">Kết quả tìm kiếm</h1>
        <p class="text-text-secondary text-lg">Tìm kiếm cho: <span class="font-bold text-primary">"{{ route.query.q }}"</span></p>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="animate-pulse bg-surface rounded-2xl h-[400px] shadow-corporate">
          <div class="h-48 bg-bg-card rounded-t-2xl"></div>
          <div class="p-6">
            <div class="h-4 bg-bg-card rounded w-1/4 mb-4"></div>
            <div class="h-6 bg-bg-card rounded w-3/4 mb-4"></div>
            <div class="h-4 bg-bg-card rounded w-full mb-2"></div>
            <div class="h-4 bg-bg-card rounded w-5/6"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center text-red-500 py-12">
        Có lỗi xảy ra khi tìm kiếm. Vui lòng thử lại.
      </div>

      <!-- Results Grid -->
      <div v-else-if="searchResults && searchResults.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PostCard 
          v-for="post in searchResults" 
          :key="post.id" 
          :post="post" 
        />
      </div>

      <!-- No Results -->
      <div v-else class="text-center py-24 bg-surface rounded-2xl shadow-corporate">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-text-muted mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <h3 class="text-2xl font-bold text-text mb-2">Không tìm thấy kết quả</h3>
        <p class="text-text-secondary">Rất tiếc, chúng tôi không tìm thấy bài viết nào phù hợp với từ khóa của bạn.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { usePayload } from '~/composables/usePayload'
import { useHead, useRoute } from '#imports'

const route = useRoute()
const { fetchPosts } = usePayload()

// Tối ưu SEO cho trang tìm kiếm
useHead({
  title: `Tìm kiếm: ${route.query.q || ''} | MHD Valuation`,
  meta: [
    { name: 'robots', content: 'noindex, follow' } // Tránh Google index trang tìm kiếm rác
  ]
})

// Gọi API với tham số search
const { data: searchResults, pending, error, refresh } = await fetchPosts({
  search: route.query.q,
  per_page: 20
})

// Cập nhật khi query thay đổi
watch(() => route.query.q, () => {
  refresh()
})
</script>
