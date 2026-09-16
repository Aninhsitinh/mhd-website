<template>
  <div class="min-h-screen bg-bg">
    <!-- Corporate Header -->
    <header class="pt-32 pb-16 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl">
        <nav class="text-xs text-text-muted mb-3">
          <NuxtLink to="/" class="hover:text-primary transition-colors">Trang chủ</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-text-secondary">{{ $t('nav.team') || 'Đội ngũ' }}</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-display font-bold text-text leading-tight uppercase">{{ $t('team.title') }}</h1>
        <p class="text-text-secondary max-w-2xl mt-3 text-base leading-relaxed">{{ $t('team.subtitle') }}</p>
      </div>
    </header>

    <!-- Team Section -->
    <section class="pb-20 md:pb-28 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl space-y-20">
        
        <!-- Tier 1: Ban Lãnh đạo Điều hành (Executive Board) -->
        <div>
          <div class="flex items-center gap-3 mb-8">
            <span class="w-8 h-1 bg-primary rounded-full"></span>
            <div>
              <h2 class="text-xl md:text-2xl font-display font-bold text-text uppercase tracking-wide">Ban Lãnh đạo &amp; Hội đồng Điều hành</h2>
              <p class="text-xs md:text-sm text-text-secondary mt-0.5">Các chuyên gia điều hành chiến lược và ký duyệt chứng thư thẩm định giá cấp cao</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="person in executiveTeam" 
              :key="person.id" 
              class="bg-surface rounded-2xl overflow-hidden shadow-corporate hover:shadow-corporate-hover transition-all duration-300 flex flex-col group"
            >
              <!-- Photo / Avatar Area -->
              <div class="relative h-80 w-full overflow-hidden bg-bg/50 flex items-center justify-center p-2">
                <NuxtImg 
                  v-if="person.photo" 
                  :src="person.photo" 
                  :alt="person.name" 
                  loading="lazy" 
                  format="webp" 
                  class="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500" 
                />
                <!-- Premium Monogram Initials Fallback if photo missing -->
                <div v-else class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-bg text-primary rounded-xl">
                  <div class="w-20 h-20 rounded-full bg-surface shadow-corporate flex items-center justify-center text-2xl font-black mb-2 tracking-wider">
                    {{ getInitials(person.name) }}
                  </div>
                  <span class="text-[11px] font-bold uppercase tracking-wider text-text-muted">Hội đồng Điều hành</span>
                </div>

                <!-- Executive Tag -->
                <div class="absolute top-3 right-3">
                  <span class="px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                    Lãnh đạo
                  </span>
                </div>
              </div>
              
              <!-- Content Area -->
              <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-base font-bold text-text uppercase mb-1 tracking-tight group-hover:text-primary transition-colors">{{ person.name }}</h3>
                <p class="text-primary text-xs font-bold uppercase tracking-wider mb-4">{{ person.position || person.title }}</p>
                
                <div class="text-text-secondary text-xs space-y-1.5 w-full mb-5 flex-1">
                  <div v-for="(desc, dIndex) in (person.description ? person.description.split('\n') : [])" :key="dIndex" class="flex items-start gap-1.5">
                    <span class="text-primary mt-0.5">•</span>
                    <p class="leading-relaxed">{{ desc }}</p>
                  </div>
                </div>
                
                <div v-if="person.experience" class="mt-auto pt-3 text-xs text-text-secondary flex items-center justify-between">
                  <span>{{ $t('team.experience_label') || 'Kinh nghiệm:' }}</span>
                  <span class="text-primary font-bold">{{ person.experience }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tier 2: Đội ngũ Thẩm định viên & Chuyên viên cấp cao (Senior Appraisers) -->
        <div v-if="seniorAppraisers.length > 0">
          <div class="flex items-center gap-3 mb-8">
            <span class="w-8 h-1 bg-primary/40 rounded-full"></span>
            <div>
              <h2 class="text-xl md:text-2xl font-display font-bold text-text uppercase tracking-wide">Thẩm định viên &amp; Chuyên gia cấp cao</h2>
              <p class="text-xs md:text-sm text-text-secondary mt-0.5">Đội ngũ thẩm định viên thẻ Bộ Tài chính và chuyên gia khảo sát thực địa</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div 
              v-for="person in seniorAppraisers" 
              :key="person.id" 
              class="bg-surface rounded-2xl overflow-hidden shadow-corporate hover:shadow-corporate-hover transition-all duration-300 flex flex-col group"
            >
              <!-- Photo / Avatar Area -->
              <div class="relative h-72 w-full overflow-hidden bg-bg/50 flex items-center justify-center p-2">
                <NuxtImg 
                  v-if="person.photo" 
                  :src="person.photo" 
                  :alt="person.name" 
                  loading="lazy" 
                  format="webp" 
                  class="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500" 
                />
                <!-- Monogram Avatar Fallback -->
                <div v-else class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-bg text-primary rounded-xl">
                  <div class="w-16 h-16 rounded-full bg-surface shadow-sm flex items-center justify-center text-xl font-bold mb-2">
                    {{ getInitials(person.name) }}
                  </div>
                  <span class="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Thẩm định viên</span>
                </div>
              </div>
              
              <!-- Content Area -->
              <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-base font-bold text-text uppercase mb-1 tracking-tight group-hover:text-primary transition-colors">{{ person.name }}</h3>
                <p class="text-primary text-xs font-bold uppercase tracking-wider mb-4">{{ person.position || person.title || 'Thẩm định viên' }}</p>
                
                <div class="text-text-secondary text-xs space-y-1.5 w-full mb-5 flex-1">
                  <div v-for="(desc, dIndex) in (person.description ? person.description.split('\n') : [])" :key="dIndex" class="flex items-start gap-1.5">
                    <span class="text-primary mt-0.5">•</span>
                    <p class="leading-relaxed">{{ desc }}</p>
                  </div>
                </div>
                
                <div v-if="person.experience" class="mt-auto pt-3 text-xs text-text-secondary flex items-center justify-between">
                  <span>{{ $t('team.experience_label') || 'Kinh nghiệm:' }}</span>
                  <span class="text-primary font-bold">{{ person.experience }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-surface relative text-center">
      <div class="container mx-auto px-4 max-w-2xl">
        <h2 class="text-2xl md:text-3xl font-bold text-text mb-3">{{ $t('team.cta_title') }}</h2>
        <p class="text-text-secondary mb-6 text-sm md:text-base">{{ $t('team.cta_desc') }}</p>
        <NuxtLink to="/tuyen-dung" class="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-corporate">
          {{ $t('team.cta_button') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n, usePayload } from '#imports'

const { t, tm } = useI18n()

const { fetchPosts } = usePayload()
const { data: teamData } = await fetchPosts({ per_page: 50, sort: 'order' }, 'team')

const team = computed(() => {
  const list = teamData.value || []
  return [...list].sort((a, b) => (a.order || 99) - (b.order || 99))
})

// Top 4 leadership members strictly defined
const executiveTeam = computed(() => {
  return team.value.slice(0, 4)
})

// Senior appraisers and specialists
const seniorAppraisers = computed(() => {
  return team.value.slice(4)
})

const getInitials = (name) => {
  if (!name) return 'MHD'
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[parts.length - 2][0] + parts[parts.length - 1][0]).toUpperCase()
}

useHead({
  title: computed(() => t('team.meta_title'))
})

useSeoMeta({
  title: computed(() => t('team.meta_title')),
  ogTitle: computed(() => t('team.meta_title')),
  description: computed(() => t('team.meta_desc')),
  ogDescription: computed(() => t('team.meta_desc')),
  ogImage: '/images/logo-mhd.png'
})
</script>

<style scoped>
/* Clear HMR Cache */
</style>
