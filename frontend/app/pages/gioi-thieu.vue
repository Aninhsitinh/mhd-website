<template>
  <div class="min-h-screen bg-bg text-text selection:bg-primary/20 selection:text-primary">
    <!-- 1. Hero Header Section with Dynamic Ambient Glow & Glass Breadcrumb -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#111C35] to-bg">
      <!-- Ambient Lighting Effects -->
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/20 blur-[130px] rounded-full pointer-events-none"></div>
      <div class="absolute top-1/3 -right-20 w-80 h-80 bg-accent/15 blur-[100px] rounded-full pointer-events-none"></div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <!-- Breadcrumb Pill -->
        <nav aria-label="Breadcrumb" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/80 mb-6">
          <NuxtLink :to="localePath('/')" class="hover:text-white transition-colors flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Trang chủ</span>
          </NuxtLink>
          <span class="text-white/40">/</span>
          <span class="text-accent font-semibold">{{ $t('nav.about') || 'Giới thiệu' }}</span>
        </nav>

        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-[11px] font-bold tracking-widest uppercase">
            HỒ SƠ NĂNG LỰC DOANH NGHIỆP
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display font-extrabold text-white leading-[1.2] tracking-tight mb-6">
            Kiến Tạo Giá Trị <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Minh Bạch & Chuẩn Mực</span>
          </h1>
          <p class="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Đối tác thẩm định giá độc lập, đáng tin cậy hàng đầu của các tổ chức tín dụng, tập đoàn tài chính và cộng đồng doanh nghiệp tại Việt Nam.
          </p>
        </div>
      </div>
    </section>

    <!-- 2. Company Narrative & Verified Stats (Overview) -->
    <section class="py-16 md:py-24 relative -mt-10 z-20">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Narrative (7 cols) -->
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <span class="w-8 h-[2px] bg-primary"></span>
              <span>CÂU CHUYỆN THƯƠNG HIỆU</span>
            </div>

            <h2 class="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-text leading-tight">
              {{ $t('about.company_name') }}
            </h2>

            <div class="space-y-4 text-text-secondary text-base leading-relaxed text-left">
              <p v-html="$t('about.desc_1')"></p>
              <p v-html="$t('about.desc_2')"></p>
            </div>

            <!-- Key Trust Indicators -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div class="p-4 rounded-2xl bg-surface border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <span class="text-2xl sm:text-3xl font-display font-extrabold text-primary block">100%</span>
                <span class="text-xs text-text-muted mt-1 block font-medium">Thẩm định viên Thẻ Bộ Tài Chính</span>
              </div>
              <div class="p-4 rounded-2xl bg-surface border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <span class="text-2xl sm:text-3xl font-display font-extrabold text-accent block">24h</span>
                <span class="text-xs text-text-muted mt-1 block font-medium">Khảo sát & Phản hồi sơ bộ</span>
              </div>
              <div class="p-4 rounded-2xl bg-surface border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow col-span-2 sm:col-span-1">
                <span class="text-2xl sm:text-3xl font-display font-extrabold text-primary block">IVSC</span>
                <span class="text-xs text-text-muted mt-1 block font-medium">Chuẩn mực Thẩm định Quốc tế</span>
              </div>
            </div>
          </div>

          <!-- Hero Image with Glass Card Overlay (5 cols) -->
          <div class="lg:col-span-5 relative">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 group">
              <img 
                :src="siteSettings?.teamPhotoUrl || '/images/team-photo.jpg'" 
                alt="Đội ngũ chuyên gia Thẩm định giá MHD" 
                loading="lazy" 
                class="w-full h-auto min-h-[420px] max-h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              >
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <!-- Floating Glass Badge -->
              <div class="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 text-white shadow-lg">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-accent/90 text-white flex items-center justify-center shrink-0 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold leading-tight">Đội ngũ Thẩm định viên</h3>
                    <p class="text-[11px] text-white/80 mt-0.5">Dày dặn kinh nghiệm, đạo đức nghề nghiệp chính trực</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 3. Triad Pillars: Vision, Mission & Core Values (Luxury Cards) -->
    <section class="py-20 md:py-28 bg-surface/60 border-y border-black/5 dark:border-white/5 relative">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="text-xs font-bold text-accent tracking-widest uppercase block mb-2">ĐỊNH HƯỚNG CHIẾN LƯỢC</span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-text">Tầm Nhìn, Sứ Mệnh & Giá Trị</h2>
          <p class="text-sm text-text-secondary mt-3">Kim chỉ nam soi đường cho mọi hoạt động tư vấn và phát hành chứng thư định giá tại MHD</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Vision -->
          <div class="bg-bg rounded-3xl p-8 lg:p-10 shadow-corporate hover:shadow-2xl transition-all duration-300 flex flex-col border border-black/5 dark:border-white/10 group hover:-translate-y-1.5 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
            <div class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold font-display text-text mb-4 uppercase tracking-wider group-hover:text-primary transition-colors">
              {{ $t('about.vision_title') }}
            </h3>
            <div class="text-text-secondary text-sm leading-relaxed text-left flex-1" v-html="$t('about.vision_desc')"></div>
          </div>

          <!-- Mission -->
          <div class="bg-bg rounded-3xl p-8 lg:p-10 shadow-corporate hover:shadow-2xl transition-all duration-300 flex flex-col border border-black/5 dark:border-white/10 group hover:-translate-y-1.5 relative overflow-hidden ring-1 ring-accent/20">
            <div class="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
            <div class="w-14 h-14 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold font-display text-text mb-4 uppercase tracking-wider group-hover:text-accent transition-colors">
              {{ $t('about.mission_title') }}
            </h3>
            <div class="text-text-secondary text-sm leading-relaxed text-left flex-1" v-html="$t('about.mission_desc')"></div>
          </div>

          <!-- Core Values -->
          <div class="bg-bg rounded-3xl p-8 lg:p-10 shadow-corporate hover:shadow-2xl transition-all duration-300 flex flex-col border border-black/5 dark:border-white/10 group hover:-translate-y-1.5 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
            <div class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold font-display text-text mb-4 uppercase tracking-wider group-hover:text-primary transition-colors">
              {{ $t('about.core_values_title') }}
            </h3>
            <div class="text-text-secondary text-sm leading-relaxed text-left flex-1" v-html="$t('about.core_values_desc')"></div>
          </div>

        </div>
      </div>
    </section>

    <!-- 4. Executive Leadership Section -->
    <section class="py-20 md:py-28 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span class="text-xs font-bold text-primary tracking-widest uppercase block mb-2">ĐỘI NGŨ CHUYÊN GIA ĐIỀU HÀNH</span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-text uppercase">{{ $t('about.leadership_title') }}</h2>
            <p class="text-text-secondary text-sm mt-2 max-w-xl">Hội đồng Ban Giám đốc và các thẩm định viên cao cấp dẫn dắt chuẩn mực chuyên môn tại MHD</p>
          </div>
          <NuxtLink :to="localePath('/doi-ngu-nhan-su')" class="inline-flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface-muted text-text font-bold text-xs uppercase tracking-wider rounded-full shadow-sm hover:shadow-md border border-black/5 dark:border-white/10 transition-all self-start md:self-auto group">
            <span>{{ $t('about.view_more_team') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(member) in leadershipTeam" 
            :key="member.id" 
            class="bg-surface rounded-3xl overflow-hidden shadow-corporate hover:shadow-2xl transition-all duration-500 flex flex-col group border border-black/5 dark:border-white/10 hover:-translate-y-1.5"
          >
            <!-- Member Photo with Sleek Presentation -->
            <div class="relative h-80 w-full overflow-hidden bg-gradient-to-b from-bg/40 to-bg flex items-end justify-center p-3">
              <NuxtImg 
                :src="member.photo" 
                :alt="member.name" 
                loading="lazy" 
                class="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500" 
                format="webp" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
            </div>
            
            <!-- Details -->
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-base font-bold text-text uppercase mb-1 tracking-tight group-hover:text-primary transition-colors">
                {{ member.name }}
              </h3>
              <p class="text-accent text-xs font-bold uppercase tracking-wider mb-3">
                {{ member.position }}
              </p>

              <div class="text-text-secondary text-xs space-y-1.5 text-left w-full mb-4 flex-1">
                <div v-for="(desc, dIndex) in (member.description ? member.description.split('\n') : [])" :key="dIndex" class="flex items-start gap-2">
                  <span class="text-primary mt-1 shrink-0">•</span>
                  <p class="leading-relaxed">{{ desc }}</p>
                </div>
              </div>

              <div v-if="member.experience" class="mt-auto pt-3 text-xs text-text-secondary flex justify-between items-center border-t border-black/5 dark:border-white/5">
                <span class="text-text-muted">{{ $t('team.experience_label') || 'Kinh nghiệm:' }}</span>
                <span class="text-primary font-bold">{{ member.experience }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Luxury Call to Action Banner -->
    <section class="py-20 relative overflow-hidden bg-[#0F172A] text-white">
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div class="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <span class="text-xs font-bold text-accent uppercase tracking-widest block mb-3">KẾT NỐI VỚI CHUYÊN GIA MHD</span>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold mb-4 leading-tight">
          {{ $t('about.cta_title') }}
        </h2>
        <p class="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          Đội ngũ chuyên viên thẩm định sẵn sàng đồng hành khảo sát hiện trường và tư vấn giải pháp tối ưu cho tài sản của bạn trong vòng 24 giờ.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="tel:02835153516" 
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-xl hover:shadow-amber-500/25 transform hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Hotline: (028) 3515 3516</span>
          </a>

          <NuxtLink 
            :to="localePath('/lien-he')" 
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all border border-white/15 backdrop-blur-md transform hover:-translate-y-0.5"
          >
            <span>{{ $t('about.cta_button') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'
import { computed } from 'vue'
import { useI18n, useLocalePath } from '#imports'

const { t } = useI18n()
const localePath = useLocalePath()
useScrollReveal()

const { fetchPosts, fetchGlobal } = usePayload()
const { data: siteSettings } = await fetchGlobal('site-settings')
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
