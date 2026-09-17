<template>
  <div class="min-h-screen bg-bg flex flex-col font-sans">
    <AppHeader />
    
    <main class="flex-grow flex items-center justify-center pt-32 pb-20 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] z-0"></div>
      
      <div class="container mx-auto px-4 relative z-10 text-center">
        <!-- Error Content -->
        <div class="max-w-2xl mx-auto">
          <div class="text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-300 leading-none mb-4 drop-shadow-sm select-none">
            {{ error.statusCode === 404 ? '404' : error.statusCode }}
          </div>
          
          <h1 class="text-3xl md:text-4xl font-bold text-text mb-6">
            {{ error.statusCode === 404 ? 'Rất tiếc! Trang không tồn tại' : 'Đã xảy ra lỗi' }}
          </h1>
          
          <p class="text-lg text-text-secondary mb-10 leading-relaxed">
            {{ error.statusCode === 404 
              ? 'Đường dẫn bạn đang tìm kiếm có thể đã bị xóa, thay đổi tên hoặc tạm thời không khả dụng.' 
              : error.message || 'Chúng tôi đang gặp sự cố kỹ thuật. Vui lòng thử lại sau.' }}
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button @click="handleError" class="px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(232,93,32,0.4)] transform hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Về Trang Chủ
            </button>
            <NuxtLink to="/lien-he" class="px-8 py-4 bg-surface text-text font-bold rounded-xl transition-all shadow-sm hover:bg-primary/5 hover:shadow-md w-full sm:w-auto text-center">
              Liên Hệ Chúng Tôi
            </NuxtLink>
          </div>
        </div>
        
        <!-- Suggested Links for 404 -->
        <div v-if="error.statusCode === 404" class="mt-20 pt-12 max-w-4xl mx-auto">
          <h3 class="text-xl font-bold text-text mb-8">Các Dịch Vụ Nổi Bật Của Chúng Tôi</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <NuxtLink to="/linh-vuc/tham-dinh-gia-bat-dong-san" class="p-6 bg-surface rounded-2xl shadow-corporate hover:shadow-2xl transition-all text-center group">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h4 class="font-bold text-text group-hover:text-primary transition-colors">Bất Động Sản</h4>
            </NuxtLink>
            <NuxtLink to="/linh-vuc/tham-dinh-gia-doanh-nghiep" class="p-6 bg-surface rounded-2xl shadow-corporate hover:shadow-2xl transition-all text-center group">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h4 class="font-bold text-text group-hover:text-primary transition-colors">Doanh Nghiệp</h4>
            </NuxtLink>
            <NuxtLink to="/linh-vuc/tham-dinh-gia-dong-san" class="p-6 bg-surface rounded-2xl shadow-corporate hover:shadow-2xl transition-all text-center group">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <h4 class="font-bold text-text group-hover:text-primary transition-colors">Động Sản</h4>
            </NuxtLink>
            <NuxtLink to="/linh-vuc/tham-dinh-du-an-dau-tu" class="p-6 bg-surface rounded-2xl shadow-corporate hover:shadow-2xl transition-all text-center group">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h4 class="font-bold text-text group-hover:text-primary transition-colors">Dự Án Đầu Tư</h4>
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { useError, clearError } from '#app'

const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })

// Basic meta tags for the error page
useHead({
  title: props.error?.statusCode === 404 ? 'Không tìm thấy trang - MHD Valuation' : 'Đã xảy ra lỗi - MHD Valuation'
})
</script>
