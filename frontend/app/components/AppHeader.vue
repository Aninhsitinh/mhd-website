<template>
  <div class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" :class="[ isScrolled ? 'pt-2.5 pb-2' : 'pt-4 pb-3' ]">
    <!-- Center floating island container (Wider max-w-[96rem] for comfortable horizontal line layout) -->
    <div class="container mx-auto px-3 sm:px-6 max-w-[96rem]">
      <header 
        class="relative flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl sm:rounded-full transition-all duration-500"
        :class="[
          isScrolled 
            ? 'bg-white/90 dark:bg-[#0B131B]/90 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.5)]' 
            : 'bg-white/80 dark:bg-[#0B131B]/80 backdrop-blur-xl border border-slate-200/60 dark:border-white/5 shadow-sm'
        ]"
      >
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3 shrink-0 group">
          <div class="relative flex items-center">
            <img 
              src="~/assets/logomhd.png" 
              alt="MHD Valuation" 
              width="150" 
              height="44" 
              class="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
        </NuxtLink>

        <!-- Desktop Navigation: Single horizontal line, no word break -->
        <nav class="hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-4">
          <template v-for="link in navLinks" :key="link.path">
            <!-- Mega Menu Dropdown for 'Lĩnh Vực' -->
            <div v-if="link.isServices" class="relative group py-2">
              <NuxtLink 
                :to="link.path" 
                class="px-2 xl:px-3 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-normal whitespace-nowrap transition-all duration-200 flex items-center gap-1"
                :class="[
                  $route.path.startsWith('/linh-vuc') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary hover:bg-slate-100/70 dark:hover:bg-white/5'
                ]"
              >
                <span>{{ link.name }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M19 9l-7 7-7-7" />
                </svg>
              </NuxtLink>
              
              <!-- Mega Menu Floating Card -->
              <div class="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[660px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                <div class="bg-white/95 dark:bg-[#0E1720]/95 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border border-slate-200/80 dark:border-white/10 overflow-hidden">
                  <div class="flex items-center justify-between px-3 pb-3 mb-3 border-b border-slate-100 dark:border-white/5">
                    <span class="text-[11px] font-extrabold uppercase tracking-widest text-primary">DANH MỤC THẨM ĐỊNH CHUYÊN SÂU</span>
                    <span class="text-[11px] text-slate-400 font-medium">Chuẩn IVSC & Tiêu chuẩn VN</span>
                  </div>

                  <div class="grid grid-cols-2 gap-2">
                    <NuxtLink 
                      v-for="service in servicesList" 
                      :key="service.slug"
                      :to="localePath('/linh-vuc/' + service.slug)" 
                      class="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-200 group/item border border-transparent hover:border-slate-100 dark:hover:border-white/5"
                    >
                      <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 shadow-sm">
                        <component :is="service.icon" class="h-5 w-5" />
                      </div>
                      <div class="min-w-0">
                        <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover/item:text-primary transition-colors leading-snug truncate">
                          {{ service.name }}
                        </h4>
                        <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5 font-normal">
                          {{ service.desc }}
                        </p>
                      </div>
                    </NuxtLink>
                  </div>

                  <!-- Bottom Banner in Mega Menu -->
                  <div class="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between px-3">
                    <NuxtLink :to="localePath('/quy-trinh')" class="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-primary flex items-center gap-1.5 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Xem 6 bước quy trình thẩm định độc lập
                    </NuxtLink>
                    <NuxtLink :to="localePath('/linh-vuc')" class="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1 group/more transition-colors">
                      Xem tất cả lĩnh vực 
                      <span class="inline-block transform group-hover/more:translate-x-1 transition-transform">&rarr;</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- Standard Nav Link (Single-line, no break) -->
            <NuxtLink 
              v-else 
              :to="link.path" 
              class="px-2.5 xl:px-3.5 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-normal whitespace-nowrap transition-all duration-200"
              :class="[
                $route.path === link.path 
                  ? 'text-primary bg-primary/10' 
                  : 'text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary hover:bg-slate-100/70 dark:hover:bg-white/5'
              ]"
            >
              {{ link.name }}
            </NuxtLink>
          </template>
        </nav>

        <!-- Right Quick Actions: Phone, Lang, Theme & CTA -->
        <div class="flex items-center gap-1.5 sm:gap-2 xl:gap-2.5 shrink-0">
          <!-- Direct Call Hotline (Desktop) -->
          <a 
            href="tel:02835153516" 
            class="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-white/10 whitespace-nowrap transition-colors"
          >
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span>(028) 3515 3516</span>
          </a>

          <!-- Language Switcher -->
          <button 
            @click="toggleLanguage" 
            type="button"
            class="flex items-center justify-center px-3 h-10 rounded-full bg-slate-100/80 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 text-xs font-extrabold tracking-wider transition-all duration-300"
            :title="currentLocale === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'"
          >
            {{ currentLocale === 'vi' ? 'EN' : 'VN' }}
          </button>

          <!-- Theme Toggle (Dark/Light) -->
          <ThemeToggle />

          <!-- High-Conversion Primary CTA -->
          <NuxtLink 
            :to="localePath('/lien-he')" 
            class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Yêu cầu báo giá</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>

          <!-- Mobile Hamburger Toggle -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen" 
            type="button" 
            class="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-100/80 dark:bg-white/10 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-white/10 hover:bg-slate-200 transition-colors"
            aria-label="Mở menu điều hướng"
          >
            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </header>
    </div>

    <!-- Mobile Slide-out Drawer -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="lg:hidden fixed inset-x-4 top-20 max-h-[85vh] overflow-y-auto bg-white/95 dark:bg-[#0B131B]/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-slate-200/80 dark:border-white/10 z-40"
      >
        <nav class="flex flex-col gap-1.5 pb-5 border-b border-slate-100 dark:border-white/5">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            @click="isMobileMenuOpen = false"
            class="px-4 py-3 rounded-2xl text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors flex items-center justify-between"
            :class="{ '!text-primary bg-primary/5': $route.path === link.path }"
          >
            <span>{{ link.name }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </NuxtLink>
        </nav>

        <div class="pt-5 space-y-4">
          <NuxtLink 
            :to="localePath('/lien-he')" 
            @click="isMobileMenuOpen = false"
            class="w-full py-3.5 rounded-2xl bg-primary text-white text-center font-bold text-xs uppercase tracking-wider shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
          >
            <span>Gửi Yêu Cầu Thẩm Định</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </NuxtLink>

          <div class="flex items-center justify-between px-2 text-xs text-slate-500 dark:text-slate-400">
            <span>Hotline hỗ trợ:</span>
            <a href="tel:02835153516" class="font-bold text-primary">(028) 3515 3516</a>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, h } from 'vue'
import { useI18n, useLocalePath, useRoute } from '#imports'

const { locale, setLocale, t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 25
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const currentLocale = computed(() => locale.value)

const toggleLanguage = () => {
  const nextLocale = currentLocale.value === 'vi' ? 'en' : 'vi'
  setLocale(nextLocale)
}

// Navigation links
const navLinks = computed(() => [
  { name: t('nav.home') || 'Trang chủ', path: localePath('/') },
  { name: t('nav.about') || 'Giới thiệu', path: localePath('/gioi-thieu') },
  { name: t('nav.services') || 'Lĩnh vực', path: localePath('/linh-vuc'), isServices: true },
  { name: t('nav.profile') || 'Hồ sơ năng lực', path: localePath('/ho-so-nang-luc') },
  { name: t('nav.projects') || 'Dự án', path: localePath('/du-an') },
  { name: t('nav.news') || 'Tin tức', path: localePath('/tin-tuc') },
  { name: t('nav.contact') || 'Liên hệ', path: localePath('/lien-he') }
])

// Icons for Mega Menu
const BuildingIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })
])
const HomeIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })
])
const TruckIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' }),
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0' })
])
const ChartIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
])
const TrendingIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' })
])
const GlobeIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
])

