<template>
  <NuxtLink 
    :to="getPostLink(post)" 
    data-aos="fade-up" 
    class="group flex flex-col h-full glass-card rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 relative border border-white/60 dark:border-white/10"
  >
    <!-- Top Image Container with 16:10 Ratio -->
    <div class="relative aspect-[16/10] overflow-hidden bg-surface-muted">
      <img 
        :src="getThumbnail(post)" 
        @error="handleImageError($event, post)" 
        :alt="post.title" 
        width="800"
        height="500"
        loading="lazy" 
        class="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out" 
      />
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity"></div>
      
      <!-- Category Tag & Read Time -->
      <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
        <span class="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
          {{ getCategoryName(post) }}
        </span>
        <span class="px-2.5 py-0.5 bg-black/50 backdrop-blur-md text-white/90 text-[10px] font-medium rounded-full flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ getReadTime(post.excerpt || post.content) }}
        </span>
      </div>

      <!-- Date Badge Bottom -->
      <div class="absolute bottom-3 left-3 text-white/90 text-[11px] font-medium flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
        {{ formatDate(post.date) }}
      </div>
    </div>

    <!-- Content Body -->
    <div class="p-6 flex flex-col flex-grow bg-transparent">
      <h3 
        class="text-base font-bold text-text mb-2.5 group-hover:text-primary transition-colors line-clamp-2 leading-snug tracking-tight" 
        v-html="post.title"
      ></h3>

      <p 
        class="text-xs text-text-secondary line-clamp-2 mb-5 flex-grow leading-relaxed" 
        v-html="post.excerpt"
      ></p>
      
      <div class="pt-3 flex items-center justify-between text-xs font-bold mt-auto border-t border-black/5 dark:border-white/10">
        <span class="text-[11px] text-text-muted uppercase tracking-wider font-semibold font-mono">Bản tin thị trường</span>
        <span class="text-primary group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
          Đọc bài viết
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
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

const getReadTime = (text) => {
  if (!text) return '3 phút đọc'
  const words = text.replace(/<[^>]*>/g, '').trim().split(/\s+/).length
  const minutes = Math.max(2, Math.ceil(words / 150))
  return `${minutes} phút đọc`
}

const getCategoryName = (post) => {
  if (post.categories?.includes(94)) return 'Văn bản pháp luật'
  if (post.categories?.includes(96)) return 'Tài liệu chuyên ngành'
  if (post.categories?.includes(92)) return 'Tài liệu'
  if (post.categories?.includes(191)) return 'Tin Thị Trường'
  if (post.categories?.includes(189)) return 'Kinh Nghiệm'
  if (post.categories?.includes(190)) return 'Tin Nội Bộ'
  return 'Thị Trường'
}

const getPostLink = (post) => {
  if (post.categories?.includes(92) || post.categories?.includes(94) || post.categories?.includes(96)) {
    return `/tai-lieu/${post.slug}`
  }
  return `/tin-tuc/${post.slug}`
}

const fallbackImages = [
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505664159871-9ca190214c8e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=800&auto=format&fit=crop'
]

const getThumbnail = (post) => {
  const isDocument = post.categories?.some(cat => [92, 94, 96].includes(cat))
  if (isDocument || !post.featured_image) {
    const id = post.id || Math.floor(Math.random() * 100)
    return fallbackImages[id % fallbackImages.length]
  }
  return post.featured_image
}

const handleImageError = (event, post) => {
  const target = event.target
  let attempts = parseInt(target.dataset.attempts || '0')
  attempts++
  if (attempts >= fallbackImages.length) {
    target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    return
  }
  target.dataset.attempts = attempts
  const id = post.id || Math.floor(Math.random() * 100)
  target.src = fallbackImages[(id + attempts) % fallbackImages.length]
}
</script>
