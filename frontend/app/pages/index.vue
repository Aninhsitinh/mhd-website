<template>
  <div>
    <!-- Section 1: Hero Section (Panoramic Full Banner View) -->
    <section class="relative min-h-[85vh] lg:min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0D1518]">
      <!-- Full-bleed background image with clear right-side exposure -->
      <div class="absolute inset-0 w-full h-full">
        <NuxtImg 
          :src="siteSettings?.heroBannerUrl || '/images/hero-office.png'" 
          alt="MHD Office Landmark Background" 
          class="w-full h-full object-cover object-[70%_center] sm:object-[65%_center] lg:object-right-center" 
          format="webp" 
        />
        <!-- Elegant directional gradient: Darker on left for crisp readable text, transparent on right to showcase full skyscraper & sunset sky -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#0D1518]/95 via-[#0D1518]/70 sm:via-[#0D1518]/50 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#0D1518]/80 via-transparent to-[#0D1518]/30"></div>
      </div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left Text Content (7 cols) -->
          <div class="lg:col-span-7">
            <div class="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-[11px] font-semibold tracking-wide uppercase border border-white/15">
              {{ $t('home.hero_qualification') }}
            </div>
            
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] font-display font-extrabold text-white leading-[1.3] sm:leading-[1.35] lg:leading-[1.35] tracking-tight mb-5 drop-shadow-md">
              {{ $t('home.hero_heading_1') }}<br class="hidden sm:inline">
              <span class="text-primary">{{ $t('home.hero_heading_2') }}</span>
            </h1>
            
            <p class="text-sm sm:text-base text-white/90 mb-7 leading-relaxed max-w-xl font-normal drop-shadow">
              {{ $t('home.hero_sub') }}
            </p>
            
            <div class="flex flex-col sm:flex-row items-center gap-3.5 w-full">
              <NuxtLink :to="localePath('/lien-he')" class="w-full sm:w-auto px-7 py-3.5 text-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-corporate hover:shadow-corporate-glow transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2">
                <span>{{ $t('home.hero_cta_valuation') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>
              <NuxtLink :to="localePath('/ho-so-nang-luc')" class="w-full sm:w-auto px-6 py-3.5 text-center justify-center bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all transform hover:-translate-y-0.5 border border-white/15">
                {{ $t('home.hero_cta_profile') }}
              </NuxtLink>
            </div>
          </div>

          <!-- Right Floating Stats Card (5 cols) - Frosted Glass Executive Tile -->
          <div class="lg:col-span-5 w-full">
            <div class="glass-card bg-white/90 dark:bg-slate-900/85 backdrop-blur-2xl rounded-3xl p-7 sm:p-8 shadow-2xl space-y-6 w-full border border-white/80 dark:border-white/10">
              <div class="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/10">
                <span class="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  {{ $t('home.hero_stats_title') }}
                </span>
                <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">{{ $t('home.hero_stats_period') }}</span>
              </div>
              
              <div class="grid grid-cols-3 gap-2.5 sm:gap-3">
                <div class="p-3 sm:p-3.5 rounded-2xl bg-slate-50/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-center sm:text-left transition-all hover:border-primary/30">
                  <p class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white font-display mb-0.5">5.000<span class="text-sm sm:text-base font-bold text-primary">+</span></p>
                  <p class="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-300 uppercase tracking-wider font-semibold leading-tight">{{ $t('home.hero_stat_reports') }}</p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-slate-50/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-center sm:text-left transition-all hover:border-primary/30">
                  <p class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white font-display mb-0.5">60<span class="text-sm sm:text-base font-bold text-primary">+</span></p>
                  <p class="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-300 uppercase tracking-wider font-semibold leading-tight">{{ $t('home.hero_stat_appraisers') }}</p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-2xl bg-slate-50/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-center sm:text-left transition-all hover:border-primary/30">
                  <p class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white font-display mb-0.5">100<span class="text-sm sm:text-base font-bold text-primary">%</span></p>
                  <p class="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-300 uppercase tracking-wider font-semibold leading-tight">{{ $t('home.hero_stat_legal') }}</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                <div class="w-5 h-5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {{ $t('home.hero_compliance_note') }} <span class="text-primary dark:text-amber-400 font-semibold">TT 30-36/2024/TT-BTC</span>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Section 2: The Trust & Regulatory Engine (Frosted Glass Bento Grid) -->
    <section class="py-20 md:py-28 bg-surface notranslate relative overflow-hidden">
      <!-- Ambient Diffused Glow for Glass Depth -->
      <div class="ambient-glow-container">
        <div class="ambient-orb ambient-orb-orange w-96 h-96 -top-20 -left-20"></div>
        <div class="ambient-orb ambient-orb-navy w-[520px] h-[520px] -bottom-24 -right-20"></div>
      </div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        
        <!-- Section Header (Centered Clean Layout) -->
        <div class="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
          <span class="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-3.5">
            {{ $t('home.trust_badge') }}
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hero leading-tight mb-4">
            {{ $t('home.trust_title') }}
          </h2>
          <p class="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {{ $t('home.trust_sub') }}
          </p>
        </div>

        <!-- 4-Pillar Balanced 2x2 Grid (Frosted Glass Cards) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 lg:gap-8 reveal-on-scroll">
          
          <!-- Pillar Item 1: Legal Accreditation & Ministry of Finance -->
          <div class="glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group border border-white/60 dark:border-white/10 relative overflow-hidden">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span class="text-xs font-semibold uppercase tracking-wider text-text-muted">{{ $t('home.pillar_1_badge') }}</span>
              </div>

              <h3 class="text-xl sm:text-2xl font-bold font-display text-text group-hover:text-primary transition-colors mb-2.5">
                {{ $t('home.pillar_1_title') }}
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                {{ $t('home.pillar_1_desc') }}
              </p>

              <!-- Standard Badges -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-2">
                <div class="p-3 rounded-2xl glass-pill text-left">
                  <span class="text-xs font-bold text-primary block uppercase">{{ $t('home.pillar_1_std1') }}</span>
                  <span class="text-xs font-bold text-text mt-0.5 block">TT 30/2024/TT-BTC</span>
                  <span class="text-[11px] text-text-muted">{{ $t('home.pillar_1_std1_sub') }}</span>
                </div>
                <div class="p-3 rounded-2xl glass-pill text-left">
                  <span class="text-xs font-bold text-primary block uppercase">{{ $t('home.pillar_1_std2') }}</span>
                  <span class="text-xs font-bold text-text mt-0.5 block">TT 31/2024/TT-BTC</span>
                  <span class="text-[11px] text-text-muted">{{ $t('home.pillar_1_std2_sub') }}</span>
                </div>
                <div class="p-3 rounded-2xl glass-pill text-left">
                  <span class="text-xs font-bold text-primary block uppercase">{{ $t('home.pillar_1_std3') }}</span>
                  <span class="text-xs font-bold text-text mt-0.5 block">TT 36/2024/TT-BTC</span>
                  <span class="text-[11px] text-text-muted">{{ $t('home.pillar_1_std3_sub') }}</span>
                </div>
              </div>
            </div>

            <div class="pt-5 mt-5 flex items-center justify-between border-t border-black/5 dark:border-white/10">
              <span class="text-xs text-text-muted font-medium">ĐKDN: 0312231570</span>
              <NuxtLink :to="localePath('/ho-so-phap-ly')" class="text-primary font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                {{ $t('home.pillar_view_legal') }}
              </NuxtLink>
            </div>
          </div>

          <!-- Pillar Item 2: Certified Appraisers -->
          <div class="glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group border border-white/60 dark:border-white/10 relative overflow-hidden">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span class="text-xs font-semibold uppercase tracking-wider text-text-muted">{{ $t('home.pillar_2_badge') }}</span>
              </div>

              <h3 class="text-xl sm:text-2xl font-bold font-display text-text group-hover:text-primary transition-colors mb-2.5">
                {{ $t('home.pillar_2_title') }}
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                {{ $t('home.pillar_2_desc') }}
              </p>

              <!-- Key metric highlight -->
              <div class="p-4 sm:p-5 rounded-2xl glass-pill flex items-center justify-between">
                <div>
                  <p class="text-2xl sm:text-3xl font-bold font-display text-primary">60<span class="text-base font-bold">+</span></p>
                  <p class="text-xs text-text-secondary font-medium uppercase tracking-wider mt-0.5">{{ $t('home.pillar_2_stat1_label') }}</p>
                </div>
                <div class="text-right">
                  <p class="text-2xl sm:text-3xl font-bold font-display text-text">15<span class="text-base font-bold">+</span></p>
                  <p class="text-xs text-text-secondary font-medium uppercase tracking-wider mt-0.5">{{ $t('home.pillar_2_stat2_label') }}</p>
                </div>
              </div>
            </div>

            <div class="pt-5 mt-5 flex items-center justify-between border-t border-black/5 dark:border-white/10">
              <span class="text-xs text-text-muted">{{ $t('home.pillar_2_footer_note') }}</span>
              <NuxtLink :to="localePath('/doi-ngu-nhan-su')" class="text-primary font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                {{ $t('home.pillar_view_team') }}
              </NuxtLink>
            </div>
          </div>

          <!-- Pillar Item 3: Nationwide Network & 24h Field Survey -->
          <div class="glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group border border-white/60 dark:border-white/10 relative overflow-hidden">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span class="text-xs font-semibold uppercase tracking-wider text-text-muted">{{ $t('home.pillar_3_badge') }}</span>
              </div>

              <h3 class="text-xl sm:text-2xl font-bold font-display text-text group-hover:text-primary transition-colors mb-2.5">
                {{ $t('home.pillar_3_title') }}
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                {{ $t('home.pillar_3_desc') }}
              </p>

              <!-- Branch & Speed Pill -->
              <div class="p-4 sm:p-5 rounded-2xl glass-pill flex items-center justify-between">
                <div>
                  <p class="text-2xl sm:text-3xl font-bold font-display text-primary">13</p>
                  <p class="text-xs text-text-secondary font-medium uppercase tracking-wider mt-0.5">{{ $t('home.pillar_3_stat1_label') }}</p>
                </div>
                <div class="text-right">
                  <p class="text-2xl sm:text-3xl font-bold font-display text-text">24h</p>
                  <p class="text-xs text-text-secondary font-medium uppercase tracking-wider mt-0.5">{{ $t('home.pillar_3_stat2_label') }}</p>
                </div>
              </div>
            </div>

            <div class="pt-5 mt-5 flex items-center justify-between border-t border-black/5 dark:border-white/10">
              <span class="text-xs text-text-muted">{{ $t('home.pillar_3_footer_note') }}</span>
              <NuxtLink :to="localePath('/lien-he')" class="text-primary font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                {{ $t('home.pillar_view_branches') }}
              </NuxtLink>
            </div>
          </div>

          <!-- Pillar Item 4: Digital Verification & Independent Pricing -->
          <div class="glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group border border-white/60 dark:border-white/10 relative overflow-hidden">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <span class="text-xs font-semibold uppercase tracking-wider text-text-muted">{{ $t('home.pillar_4_badge') }}</span>
              </div>

              <h3 class="text-xl sm:text-2xl font-bold font-display text-text group-hover:text-primary transition-colors mb-2.5">
                {{ $t('home.pillar_4_title') }}
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                {{ $t('home.pillar_4_desc') }}
              </p>

              <!-- 3 Proof points -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-2">
                <div class="p-3 rounded-2xl glass-pill text-left">
                  <span class="text-[11px] font-bold text-primary block uppercase">{{ $t('home.pillar_4_point1_tag') }}</span>
                  <span class="text-xs font-bold text-text mt-0.5 block">{{ $t('home.pillar_4_point1_title') }}</span>
                  <span class="text-[10px] text-text-muted">{{ $t('home.pillar_4_point1_sub') }}</span>
                </div>
                <div class="p-3 rounded-2xl glass-pill text-left">
                  <span class="text-[11px] font-bold text-primary block uppercase">{{ $t('home.pillar_4_point2_tag') }}</span>
                  <span class="text-xs font-bold text-text mt-0.5 block">{{ $t('home.pillar_4_point2_title') }}</span>
                  <span class="text-[10px] text-text-muted">{{ $t('home.pillar_4_point2_sub') }}</span>
                </div>
                <div class="p-3 rounded-2xl glass-pill text-left">
                  <span class="text-[11px] font-bold text-primary block uppercase">{{ $t('home.pillar_4_point3_tag') }}</span>
                  <span class="text-xs font-bold text-text mt-0.5 block">{{ $t('home.pillar_4_point3_title') }}</span>
                  <span class="text-[10px] text-text-muted">{{ $t('home.pillar_4_point3_sub') }}</span>
                </div>
              </div>
            </div>

            <div class="pt-5 mt-5 flex items-center justify-between border-t border-black/5 dark:border-white/10">
              <span class="text-xs text-text-muted">{{ $t('home.pillar_4_footer_note') }}</span>
              <NuxtLink :to="localePath('/ho-so-phap-ly')" class="text-primary font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                {{ $t('home.pillar_view_legal_search') }}
              </NuxtLink>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Section 3: Interactive Valuation Terminal (Frosted Glass Dynamic Experience) -->
    <section class="py-20 md:py-28 bg-bg relative notranslate overflow-hidden">
      <!-- Ambient Diffused Glow for Terminal Refraction -->
      <div class="ambient-glow-container">
        <div class="ambient-orb ambient-orb-navy w-[580px] h-[580px] top-1/4 -left-36"></div>
        <div class="ambient-orb ambient-orb-orange w-80 h-80 -bottom-10 right-10"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10 max-w-7xl">
        <div class="text-center max-w-3xl mx-auto mb-10 reveal-on-scroll">
          <span class="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-3.5">
            {{ $t('home.services_terminal_badge') }}
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hero leading-tight mb-4">
            {{ $t('home.services_terminal_title') }}
          </h2>
          <p class="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {{ $t('home.services_terminal_sub') }}
          </p>
        </div>

        <!-- Service Tab Selector (Frosted Glass Pills) -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:flex md:items-center md:justify-center gap-2 md:gap-2.5 mb-6 md:mb-10 reveal-on-scroll">
          <button
            v-for="(service, idx) in services"
            :key="idx"
            @click="activeTerminalIndex = idx"
            class="w-full md:w-auto px-3.5 sm:px-4 md:px-5 py-2.5 md:py-3 rounded-2xl md:rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center justify-start md:justify-center gap-2 text-left md:text-center min-h-[46px] md:min-h-0"
            :class="activeTerminalIndex === idx ? 'bg-primary text-white shadow-corporate border border-primary scale-[1.02]' : 'glass-pill text-text-secondary hover:text-text'"
          >
            <!-- SVG Icon dynamically matching each asset type -->
            <span class="shrink-0 w-4 h-4 flex items-center justify-center">
              <svg v-if="service.icon === 'home'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <svg v-else-if="service.icon === 'truck'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <svg v-else-if="service.icon === 'chart'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <svg v-else-if="service.icon === 'building'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <svg v-else-if="service.icon === 'star'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </span>
            <span class="leading-tight line-clamp-2 md:line-clamp-none">{{ service.title }}</span>
          </button>
        </div>

        <!-- Active Service Showcase Card (Frosted Glass Container) -->
        <div 
          class="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl reveal-on-scroll relative overflow-hidden transition-all duration-300 border border-white/60 dark:border-white/10"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <!-- Left: High-Res Asset Media & Visual Indicator (6 cols) -->
            <div class="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-glass group border border-white/30 dark:border-white/10">
              <img 
                :src="services[activeTerminalIndex].image" 
                :alt="services[activeTerminalIndex].title" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
              
              <div class="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span class="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm">
                  {{ $t('home.terminal_prefix') }} 0{{ activeTerminalIndex + 1 }} / 06
                </span>

                <!-- Quick Step Navigation for Mobile Thumb Control -->
                <div class="flex items-center gap-1.5 md:hidden">
                  <button 
                    @click.stop="prevTerminal"
                    class="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary active:scale-95 transition-all shadow-sm"
                    :aria-label="$t('home.terminal_prev')"
                  >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    @click.stop="nextTerminal"
                    class="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary active:scale-95 transition-all shadow-sm"
                    :aria-label="$t('home.terminal_next')"
                  >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 text-white">
                <span class="text-xs text-primary-light font-semibold uppercase tracking-wider block mb-1">{{ $t('home.terminal_standard_applied') }}</span>
                <h3 class="text-xl sm:text-2xl md:text-3xl font-bold font-display text-white">
                  {{ services[activeTerminalIndex].title }}
                </h3>
              </div>
            </div>

            <!-- Right: Methodology, Specs & Action (6 cols) -->
            <div class="lg:col-span-6 flex flex-col justify-between space-y-5">
              <div>
                <span class="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3.5">
                  {{ $t('home.terminal_standards_tag') }}
                </span>

                <p class="text-sm md:text-base text-text-secondary leading-relaxed mb-5">
                  {{ services[activeTerminalIndex].description }}
                </p>

                <!-- Technical Specs Breakdown -->
                <div class="grid grid-cols-2 gap-3.5 pt-1">
                  <div class="p-4 rounded-2xl glass-pill text-left">
                    <span class="text-xs text-text-muted uppercase tracking-wider block">{{ $t('home.terminal_method_label') }}</span>
                    <span class="text-sm font-bold font-display text-text mt-1 block leading-snug">
                      {{ terminalSpecs[activeTerminalIndex].method }}
                    </span>
                  </div>
                  <div class="p-4 rounded-2xl glass-pill text-left">
                    <span class="text-xs text-text-muted uppercase tracking-wider block">{{ $t('home.terminal_turnaround_label') }}</span>
                    <span class="text-sm font-bold font-display text-primary mt-1 block leading-snug">
                      {{ terminalSpecs[activeTerminalIndex].turnaround }}
                    </span>
                  </div>
                </div>

                <div class="mt-3.5 p-3.5 rounded-2xl glass-pill flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
                  <span class="text-xs text-text-muted shrink-0">{{ $t('home.terminal_audience_label') }}</span>
                  <span class="text-xs font-semibold text-text">{{ terminalSpecs[activeTerminalIndex].audience }}</span>
                </div>
              </div>

              <!-- Direct CTA Actions -->
              <div class="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                <NuxtLink 
                  :to="localePath(services[activeTerminalIndex].link)" 
                  class="w-full sm:w-auto px-7 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-corporate hover:shadow-corporate-glow transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>{{ $t('home.terminal_detail_btn') }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </NuxtLink>

                <NuxtLink 
                  :to="localePath('/lien-he')" 
                  class="w-full sm:w-auto px-6 py-3.5 glass-pill hover:bg-white/90 dark:hover:bg-white/10 text-text text-xs font-bold uppercase tracking-wider rounded-full transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>{{ $t('home.terminal_submit_btn') }}</span>
                </NuxtLink>
              </div>

              <!-- Mobile Dots Indicator -->
              <div class="flex items-center justify-center gap-1.5 pt-2 md:hidden">
                <button 
                  v-for="(_, dotIdx) in services" 
                  :key="dotIdx"
                  @click="activeTerminalIndex = dotIdx"
                  class="h-1.5 rounded-full transition-all duration-300"
                  :class="activeTerminalIndex === dotIdx ? 'w-6 bg-primary' : 'w-1.5 bg-text-muted/30 hover:bg-text-muted/60'"
                  :aria-label="`0${dotIdx + 1}`"
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- Section 4: Featured Valuation Projects (Dự án thẩm định tiêu biểu) -->
    <section class="py-20 md:py-28 bg-surface">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
          <div class="max-w-3xl">
            <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-4">
              {{ $t('home.featured_projects_badge') }}
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hero leading-tight mb-4">
              {{ $t('home.featured_projects_title') }}
            </h2>
            <p class="text-text-secondary text-sm md:text-base leading-relaxed">
              {{ $t('home.featured_projects_desc') }}
            </p>
          </div>
          <NuxtLink :to="localePath('/du-an')" class="inline-flex items-center gap-2 px-6 py-3.5 bg-bg text-primary hover:bg-primary hover:text-white rounded-full font-bold shadow-corporate hover:shadow-corporate-hover transition-all group shrink-0 text-xs uppercase tracking-wider mb-1 border border-black/5 dark:border-white/5">
            <span>{{ $t('home.featured_projects_all') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>

        <!-- 4 Featured Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProjectCard 
            v-for="(project, index) in featuredProjects" 
            :key="project.id" 
            :project="project" 
            class="reveal-on-scroll" 
            :class="`delay-${index * 100}`" 
          />
        </div>
      </div>
    </section>

    <!-- Section 5: Nationwide Network (Mạng lưới hoạt động toàn quốc) -->
    <section class="py-20 md:py-28 bg-bg relative overflow-hidden">
      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        
        <!-- Operations Header -->
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 reveal-on-scroll">
          <div class="max-w-2xl">
            <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-4">
              {{ $t('home.network_badge') }}
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hero leading-tight mb-4">
              {{ $t('home.network_title') }}
            </h2>
            <p class="text-text-secondary text-sm md:text-base leading-relaxed">
              {{ $t('home.network_desc') }}
            </p>
          </div>

          <!-- Institutional Trust Indicators (Frosted Glass Island) -->
          <div class="grid grid-cols-3 gap-3.5 glass-card p-4 md:p-6 rounded-3xl shadow-xl shrink-0 lg:mb-1 border border-white/60 dark:border-white/10">
            <div class="text-center px-4 py-1">
              <p class="text-3xl lg:text-4xl font-bold font-display text-primary">13</p>
              <p class="text-xs text-text-muted mt-1 font-semibold uppercase tracking-wider">{{ $t('home.network_branches') }}</p>
            </div>
            <div class="text-center px-4 glass-pill rounded-2xl py-2">
              <p class="text-3xl lg:text-4xl font-bold font-display text-text">24h</p>
              <p class="text-xs text-text-muted mt-1 font-semibold uppercase tracking-wider">{{ $t('home.network_response') }}</p>
            </div>
            <div class="text-center px-4 py-1">
              <p class="text-3xl lg:text-4xl font-bold font-display text-primary">63</p>
              <p class="text-xs text-text-muted mt-1 font-semibold uppercase tracking-wider">{{ $t('home.network_provinces') }}</p>
            </div>
          </div>
        </div>

        <!-- 3D Map Component Container (Seamless background) -->
        <div class="w-full relative overflow-hidden reveal-on-scroll">
          <ClientOnly>
            <LazyVietnamMapEcharts />
            <template #fallback>
              <div class="w-full h-[600px] flex items-center justify-center">
                <div class="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            </template>
          </ClientOnly>
        </div>

      </div>
    </section>

    <!-- Section 6: Institutional Bank Gateway & Verification Portal (Frosted Glass Hub) -->
    <section class="py-20 md:py-28 bg-surface relative notranslate overflow-hidden">
      <!-- Ambient Diffused Glow -->
      <div class="ambient-glow-container">
        <div class="ambient-orb ambient-orb-navy w-[500px] h-[500px] top-10 -right-20"></div>
        <div class="ambient-orb ambient-orb-orange w-80 h-80 -bottom-10 left-10"></div>
      </div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
          <div class="max-w-3xl">
            <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-4">
              {{ $t('home.b2b_header_badge') }}
            </span>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-hero leading-tight mb-3">
              {{ $t('home.b2b_header_title') }}
            </h2>
            <p class="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl">
              {{ $t('home.b2b_header_desc') }}
            </p>
          </div>
          <div class="shrink-0 mb-1">
            <NuxtLink :to="localePath('/ho-so-nang-luc')" class="inline-flex items-center gap-2 px-6 py-3.5 glass-pill hover:bg-primary hover:text-white rounded-full font-bold transition-all text-xs uppercase tracking-wider group text-primary">
              <span>{{ $t('home.b2b_portal_btn') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll">
          <!-- B2B Card 1: Due Diligence Dossier -->
          <div class="glass-card p-8 rounded-3xl flex flex-col h-full group border border-white/60 dark:border-white/10 relative overflow-hidden">
            <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span class="text-xs text-text-muted font-semibold tracking-wider uppercase mb-2">{{ $t('home.b2b_card1_tag') }}</span>
            <h3 class="text-lg font-bold font-display text-text group-hover:text-primary transition-colors mb-2">{{ $t('home.b2b_card1_title') }}</h3>
            <p class="text-xs text-text-secondary mb-6 flex-grow leading-relaxed">
              {{ $t('home.b2b_card1_desc') }}
            </p>
            <NuxtLink :to="localePath('/ho-so-nang-luc')" class="inline-flex items-center text-primary font-bold text-xs uppercase tracking-wider hover:underline mt-auto gap-1">
              {{ $t('home.b2b_card1_link') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>

          <!-- B2B Card 2: QR Validation -->
          <div class="glass-card p-8 rounded-3xl flex flex-col h-full group border border-white/60 dark:border-white/10 relative overflow-hidden">
            <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <span class="text-xs text-text-muted font-semibold tracking-wider uppercase mb-2">{{ $t('home.b2b_card2_tag') }}</span>
            <h3 class="text-lg font-bold font-display text-text group-hover:text-primary transition-colors mb-2">{{ $t('home.b2b_card2_title') }}</h3>
            <p class="text-xs text-text-secondary mb-6 flex-grow leading-relaxed">
              {{ $t('home.b2b_card2_desc') }}
            </p>
            <NuxtLink :to="localePath('/ho-so-phap-ly')" class="inline-flex items-center text-primary font-bold text-xs uppercase tracking-wider hover:underline mt-auto gap-1">
              {{ $t('home.b2b_card2_link') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>

          <!-- B2B Card 3: Enterprise Project Tracking -->
          <div class="glass-card p-8 rounded-3xl flex flex-col h-full group border border-white/60 dark:border-white/10 relative overflow-hidden">
            <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span class="text-xs text-text-muted font-semibold tracking-wider uppercase mb-2">{{ $t('home.b2b_card3_tag') }}</span>
            <h3 class="text-lg font-bold font-display text-text group-hover:text-primary transition-colors mb-2">{{ $t('home.b2b_card3_title') }}</h3>
            <p class="text-xs text-text-secondary mb-6 flex-grow leading-relaxed">
              {{ $t('home.b2b_card3_desc') }}
            </p>
            <NuxtLink :to="localePath('/lien-he')" class="inline-flex items-center text-primary font-bold text-xs uppercase tracking-wider hover:underline mt-auto gap-1">
              {{ $t('home.b2b_card3_link') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 7: Market News & Legal Regulatory (Tin tức thị trường & Pháp lý giá) -->
    <section class="py-20 md:py-28 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
          <div class="max-w-3xl">
            <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-4">
              {{ $t('home.news_badge') }}
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hero leading-tight mb-4">
              {{ $t('home.news_header_title') }}
            </h2>
            <p class="text-text-secondary text-sm md:text-base leading-relaxed">
              {{ $t('home.news_header_desc') }}
            </p>
          </div>
          <NuxtLink :to="localePath('/tin-tuc')" class="inline-flex items-center gap-2 px-6 py-3.5 bg-surface text-primary hover:bg-primary hover:text-white rounded-full font-bold shadow-corporate hover:shadow-corporate-hover transition-all group shrink-0 text-xs uppercase tracking-wider mb-1 border border-black/5 dark:border-white/5">
            <span>{{ $t('home.news_all_btn') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PostCard 
            v-for="(post, index) in latestPosts" 
            :key="post.id" 
            :post="post" 
            class="reveal-on-scroll" 
            :class="`delay-${index * 100}`" 
          />
        </div>
      </div>
    </section>

    <!-- Section 8: Institutional Trust Ecosystem (Đối tác Ngân hàng & Tập đoàn) -->
    <section class="py-20 md:py-28 bg-surface overflow-hidden">
      <div class="container mx-auto px-4 mb-16 text-center reveal-on-scroll max-w-3xl">
        <span class="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-3">
          {{ $t('home.partners_section_badge') }}
        </span>
        <h2 class="text-3xl md:text-5xl font-display font-bold text-hero mb-3">
          {{ $t('home.partners_section_title') }}
        </h2>
        <p class="text-text-secondary text-sm leading-relaxed">
          {{ $t('home.partners_section_desc') }}
        </p>
      </div>

      <!-- Marquee Container -->
      <div class="relative w-full overflow-hidden flex flex-col gap-8">
        <!-- Fade Edges -->
        <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
        <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

        <!-- Row 1: Left to Right -->
        <div class="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <div class="flex gap-8 px-4" v-for="n in 2" :key="`row1-${n}`">
            <div v-for="partner in partnersRow1" :key="`p1-${partner.id}`" class="w-52 h-24 glass-card rounded-2xl flex items-center justify-center p-5 cursor-pointer group border border-white/60 dark:border-white/10 hover:scale-[1.03] transition-all">
              <NuxtImg :src="partner.logo" :alt="partner.name" loading="lazy" format="webp" width="160" height="80" class="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>

        <!-- Row 2: Right to Left -->
        <div class="flex w-max animate-marqueeReverse hover:[animation-play-state:paused] -ml-24">
          <div class="flex gap-8 px-4" v-for="n in 2" :key="`row2-${n}`">
            <div v-for="partner in partnersRow2" :key="`p2-${partner.id}`" class="w-52 h-24 glass-card rounded-2xl flex items-center justify-center p-5 cursor-pointer group border border-white/60 dark:border-white/10 hover:scale-[1.03] transition-all">
              <NuxtImg :src="partner.logo" :alt="partner.name" loading="lazy" format="webp" width="160" height="80" class="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 9: Bottom Corporate CTA (Frosted Glass Grand Finale) -->
    <section class="py-20 md:py-28 bg-bg relative overflow-hidden notranslate">
      <!-- Ambient Glow Behind CTA -->
      <div class="ambient-glow-container">
        <div class="ambient-orb ambient-orb-orange w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
      </div>

      <div class="container mx-auto px-4 max-w-5xl relative z-10">
        <div class="p-10 md:p-16 rounded-3xl glass-card text-center reveal-on-scroll relative overflow-hidden border border-white/60 dark:border-white/10 shadow-2xl">
          
          <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-5">
            {{ $t('home.bottom_cta_badge') }}
          </span>

          <h2 class="text-3xl md:text-5xl font-display font-bold text-hero mb-5 leading-tight">
            <span v-html="$t('home.bottom_cta_title')"></span>
          </h2>

          <p class="text-sm md:text-base text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            {{ $t('home.bottom_cta_sub') }}
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink 
              :to="localePath('/lien-he')" 
              class="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-corporate hover:shadow-corporate-glow transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>{{ $t('home.bottom_cta_submit') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>

            <a 
              href="tel:02835153516" 
              class="w-full sm:w-auto px-8 py-4 glass-pill hover:bg-white/90 dark:hover:bg-white/10 text-text text-xs font-bold uppercase tracking-wider rounded-full transition-all inline-flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{{ $t('home.bottom_cta_hotline') }}</span>
            </a>

            <NuxtLink 
              :to="localePath('/ho-so-nang-luc')" 
              class="w-full sm:w-auto px-8 py-4 glass-pill hover:bg-white/90 dark:hover:bg-white/10 text-text hover:text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-sm hover:shadow-corporate transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>{{ $t('home.bottom_cta_profile') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </NuxtLink>
          </div>

          <div class="mt-8 pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-text-secondary font-medium">
            <span class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ $t('home.bottom_cta_feature_1') }}
            </span>
            <span class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ $t('home.bottom_cta_feature_2') }}
            </span>
            <span class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ $t('home.bottom_cta_feature_3') }}
            </span>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useI18n, useLocalePath } from '#imports'

const { t } = useI18n()
const localePath = useLocalePath()
const { reobserve } = useScrollReveal()

useHead({
  title: computed(() => t('home.meta_title'))
})

useSeoMeta({
  title: computed(() => t('home.meta_title')),
  ogTitle: computed(() => t('home.meta_title')),
  description: computed(() => t('home.meta_desc')),
  ogDescription: computed(() => t('home.meta_desc')),
  ogImage: '/images/logo-mhd.png'
})

const { fetchPosts, fetchGlobal } = usePayload()

// Fetch Global Site Settings (Hero Banner, Logos from Payload CMS)
const { data: siteSettings } = await fetchGlobal('site-settings')

// Active index & navigation for Terminal Interactive Tab
const activeTerminalIndex = ref(0)

const nextTerminal = () => {
  activeTerminalIndex.value = (activeTerminalIndex.value + 1) % services.value.length
}

const prevTerminal = () => {
  activeTerminalIndex.value = (activeTerminalIndex.value - 1 + services.value.length) % services.value.length
}

let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e) => {
  if (e.changedTouches && e.changedTouches[0]) {
    touchStartX = e.changedTouches[0].screenX
  }
}

const handleTouchEnd = (e) => {
  if (e.changedTouches && e.changedTouches[0]) {
    touchEndX = e.changedTouches[0].screenX
    const swipeThreshold = 50
    if (touchEndX < touchStartX - swipeThreshold) {
      nextTerminal()
    } else if (touchEndX > touchStartX + swipeThreshold) {
      prevTerminal()
    }
  }
}

// Fetch Team data (maintained for reference if needed)
const { data: teamData } = await fetchPosts({ per_page: 20, sort: 'order' }, 'team')
const leadershipTeam = computed(() => {
  const list = teamData.value || []
  return [...list].sort((a, b) => (a.order || 99) - (b.order || 99)).slice(0, 4)
})

// Fetch Projects (Category 16)
const { data: projectsData } = await fetchPosts({ per_page: 4 }, 'projects')
const featuredProjects = computed(() => projectsData.value || [])

// Fetch News (Category 5)
const { data: newsData } = await fetchPosts({ per_page: 3 }, 'posts')
const latestPosts = computed(() => newsData.value || [])

// Fetch Partners
const { data: partnersData } = await fetchPosts({ per_page: 50 }, 'partners')
const partnersList = computed(() => partnersData.value || [])

const partnersRow1 = computed(() => {
  const half = Math.ceil(partnersList.value.length / 2)
  return partnersList.value.slice(0, half)
})
const partnersRow2 = computed(() => {
  const half = Math.ceil(partnersList.value.length / 2)
  return partnersList.value.slice(half)
})

onMounted(() => {
  // Re-observe elements after DOM updates with fetched data
  nextTick(() => {
    reobserve()
  })
})

const services = computed(() => [
  {
    title: t('home.terminal_services.real_estate.title'),
    description: t('home.terminal_services.real_estate.desc'),
    icon: 'home',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-gia-bat-dong-san'
  },
  {
    title: t('home.terminal_services.movables.title'),
    description: t('home.terminal_services.movables.desc'),
    icon: 'truck',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-gia-dong-san'
  },
  {
    title: t('home.terminal_services.project.title'),
    description: t('home.terminal_services.project.desc'),
    icon: 'chart',
    image: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-du-an-dau-tu'
  },
  {
    title: t('home.terminal_services.business.title'),
    description: t('home.terminal_services.business.desc'),
    icon: 'building',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-gia-doanh-nghiep'
  },
  {
    title: t('home.terminal_services.goodwill.title'),
    description: t('home.terminal_services.goodwill.desc'),
    icon: 'star',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-loi-the-thuong-mai'
  },
  {
    title: t('home.terminal_services.immigration.title'),
    description: t('home.terminal_services.immigration.desc'),
    icon: 'globe',
    image: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-tai-san-de-dinh-cu'
  }
])

const terminalSpecs = computed(() => [
  {
    method: t('home.terminal_services.real_estate.method'),
    turnaround: t('home.terminal_services.real_estate.turnaround'),
    audience: t('home.terminal_services.real_estate.audience')
  },
  {
    method: t('home.terminal_services.movables.method'),
    turnaround: t('home.terminal_services.movables.turnaround'),
    audience: t('home.terminal_services.movables.audience')
  },
  {
    method: t('home.terminal_services.project.method'),
    turnaround: t('home.terminal_services.project.turnaround'),
    audience: t('home.terminal_services.project.audience')
  },
  {
    method: t('home.terminal_services.business.method'),
    turnaround: t('home.terminal_services.business.turnaround'),
    audience: t('home.terminal_services.business.audience')
  },
  {
    method: t('home.terminal_services.goodwill.method'),
    turnaround: t('home.terminal_services.goodwill.turnaround'),
    audience: t('home.terminal_services.goodwill.audience')
  },
  {
    method: t('home.terminal_services.immigration.method'),
    turnaround: t('home.terminal_services.immigration.turnaround'),
    audience: t('home.terminal_services.immigration.audience')
  }
])
</script>

<style scoped>
.animate-marquee {
  animation: marquee 30s linear infinite;
}
.animate-marqueeReverse {
  animation: marquee 30s linear infinite reverse;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
}
.reveal-on-scroll.is-revealed {
  opacity: 1;
  transform: translateY(0);
}
.delay-100 { transition-delay: 100ms; }
.delay-200 { transition-delay: 200ms; }
.delay-300 { transition-delay: 300ms; }

/* Transitions for Tabs */
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Hide scrollbar for tab navigation */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
/* Transitions for Hero Carousel */
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}
.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}
</style>
