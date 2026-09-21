<template>
  <div class="min-h-screen bg-bg">
    <!-- Corporate Header -->
    <header class="pt-32 pb-16 bg-bg">
      <div class="container mx-auto px-4 max-w-5xl">
        <nav class="text-xs text-text-muted mb-3">
          <NuxtLink to="/" class="hover:text-primary transition-colors">Trang chủ</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-text-secondary">{{ $t('nav.process') || 'Quy trình' }}</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-display font-bold text-text leading-tight uppercase">{{ $t('process.title') }}</h1>
      </div>
    </header>

    <!-- Vertical Subway Timeline Section -->
    <section class="py-20 relative bg-bg min-h-screen overflow-hidden">
      <!-- Background Ambient Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div class="container mx-auto px-4 max-w-5xl relative z-10" ref="timelineRef">
        
        <!-- The Track (Vertical Line) -->
        <div class="absolute left-[2.25rem] md:left-1/2 top-10 bottom-10 w-1 bg-border/40 -translate-x-1/2 rounded-full overflow-hidden">
          <!-- The Fill Bar (Fills up on scroll) -->
          <div 
            class="w-full bg-primary rounded-full"
            :style="{ height: `${scrollProgress}%`, transition: 'height 0.15s ease-out' }"
          ></div>
        </div>

        <!-- The Steps (Stations) -->
        <div class="flex flex-col gap-24 py-10 relative">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            class="relative w-full flex items-center"
            :class="[ index % 2 === 0 ? 'md:justify-start' : 'md:justify-end' ]"
          >
            <!-- The Station Node (Dot on the track) -->
            <div 
              class="absolute left-[2.25rem] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full transition-all duration-500 flex items-center justify-center z-20 border"
              :class="isActive(index) ? 'bg-primary text-white border-primary shadow-corporate' : 'bg-surface text-text-muted border-black/10 dark:border-white/10 shadow-sm'"
            >
              <div class="text-xs font-bold">{{ index + 1 }}</div>
            </div>

            <!-- The Content Card -->
            <div 
              class="w-full md:w-[45%] pl-20 md:pl-0 transition-all duration-1000"
              :class="[
                isActive(index) ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-16 scale-95',
                index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
              ]"
            >
              <div class="p-6 md:p-8 bg-surface rounded-2xl shadow-corporate transition-all duration-500 hover:-translate-y-1 hover:shadow-corporate-hover overflow-hidden group">
                <!-- Glowing corner effect on hover -->
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <h3 class="text-2xl md:text-3xl font-black mb-4 transition-colors duration-500 flex items-center" :class="[
                  isActive(index) ? 'text-primary' : 'text-text',
                  index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                ]">
                  <span class="opacity-30 text-xl mr-3 font-display">0{{ index + 1 }}</span>
                  {{ step.title }}
                </h3>
                <p class="text-text-secondary text-base leading-relaxed mb-6">{{ step.description }}</p>
                
                <ul class="space-y-4" :class="index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''">
                  <li v-for="(item, i) in step.details" :key="i" class="flex items-start gap-3" :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''">
                    <div class="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span class="text-text text-sm font-medium leading-relaxed">{{ item }}</span>
                  </li>
                </ul>

                <!-- Embedded Small Image for context -->
                <div class="mt-8 rounded-2xl overflow-hidden h-32 md:h-48 w-full relative">
                  <img :src="step.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" :alt="step.title" />
                  <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-bg text-center reveal-on-scroll">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="text-3xl font-bold text-text mb-6">{{ $t('process.cta_title') }}</h2>
        <p class="text-text-secondary mb-10 text-lg">{{ $t('process.cta_desc') }}</p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/lien-he" class="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-primary/30">{{ $t('process.cta_button') }}</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { useI18n } from '#imports'

const { t } = useI18n()
useScrollReveal()

useHead({
  title: computed(() => t('process.meta_title'))
})

useSeoMeta({
  title: computed(() => t('process.meta_title')),
  ogTitle: computed(() => t('process.meta_title')),
  description: computed(() => t('process.meta_desc')),
  ogDescription: computed(() => t('process.meta_desc')),
  ogImage: '/images/logo-mhd.png'
})

const scrollProgress = ref(0)
const timelineRef = ref(null)

const handleScroll = () => {
  if (!timelineRef.value) return
  const rect = timelineRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  
  // Start tracking when top of timeline hits middle of screen
  const startOffset = rect.top - (windowHeight * 0.6)
  // Distance to cover (height of the timeline itself)
  const maxDistance = rect.height
  
  if (startOffset > 0) {
    scrollProgress.value = 0
  } else if (-startOffset > maxDistance) {
    scrollProgress.value = 100
  } else {
    scrollProgress.value = (-startOffset / maxDistance) * 100
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const isActive = (index) => {
  if (!steps.value || steps.value.length === 0) return false
  const threshold = (index / (steps.value.length - 1)) * 100 - 15 // Trigger slightly earlier than exact percentage
  return scrollProgress.value >= threshold
}

const steps = computed(() => [
  {
    title: t('process.steps.step_1.title'),
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    description: t('process.steps.step_1.description'),
    details: [
      t('process.steps.step_1.details[0]'),
      t('process.steps.step_1.details[1]'),
      t('process.steps.step_1.details[2]'),
      t('process.steps.step_1.details[3]'),
      t('process.steps.step_1.details[4]')
    ]
  },
  {
    title: t('process.steps.step_2.title'),
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    description: t('process.steps.step_2.description'),
    details: [
      t('process.steps.step_2.details[0]'),
      t('process.steps.step_2.details[1]'),
      t('process.steps.step_2.details[2]'),
      t('process.steps.step_2.details[3]'),
      t('process.steps.step_2.details[4]')
    ]
  },
  {
    title: t('process.steps.step_3.title'),
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    description: t('process.steps.step_3.description'),
    details: [
      t('process.steps.step_3.details[0]'),
      t('process.steps.step_3.details[1]'),
      t('process.steps.step_3.details[2]'),
      t('process.steps.step_3.details[3]')
    ]
  },
  {
    title: t('process.steps.step_4.title'),
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    description: t('process.steps.step_4.description'),
    details: [
      t('process.steps.step_4.details[0]'),
      t('process.steps.step_4.details[1]'),
      t('process.steps.step_4.details[2]'),
      t('process.steps.step_4.details[3]')
    ]
  },
  {
    title: t('process.steps.step_5.title'),
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    description: t('process.steps.step_5.description'),
    details: [
      t('process.steps.step_5.details[0]'),
      t('process.steps.step_5.details[1]'),
      t('process.steps.step_5.details[2]'),
      t('process.steps.step_5.details[3]')
    ]
  }
])
</script>
