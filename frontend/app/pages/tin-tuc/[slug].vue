<template>
  <div>
    <!-- Loading skeleton -->
    <div v-if="pending" class="min-h-screen pt-32 pb-20 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="animate-pulse space-y-8">
          <div class="h-6 bg-surface w-48 rounded-xl"></div>
          <div class="h-14 bg-surface w-3/4 rounded-2xl"></div>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div class="lg:col-span-8 h-96 bg-surface rounded-3xl"></div>
            <div class="lg:col-span-4 h-96 bg-surface rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
    
    <article v-else-if="post" class="min-h-screen bg-bg">
      <!-- 1. Streamlined Editorial Header (Borderless) -->
      <header class="relative pt-32 pb-10 overflow-hidden bg-bg">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute -top-40 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-4 max-w-7xl relative z-10" data-aos="fade-up">
          <!-- Breadcrumbs -->
          <nav class="flex items-center gap-2 text-xs text-text-muted mb-4">
            <NuxtLink :to="localePath('/')" class="hover:text-primary transition-colors">{{ $t('nav.home') }}</NuxtLink>
            <span>/</span>
            <NuxtLink :to="localePath('/tin-tuc')" class="hover:text-primary transition-colors">{{ $t('nav.news') || 'Tin tức' }}</NuxtLink>
            <span>/</span>
            <span class="text-primary font-medium">{{ getCategoryName(post) }}</span>
          </nav>

          <!-- Category Badge & Read Time Meta -->
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary">
              {{ getCategoryName(post) }}
            </span>
            <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-surface text-text-secondary shadow-sm flex items-center gap-1.5 border border-black/5 dark:border-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ readTime }}
            </span>
            <span class="text-xs text-text-muted">Đăng ngày: {{ formatDate(post.date) }}</span>
          </div>

          <!-- Main Title -->
          <h1 class="text-3xl md:text-5xl font-display font-bold text-text leading-tight mb-5 max-w-5xl" v-html="post.title"></h1>

          <!-- Lead Paragraph / Quick Summary -->
          <p v-if="post.excerpt" class="text-base md:text-lg text-text-secondary leading-relaxed max-w-4xl font-normal">
            {{ post.excerpt }}
          </p>
        </div>
      </header>

      <!-- 2. Main Editorial Stream with Sticky Sidebar -->
      <div class="container mx-auto px-4 max-w-7xl pb-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column (8 cols): Main Article Body -->
          <div class="lg:col-span-8 space-y-8">
            
            <!-- Hero Featured Visual -->
            <div class="rounded-2xl overflow-hidden shadow-corporate relative aspect-[16/9] bg-surface-muted border border-black/5 dark:border-white/5">
              <img 
                :src="post.featured_image || 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop'" 
                :alt="post.title" 
                loading="lazy" 
                class="w-full h-full object-cover" 
              />
            </div>

            <!-- Main Prose Article Body -->
            <div class="p-8 md:p-10 rounded-2xl bg-surface shadow-corporate border border-black/5 dark:border-white/5">
              <div 
                class="rich-content prose dark:prose-invert prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary-hover prose-headings:text-text prose-headings:font-display prose-p:text-text-secondary prose-p:leading-relaxed html-content" 
                v-html="processedContent"
              ></div>
            </div>

            <!-- Image Gallery (If exists) -->
            <div v-if="post.gallery && post.gallery.length > 0" class="p-8 md:p-10 rounded-2xl bg-surface shadow-corporate space-y-6 border border-black/5 dark:border-white/5">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-xl font-bold font-display text-text">Hình ảnh tư liệu liên quan</h3>
                  <p class="text-xs text-text-muted mt-1">{{ post.gallery.length }} hình ảnh tư liệu ghi nhận</p>
                </div>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="(img, idx) in post.gallery" :key="idx" class="aspect-[4/3] rounded-xl overflow-hidden shadow-sm bg-surface-muted border border-black/5 dark:border-white/5">
                  <NuxtImg :src="img" :alt="post.title + ' - Ảnh ' + (idx + 1)" loading="lazy" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" format="webp" />
                </div>
              </div>
            </div>

            <!-- Compact Social Share Bar -->
            <div class="py-4 px-6 rounded-xl bg-surface shadow-sm flex items-center justify-between text-xs border border-black/5 dark:border-white/5">
              <span class="text-text-muted uppercase text-xs font-medium">Chia sẻ bài viết này:</span>
              <SocialShare />
            </div>

          </div>

          <!-- Right Column (4 cols): Sticky Sidebar -->
          <div class="lg:col-span-4 space-y-6">
            <div class="sticky top-28 space-y-6">
              
              <!-- Trending / Related Articles -->
              <div v-if="relatedPosts && relatedPosts.length > 0" class="p-6 rounded-2xl bg-surface shadow-corporate border border-black/5 dark:border-white/5">
                <h3 class="text-xs font-bold uppercase tracking-wider text-text mb-4">
                  Bài viết liên quan
                </h3>
                <div class="space-y-4">
                  <NuxtLink 
                    v-for="rel in relatedPosts" 
                    :key="rel.id" 
                    :to="`/tin-tuc/${rel.slug}`"
                    class="group flex items-start gap-3.5 transition-all"
                  >
                    <img 
                      :src="rel.featured_image || 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=200&auto=format&fit=crop'" 
                      :alt="rel.title"
                      class="w-16 h-16 rounded-xl object-cover flex-shrink-0 bg-surface-muted group-hover:scale-105 transition-transform" 
                    />
                    <div class="min-w-0">
                      <span class="text-xs text-primary font-bold uppercase block mb-1">
                        {{ getCategoryName(rel) }}
                      </span>
                      <h4 class="text-xs font-bold text-text group-hover:text-primary transition-colors line-clamp-2 leading-snug" v-html="rel.title"></h4>
                      <span class="text-xs text-text-muted block mt-1">{{ formatDate(rel.date) }}</span>
                    </div>
                  </NuxtLink>
                </div>
              </div>


              <!-- Back to list -->
              <div class="text-center">
                <NuxtLink :to="localePath('/tin-tuc')" class="text-xs font-bold text-text-muted hover:text-primary transition-colors inline-flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Quay lại danh sách tin tức
                </NuxtLink>
              </div>

            </div>
          </div>

        </div>
      </div>
    </article>
    
    <div v-else class="min-h-screen pt-32 pb-20 bg-bg text-center">
      <h1 class="text-3xl font-bold text-text mb-4">Bài viết không tồn tại</h1>
      <NuxtLink :to="localePath('/tin-tuc')" class="text-primary hover:underline">Quay lại danh sách tin tức</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, watchEffect } from 'vue'
