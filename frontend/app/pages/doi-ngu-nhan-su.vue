<template>
  <div class="min-h-screen bg-bg">
    <!-- Corporate Header -->
    <header class="pt-32 pb-16 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl">
        <nav class="text-xs text-text-muted mb-3">
          <NuxtLink :to="localePath('/')" class="hover:text-primary transition-colors">{{ $t('nav.home') }}</NuxtLink>
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
              <h2 class="text-xl md:text-2xl font-display font-bold text-text uppercase tracking-wide">{{ $t('team.executive_title') }}</h2>
              <p class="text-xs md:text-sm text-text-secondary mt-0.5">{{ $t('team.executive_subtitle') }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="person in executiveTeam" 
              :key="person.id" 
              class="glass-card rounded-3xl overflow-hidden transition-all duration-500 flex flex-col group border border-white/60 dark:border-white/10 hover:-translate-y-1.5"
            >
              <!-- Photo / Avatar Area - Full Bleed Frame -->
              <div class="relative h-84 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <NuxtImg 
                  v-if="person.photo" 
                  :src="person.photo" 
                  :alt="person.name" 
                  loading="lazy" 
                  format="webp" 
                  class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <!-- Premium Monogram Initials Fallback if photo missing -->
                <div v-else class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-bg text-primary">
                  <div class="w-20 h-20 rounded-full bg-surface shadow-corporate flex items-center justify-center text-2xl font-black mb-2 tracking-wider">
                    {{ getInitials(person.name) }}
                  </div>
                  <span class="text-[11px] font-bold uppercase tracking-wider text-text-muted">{{ $t('team.executive_board_tag') }}</span>
                </div>

                <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>

                <!-- Executive Tag -->
                <div class="absolute top-3 right-3 z-10">
                  <span class="px-2.5 py-1 rounded-full glass-pill text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/40">
                    {{ $t('team.executive_tag') }}
                  </span>
                </div>
              </div>
              
              <!-- Content Area -->
              <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-base font-bold text-text uppercase mb-1 tracking-tight group-hover:text-primary transition-colors font-display">{{ person.name }}</h3>
                <p class="text-primary text-xs font-bold uppercase tracking-wider mb-4">{{ person.position || person.title }}</p>
                
                <div class="text-text-secondary text-xs space-y-2 w-full mb-5 flex-1">
                  <div v-for="(desc, dIndex) in (person.description ? person.description.split('\n') : [])" :key="dIndex" class="flex items-start gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <p class="leading-relaxed">{{ desc }}</p>
                  </div>
                </div>
                
                <div v-if="person.experience" class="mt-auto pt-3.5 text-xs text-text-secondary flex items-center justify-between border-t border-black/5 dark:border-white/10">
                  <span class="text-text-muted font-medium">{{ $t('team.experience_label') || 'Kinh nghiệm:' }}</span>
                  <span class="text-primary font-bold font-mono text-sm">{{ person.experience }}</span>
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
              <h2 class="text-xl md:text-2xl font-display font-bold text-text uppercase tracking-wide">{{ $t('team.senior_title') }}</h2>
              <p class="text-xs md:text-sm text-text-secondary mt-0.5">{{ $t('team.senior_subtitle') }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div 
              v-for="person in seniorAppraisers" 
              :key="person.id" 
              class="glass-card rounded-3xl overflow-hidden transition-all duration-500 flex flex-col group border border-white/60 dark:border-white/10 hover:-translate-y-1.5"
            >
              <!-- Photo / Avatar Area - Full Bleed Frame -->
              <div class="relative h-80 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <NuxtImg 
                  v-if="person.photo" 
                  :src="person.photo" 
                  :alt="person.name" 
                  loading="lazy" 
                  format="webp" 
                  class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <!-- Monogram Avatar Fallback -->
                <div v-else class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-bg text-primary">
                  <div class="w-16 h-16 rounded-full bg-surface shadow-sm flex items-center justify-center text-xl font-bold mb-2">
                    {{ getInitials(person.name) }}
                  </div>
                  <span class="text-[10px] font-semibold uppercase tracking-wider text-text-muted">{{ $t('team.appraiser_tag') }}</span>
                </div>

                <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>
              </div>
              
              <!-- Content Area -->
              <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-base font-bold text-text uppercase mb-1 tracking-tight group-hover:text-primary transition-colors font-display">{{ person.name }}</h3>
                <p class="text-primary text-xs font-bold uppercase tracking-wider mb-4">{{ person.position || person.title || $t('team.appraiser_tag') }}</p>
                
                <div class="text-text-secondary text-xs space-y-2 w-full mb-5 flex-1">
                  <div v-for="(desc, dIndex) in (person.description ? person.description.split('\n') : [])" :key="dIndex" class="flex items-start gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <p class="leading-relaxed">{{ desc }}</p>
                  </div>
                </div>
                
                <div v-if="person.experience" class="mt-auto pt-3.5 text-xs text-text-secondary flex items-center justify-between border-t border-black/5 dark:border-white/10">
                  <span class="text-text-muted font-medium">{{ $t('team.experience_label') || 'Kinh nghiệm:' }}</span>
                  <span class="text-primary font-bold font-mono text-sm">{{ person.experience }}</span>
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
        <NuxtLink :to="localePath('/tuyen-dung')" class="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-corporate">
          {{ $t('team.cta_button') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n, usePayload, useLocalePath } from '#imports'

const { t, tm } = useI18n()
const localePath = useLocalePath()

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
