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
              ĐỦ ĐIỀU KIỆN HÀNH NGHỀ THEO QUY ĐỊNH BỘ TÀI CHÍNH
            </div>
            
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] font-display font-extrabold text-white leading-[1.3] sm:leading-[1.35] lg:leading-[1.35] tracking-tight mb-5 drop-shadow-md">
              Thẩm định giá chuẩn xác,<br class="hidden sm:inline">
              <span class="text-primary">minh bạch</span> theo chuẩn quốc tế
            </h1>
            
            <p class="text-sm sm:text-base text-white/90 mb-7 leading-relaxed max-w-xl font-normal drop-shadow">
              MHD cung cấp dịch vụ thẩm định giá độc lập cho doanh nghiệp, bất động sản, động sản và dự án đầu tư — tuân thủ chuẩn mực Việt Nam &amp; quốc tế, bảo vệ quyền lợi tối đa cho nhà đầu tư và tổ chức tín dụng.
            </p>
            
            <div class="flex flex-col sm:flex-row items-center gap-3.5 w-full">
              <NuxtLink :to="localePath('/lien-he')" class="w-full sm:w-auto px-7 py-3.5 text-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-corporate hover:shadow-corporate-glow transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2">
                <span>Yêu cầu thẩm định tài sản</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>
              <NuxtLink to="/cong-thong-tin" class="w-full sm:w-auto px-6 py-3.5 text-center justify-center bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all transform hover:-translate-y-0.5 border border-white/15">
                Cổng thông tin Doanh nghiệp &amp; Ngân hàng
              </NuxtLink>
            </div>
          </div>

          <!-- Right Floating Stats Card (5 cols) - Natural executive card style -->
          <div class="lg:col-span-5 w-full">
            <div class="bg-surface/95 dark:bg-surface/90 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-5 w-full border border-black/5 dark:border-white/10">
              <div class="flex items-center justify-between pb-1 border-b border-black/5 dark:border-white/10">
                <span class="text-xs font-bold uppercase tracking-wider text-primary">NĂNG LỰC DOANH NGHIỆP</span>
                <span class="text-xs text-text-muted">Lũy kế 2010 - nay</span>
              </div>
              
              <div class="grid grid-cols-3 gap-2 sm:gap-3">
                <div>
                  <p class="text-xl sm:text-2xl lg:text-3xl font-bold text-text font-display mb-0.5">5.000<span class="text-sm sm:text-base font-semibold text-primary">+</span></p>
                  <p class="text-[11px] text-text-secondary uppercase tracking-wider font-semibold leading-tight">Hồ sơ phát hành</p>
                </div>
                <div>
                  <p class="text-xl sm:text-2xl lg:text-3xl font-bold text-text font-display mb-0.5">60<span class="text-sm sm:text-base font-semibold text-primary">+</span></p>
                  <p class="text-[11px] text-text-secondary uppercase tracking-wider font-semibold leading-tight">Thẩm định viên</p>
                </div>
                <div>
                  <p class="text-xl sm:text-2xl lg:text-3xl font-bold text-text font-display mb-0.5">100<span class="text-sm sm:text-base font-semibold text-primary">%</span></p>
                  <p class="text-[11px] text-text-secondary uppercase tracking-wider font-semibold leading-tight">Hợp lệ pháp lý</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3 bg-bg/80 dark:bg-bg/40 p-3.5 rounded-xl border border-black/5 dark:border-white/5">
                <div class="w-5 h-5 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                </div>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Quy trình thẩm định tuân thủ nghiêm ngặt hệ thống Tiêu chuẩn Thẩm định giá Việt Nam ban hành theo TT 30-36/2024/TT-BTC.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Section 2: The Trust & Regulatory Engine (Bento Grid 12 cols, 100% Borderless) -->
    <section class="py-20 md:py-28 bg-surface notranslate relative overflow-hidden">
      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        
        <!-- Section Header (Centered Clean Layout) -->
        <div class="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-3">
            NĂNG LỰC &amp; TIÊU CHUẨN HOẠT ĐỘNG
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hero leading-tight mb-4">
            Giá trị pháp lý &amp; uy tín thẩm định độc lập
          </h2>
          <p class="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Mỗi chứng thư do MHD phát hành là kết tinh giữa đội ngũ thẩm định viên thẻ đỏ Bộ Tài chính, chuẩn mực pháp lý nghiêm ngặt và quy trình kiểm soát độc lập.
          </p>
        </div>

        <!-- 4-Pillar Balanced 2x2 Grid (Equal on tablet/desktop, 1-col on mobile) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 reveal-on-scroll">
          
          <!-- Pillar Item 1: Legal Accreditation & Ministry of Finance -->
          <div class="bg-bg rounded-2xl p-7 sm:p-8 shadow-corporate hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-black/5 dark:border-white/5">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span class="text-xs font-semibold uppercase tracking-wider text-text-muted">TIÊU CHUẨN 01</span>
              </div>

              <h3 class="text-xl sm:text-2xl font-bold font-display text-text group-hover:text-primary transition-colors mb-2.5">
                Pháp Lý Vững Chắc do Bộ Tài Chính Cấp Phép
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                Doanh nghiệp thẩm định giá đủ điều kiện hành nghề theo Luật Giá 2023. Danh sách thẩm định viên được Bộ Tài chính công bố công khai trên cổng thông tin quốc gia, đảm bảo giá trị pháp lý cao nhất trước Tòa án, Ngân hàng và Cơ quan Thuế.
              </p>

              <!-- Standard Badges -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-2">
                <div class="p-3 rounded-xl bg-surface border border-black/5 dark:border-white/5">
                  <span class="text-xs font-bold text-primary block uppercase">Tiêu Chuẩn 01</span>
                  <span class="text-xs font-bold text-text mt-0.5 block">TT 30/2024/TT-BTC</span>
                  <span class="text-[11px] text-text-muted">Đạo đức hành nghề</span>
                </div>
                <div class="p-3 rounded-xl bg-surface border border-black/5 dark:border-white/5">
                  <span class="text-xs font-bold text-primary block uppercase">Tiêu Chuẩn 02</span>
                  <span class="text-xs font-bold text-text mt-0.5 block">TT 31/2024/TT-BTC</span>
                  <span class="text-[11px] text-text-muted">Khảo sát tài sản</span>
                </div>
                <div class="p-3 rounded-xl bg-surface border border-black/5 dark:border-white/5">
                  <span class="text-xs font-bold text-primary block uppercase">Tiêu Chuẩn 03</span>
                  <span class="text-xs font-bold text-text mt-0.5 block">TT 36/2024/TT-BTC</span>
                  <span class="text-[11px] text-text-muted">Chứng thư chuẩn</span>
                </div>
              </div>
            </div>

            <div class="pt-5 mt-5 flex items-center justify-between border-t border-black/5 dark:border-white/5">
              <span class="text-xs text-text-muted font-medium">ĐKDN: 0312231570</span>
              <NuxtLink :to="localePath('/ho-so-phap-ly')" class="text-primary font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Xem hồ sơ pháp lý →
              </NuxtLink>
            </div>
          </div>

          <!-- Pillar Item 2: Certified Appraisers -->
          <div class="bg-bg rounded-2xl p-7 sm:p-8 shadow-corporate hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-black/5 dark:border-white/5">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span class="text-xs font-semibold uppercase tracking-wider text-text-muted">TIÊU CHUẨN 02</span>
              </div>

              <h3 class="text-xl sm:text-2xl font-bold font-display text-text group-hover:text-primary transition-colors mb-2.5">
                Hội Đồng Thẩm Định Viên Thẻ Đỏ
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                Quy tụ hơn 60 chuyên gia, thẩm định viên hành nghề được Bộ Tài chính cấp thẻ. Đội ngũ lãnh đạo trực tiếp tham gia hội đồng thẩm định độc lập từng hồ sơ trọng điểm.
              </p>

              <!-- Key metric highlight -->
              <div class="p-4 sm:p-5 rounded-xl bg-surface flex items-center justify-between border border-black/5 dark:border-white/5">
                <div>
                  <p class="text-2xl sm:text-3xl font-bold font-display text-primary">60<span class="text-base font-bold">+</span></p>
                  <p class="text-xs text-text-secondary font-medium uppercase tracking-wider mt-0.5">Thẩm định viên &amp; Chuyên gia</p>
                </div>
                <div class="text-right">
                  <p class="text-2xl sm:text-3xl font-bold font-display text-text">15<span class="text-base font-bold">+</span></p>
                  <p class="text-xs text-text-secondary font-medium uppercase tracking-wider mt-0.5">Năm kinh nghiệm bình quân</p>
                </div>
              </div>
            </div>

            <div class="pt-5 mt-5 flex items-center justify-between border-t border-black/5 dark:border-white/5">
              <span class="text-xs text-text-muted">100% chứng thư ký duyệt độc lập</span>
              <NuxtLink :to="localePath('/doi-ngu-nhan-su')" class="text-primary font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Xem hội đồng chuyên môn →
              </NuxtLink>
            </div>
          </div>

          <!-- Pillar Item 3: Nationwide Network & 24h Field Survey -->
          <div class="bg-bg rounded-2xl p-7 sm:p-8 shadow-corporate hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-black/5 dark:border-white/5">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span class="text-xs font-semibold uppercase tracking-wider text-text-muted">TIÊU CHUẨN 03</span>
              </div>

              <h3 class="text-xl sm:text-2xl font-bold font-display text-text group-hover:text-primary transition-colors mb-2.5">
                Mạng Lưới Khảo Sát Phủ Khắp 63 Tỉnh Thành
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                Với 13 chi nhánh và mạng lưới khảo sát viên thường trực tại 3 miền Bắc – Trung – Nam, MHD đáp ứng tiến độ khảo sát thực địa trong vòng 24–48 giờ ngay khi nhận đủ hồ sơ pháp lý.
              </p>

              <!-- Branch & Speed Pill -->
              <div class="p-4 sm:p-5 rounded-xl bg-surface flex items-center justify-between border border-black/5 dark:border-white/5">
                <div>
                  <p class="text-2xl sm:text-3xl font-bold font-display text-primary">13</p>
                  <p class="text-xs text-text-secondary font-medium uppercase tracking-wider mt-0.5">Chi nhánh toàn quốc</p>
                </div>
                <div class="text-right">
                  <p class="text-2xl sm:text-3xl font-bold font-display text-text">24h</p>
                  <p class="text-xs text-text-secondary font-medium uppercase tracking-wider mt-0.5">Khảo sát &amp; phản hồi</p>
                </div>
              </div>
            </div>

            <div class="pt-5 mt-5 flex items-center justify-between border-t border-black/5 dark:border-white/5">
              <span class="text-xs text-text-muted">Bắc – Trung – Nam</span>
              <NuxtLink :to="localePath('/lien-he')" class="text-primary font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Danh sách chi nhánh →
              </NuxtLink>
            </div>
          </div>

          <!-- Pillar Item 4: Digital Verification & Independent Pricing -->
          <div class="bg-bg rounded-2xl p-7 sm:p-8 shadow-corporate hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-black/5 dark:border-white/5">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <span class="text-xs font-semibold uppercase tracking-wider text-text-muted">TIÊU CHUẨN 04</span>
              </div>

              <h3 class="text-xl sm:text-2xl font-bold font-display text-text group-hover:text-primary transition-colors mb-2.5">
                Xác Thực Chứng Thư &amp; Kiểm Soát Độc Lập
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                Áp dụng quy trình kiểm soát chất lượng 3 vòng độc lập kết hợp công nghệ mã định danh QR trên từng chứng thư, giúp đối tác ngân hàng và nhà đầu tư tra cứu tính xác thực tức thời, chống rủi ro giả mạo.
              </p>

              <!-- 3 Proof points -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-2">
                <div class="p-3 rounded-xl bg-surface border border-black/5 dark:border-white/5">
                  <span class="text-[11px] font-bold text-primary block uppercase">Kiểm Soát</span>
                  <span class="text-xs font-bold text-text mt-0.5 block">Quy trình 3 vòng</span>
                  <span class="text-[10px] text-text-muted">Khảo sát - Thẩm định - Duyệt</span>
                </div>
                <div class="p-3 rounded-xl bg-surface border border-black/5 dark:border-white/5">
                  <span class="text-[11px] font-bold text-primary block uppercase">Bảo Mật</span>
                  <span class="text-xs font-bold text-text mt-0.5 block">Mã QR Định Danh</span>
                  <span class="text-[10px] text-text-muted">Xác thực chứng thư online</span>
                </div>
                <div class="p-3 rounded-xl bg-surface border border-black/5 dark:border-white/5">
                  <span class="text-[11px] font-bold text-primary block uppercase">Bảo Hiểm</span>
                  <span class="text-xs font-bold text-text mt-0.5 block">Bảo hiểm nghề</span>
                  <span class="text-[10px] text-text-muted">Bảo vệ quyền lợi đối tác</span>
                </div>
              </div>
            </div>

            <div class="pt-5 mt-5 flex items-center justify-between border-t border-black/5 dark:border-white/5">
              <span class="text-xs text-text-muted">Bảo mật đa tầng</span>
              <NuxtLink to="/tra-cuu-chung-thu" class="text-primary font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Tra cứu chứng thư trực tuyến →
              </NuxtLink>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Section 3: Interactive Valuation Terminal (High-End Dynamic Experience) -->
    <section class="py-20 md:py-28 bg-bg relative notranslate">
      <div class="container mx-auto px-4 relative z-10 max-w-7xl">
        <div class="text-center max-w-3xl mx-auto mb-10 reveal-on-scroll">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-3">
            LĨNH VỰC HOẠT ĐỘNG
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hero leading-tight mb-4">
            Dịch vụ thẩm định giá chuyên sâu
          </h2>
          <p class="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Mỗi loại hình tài sản được áp dụng mô hình toán học và phương pháp luận độc lập, thực hiện bởi các thẩm định viên giàu kinh nghiệm thực tiễn.
          </p>
        </div>

        <!-- Service Tab Selector (Natural Human Navigation) -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:flex md:items-center md:justify-center gap-2 md:gap-2.5 mb-6 md:mb-10 reveal-on-scroll">
          <button
            v-for="(service, idx) in services"
            :key="idx"
            @click="activeTerminalIndex = idx"
            class="w-full md:w-auto px-3 sm:px-4 md:px-5 py-2.5 md:py-3 rounded-xl md:rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center justify-start md:justify-center gap-2 shadow-sm text-left md:text-center min-h-[46px] md:min-h-0 border"
            :class="activeTerminalIndex === idx ? 'bg-primary text-white border-primary shadow-corporate' : 'bg-surface text-text-secondary hover:text-text hover:bg-surface-muted border-black/5 dark:border-white/5'"
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

        <!-- Active Service Showcase Card -->
        <div 
          class="bg-surface rounded-2xl p-6 sm:p-8 lg:p-10 shadow-corporate reveal-on-scroll relative overflow-hidden transition-all duration-300 border border-black/5 dark:border-white/5"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <!-- Left: High-Res Asset Media & Visual Indicator (6 cols) -->
            <div class="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden shadow-corporate group">
              <img 
                :src="services[activeTerminalIndex].image" 
                :alt="services[activeTerminalIndex].title" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
              
              <div class="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span class="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm">
                  Lĩnh vực 0{{ activeTerminalIndex + 1 }} / 06
                </span>

                <!-- Quick Step Navigation for Mobile Thumb Control -->
                <div class="flex items-center gap-1.5 md:hidden">
                  <button 
                    @click.stop="prevTerminal"
                    class="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary active:scale-95 transition-all shadow-sm"
                    aria-label="Danh mục trước"
                  >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    @click.stop="nextTerminal"
                    class="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary active:scale-95 transition-all shadow-sm"
                    aria-label="Danh mục kế tiếp"
                  >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 text-white">
                <span class="text-xs text-primary-light font-semibold uppercase tracking-wider block mb-1">Quy chuẩn định giá áp dụng</span>
                <h3 class="text-xl sm:text-2xl md:text-3xl font-bold font-display text-white">
                  {{ services[activeTerminalIndex].title }}
                </h3>
              </div>
            </div>

            <!-- Right: Methodology, Specs & Action (6 cols) -->
            <div class="lg:col-span-6 flex flex-col justify-between space-y-5">
              <div>
                <span class="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                  Tiêu chuẩn Thẩm định giá Việt Nam (TĐGVN)
                </span>

                <p class="text-sm md:text-base text-text-secondary leading-relaxed mb-5">
                  {{ services[activeTerminalIndex].description }}
                </p>

                <!-- Technical Specs Breakdown -->
                <div class="grid grid-cols-2 gap-3.5 pt-1">
                  <div class="p-4 rounded-xl bg-bg/80 dark:bg-bg/40 border border-black/5 dark:border-white/5">
                    <span class="text-xs text-text-muted uppercase tracking-wider block">Phương pháp tiếp cận:</span>
                    <span class="text-sm font-bold font-display text-text mt-1 block leading-snug">
                      {{ terminalSpecs[activeTerminalIndex].method }}
                    </span>
                  </div>
                  <div class="p-4 rounded-xl bg-bg/80 dark:bg-bg/40 border border-black/5 dark:border-white/5">
                    <span class="text-xs text-text-muted uppercase tracking-wider block">Thời gian bàn giao:</span>
                    <span class="text-sm font-bold font-display text-primary mt-1 block leading-snug">
                      {{ terminalSpecs[activeTerminalIndex].turnaround }}
                    </span>
                  </div>
                </div>

                <div class="mt-3.5 p-3.5 rounded-xl bg-bg/80 dark:bg-bg/40 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 border border-black/5 dark:border-white/5">
                  <span class="text-xs text-text-muted shrink-0">Đối tượng phục vụ:</span>
                  <span class="text-xs font-semibold text-text">{{ terminalSpecs[activeTerminalIndex].audience }}</span>
                </div>
              </div>

              <!-- Direct CTA Actions -->
              <div class="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                <NuxtLink 
                  :to="services[activeTerminalIndex].link" 
                  class="w-full sm:w-auto px-7 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-corporate transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>Xem Chi Tiết Dịch Vụ</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </NuxtLink>

                <NuxtLink 
                  :to="localePath('/lien-he')" 
                  class="w-full sm:w-auto px-6 py-3.5 bg-bg hover:bg-surface-muted text-text text-xs font-bold uppercase tracking-wider rounded-full transition-all inline-flex items-center justify-center gap-2 border border-black/5 dark:border-white/10"
                >
                  <span>Gửi Hồ Sơ Định Giá</span>
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
                  :aria-label="`Chuyển sang danh mục 0${dotIdx + 1}`"
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
              HỒ SƠ NĂNG LỰC
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hero leading-tight mb-4">
              Các dự án thẩm định tiêu biểu
            </h2>
            <p class="text-text-secondary text-sm md:text-base leading-relaxed">
              MHD trực tiếp thực hiện công tác thẩm định giá độc lập cho các tập đoàn lớn, dự án bất động sản phức hợp và dây chuyền công nghiệp trọng điểm trên toàn quốc.
            </p>
          </div>
          <NuxtLink :to="localePath('/du-an')" class="inline-flex items-center gap-2 px-6 py-3.5 bg-bg text-primary hover:bg-primary hover:text-white rounded-full font-bold shadow-corporate hover:shadow-corporate-hover transition-all group shrink-0 text-xs uppercase tracking-wider mb-1 border border-black/5 dark:border-white/5">
            <span>Toàn Bộ Dự Án</span>
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
              MẠNG LƯỚI HOẠT ĐỘNG TOÀN QUỐC
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hero leading-tight mb-4">
              Hiện diện trên 63 tỉnh thành, am hiểu sâu thị trường địa phương
            </h2>
            <p class="text-text-secondary text-sm md:text-base leading-relaxed">
              Hệ thống 13 chi nhánh cùng đội ngũ chuyên gia khảo sát thường trực tại 3 miền Bắc – Trung – Nam giúp MHD đáp ứng nhanh mọi yêu cầu khảo sát hiện trường với cơ sở dữ liệu giá thực tế, cập nhật.
            </p>
          </div>

          <!-- Institutional Trust Indicators -->
          <div class="grid grid-cols-3 gap-3 bg-surface p-4 md:p-6 rounded-2xl shadow-corporate shrink-0 lg:mb-1 border border-black/5 dark:border-white/5">
            <div class="text-center px-4 py-1">
              <p class="text-3xl lg:text-4xl font-bold font-display text-primary">13</p>
              <p class="text-xs text-text-muted mt-1 font-semibold uppercase tracking-wider">Chi nhánh</p>
            </div>
            <div class="text-center px-4 bg-bg/60 rounded-xl py-2">
              <p class="text-3xl lg:text-4xl font-bold font-display text-text">24h</p>
              <p class="text-xs text-text-muted mt-1 font-semibold uppercase tracking-wider">Phản hồi</p>
            </div>
            <div class="text-center px-4 py-1">
              <p class="text-3xl lg:text-4xl font-bold font-display text-primary">63</p>
              <p class="text-xs text-text-muted mt-1 font-semibold uppercase tracking-wider">Tỉnh thành</p>
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

    <!-- Section 6: Institutional Bank Gateway & Verification Portal -->
    <section class="py-20 md:py-28 bg-surface relative notranslate">
      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
          <div class="max-w-3xl">
            <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-4">
              DÀNH CHO ĐỐI TÁC TÀI CHÍNH
            </span>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-hero leading-tight mb-3">
              Tiện ích dành cho Ngân hàng &amp; Khối Quản trị rủi ro
            </h2>
            <p class="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl">
              Quy trình số hóa giúp ban kiểm soát rủi ro tín dụng và bộ phận quản lý tài sản bảo đảm đối soát thông tin chứng thư chính xác và bảo mật.
            </p>
          </div>
          <div class="shrink-0 mb-1">
            <NuxtLink to="/cong-thong-tin" class="inline-flex items-center gap-2 px-6 py-3.5 bg-bg text-primary hover:bg-primary hover:text-white rounded-full font-bold shadow-corporate hover:shadow-corporate-hover transition-all text-xs uppercase tracking-wider group border border-black/5 dark:border-white/5">
              <span>Cổng Tra Cứu Đối Tác</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll">
          <!-- B2B Card 1: Due Diligence Dossier -->
          <div class="bg-bg p-8 rounded-2xl shadow-corporate hover:shadow-xl transition-all duration-300 flex flex-col h-full group border border-black/5 dark:border-white/5">
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span class="text-xs text-text-muted font-semibold tracking-wider uppercase mb-2">HỒ SƠ NĂNG LỰC TỔ CHỨC</span>
            <h3 class="text-lg font-bold font-display text-text group-hover:text-primary transition-colors mb-2">Báo Cáo Năng Lực &amp; Pháp Lý</h3>
            <p class="text-xs text-text-secondary mb-6 flex-grow leading-relaxed">
              Cung cấp đầy đủ hồ sơ pháp lý công ty, giấy phép hành nghề của thẩm định viên và năng lực kinh nghiệm thẩm định tài sản cho các tổ chức tín dụng.
            </p>
            <NuxtLink to="/cong-thong-tin" class="inline-flex items-center text-primary font-bold text-xs uppercase tracking-wider hover:underline mt-auto gap-1">
              Xem hồ sơ tổ chức
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>

          <!-- B2B Card 2: QR Validation -->
          <div class="bg-bg p-8 rounded-2xl shadow-corporate hover:shadow-xl transition-all duration-300 flex flex-col h-full group border border-black/5 dark:border-white/5">
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <span class="text-xs text-text-muted font-semibold tracking-wider uppercase mb-2">BẢO MẬT &amp; CHỐNG GIẢ MẠO</span>
            <h3 class="text-lg font-bold font-display text-text group-hover:text-primary transition-colors mb-2">Xác Thực Chứng Thư Trực Tuyến</h3>
            <p class="text-xs text-text-secondary mb-6 flex-grow leading-relaxed">
              Mỗi chứng thư thẩm định giá đều có mã QR định danh duy nhất, cho phép đối tác kiểm tra tính pháp lý, người ký duyệt và thời hạn hiệu lực của chứng thư.
            </p>
            <NuxtLink to="/tra-cuu-chung-thu" class="inline-flex items-center text-primary font-bold text-xs uppercase tracking-wider hover:underline mt-auto gap-1">
              Tra cứu chứng thư
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>

          <!-- B2B Card 3: Enterprise Project Tracking -->
          <div class="bg-bg p-8 rounded-2xl shadow-corporate hover:shadow-xl transition-all duration-300 flex flex-col h-full group border border-black/5 dark:border-white/5">
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span class="text-xs text-text-muted font-semibold tracking-wider uppercase mb-2">QUẢN LÝ TIẾN ĐỘ HỒ SƠ</span>
            <h3 class="text-lg font-bold font-display text-text group-hover:text-primary transition-colors mb-2">Theo Dõi Tiến Độ Thẩm Định</h3>
            <p class="text-xs text-text-secondary mb-6 flex-grow leading-relaxed">
              Kênh liên lạc trực tiếp cập nhật từng giai đoạn xử lý: từ tiếp nhận hồ sơ, khảo sát thực tế hiện trường đến phát hành chứng thư chính thức.
            </p>
            <NuxtLink :to="localePath('/lien-he')" class="inline-flex items-center text-primary font-bold text-xs uppercase tracking-wider hover:underline mt-auto gap-1">
              Liên hệ chuyên viên phụ trách
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
              THÔNG TIN &amp; PHÁP LÝ GIÁ
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hero leading-tight mb-4">
              Bản tin thị trường &amp; chính sách pháp lý giá mới nhất
            </h2>
            <p class="text-text-secondary text-sm md:text-base leading-relaxed">
              Cập nhật liên tục các văn bản chỉ đạo của Bộ Tài chính, thông tư hướng dẫn Luật Giá mới và các phân tích chuyên sâu về biến động tài sản từ ban chuyên môn MHD.
            </p>
          </div>
          <NuxtLink :to="localePath('/tin-tuc')" class="inline-flex items-center gap-2 px-6 py-3.5 bg-surface text-primary hover:bg-primary hover:text-white rounded-full font-bold shadow-corporate hover:shadow-corporate-hover transition-all group shrink-0 text-xs uppercase tracking-wider mb-1 border border-black/5 dark:border-white/5">
            <span>Tất Cả Bài Viết</span>
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
          MẠNG LƯỚI ĐỐI TÁC
        </span>
        <h2 class="text-3xl md:text-5xl font-display font-bold text-hero mb-3">
          Được tin chọn bởi các định chế tài chính &amp; tập đoàn hàng đầu
        </h2>
        <p class="text-text-secondary text-sm leading-relaxed">
          Chứng thư thẩm định giá MHD được công nhận và tin tưởng bởi các ngân hàng thương mại, tập đoàn kinh tế và các cơ quan hữu quan.
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
            <div v-for="partner in partnersRow1" :key="`p1-${partner.id}`" class="w-52 h-24 bg-bg rounded-2xl flex items-center justify-center p-5 shadow-corporate hover:shadow-2xl transition-all cursor-pointer group">
              <NuxtImg :src="partner.logo" :alt="partner.name" loading="lazy" format="webp" width="160" height="80" class="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>

        <!-- Row 2: Right to Left -->
        <div class="flex w-max animate-marqueeReverse hover:[animation-play-state:paused] -ml-24">
          <div class="flex gap-8 px-4" v-for="n in 2" :key="`row2-${n}`">
            <div v-for="partner in partnersRow2" :key="`p2-${partner.id}`" class="w-52 h-24 bg-bg rounded-2xl flex items-center justify-center p-5 shadow-corporate hover:shadow-2xl transition-all cursor-pointer group">
              <NuxtImg :src="partner.logo" :alt="partner.name" loading="lazy" format="webp" width="160" height="80" class="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 9: Bottom Corporate CTA -->
    <section class="py-20 md:py-28 bg-bg relative overflow-hidden notranslate">
      <div class="container mx-auto px-4 max-w-5xl relative z-10">
        <div class="p-10 md:p-16 rounded-2xl bg-surface shadow-corporate text-center reveal-on-scroll relative overflow-hidden border border-black/5 dark:border-white/5">
          
          <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-5">
            TƯ VẤN &amp; THẨM ĐỊNH GIÁ ĐỘC LẬP
          </span>

          <h2 class="text-3xl md:text-5xl font-display font-bold text-hero mb-5 leading-tight">
            Khởi tạo hồ sơ thẩm định giá<br class="hidden sm:inline"> ngay hôm nay cùng MHD
          </h2>

          <p class="text-sm md:text-base text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            Đội ngũ thẩm định viên sẵn sàng tiếp nhận yêu cầu, khảo sát thực địa nhanh chóng và cung cấp báo cáo định giá chuẩn mực phục vụ kế hoạch tài chính của bạn.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink 
              :to="localePath('/lien-he')" 
              class="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-corporate hover:shadow-corporate-glow transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Gửi Yêu Cầu Thẩm Định</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>

            <a 
              href="tel:02835102555" 
              class="w-full sm:w-auto px-8 py-4 bg-bg hover:bg-surface-muted text-text text-xs font-bold uppercase tracking-wider rounded-full transition-all inline-flex items-center justify-center gap-2 border border-black/5 dark:border-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Hotline: (028) 3510 2555</span>
            </a>

            <NuxtLink 
              to="/cong-thong-tin" 
              class="w-full sm:w-auto px-8 py-4 bg-bg hover:bg-surface-muted text-text hover:text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-sm hover:shadow-corporate transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 border border-black/5 dark:border-white/10"
            >
              <span>Cổng Thông Tin Đối Tác</span>
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
              Bảo mật dữ liệu tuyệt đối
            </span>
            <span class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Phản hồi sơ bộ trong 24 giờ
            </span>
            <span class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Tuân thủ Luật Giá 2023
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
  activeTerminalIndex.value = (activeTerminalIndex.value + 1) % services.length
}