import { cleanLegacyHtml } from '~/utils/htmlSanitizer'
import { isLegalDocument } from '~/utils/legalClassifier'
import { useLocalePath } from '#imports'

const route = useRoute()
const localePath = useLocalePath()
const { fetchPage, fetchMorePosts } = usePayload()

// Fetch post by slug from 'posts' collection
const { data: post, pending } = await fetchPage(route.params.slug, 'posts')

// If this post is a decree/circular/standard/law, seamlessly redirect to /tai-lieu/[slug]
if (post.value && isLegalDocument(post.value)) {
  const cleanSlug = String(route.params.slug).replace(/-2$/, '')
  await navigateTo(`/tai-lieu/${cleanSlug}`)
}

// Fetch related posts (strictly news, not legal docs)
const relatedPosts = ref([])
if (post.value?.categories?.length) {
  try {
    const result = await fetchMorePosts({ per_page: 8 }, 'posts')
    const more = result?.docs || []
    relatedPosts.value = more
      .filter(p => p.slug !== route.params.slug && !isLegalDocument(p))
      .slice(0, 3)
  } catch (e) {}
}

const readTime = computed(() => {
  if (!post.value) return '3 phút đọc'
  const text = (post.value.excerpt || '') + ' ' + (post.value.content || '')
  const words = text.replace(/<[^>]*>/g, '').trim().split(/\s+/).length
  const minutes = Math.max(2, Math.ceil(words / 160))
  return `${minutes} phút đọc`
})

const processedContent = computed(() => {
  if (!post.value || !post.value.content) return ''
  return cleanLegacyHtml(post.value.content)
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
  if (!post) return 'Tin Tức'
  if (post.categories?.includes(94)) return 'Văn bản pháp luật'
  if (post.categories?.includes(96)) return 'Tài liệu chuyên ngành'
  if (post.categories?.includes(92)) return 'Tài liệu'
  if (post.categories?.includes(191)) return 'Tin Thị Trường'
  if (post.categories?.includes(189)) return 'Kinh Nghiệm'
  if (post.categories?.includes(190)) return 'Tin Nội Bộ'
  return 'Thị Trường'
}

import { getArticleSchema, getBreadcrumbSchema } from '~/utils/seoSchema'

watchEffect(() => {
  if (post.value) {
    const rawTitle = post.value.title || ''
    const cleanTitle = rawTitle.replace(/<[^>]*>?/gm, '').trim()
    const titleText = `${cleanTitle} - Tin Tức MHD Valuation`
    const descText = post.value.excerpt ? post.value.excerpt.replace(/<[^>]*>?/gm, '').substring(0, 160) : ''
    const postImage = post.value.featured_image || '/images/logo-mhd.png'
    
    useSeoMeta({
      title: titleText,
      ogTitle: titleText,
      description: descText,
      ogDescription: descText,
      ogImage: postImage,
      articlePublishedTime: post.value.date || post.value.createdAt,
      articleModifiedTime: post.value.updatedAt || post.value.date
    })

    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(getArticleSchema({
            slug: post.value.slug || route.params.slug,
            title: cleanTitle,
            description: descText,
            datePublished: post.value.date || post.value.createdAt,
            dateModified: post.value.updatedAt || post.value.date,
            image: postImage
          }))
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify(getBreadcrumbSchema([
            { name: t('nav.home') || 'Trang chủ', url: localePath('/') },
            { name: t('nav.news') || 'Tin tức', url: localePath('/tin-tuc') },
            { name: cleanTitle, url: localePath(`/tin-tuc/${post.value.slug || route.params.slug}`) }
          ]))
        }
      ]
    })
  }
})
</script>

<style scoped lang="postcss">
:deep(.html-content) {
  @apply text-text-secondary leading-relaxed text-sm md:text-base;
}

:deep(.html-content p) {
  @apply mb-5 leading-relaxed text-justify;
}

:deep(.html-content strong) {
  @apply text-text font-semibold;
}

:deep(.html-content ul) {
  @apply list-none space-y-3 my-4 pl-0;
}

:deep(.html-content li) {
  @apply relative pl-6 text-text-secondary leading-relaxed;
}

:deep(.html-content li::before) {
  content: "";
  @apply absolute left-1 top-2.5 w-2 h-2 rounded-full bg-primary/70 flex-shrink-0;
}

:deep(.html-content table) {
  @apply w-full my-6 border-collapse rounded-2xl overflow-hidden shadow-sm bg-surface;
}

:deep(.html-content th) {
  @apply bg-primary/10 text-text font-bold px-4 py-3 text-left text-xs uppercase tracking-wider font-mono;
}

:deep(.html-content td) {
  @apply px-4 py-3 text-text-secondary text-sm;
}

:deep(.html-content img) {
  @apply rounded-2xl my-6 max-w-full h-auto shadow-md mx-auto block;
}
</style>
