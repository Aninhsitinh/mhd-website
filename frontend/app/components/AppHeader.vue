<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 notranslate" 
    :class="{ 
      'py-3 bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl shadow-glass dark:shadow-glass-dark border-b border-black/5 dark:border-white/10': isScrolled, 
      'py-4 bg-white/65 dark:bg-slate-950/65 backdrop-blur-md border-b border-black/5 dark:border-white/5': !isScrolled 
    }"
  >
    <div class="container mx-auto px-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="flex items-center gap-3 transition-transform hover:scale-[1.02] active:scale-95 duration-200">
        <img src="~/assets/logomhd.png" alt="MHD Valuation" width="160" height="48" class="h-10 md:h-11 w-auto object-contain" />
      </NuxtLink>

      <!-- Desktop Navigation (Minimalist Frosted Bar) -->
      <nav class="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1.5 rounded-full glass-panel shrink-0">
        <template v-for="link in navLinks" :key="link.path">
          <!-- Dropdown for Services -->
          <div v-if="link.path === localePath('/linh-vuc')" class="relative group h-full">
            <NuxtLink 
              :to="link.path" 
              class="text-xs uppercase tracking-wider font-semibold text-text-secondary hover:text-primary px-3.5 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 hover:bg-black/5 dark:hover:bg-white/5 whitespace-nowrap" 
              active-class="!text-primary !bg-primary/10 font-bold"
            >
              {{ link.name }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </NuxtLink>
            
            <!-- Mega Menu Dropdown (Frosted Glass Container) -->
            <div 
              class="absolute top-full left-1/2 -translate-x-1/2 w-[620px] max-w-[calc(100vw-32px)] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 dark:border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-1 overflow-hidden z-50 mt-2"
              style="width: 620px; max-width: calc(100vw - 32px);"
            >
              <div class="grid grid-cols-2 gap-3 p-6">
                <NuxtLink :to="localePath('/linh-vuc/tham-dinh-gia-doanh-nghiep')" class="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-primary/5 dark:hover:bg-white/5 border border-transparent hover:border-primary/20 transition-all duration-200 group/item">
                  <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-text mb-0.5 group-hover/item:text-primary transition-colors">{{ $t('services.business') }}</h4>
                    <p class="text-[11px] text-text-muted line-clamp-2 leading-relaxed">{{ $t('services.business_desc') }}</p>
                  </div>
                </NuxtLink>
                
                <NuxtLink :to="localePath('/linh-vuc/tham-dinh-gia-bat-dong-san')" class="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-primary/5 dark:hover:bg-white/5 border border-transparent hover:border-primary/20 transition-all duration-200 group/item">
                  <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-text mb-0.5 group-hover/item:text-primary transition-colors">{{ $t('services.real_estate') }}</h4>
                    <p class="text-[11px] text-text-muted line-clamp-2 leading-relaxed">{{ $t('services.real_estate_desc') }}</p>
                  </div>
                </NuxtLink>
                
                <NuxtLink :to="localePath('/linh-vuc/tham-dinh-gia-dong-san')" class="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-primary/5 dark:hover:bg-white/5 border border-transparent hover:border-primary/20 transition-all duration-200 group/item">
                  <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-text mb-0.5 group-hover/item:text-primary transition-colors">{{ $t('services.movables') }}</h4>
                    <p class="text-[11px] text-text-muted line-clamp-2 leading-relaxed">{{ $t('services.movables_desc') }}</p>
                  </div>
                </NuxtLink>

                <NuxtLink :to="localePath('/linh-vuc/tham-dinh-du-an-dau-tu')" class="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-primary/5 dark:hover:bg-white/5 border border-transparent hover:border-primary/20 transition-all duration-200 group/item">
                  <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-text mb-0.5 group-hover/item:text-primary transition-colors">{{ $t('services.project') }}</h4>
                    <p class="text-[11px] text-text-muted line-clamp-2 leading-relaxed">{{ $t('services.project_desc') }}</p>
                  </div>
                </NuxtLink>

                <NuxtLink :to="localePath('/linh-vuc/tham-dinh-loi-the-thuong-mai')" class="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-primary/5 dark:hover:bg-white/5 border border-transparent hover:border-primary/20 transition-all duration-200 group/item">
                  <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-text mb-0.5 group-hover/item:text-primary transition-colors">{{ $t('services.goodwill') }}</h4>
                    <p class="text-[11px] text-text-muted line-clamp-2 leading-relaxed">{{ $t('services.goodwill_desc') }}</p>
                  </div>
                </NuxtLink>

                <NuxtLink :to="localePath('/linh-vuc/tham-dinh-tai-san-de-dinh-cu')" class="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-primary/5 dark:hover:bg-white/5 border border-transparent hover:border-primary/20 transition-all duration-200 group/item">
                  <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-text mb-0.5 group-hover/item:text-primary transition-colors">{{ $t('services.immigration') }}</h4>
                    <p class="text-[11px] text-text-muted line-clamp-2 leading-relaxed">{{ $t('services.immigration_desc') }}</p>
                  </div>
                </NuxtLink>
              </div>
              <div class="bg-primary/5 dark:bg-white/5 px-6 py-3.5 flex items-center justify-between border-t border-black/5 dark:border-white/5">
                <span class="text-xs text-text-muted">{{ $t('header.experience_tag') || 'Hơn 15 năm kinh nghiệm thẩm định toàn diện' }}</span>
                <NuxtLink :to="localePath('/linh-vuc')" class="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1 transition-colors">
                  <span>{{ $t('services.view_all') }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </NuxtLink>
              </div>
            </div>
          </div>
          
          <!-- Normal Links -->
          <NuxtLink 
            v-else 
            :to="link.path" 
            class="text-xs uppercase tracking-wider font-semibold text-text-secondary hover:text-primary px-3.5 py-2 rounded-full transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 whitespace-nowrap" 
            active-class="!text-primary !bg-primary/10 font-bold"
          >
            {{ link.name }}
          </NuxtLink>
        </template>
      </nav>

      <!-- Controls (Theme, Lang) -->
      <div class="hidden md:flex items-center gap-2.5">
        <ThemeToggle />
        
        <!-- i18n Language Switcher -->
        <button 
          @click="toggleLanguage" 
          class="flex items-center justify-center px-3.5 py-1.5 rounded-full glass-pill hover:bg-primary/10 text-text hover:text-primary transition-all text-xs font-bold min-w-[46px]"
          aria-label="Switch Language"
        >
          {{ locale === 'vi' ? 'EN' : 'VN' }}
        </button>
      </div>

      <!-- Mobile Menu Controls -->
      <div class="lg:hidden flex items-center gap-2">
        <ThemeToggle />
        
        <!-- i18n Language Switcher Mobile -->
        <button 
          @click="toggleLanguage" 
          class="flex items-center justify-center px-3 py-1.5 rounded-full glass-pill text-text hover:text-primary transition-all font-bold text-xs min-w-[46px]"
          aria-label="Switch Language Mobile"
        >
          {{ locale === 'vi' ? 'EN' : 'VN' }}
        </button>

        <!-- Mobile Menu Button -->
        <button 
          class="flex items-center justify-center w-10 h-10 rounded-full glass-pill text-text hover:text-primary transition-all active:scale-95" 
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle Navigation Menu"
        >
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer with Frosted Glass -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div 
        v-show="mobileMenuOpen" 
        class="lg:hidden absolute top-full left-3 right-3 sm:left-4 sm:right-4 mt-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-4 sm:p-5 shadow-2xl border border-white/60 dark:border-white/10 z-50 max-h-[calc(100vh-80px)] overflow-y-auto"
      >
        <nav class="flex flex-col gap-1">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path" 
            class="text-xs uppercase tracking-wider font-semibold text-text hover:text-primary px-4 py-3 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors min-h-[44px] flex items-center" 
            active-class="!text-primary !bg-primary/10 font-bold" 
            @click="mobileMenuOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
          
          <div class="pt-3 mt-2 border-t border-black/5 dark:border-white/10 flex flex-col gap-2">
            <a 
              href="tel:02835153516" 
              class="w-full py-3 rounded-full bg-primary text-white text-center text-xs font-bold uppercase tracking-wider shadow-corporate flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>Hotline: (028) 3515 3516</span>
            </a>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n, useLocalePath, useSwitchLocalePath, navigateTo } from '#imports'

const { t, locale, setLocale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const toggleLanguage = async () => {
  const targetLocale = locale.value === 'vi' ? 'en' : 'vi'
  const newPath = switchLocalePath(targetLocale)
  if (newPath) {
    await navigateTo(newPath)
  } else {
    await setLocale(targetLocale)
  }
}

const navLinks = computed(() => [
  { name: t('nav.home'), path: localePath('/') },
  { name: t('nav.about'), path: localePath('/gioi-thieu') },
  { name: t('nav.services'), path: localePath('/linh-vuc') },
  { name: t('nav.projects'), path: localePath('/du-an') },
  { name: t('nav.news'), path: localePath('/tin-tuc') },
  { name: t('nav.documents'), path: localePath('/tai-lieu') },
  { name: t('nav.careers'), path: localePath('/co-hoi-nghe-nghiep') },
  { name: t('nav.contact'), path: localePath('/lien-he') },
])

let ticking = false
const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      isScrolled.value = window.scrollY > 20
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