const prevTerminal = () => {
  activeTerminalIndex.value = (activeTerminalIndex.value - 1 + services.length) % services.length
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

const services = [
  {
    title: 'Bất Động Sản',
    description: 'Thẩm định giá trị quyền sử dụng đất, nhà phố, khu đô thị, dự án phức hợp thương mại và bất động sản công nghiệp.',
    icon: 'home',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-gia-bat-dong-san'
  },
  {
    title: 'Động Sản & Thiết Bị',
    description: 'Thẩm định giá máy móc thiết bị, dây chuyền sản xuất tự động, phương tiện vận tải đường thủy - đường bộ chuyên dụng.',
    icon: 'truck',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-gia-dong-san'
  },
  {
    title: 'Dự Án Đầu Tư',
    description: 'Thẩm định giá dự án bất động sản, khu công nghiệp, năng lượng tái tạo và cơ sở hạ tầng phục vụ cấp hạn mức vốn.',
    icon: 'chart',
    image: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-du-an-dau-tu'
  },
  {
    title: 'Doanh Nghiệp & M&A',
    description: 'Xác định giá trị thực của doanh nghiệp phục vụ mua bán sáp nhập (M&A), cổ phần hóa, tái cấu trúc vốn và gọi vốn đầu tư.',
    icon: 'building',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-gia-doanh-nghiep'
  },
  {
    title: 'Lợi Thế Thương Mại',
    description: 'Định giá tài sản vô hình: thương hiệu, bản quyền sáng chế, phần mềm công nghệ, quyền khai thác và lợi thế thương quyền.',
    icon: 'star',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-loi-the-thuong-mai'
  },
  {
    title: 'Tài Sản Định Cư',
    description: 'Thẩm định giá danh mục tài sản theo chuẩn mực quốc tế phục vụ chứng minh năng lực tài chính, định cư EB-5, Canada, Úc.',
    icon: 'globe',
    image: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/linh-vuc/tham-dinh-tai-san-de-dinh-cu'
  }
]

const terminalSpecs = [
  {
    method: 'So Sánh & Thặng Dư (Residual)',
    turnaround: '2 - 3 ngày làm việc',
    audience: 'Chủ đầu tư, Ngân hàng thế chấp, Tòa án'
  },
  {
    method: 'Chi Phí Thay Thế & Hao Mòn Kỹ Thuật',
    turnaround: '2 - 4 ngày làm việc',
    audience: 'Nhà máy, Đơn vị vận tải, Công ty bảo hiểm'
  },
  {
    method: 'Chiết Khấu Dòng Tiền (DCF) & Vốn Hóa',
    turnaround: '5 - 7 ngày làm việc',
    audience: 'Quỹ đầu tư, Ban QLDA, Định chế tài chính'
  },
  {
    method: 'Tài Sản Thuần & Định Giá Bội Số EBITDA',
    turnaround: '5 - 10 ngày làm việc',
    audience: 'Cổ đông sáng lập, Bên mua M&A, Kiểm toán'
  },
  {
    method: 'Phương Pháp Tiết Kiệm Bản Quyền (Relief-from-Royalty)',
    turnaround: '3 - 5 ngày làm việc',
    audience: 'Doanh nghiệp Tech, Start-up, Tập đoàn sở hữu IP'
  },
  {
    method: 'Chuẩn Mực Định Giá Quốc Tế (IVS Standard)',
    turnaround: '2 - 4 ngày làm việc',
    audience: 'Cá nhân định cư, Luật sư di trú, Lãnh sự quán'
  }
]
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
