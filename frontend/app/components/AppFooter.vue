<template>
  <footer class="relative bg-white dark:bg-[#080D12] text-slate-600 dark:text-slate-300 pt-20 pb-10 overflow-hidden border-t border-slate-200/80 dark:border-white/5 transition-colors duration-500">
    <!-- Ambient top glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-3xl pointer-events-none"></div>

    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      <!-- Main 4-Column Master Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-slate-200/80 dark:border-white/10">
        
        <!-- Col 1: Corporate Identity & Accreditation (Span 4) -->
        <div class="lg:col-span-4 space-y-6">
          <NuxtLink :to="localePath('/')" class="inline-block">
            <img 
              src="~/assets/logomhd.png" 
              alt="MHD Valuation" 
              width="170" 
              height="50" 
              class="h-11 w-auto object-contain dark:brightness-0 dark:invert" 
            />
          </NuxtLink>

          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm font-normal">
            Công ty Cổ phần Thẩm định giá MHD (MHD Valuation) — Doanh nghiệp đủ điều kiện hành nghề thẩm định giá độc lập theo giấy chứng nhận của Bộ Tài chính. Đối tác chiến lược của hệ thống ngân hàng thương mại và quỹ đầu tư tại Việt Nam.
          </p>

          <!-- Accreditation Badges -->
          <div class="pt-2">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-300 text-xs font-semibold">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Được cấp phép bởi Bộ Tài Chính</span>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex items-center gap-3 pt-2">
            <a 
              href="https://www.facebook.com/mhd.com.vn" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-primary dark:hover:bg-primary text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200 dark:border-white/10 hover:border-primary shadow-sm hover:scale-110" 
              aria-label="Facebook MHD"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a 
              href="https://zalo.me/3920702626611603828" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-primary dark:hover:bg-primary text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200 dark:border-white/10 hover:border-primary shadow-sm hover:scale-110 font-bold text-xs" 
              aria-label="Zalo Official MHD"
            >
              Zalo
            </a>
            <a 
              href="tel:02835153516" 
              class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-primary dark:hover:bg-primary text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200 dark:border-white/10 hover:border-primary shadow-sm hover:scale-110" 
              aria-label="Hotline MHD"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </a>
          </div>
        </div>

        <!-- Col 2: Services Directory (Span 3) -->
        <div class="lg:col-span-3 space-y-4">
          <h3 class="text-xs font-extrabold uppercase tracking-widest text-slate-900 dark:text-white/90 pb-2 border-b border-slate-100 dark:border-white/5">
            LĨNH VỰC THẨM ĐỊNH
          </h3>
          <ul class="space-y-2.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-400">
            <li>
              <NuxtLink :to="localePath('/linh-vuc/tham-dinh-gia-doanh-nghiep')" class="hover:text-primary transition-colors flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                Thẩm định giá Doanh nghiệp & M&A
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/linh-vuc/tham-dinh-gia-bat-dong-san')" class="hover:text-primary transition-colors flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                Bất động sản & Dự án hạ tầng
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/linh-vuc/tham-dinh-gia-dong-san')" class="hover:text-primary transition-colors flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                Máy móc, Thiết bị, Dây chuyền
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/linh-vuc/tham-dinh-du-an-dau-tu')" class="hover:text-primary transition-colors flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                Dự án đầu tư & Phương án vốn
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/linh-vuc/tham-dinh-loi-the-thuong-mai')" class="hover:text-primary transition-colors flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                Tài sản vô hình & Thương hiệu
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/linh-vuc/tham-dinh-tai-san-de-dinh-cu')" class="hover:text-primary transition-colors flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                Tài sản chứng minh định cư quốc tế
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 3: Direct Quick Navigation (Span 2) -->
        <div class="lg:col-span-2 space-y-4">
          <h3 class="text-xs font-extrabold uppercase tracking-widest text-slate-900 dark:text-white/90 pb-2 border-b border-slate-100 dark:border-white/5">
            DANH MỤC NHANH
          </h3>
          <ul class="space-y-2.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-400">
            <li><NuxtLink :to="localePath('/gioi-thieu')" class="hover:text-primary transition-colors">Về chúng tôi</NuxtLink></li>
            <li><NuxtLink :to="localePath('/ho-so-nang-luc')" class="hover:text-primary transition-colors">Hồ sơ năng lực</NuxtLink></li>
            <li><NuxtLink :to="localePath('/ho-so-phap-ly')" class="hover:text-primary transition-colors">Hồ sơ pháp lý</NuxtLink></li>
            <li><NuxtLink :to="localePath('/quy-trinh')" class="hover:text-primary transition-colors">Quy trình 6 bước</NuxtLink></li>
            <li><NuxtLink :to="localePath('/du-an')" class="hover:text-primary transition-colors">Dự án tiêu biểu</NuxtLink></li>
            <li><NuxtLink :to="localePath('/tin-tuc')" class="hover:text-primary transition-colors">Bản tin thị trường</NuxtLink></li>
            <li><NuxtLink :to="localePath('/co-hoi-nghe-nghiep')" class="hover:text-primary transition-colors">Tuyển dụng thẩm định</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 4: Corporate Headquarters & Direct Contact (Span 3) -->
        <div class="lg:col-span-3 space-y-4">
          <h3 class="text-xs font-extrabold uppercase tracking-widest text-slate-900 dark:text-white/90 pb-2 border-b border-slate-100 dark:border-white/5">
            TRỤ SỞ & LIÊN HỆ
          </h3>
          
          <div class="space-y-3 text-xs sm:text-[13px] text-slate-600 dark:text-slate-400">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>52 Trần Bình Trọng, Phường 5, Quận Bình Thạnh, TP. Hồ Chí Minh</span>
            </div>

            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <a href="tel:02835153516" class="hover:text-primary transition-colors font-semibold text-slate-900 dark:text-white">(028) 3515 3516</a>
            </div>

            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <a href="mailto:info@mhd.com.vn" class="hover:text-primary transition-colors">info@mhd.com.vn</a>
            </div>
          </div>

          <!-- Fast Quote Trigger Card -->
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 mt-4 space-y-2">
            <p class="text-xs font-bold text-slate-900 dark:text-white">Cần tư vấn thẩm định nhanh?</p>
            <p class="text-[11px] text-slate-500 dark:text-slate-400">Đội ngũ chuyên gia phản hồi hồ sơ trong 2 giờ làm việc.</p>
            <NuxtLink 
              :to="localePath('/lien-he')" 
              class="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary hover:text-amber-500 transition-colors pt-1"
            >
              <span>Nhận báo giá ngay</span>
              <span>&rarr;</span>
            </NuxtLink>
          </div>
        </div>

      </div>

      <!-- Bottom Bar: Copyright & Legal Policies -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
        <p>&copy; {{ new Date().getFullYear() }} MHD Valuation. Bản quyền thuộc về Công ty Cổ phần Thẩm định giá MHD.</p>
        <div class="flex items-center gap-6">
          <NuxtLink :to="localePath('/chinh-sach-bao-mat')" class="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Chính sách bảo mật</NuxtLink>
          <NuxtLink :to="localePath('/dieu-khoan-su-dung')" class="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Điều khoản sử dụng</NuxtLink>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { useLocalePath } from '#imports'
const localePath = useLocalePath()
</script>
