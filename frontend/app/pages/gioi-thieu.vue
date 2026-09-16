<template>
  <div class="min-h-screen bg-bg">
    <!-- Corporate Header -->
    <header class="pt-32 pb-16 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl">
        <nav class="text-xs text-text-muted mb-3">
          <NuxtLink to="/" class="hover:text-primary transition-colors">Trang chủ</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-text-secondary">{{ $t('nav.about') || 'Giới thiệu' }}</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-display font-bold text-text leading-tight uppercase">{{ $t('about.title') }}</h1>
      </div>
    </header>

    <!-- Company Overview -->
    <section class="pb-16 md:pb-24 bg-bg relative">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div class="space-y-6">
            <h2 class="text-2xl md:text-3xl font-display font-bold text-primary uppercase leading-tight">
              {{ $t('about.company_name') }}
            </h2>
            
            <div class="space-y-4 text-base text-text-secondary leading-relaxed text-justify">
              <p v-html="$t('about.desc_1')"></p>
              <p v-html="$t('about.desc_2')"></p>
            </div>
          </div>
          <div class="relative">
            <div class="rounded-2xl overflow-hidden shadow-corporate bg-surface">
              <img src="~/assets/team-photo.jpg" alt="Đội ngũ MHD" loading="lazy" class="w-full h-auto min-h-[380px] max-h-[500px] object-cover object-center">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision, Mission, Core Values -->
    <section class="py-16 md:py-24 bg-surface relative">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Vision -->
          <div class="bg-bg rounded-2xl p-8 shadow-corporate hover:shadow-corporate-hover transition-all duration-300 flex flex-col">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 class="text-lg font-bold text-text mb-4 uppercase tracking-wider">{{ $t('about.vision_title') }}</h3>
            <p class="text-text-secondary text-sm leading-relaxed text-justify" v-html="$t('about.vision_desc')"></p>
          </div>

          <!-- Mission -->
          <div class="bg-bg rounded-2xl p-8 shadow-corporate hover:shadow-corporate-hover transition-all duration-300 flex flex-col">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 class="text-lg font-bold text-text mb-4 uppercase tracking-wider">{{ $t('about.mission_title') }}</h3>
            <p class="text-text-secondary text-sm leading-relaxed text-justify" v-html="$t('about.mission_desc')"></p>
          </div>

          <!-- Core Values -->
          <div class="bg-bg rounded-2xl p-8 shadow-corporate hover:shadow-corporate-hover transition-all duration-300 flex flex-col">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 class="text-lg font-bold text-text mb-4 uppercase tracking-wider">{{ $t('about.core_values_title') }}</h3>
            <p class="text-text-secondary text-sm leading-relaxed text-justify" v-html="$t('about.core_values_desc')"></p>
          </div>

        </div>
      </div>
    </section>

    <!-- Leadership Preview Section -->
    <section class="py-16 md:py-24 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="mb-12">
          <h2 class="text-2xl md:text-3xl font-display font-bold text-text uppercase">{{ $t('about.leadership_title') }}</h2>
          <p class="text-text-secondary text-sm mt-2">Hội đồng Ban Giám đốc và lãnh đạo điều hành của MHD Valuation</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div v-for="(member, index) in leadershipTeam" :key="member.id" class="bg-surface rounded-2xl overflow-hidden shadow-corporate hover:shadow-corporate-hover transition-all duration-300 flex flex-col">
            <div class="relative h-80 w-full overflow-hidden bg-bg/50 flex items-center justify-center p-2">
              <NuxtImg :src="member.photo" :alt="member.name" loading="lazy" class="w-full h-full object-contain object-bottom hover:scale-105 transition-transform duration-500" format="webp" />
            </div>
            
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-base font-bold text-text uppercase mb-1 tracking-tight">{{ member.name }}</h3>
              <p class="text-primary text-xs font-bold uppercase tracking-wider mb-3">{{ member.position }}</p>

              <div class="text-text-secondary text-xs space-y-1.5 text-left w-full mb-4 flex-1">
                <div v-for="(desc, dIndex) in (member.description ? member.description.split('\n') : [])" :key="dIndex" class="flex items-start gap-1.5">
                  <span class="text-primary mt-0.5">•</span>
                  <p class="leading-relaxed">{{ desc }}</p>
                </div>
              </div>

              <div v-if="member.experience" class="mt-auto pt-3 text-xs text-text-secondary flex justify-between items-center">
                <span>{{ $t('team.experience_label') || 'Kinh nghiệm:' }}</span>
                <span class="text-primary font-bold">{{ member.experience }}</span>
              </div>
            </div>
          </div>

        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/doi-ngu-nhan-su" class="inline-flex items-center gap-2 px-6 py-3 bg-surface text-text font-bold text-xs uppercase tracking-wider rounded-full shadow-sm hover:text-primary transition-all">
            <span>{{ $t('about.view_more_team') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-surface relative text-center">
      <div class="container mx-auto px-4 max-w-2xl">
        <h2 class="text-2xl md:text-3xl font-bold text-text mb-4">{{ $t('about.cta_title') }}</h2>
        <a href="tel:02835153516" class="inline-flex items-center gap-2.5 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg text-sm transition-colors shadow-corporate">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          <span>{{ $t('about.cta_button') }}</span>
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'
import { computed } from 'vue'
import { useI18n } from '#imports'

const { t } = useI18n()
useScrollReveal()

const { fetchPosts } = usePayload()
const { data: teamData } = await fetchPosts({ per_page: 50, sort: 'order' }, 'team')
const leadershipTeam = computed(() => {
  const team = teamData.value || []
  const sorted = [...team].sort((a, b) => (a.order || 99) - (b.order || 99))
  return sorted
    .filter(member => {
      if (!member.position) return false
      const pos = member.position.toLowerCase()
      // Exclude branch directors like "Giám đốc Chi nhánh"
      return (pos.includes('giám đốc') || pos.includes('tổng giám đốc')) && !pos.includes('chi nhánh')
    })
    .slice(0, 4)
})

useHead({
  title: computed(() => t('about.meta_title'))
})

useSeoMeta({
  title: computed(() => t('about.meta_title')),
  ogTitle: computed(() => t('about.meta_title')),
  description: computed(() => t('about.meta_desc')),
  ogDescription: computed(() => t('about.meta_desc')),
  ogImage: '/images/logo-mhd.png'
})
</script>
