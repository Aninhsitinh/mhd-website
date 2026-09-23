<template>
  <div class="relative overflow-hidden">
    
    <!-- ========================================================================= -->
    <!-- SECTION 1: CINEMATIC HERO (LUXURY ARCHITECTURAL AMBIENT)                 -->
    <!-- ========================================================================= -->
    <section class="relative min-h-[92vh] flex items-center pt-36 sm:pt-40 lg:pt-44 pb-20 overflow-hidden bg-[#0A1016]">
      <!-- Background Graphic & High-Res Architectural Photography -->
      <div class="absolute inset-0 w-full h-full">
        <NuxtImg 
          :src="siteSettings?.heroBannerUrl || '/images/hero-office.png'" 
          alt="MHD Landmark Architecture" 
          class="w-full h-full object-cover object-[75%_center] lg:object-right-center filter brightness-[0.78] contrast-[1.08] transition-transform duration-1000 scale-105 hover:scale-100" 
          format="webp" 
          priority
        />
        <!-- Deep Multi-Stop Gradient Overlays -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#070D13] via-[#070D13]/85 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#0A1016] via-transparent to-[#070D13]/50"></div>
        <!-- Ambient Radial Light Bloom behind the main heading -->
        <div class="absolute top-1/4 left-10 w-[550px] h-[550px] bg-primary/20 rounded-full blur-[140px] pointer-events-none"></div>
      </div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: Visionary Narrative & Direct Actions (7 Cols) -->
          <div class="lg:col-span-7 space-y-7">
            <!-- Ministry of Finance Accreditation Tag -->
            <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-white text-xs font-semibold tracking-wider uppercase shadow-inner">
              <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>ĐỦ ĐIỀU KIỆN HÀNH NGHỀ THEO BỘ TÀI CHÍNH</span>
            </div>

            <!-- Big Editorial Heading -->
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display font-extrabold text-white leading-[1.15] tracking-tight">
              Thẩm định giá <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-primary to-orange-400">chuẩn xác</span>,<br class="hidden sm:inline">
              Bảo chứng niềm tin tài chính.
            </h1>

            <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              MHD Valuation cung cấp giải pháp thẩm định giá độc lập cho Bất động sản, Doanh nghiệp, Máy móc thiết bị và Dự án đầu tư — Tuân thủ chuẩn mực IVSC & Tiêu chuẩn Việt Nam 2024.
            </p>

            <!-- Dual Action CTAs with Interactive Spring -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <NuxtLink 
                :to="localePath('/lien-he')" 
                class="px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Yêu cầu thẩm định tài sản</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>

              <NuxtLink 
                :to="localePath('/ho-so-nang-luc')" 
                class="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-xl border border-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Tải Hồ Sơ Năng Lực (PDF)</span>
              </NuxtLink>
            </div>

            <!-- Quick Trust Proof Points -->
            <div class="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-white/10">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                <span>Bảo hiểm trách nhiệm 20 tỷ</span>
              </div>
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                <span>Hội viên Hội Thẩm Định Giá VN</span>
              </div>
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                <span>Được 30+ Ngân Hàng Công Nhận</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Glassmorphic Real-Time Metrics & Fast Inquiry Widget (5 Cols) -->
          <div class="lg:col-span-5">
            <div class="relative bg-white/90 dark:bg-[#121B24]/90 backdrop-blur-2xl rounded-3xl p-7 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-white/20 dark:border-white/10 space-y-6">
              
              <!-- Card Header -->
              <div class="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-white/10">
                <div class="flex items-center gap-2.5">
                  <span class="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                  <span class="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">NĂNG LỰC ĐỘC LẬP</span>
                </div>
                <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">Số liệu cập nhật 2026</span>
              </div>

              <!-- Metrics Stats Grid -->
              <div class="grid grid-cols-3 gap-3">
                <div class="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 text-center">
                  <p class="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">5.000<span class="text-primary text-base font-bold">+</span></p>
                  <p class="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mt-1">Hồ sơ phát hành</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 text-center">
                  <p class="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">60<span class="text-primary text-base font-bold">+</span></p>
                  <p class="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mt-1">Thẩm định viên</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 text-center">
                  <p class="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">100<span class="text-primary text-base font-bold">%</span></p>
                  <p class="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mt-1">Chuẩn pháp lý</p>
                </div>
              </div>

              <!-- Fast Inquiry Tab Bar -->
              <div class="p-4 rounded-2xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 space-y-3">
                <p class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Yêu cầu tư vấn định giá nhanh
                </p>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  Nhận báo phí dịch vụ, thời gian khảo sát thực địa và danh mục chứng thư yêu cầu chỉ trong 120 phút.
                </p>
                <NuxtLink 
                  :to="localePath('/lien-he')" 
                  class="w-full py-3 rounded-xl bg-slate-900 dark:bg-white hover:bg-primary dark:hover:bg-primary text-white dark:text-slate-900 hover:text-white dark:hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>Gửi thông tin tài sản ngay</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </NuxtLink>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- SECTION 2: THE 4 TRUST PILLARS (ASIMETRIC LUXURY BENTO GRID)              -->
    <!-- ========================================================================= -->
    <section class="py-24 bg-slate-50 dark:bg-[#090E13] transition-colors duration-500 relative">
      <div class="container mx-auto px-4 max-w-7xl">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-widest mb-3">
            NĂNG LỰC & TIÊU CHUẨN ĐỘC LẬP
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Giá trị pháp lý & Chuẩn mực minh bạch
          </h2>
          <p class="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Mỗi kết quả định giá do MHD phát hành đều được thẩm định đa tầng, đảm bảo tính khách quan và được bảo vệ trách nhiệm nghề nghiệp toàn diện.
          </p>
        </div>

        <!-- Bento Grid 4 Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          <!-- Card 1 (Span 7): Legal Accreditation -->
          <div class="lg:col-span-7 bg-white dark:bg-[#111921] rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span class="text-xs font-extrabold uppercase tracking-wider text-slate-400">TRỤ CỘT 01</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-3">
              Cấp Phép Chính Thức Từ Bộ Tài Chính
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
              Hoạt động đầy đủ điều kiện pháp lý theo Luật Giá Việt Nam. Đội ngũ thẩm định viên sở hữu Thẻ Thẩm định viên về giá do Bộ Tài chính cấp, có thâm niên trên 10 năm tại các định chế tài chính lớn.
            </p>
            <div class="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/5">
              <span class="text-xs font-bold text-primary">Chứng nhận đủ điều kiện kinh doanh số: 341/TĐG</span>
            </div>
          </div>

          <!-- Card 2 (Span 5): International Standard -->
          <div class="lg:col-span-5 bg-white dark:bg-[#111921] rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span class="text-xs font-extrabold uppercase tracking-wider text-slate-400">TRỤ CỘT 02</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-3">
              Tuân Thủ Chuẩn Mực IVSC & VN
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Áp dụng hệ thống Tiêu chuẩn Thẩm định giá Việt Nam ban hành kèm Thông tư 30-36/2024/TT-BTC, kết hợp tiêu chuẩn quốc tế IVSC cho các hồ sơ gọi vốn & di trú.
            </p>
          </div>

          <!-- Card 3 (Span 5): 20 Billion Liability Insurance -->
          <div class="lg:col-span-5 bg-white dark:bg-[#111921] rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span class="text-xs font-extrabold uppercase tracking-wider text-slate-400">TRỤ CỘT 03</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-3">
              Bảo Hiểm Nghề Nghiệp 20 Tỷ
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              100% chứng thư phát hành được bảo lãnh trách nhiệm nghề nghiệp bởi các tập đoàn bảo hiểm hàng đầu, giải tỏa hoàn toàn rủi ro tín dụng cho đối tác ngân hàng.
            </p>
          </div>

          <!-- Card 4 (Span 7): Big Data & Speed -->
          <div class="lg:col-span-7 bg-white dark:bg-[#111921] rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <span class="text-xs font-extrabold uppercase tracking-wider text-slate-400">TRỤ CỘT 04</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-3">
              Cơ Sở Dữ Liệu Giá 63 Tỉnh Thành
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
              Hệ thống kho dữ liệu giao dịch thực tế được tích lũy hơn 15 năm, cho phép so sánh giá thị trường chính xác, rút ngắn thời gian phát hành chứng thư chỉ từ 2-3 ngày làm việc.
            </p>
            <div class="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/5">
              <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Khảo sát thực địa nhanh chóng tại mọi địa bàn</span>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- SECTION 3: FEATURED VALUATION PROJECTS (PORTFOLIO PROOF)                  -->
    <!-- ========================================================================= -->
    <section class="py-24 bg-white dark:bg-[#070D12] transition-colors duration-500">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-widest mb-3">
              DỰ ÁN TIÊU BIỂU
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Hồ Sơ Năng Lực Thẩm Định Thực Tế
            </h2>
          </div>
          <NuxtLink 
            :to="localePath('/du-an')" 
            class="inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-hover transition-colors group"
          >
            <span>Xem tất cả dự án tiêu biểu</span>
            <span class="transform group-hover:translate-x-1.5 transition-transform">&rarr;</span>
          </NuxtLink>
        </div>

        <!-- Featured Projects Grid -->
        <div v-if="featuredProjects.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProjectCard 
            v-for="project in featuredProjects" 
            :key="project.id || project.slug" 
            :project="project" 
          />
        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- SECTION 4: 6 CORE VALUATION SERVICES (LUXURY INTERACTIVE SHOWCASE)        -->
    <!-- ========================================================================= -->
    <section class="py-24 bg-slate-50 dark:bg-[#0A1016] transition-colors duration-500">
      <div class="container mx-auto px-4 max-w-7xl">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-widest mb-3">
              DANH MỤC THẨM ĐỊNH
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Lĩnh Vực Thẩm Định Trọng Tâm
            </h2>
          </div>
          <NuxtLink 
            :to="localePath('/linh-vuc')" 
            class="inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-hover transition-colors group"
          >
            <span>Xem tất cả danh mục dịch vụ</span>
            <span class="transform group-hover:translate-x-1.5 transition-transform">&rarr;</span>
          </NuxtLink>
        </div>

        <!-- 6 Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="item in services" 
            :key="item.title"
            class="group relative bg-slate-50 dark:bg-[#10171F] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <!-- Visual Image Container -->
            <div class="relative h-56 w-full overflow-hidden">
              <NuxtImg 
                :src="item.image" 
                :alt="item.title" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                format="webp"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#070D12] via-[#070D12]/40 to-transparent"></div>
              
              <!-- Badge -->
              <div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 dark:bg-[#0B131B]/80 backdrop-blur-md text-xs font-bold text-slate-900 dark:text-white border border-white/20">
                Thẩm định độc lập
              </div>
            </div>

            <!-- Content Area -->
            <div class="p-7 space-y-3 flex-grow flex flex-col justify-between">
              <div>
                <h3 class="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {{ item.title }}
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2 font-normal">
                  {{ item.description }}
                </p>
              </div>

              <div class="pt-5 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                <NuxtLink 
                  :to="localePath(item.link)" 
                  class="text-xs font-bold uppercase tracking-wider text-primary group-hover:text-primary-hover flex items-center gap-1.5 transition-colors"
                >
                  <span>Tìm hiểu chi tiết</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- SECTION 5: NATIONAL PRESENCE COMMAND CENTER (VIETNAM MAP ECHARTS)         -->
    <!-- ========================================================================= -->
    <section class="py-24 bg-white dark:bg-[#070D12] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      <!-- Ambient Lighting -->
      <div class="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left: Information & Stats (5 Cols) -->
          <div class="lg:col-span-5 space-y-7">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
              ĐỘ BAO PHỦ DỊCH VỤ
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Mạng Lưới Khảo Sát Phủ Sóng 63 Tỉnh Thành
            </h2>

            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Trụ sở chính tại TP. Hồ Chí Minh cùng văn phòng đại diện và mạng lưới thẩm định viên thường trực tại các trung tâm kinh tế: Hà Nội, Đà Nẵng, Cần Thơ, Bình Dương, Đồng Nai.
            </p>

            <div class="space-y-4 pt-2">
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex items-start gap-4 shadow-sm">
                <div class="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">Khảo sát hiện trường trong 24 giờ</h4>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Tiếp nhận hồ sơ và cử chuyên viên kiểm tra thực địa tài sản ngay trong ngày.</p>
                </div>
              </div>

              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex items-start gap-4 shadow-sm">
                <div class="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-500 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">Số hóa chứng thư & Mã QR tra cứu</h4>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Mọi chứng thư đều có mã QR chống giả mạo, xác thực trực tiếp trên hệ thống.</p>
                </div>
              </div>
            </div>

            <div class="pt-2">
              <NuxtLink 
                :to="localePath('/lien-he')" 
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-primary/30"
              >
                <span>Liên hệ chi nhánh gần nhất</span>
                <span>&rarr;</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Right: Interactive Vietnam Map (7 Cols) -->
          <div class="lg:col-span-7">
            <div class="relative bg-slate-50 dark:bg-[#0E1620] rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 shadow-xl">
              <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-white/10">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span class="text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">BẢN ĐỒ CHI NHÁNH & ĐỊA BÀN THẨM ĐỊNH</span>
                </div>
                <span class="text-xs text-slate-400 dark:text-slate-500 font-semibold">Tương tác trực tiếp</span>
              </div>

              <!-- Map Container -->
              <div class="h-[480px] sm:h-[540px] w-full relative flex items-center justify-center">
                <ClientOnly>
                  <VietnamMapEcharts />
                  <template #fallback>
                    <div class="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                      Đang tải bản đồ mạng lưới MHD...
                    </div>
                  </template>
                </ClientOnly>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- SECTION 5: BANKING PARTNERS & INSTITUTIONAL CLIENTS                       -->
    <!-- ========================================================================= -->
    <section class="py-20 bg-slate-50 dark:bg-[#0A1016] border-y border-slate-200/80 dark:border-white/5 transition-colors duration-500">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-xs font-extrabold uppercase tracking-widest text-primary">ĐỐI TÁC CHIẾN LƯỢC</span>
          <h2 class="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-2">
            Được Tin Dùng Bởi Các Định Chế Tài Chính Hàng Đầu
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
            Chứng thư MHD được chấp thuận trên toàn hệ thống ngân hàng thương mại quốc doanh và cổ phần.
          </p>
        </div>

        <!-- Partners Marquee / Grid -->
        <div v-if="partnersList.length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div 
            v-for="partner in partnersList.slice(0, 12)" 
            :key="partner.id || partner.name"
            class="h-20 rounded-2xl bg-white dark:bg-[#111921] border border-slate-200/60 dark:border-white/5 p-4 flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 group"
          >
            <img 
              v-if="partner.logo" 
              :src="typeof partner.logo === 'string' ? partner.logo : partner.logo.url" 
              :alt="partner.name || 'Đối tác ngân hàng'" 
              class="max-h-11 max-w-[130px] object-contain filter contrast-125 dark:brightness-125 transition-all duration-300 group-hover:scale-105"
            />
            <span v-else class="text-xs font-bold text-slate-700 dark:text-slate-300 text-center line-clamp-1">
              {{ partner.name }}
            </span>
          </div>
        </div>

        <!-- Fallback if CMS list is empty -->
        <div v-else class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for="name in ['Vietcombank', 'BIDV', 'VietinBank', 'Agribank', 'Techcombank', 'MB Bank']" :key="name" class="h-20 rounded-2xl bg-white dark:bg-[#111921] border border-slate-200/60 dark:border-white/5 p-4 flex items-center justify-center shadow-sm font-bold text-xs text-slate-700 dark:text-slate-300">
            {{ name }}
          </div>
        </div>
      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- SECTION 6: LATEST MARKET INSIGHTS & LEGAL UPDATES                         -->
    <!-- ========================================================================= -->
    <section class="py-24 bg-white dark:bg-[#070D12] transition-colors duration-500">
      <div class="container mx-auto px-4 max-w-7xl">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span class="text-xs font-extrabold uppercase tracking-widest text-primary">TIN TỨC & BẢN TIN PHÁP LÝ</span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
              Thông Tin Thị Trường Thẩm Định
            </h2>
          </div>
          <NuxtLink 
            :to="localePath('/tin-tuc')" 
            class="inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-hover transition-colors group"
          >
            <span>Xem tất cả bài viết</span>
            <span class="transform group-hover:translate-x-1.5 transition-transform">&rarr;</span>
          </NuxtLink>
        </div>

        <!-- News Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article 
            v-for="post in latestPosts" 
            :key="post.id || post.slug"
            class="group bg-slate-50 dark:bg-[#10171F] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div class="relative h-52 w-full overflow-hidden">
                <NuxtImg 
                  :src="post.featuredImage?.url || '/images/hero-office.png'" 
                  :alt="post.title" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  format="webp"
                  loading="lazy"
                />
              </div>
              <div class="p-6 space-y-2.5">
                <div class="text-[11px] font-bold text-primary uppercase tracking-wider">
                  {{ post.category?.name || 'Thị Trường' }}
                </div>
                <h3 class="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {{ post.title }}
                </h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 font-normal leading-relaxed">
                  {{ post.excerpt || 'Cập nhật các thông tư mới nhất của Bộ Tài chính và xu hướng thẩm định tài sản chuyên sâu...' }}
                </p>
              </div>
            </div>

            <div class="p-6 pt-0 border-t border-slate-200/40 dark:border-white/5 flex items-center justify-between">
              <NuxtLink 
                :to="localePath('/tin-tuc/' + post.slug)" 
                class="text-xs font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <span>Đọc bài viết</span>
                <span>&rarr;</span>
              </NuxtLink>
            </div>
          </article>
        </div>

      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- SECTION 7: EXECUTIVE INVITATION CALL-TO-ACTION                            -->
    <!-- ========================================================================= -->
    <section class="py-20 bg-gradient-to-r from-primary via-orange-600 to-amber-600 text-white relative overflow-hidden">
      <div class="container mx-auto px-4 max-w-5xl text-center relative z-10 space-y-6">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">
          Cần Tư Vấn Thẩm Định Giá Chuẩn Xác Ngay Hôm Nay?
        </h2>
        <p class="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-normal">
          Hãy để đội ngũ chuyên gia Thẻ Đỏ Bộ Tài chính hỗ trợ bạn thẩm định tài sản chuẩn xác, bảo đảm an toàn pháp lý và tiến độ phê duyệt vốn.
        </p>

        <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink 
            :to="localePath('/lien-he')" 
            class="w-full sm:w-auto px-9 py-4 rounded-full bg-slate-950 hover:bg-slate-900 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Gửi yêu cầu báo giá
          </NuxtLink>
          <a 
            href="tel:02835153516" 
            class="w-full sm:w-auto px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md border border-white/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span>Hotline: (028) 3515 3516</span>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n, useLocalePath, useSeoMeta } from '#imports'
import { usePayload } from '~/composables/usePayload'

const { t } = useI18n()
const localePath = useLocalePath()
const { fetchPosts, fetchGlobal } = usePayload()

useSeoMeta({
  title: computed(() => t('home.meta_title') || 'MHD Valuation - Công ty Cổ phần Thẩm định giá MHD'),
  ogTitle: computed(() => t('home.meta_title') || 'MHD Valuation - Đối Tác Thẩm Định Giá Tin Cậy'),
  description: computed(() => t('home.meta_desc') || 'Dịch vụ thẩm định giá bất động sản, doanh nghiệp, động sản chuyên nghiệp hàng đầu Việt Nam.'),
  ogDescription: computed(() => t('home.meta_desc') || 'Tuân thủ chuẩn mực IVSC và Tiêu chuẩn thẩm định giá Việt Nam.'),
  ogImage: '/images/logo-mhd.png'
})

// Fetch Global Site Settings (Hero Banner, Logos from Payload CMS)
const { data: siteSettings } = await fetchGlobal('site-settings')

// Fetch Featured Projects
const { data: projectsData } = await fetchPosts({ per_page: 4 }, 'projects')
const featuredProjects = computed(() => projectsData.value || [])

// Fetch Posts (Latest news)
const { data: newsData } = await fetchPosts({ per_page: 3 }, 'posts')
const latestPosts = computed(() => newsData.value || [])

// Fetch Partners
const { data: partnersData } = await fetchPosts({ per_page: 24 }, 'partners')
const partnersList = computed(() => partnersData.value || [])

const services = [
  {
    title: 'Thẩm Định Doanh Nghiệp & M&A',
    description: 'Xác định giá trị thực của doanh nghiệp phục vụ mua bán sáp nhập, cổ phần hóa, tái cấu trúc vốn và gọi vốn đầu tư.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-gia-doanh-nghiep'
  },
  {
    title: 'Bất Động Sản & Dự Án',
    description: 'Thẩm định giá quyền sử dụng đất, nhà xưởng, khu đô thị phức hợp thương mại và bất động sản công nghiệp.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-gia-bat-dong-san'
  },
  {
    title: 'Động Sản & Dây Chuyền Máy Móc',
    description: 'Thẩm định giá máy móc thiết bị, dây chuyền sản xuất tự động, phương tiện vận tải đường thủy - đường bộ chuyên dụng.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-gia-dong-san'
  },
  {
    title: 'Dự Án Đầu Tư & Phương Án Vốn',
    description: 'Thẩm định giá dự án hạ tầng, năng lượng tái tạo, phân tích tính khả thi và hiệu quả tài chính cấp hạn mức vốn.',
    image: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-du-an-dau-tu'
  },
  {
    title: 'Lợi Thế Thương Mại & Vô Hình',
    description: 'Định giá thương hiệu, bản quyền sáng chế, phần mềm công nghệ, quyền khai thác khoáng sản và lợi thế thương mại.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-loi-the-thuong-mai'
  },
  {
    title: 'Tài Sản Chứng Minh Định Cư',
    description: 'Thẩm định giá danh mục tài sản theo chuẩn quốc tế phục vụ hồ sơ di trú, visa đầu tư EB-5, Úc, Canada, Châu Âu.',
    image: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-tai-san-de-dinh-cu'
  }
]
</script>

<style scoped>
/* Page-level styles */
</style>
