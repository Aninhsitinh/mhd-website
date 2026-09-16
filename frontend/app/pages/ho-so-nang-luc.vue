<template>
  <div class="min-h-screen bg-bg">
    <!-- Corporate Header -->
    <header class="pt-32 pb-16 bg-bg">
      <div class="container mx-auto px-4 max-w-5xl">
        <nav class="text-xs text-text-muted mb-3 flex items-center gap-2">
          <NuxtLink to="/" class="hover:text-primary transition-colors">Trang chủ</NuxtLink>
          <span>/</span>
          <span class="text-text-secondary">Hồ sơ năng lực</span>
        </nav>
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 class="text-3xl md:text-4xl font-display font-bold text-text leading-tight uppercase">Hồ Sơ Năng Lực</h1>
            <p class="text-text-secondary max-w-xl mt-3 text-base leading-relaxed">Tìm hiểu chi tiết về năng lực, kinh nghiệm và hệ thống pháp lý của MHD Valuation.</p>
          </div>
          <div class="shrink-0">
            <a href="/files/HSNL-MHD-2026.pdf" download target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-full text-xs uppercase tracking-wider shadow-corporate transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              Tải File PDF
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- PDF Viewer Section -->
    <section class="py-16 bg-bg">
      <div class="container mx-auto px-4 max-w-5xl reveal-on-scroll delay-100">
        <div class="bg-surface p-4 rounded-3xl shadow-corporate-lg relative overflow-hidden">
          <div class="absolute inset-0 bg-primary/5 pointer-events-none"></div>
          
          <div class="relative z-10 w-full rounded-2xl overflow-hidden shadow-inner bg-bg" style="height: 80vh;">
            <iframe 
              src="/files/HSNL-MHD-2026.pdf" 
              width="100%" 
              height="100%" 
              class="border-none bg-white"
              title="Hồ Sơ Năng Lực MHD"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal()

useHead({
  title: 'Hồ Sơ Năng Lực - MHD Valuation',
  meta: [
    { name: 'description', content: 'Xem và tải hồ sơ năng lực của MHD Valuation. Đơn vị thẩm định giá uy tín hàng đầu tại Việt Nam.' }
  ]
})
</script>
