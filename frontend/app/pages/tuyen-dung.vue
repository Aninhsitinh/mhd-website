<template>
  <div class="min-h-screen bg-bg">
    <!-- Corporate Header -->
    <header class="pt-32 pb-16 bg-bg">
      <div class="container mx-auto px-4 max-w-6xl">
        <nav class="text-xs text-text-muted mb-3 flex items-center gap-2">
          <NuxtLink :to="localePath('/')" class="hover:text-primary transition-colors">{{ $t('nav.home') }}</NuxtLink>
          <span>/</span>
          <span class="text-text-secondary">{{ $t('nav.careers') || 'Tuyển dụng' }}</span>
        </nav>
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h1 class="text-3xl md:text-4xl font-display font-bold text-text leading-tight uppercase">{{ $t('careers.title') }}</h1>
            <p class="text-text-secondary max-w-xl mt-3 text-base leading-relaxed">{{ $t('careers.subtitle') }}</p>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <NuxtLink :to="localePath('/tuyen-dung')" class="px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-corporate transition-all">{{ $t('careers.nav_submit') }}</NuxtLink>
            <NuxtLink :to="localePath('/co-hoi-nghe-nghiep')" class="px-5 py-2.5 rounded-full bg-surface text-text hover:text-primary shadow-sm hover:shadow-corporate transition-all text-xs font-bold uppercase tracking-wider">{{ $t('careers.nav_opportunities') }}</NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Why Choose MHD Section -->
    <section class="py-12 md:py-20 bg-bg">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary uppercase">{{ $t('careers.why_choose_us.title') }}</h2>
        </div>

        <div class="space-y-24">
          <!-- Feature 1 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 space-y-6">
              <h3 class="text-2xl font-bold text-text">{{ $t('careers.why_choose_us.f1_title') }}</h3>
              <p class="text-text-secondary leading-relaxed text-lg" v-html="$t('careers.why_choose_us.f1_desc')"></p>
            </div>
            <div class="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl relative group">
              <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
              <img src="/images/ui/workplace-1.jpg" alt="Môi trường làm việc" loading="lazy" class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700">
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="rounded-2xl overflow-hidden shadow-2xl relative group">
              <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
              <img src="/images/ui/workplace-2.jpeg" alt="Lương thưởng" loading="lazy" class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700">
            </div>
            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-text">{{ $t('careers.why_choose_us.f2_title') }}</h3>
              <p class="text-text-secondary leading-relaxed text-lg" v-html="$t('careers.why_choose_us.f2_desc')"></p>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 space-y-6">
              <h3 class="text-2xl font-bold text-text">{{ $t('careers.why_choose_us.f3_title') }}</h3>
              <p class="text-text-secondary leading-relaxed text-lg" v-html="$t('careers.why_choose_us.f3_desc')"></p>
            </div>
            <div class="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl relative group">
              <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
              <img src="/images/ui/workplace-3.jpg" alt="Đào tạo" loading="lazy" class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-12 md:py-20 bg-bg ">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary uppercase">{{ $t('careers.benefits.title') }}</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(benefit, index) in benefits" :key="index" class="bg-surface rounded-2xl p-8 shadow-corporate hover:shadow-corporate-hover transition-all duration-300 group flex flex-col items-center text-center">
            <div class="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all">
              <component :is="benefit.icon" class="w-8 h-8 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 class="text-lg font-bold text-text mb-3 uppercase tracking-wider">{{ benefit.title }}</h3>
            <p class="text-text-secondary leading-relaxed text-sm">{{ benefit.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 md:py-24 bg-primary/5 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('/images/ui/pattern-bg.png')] opacity-10 bg-cover bg-center"></div>
      <div class="container mx-auto px-4 relative z-10 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight max-w-3xl mx-auto">
          {{ $t('careers.cta.title') }}
        </h2>
        <a href="tel:02835153516" class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full text-base md:text-lg hover:bg-primary-hover transition-all shadow-corporate-lg hover:shadow-corporate-hover transform hover:-translate-y-0.5">
          <span>{{ $t('careers.cta.button') }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  GiftIcon, 
  HeartIcon, 
  UserGroupIcon, 
  AcademicCapIcon, 
  CalendarDaysIcon, 
  SparklesIcon 
} from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import { useI18n, useLocalePath } from '#imports'

const { t, tm } = useI18n()
const localePath = useLocalePath()

const benefitIcons = [GiftIcon, HeartIcon, UserGroupIcon, AcademicCapIcon, CalendarDaysIcon, SparklesIcon]

const benefits = computed(() => {
  const items = tm('careers.benefits.items') || []
  return items.map((item, index) => ({
    ...item,
    icon: benefitIcons[index]
  }))
})

useHead({
  title: computed(() => t('careers.meta_title'))
})

useSeoMeta({
  title: computed(() => t('careers.meta_title')),
  ogTitle: computed(() => t('careers.meta_title')),
  description: computed(() => t('careers.meta_desc')),
  ogDescription: computed(() => t('careers.meta_desc')),
  ogImage: '/images/logo-mhd.png'
})
</script>
