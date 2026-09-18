<template>
  <NuxtLink 
    :to="`/du-an/${project.slug}`" 
    data-aos="fade-up" 
    class="group flex flex-col h-full bg-surface rounded-3xl overflow-hidden transition-all duration-500 shadow-corporate hover:shadow-2xl hover:-translate-y-1.5 relative"
  >
    <!-- Top Image Container -->
    <div class="relative aspect-[16/10] overflow-hidden bg-surface-muted">
      <img 
        :src="project.featured_image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'" 
        :alt="project.title" 
        width="800"
        height="500"
        loading="lazy" 
        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
      />
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>
      
      <!-- Top Tag & Gallery Count -->
      <div class="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white shadow-sm">
          {{ getCategoryName(project) }}
        </span>
        <span v-if="project.gallery && project.gallery.length > 0" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-black/50 backdrop-blur-md text-white/90">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ project.gallery.length }}
        </span>
      </div>

      <!-- Specs Badge on Image Bottom -->
      <div v-if="specs.badge" class="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs font-semibold text-white/95">
        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/90 text-white backdrop-blur-md shadow-sm text-[11px] font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          {{ specs.badge }}
        </span>
      </div>
    </div>
    
    <!-- Content Body -->
    <div class="p-5 flex flex-col flex-grow bg-surface">
      <!-- Title -->
      <h3 class="text-base font-bold text-text mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug tracking-tight" v-html="project.title"></h3>
      
      <!-- Key Metadata Pills (Borderless) -->
      <div v-if="specs.location || specs.purpose" class="space-y-1.5 mb-3 text-[11px]">
        <div v-if="specs.location" class="flex items-center gap-1.5 text-text-secondary truncate">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="truncate">{{ specs.location }}</span>
        </div>
        <div v-if="specs.purpose" class="flex items-center gap-1.5 text-text-secondary truncate">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span class="truncate">{{ specs.purpose }}</span>
        </div>
      </div>

      <!-- Excerpt -->
      <p class="text-xs text-text-secondary line-clamp-2 mb-4 flex-grow leading-relaxed" v-html="project.excerpt"></p>
      
      <!-- Card Footer (Borderless) -->
      <div class="pt-3 flex items-center justify-between text-xs font-bold mt-auto bg-surface">
        <span class="text-[11px] text-text-muted uppercase tracking-wider font-semibold">Hồ sơ năng lực</span>
        <span class="text-primary group-hover:translate-x-1 transition-transform flex items-center gap-1">
          Xem chi tiết
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { computed } from 'vue'
import { getProjectSpecs } from '~/data/projectSpecs'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const specs = computed(() => getProjectSpecs(props.project.slug))

const getCategoryName = (project) => {
  if (project.categories?.includes(64)) return 'Bất động sản'
  if (project.categories?.includes(66)) return 'Doanh nghiệp'
  if (project.categories?.includes(70)) return 'Máy móc thiết bị'
  return 'Thẩm định giá'
}
</script>
