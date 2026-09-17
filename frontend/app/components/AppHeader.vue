<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="{ 'py-3 bg-bg/90 backdrop-blur-md shadow-corporate': isScrolled, 'py-5 bg-transparent': !isScrolled }">
    <div class="container mx-auto px-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="~/assets/logomhd.png" alt="MHD Valuation" width="160" height="48" class="h-11 w-auto object-contain" />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-7">
        <template v-for="link in navLinks" :key="link.path">
          <!-- Dropdown for Services -->
          <div v-if="link.path === localePath('/linh-vuc')" class="relative group h-full py-2">
            <NuxtLink :to="link.path" class="text-[13px] uppercase tracking-wider font-semibold text-text-secondary hover:text-primary transition-colors flex items-center gap-1.5" active-class="!text-primary font-bold">
              {{ link.name }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </NuxtLink>
            
            <!-- Mega Menu Dropdown -->
            <div class="absolute top-full left-1/2 -translate-x-1/2 w-[580px] bg-surface rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
              <div class="grid grid-cols-2 gap-4 p-6">
                <NuxtLink :to="localePath('/linh-vuc/tham-dinh-gia-doanh-nghiep')" class="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group/item">
                  <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <h4 class="text-text font-bold mb-1 group-hover/item:text-primary transition-colors">{{ $t('services.business') }}</h4>
                    <p class="text-xs text-text-secondary line-clamp-2">{{ $t('services.business_desc') }}</p>
                  </div>
                </NuxtLink>
                
                <NuxtLink :to="localePath('/linh-vuc/tham-dinh-gia-bat-dong-san')" class="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group/item">
                  <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <div>
                    <h4 class="text-text font-bold mb-1 group-hover/item:text-primary transition-colors">{{ $t('services.real_estate') }}</h4>
                    <p class="text-xs text-text-secondary line-clamp-2">{{ $t('services.real_estate_desc') }}</p>
                  </div>
                </NuxtLink>
                
                <NuxtLink :to="localePath('/linh-vuc/tham-dinh-gia-dong-san')" class="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group/item">
                  <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
                  </div>
                  <div>
                    <h4 class="text-text font-bold mb-1 group-hover/item:text-primary transition-colors">{{ $t('services.movables') }}</h4>
                    <p class="text-xs text-text-secondary line-clamp-2">{{ $t('services.movables_desc') }}</p>
                  </div>
                </NuxtLink>

                <NuxtLink :to="localePath('/linh-vuc/tham-dinh-du-an-dau-tu')" class="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group/item">
                  <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <div>
                    <h4 class="text-text font-bold mb-1 group-hover/item:text-primary transition-colors">{{ $t('services.project') }}</h4>
                    <p class="text-xs text-text-secondary line-clamp-2">{{ $t('services.project_desc') }}</p>
                  </div>
                </NuxtLink>

                <NuxtLink :to="localePath('/linh-vuc/tham-dinh-loi-the-thuong-mai')" class="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group/item">
                  <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <h4 class="text-text font-bold mb-1 group-hover/item:text-primary transition-colors">{{ $t('services.goodwill') }}</h4>
                    <p class="text-xs text-text-secondary line-clamp-2">{{ $t('services.goodwill_desc') }}</p>
                  </div>
                </NuxtLink>

                <NuxtLink :to="localePath('/linh-vuc/tham-dinh-tai-san-de-dinh-cu')" class="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group/item">
                  <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 class="text-text font-bold mb-1 group-hover/item:text-primary transition-colors">{{ $t('services.immigration') }}</h4>
                    <p class="text-xs text-text-secondary line-clamp-2">{{ $t('services.immigration_desc') }}</p>
                  </div>
                </NuxtLink>
              </div>
              <div class="bg-primary/5 p-4 text-center">
                <NuxtLink to="/linh-vuc" class="text-sm font-bold text-primary hover:text-primary-light transition-colors">{{ $t('services.view_all') }} &rarr;</NuxtLink>
              </div>
            </div>
          </div>
          
          <!-- Normal Links -->
          <NuxtLink v-else :to="link.path" class="text-[13px] uppercase tracking-wider font-semibold text-text-secondary hover:text-primary transition-colors py-2" active-class="!text-primary font-bold">
            {{ link.name }}
          </NuxtLink>
        </template>
      </nav>

      <!-- Controls (Theme, Lang, Contact) -->
      <div class="hidden md:flex items-center gap-3">
        <ThemeToggle />
        
        <!-- i18n Language Switcher -->
        <button @click="toggleLanguage" class="flex items-center justify-center px-3 py-1.5 rounded-full bg-surface hover:bg-primary/10 text-text hover:text-primary transition-colors text-xs font-bold min-w-[44px] shadow-sm">
          {{ locale === 'vi' ? 'EN' : 'VN' }}
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center gap-2">
        <ThemeToggle />
        
        <!-- i18n Language Switcher Mobile -->
        <button @click="toggleLanguage" class="flex items-center justify-center px-3 py-1.5 rounded-full bg-primary/5 hover:bg-primary hover:text-white text-primary transition-all duration-300 shadow-sm font-bold text-xs min-w-[50px]">
          {{ locale === 'vi' ? 'EN' : 'VN' }}
        </button>

        <!-- Mobile Menu Button with proper touch target (44x44px) -->
        <button 
          class="flex items-center justify-center w-10 h-10 rounded-full bg-primary/5 hover:bg-primary text-primary hover:text-white transition-all duration-300 shadow-sm active:scale-95" 
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

    <!-- Mobile Navigation Drawer with Backdrop -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-show="mobileMenuOpen" class="md:hidden absolute top-full left-3 right-3 sm:left-4 sm:right-4 mt-2 bg-surface/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-corporate-lg z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
        <nav class="flex flex-col gap-1">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path" 
            class="text-sm font-semibold text-text hover:text-primary px-4 py-3 rounded-xl hover:bg-primary/5 transition-colors min-h-[44px] flex items-center" 
            active-class="!text-primary bg-primary/10 font-bold" 
            @click="mobileMenuOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n, useLocalePath, useRouter } from '#imports'

const { t, locale, setLocale } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const toggleLanguage = () => {
  setLocale(locale.value === 'vi' ? 'en' : 'vi')
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
