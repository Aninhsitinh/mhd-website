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
        <div class="bg-surface p-4 rounded-2xl shadow-corporate relative overflow-hidden border border-black/5 dark:border-white/5">
          <div class="relative z-10 w-full rounded-xl overflow-hidden shadow-inner bg-bg" style="height: 80vh;">
            <object 
              data="/files/HSNL-MHD-2026.pdf#toolbar=1&navpanes=1" 
              type="application/pdf"
              width="100%" 
              height="100%" 
              class="border-none w-full h-full"
            >
              <iframe 
                src="/files/HSNL-MHD-2026.pdf" 
                width="100%" 
                height="100%" 
                class="border-none bg-white"
                title="Hồ Sơ Năng Lực MHD"
              >
                <!-- Fallback content if browser blocks inline PDF embedding -->
                <div class="flex flex-col items-center justify-center h-full p-8 text-center bg-surface">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 class="text-lg font-bold text-text mb-2">Hồ Sơ Năng Lực MHD Valuation</h3>
                  <p class="text-sm text-text-secondary max-w-md mb-6 leading-relaxed">
                    Trình duyệt của bạn không hỗ trợ xem trực tiếp tài liệu PDF trong trang. Vui lòng tải về hoặc mở trong tab mới để xem toàn văn hồ sơ.
                  </p>
                  <div class="flex items-center gap-3">
                    <a 
                      href="/files/HSNL-MHD-2026.pdf" 
                      target="_blank" 
                      class="px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-corporate"
                    >
                      Mở trong tab mới
                    </a>
                    <a 
                      href="/files/HSNL-MHD-2026.pdf" 
                      download 
                      class="px-5 py-2.5 rounded-full bg-surface-muted text-text text-xs font-bold uppercase tracking-wider border border-black/5 dark:border-white/10"
                    >
                      Tải về máy
                    </a>
                  </div>
                </div>
              </iframe>
            </object>
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