const servicesList = [
  { name: 'Thẩm định Doanh nghiệp', desc: 'M&A, Cổ phần hóa, Đầu tư', slug: 'tham-dinh-gia-doanh-nghiep', icon: BuildingIcon },
  { name: 'Bất Động Sản & Dự Án', desc: 'Thế chấp, Chuyển nhượng, Thu hồi', slug: 'tham-dinh-gia-bat-dong-san', icon: HomeIcon },
  { name: 'Động Sản & Thiết Bị', desc: 'Dây chuyền máy móc, Ô tô, Tàu thuyền', slug: 'tham-dinh-gia-dong-san', icon: TruckIcon },
  { name: 'Dự Án Đầu Tư', desc: 'Phân tích hiệu quả tài chính & Rủi ro', slug: 'tham-dinh-du-an-dau-tu', icon: ChartIcon },
  { name: 'Lợi Thế Thương Mại & Vô Hình', desc: 'Thương hiệu, Bằng sáng chế, Nhượng quyền', slug: 'tham-dinh-loi-the-thuong-mai', icon: TrendingIcon },
  { name: 'Tài Sản Định Cư Quốc Tế', desc: 'Visa Mỹ EB-5, Canada, Úc, Châu Âu', slug: 'tham-dinh-tai-san-de-dinh-cu', icon: GlobeIcon }
]
</script>
