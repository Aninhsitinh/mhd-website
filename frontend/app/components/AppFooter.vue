<template>
  <footer class="bg-surface dark:bg-[#182124] pt-16 pb-8 transition-colors">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8 mb-12">
        <!-- Col 1: About & Socials (Span 4) -->
        <div class="lg:col-span-4 space-y-4">
          <img src="~/assets/logomhd.png" alt="MHD Valuation" width="213" height="64" class="h-14 w-auto object-contain mb-4 dark:brightness-0 dark:invert" />
          <p class="text-sm text-text-secondary leading-relaxed max-w-sm">
            <strong class="text-text">{{ $t('footer.about_title') }}:</strong> {{ $t('footer.about_desc') }}
          </p>
          <div class="flex items-center gap-2.5 pt-2">
            <!-- Facebook -->
            <a href="https://www.facebook.com/mhd.com.vn" target="_blank" class="w-10 h-10 rounded-xl bg-bg dark:bg-surface flex items-center justify-center text-text-secondary hover:text-primary transition-colors shadow-corporate hover:shadow-corporate-hover" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <!-- Zalo -->
            <a href="https://zalo.me/3920702626611603828" target="_blank" class="w-10 h-10 rounded-xl bg-bg dark:bg-surface flex items-center justify-center text-text-secondary hover:text-primary transition-colors shadow-corporate hover:shadow-corporate-hover font-bold text-[11px]" aria-label="Zalo">
              Zalo
            </a>
            <!-- Phone -->
            <a href="tel:02835153516" class="w-10 h-10 rounded-xl bg-bg dark:bg-surface flex items-center justify-center text-text-secondary hover:text-primary transition-colors shadow-corporate hover:shadow-corporate-hover" aria-label="Phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </a>
          </div>
        </div>

        <!-- Col 2: Liên hệ (Span 4) -->
        <div class="lg:col-span-4">
          <h3 class="text-lg font-bold text-text mb-6">{{ $t('footer.contact_info') }}</h3>
          <ul class="space-y-4 text-sm text-text-secondary">
            <li class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>{{ $t('footer.address') }}</span>
            </li>
            <li class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:02835153516" class="hover:text-primary transition-colors">(028) 3515 3516</a>
            </li>
            <li class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@mhd.com.vn" class="hover:text-primary transition-colors">info@mhd.com.vn</a>
            </li>
          </ul>
          
          <!-- Google Maps -->
          <div class="mt-8 w-full h-[200px] rounded-2xl overflow-hidden relative shadow-corporate">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.978954514751!2d106.68525907512887!3d10.812922258519304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e7e0914539%3A0xf046fe0bcf499c52!2zNTIgVHLhuqduIELDrG5oIFRy4buNbmcsIELDrG5oIEzhu6NpIFRydW5nLCBI4buTIENow60gTWluaCA3MDAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1787220899699!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              class="contrast-[1.05] opacity-90 hover:opacity-100 transition-opacity"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <!-- Col 3: Sitemap (Span 2) -->
        <div class="lg:col-span-2">
          <h3 class="text-sm font-bold uppercase tracking-wider text-text mb-6">{{ $t('footer.quick_links') }}</h3>
          <ul class="space-y-3 text-[13px] text-text-secondary">
            <li><NuxtLink :to="localePath('/gioi-thieu')" class="hover:text-primary transition-colors block">{{ $t('nav.about') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/ho-so-nang-luc')" class="hover:text-primary transition-colors block">{{ $t('nav.profile') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/ho-so-phap-ly')" class="hover:text-primary transition-colors block">{{ $t('nav.legal') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/quy-trinh')" class="hover:text-primary transition-colors block">{{ $t('nav.process') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/linh-vuc')" class="hover:text-primary transition-colors block">{{ $t('nav.services') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/tin-tuc')" class="hover:text-primary transition-colors block">{{ $t('nav.news') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/co-hoi-nghe-nghiep')" class="hover:text-primary transition-colors block">{{ $t('nav.careers') }}</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="mt-8 px-6 py-5 rounded-2xl bg-text/[0.03] dark:bg-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
        <p>&copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}. {{ $t('footer.all_rights_reserved') }}</p>
        <div class="flex gap-5">
          <NuxtLink :to="localePath('/chinh-sach-bao-mat')" class="hover:text-primary transition-colors">{{ $t('footer.privacy_policy') }}</NuxtLink>
          <NuxtLink :to="localePath('/dieu-khoan-su-dung')" class="hover:text-primary transition-colors">{{ $t('footer.terms_of_use') }}</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLocalePath } from '#imports'
const localePath = useLocalePath()
</script>
