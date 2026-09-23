<template>
  <div class="relative overflow-hidden bg-white dark:bg-[#070D12] text-slate-800 dark:text-slate-100 transition-colors duration-500">
    
    <!-- ========================================================================= -->
    <!-- SECTION 1: CLEAN EDITORIAL HEADER                                         -->
    <!-- ========================================================================= -->
    <header class="relative pt-36 sm:pt-40 lg:pt-44 pb-12 bg-slate-50/70 dark:bg-[#0A1016] border-b border-slate-200/60 dark:border-white/5 transition-colors duration-500">
      <!-- Subtle Ambient Glow -->
      <div class="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/10 dark:bg-primary/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <!-- Breadcrumbs -->
        <nav class="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-5 uppercase tracking-wider">
          <NuxtLink :to="localePath('/')" class="hover:text-primary transition-colors flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Trang chủ</span>
          </NuxtLink>
          <span>/</span>
          <span class="text-primary font-bold">Giới thiệu</span>
        </nav>

        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div class="max-w-3xl space-y-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-extrabold tracking-wider uppercase">
              <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span>ĐƠN VỊ THẨM ĐỊNH GIÁ ĐỘC LẬP &amp; KHÁCH QUAN</span>
            </div>

            <h1 class="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Về Chúng Tôi <span class="text-primary">— MHD Valuation</span>
            </h1>

            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Được cấp phép bởi <strong>Bộ Tài Chính</strong> và vận hành theo <strong>Hệ thống Tiêu chuẩn Thẩm định giá Việt Nam &amp; Quốc tế (IVSC)</strong>, MHD là người bảo chứng tin cậy cho mọi giao dịch và định giá tài sản trọng yếu.
            </p>
          </div>

          <!-- Quick Metrics Ribbon -->
          <div class="flex items-center gap-4 sm:gap-6 bg-white dark:bg-[#10171F] p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm shrink-0">
            <div>
              <div class="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">15+</div>
              <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Năm uy tín</div>
            </div>
            <div class="h-8 w-[1px] bg-slate-200 dark:bg-white/10"></div>
            <div>
              <div class="text-2xl sm:text-3xl font-extrabold font-display text-amber-500">5.000+</div>
              <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Chứng thư</div>
            </div>
            <div class="h-8 w-[1px] bg-slate-200 dark:bg-white/10"></div>
            <div>
              <div class="text-2xl sm:text-3xl font-extrabold font-display text-primary">20 Tỷ</div>
              <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Bảo hiểm nghề</div>
            </div>
          </div>
        </div>

      </div>
    </header>


    <!-- ========================================================================= -->
    <!-- SECTION 2: COMPANY OVERVIEW & FULL-SIZE TEAM PANORAMA                     -->
    <!-- ========================================================================= -->
    <section class="py-20 bg-white dark:bg-[#070D12] transition-colors duration-500">
      <div class="container mx-auto px-4 max-w-7xl space-y-14">
        
        <!-- Company Intro Text (Clean Editorial, No Clutter) -->
        <div class="max-w-4xl mx-auto text-center space-y-5">
          <span class="text-xs font-extrabold uppercase tracking-widest text-primary">TÔN CHỈ HOẠT ĐỘNG</span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Độc Lập — Khách Quan — Minh Bạch
          </h2>
          <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-justify sm:text-center">
            <strong>Công ty TNHH Thẩm Định Giá MHD (MHD)</strong> được thành lập từ những chuyên gia tâm huyết hàng đầu trong ngành thẩm định giá Việt Nam. MHD chuyên sâu cung cấp các dịch vụ tư vấn thẩm định giá trị Doanh nghiệp &amp; M&A, Bất động sản phức hợp, Dây chuyền máy móc thiết bị, Tài sản vô hình (lợi thế thương mại, thương quyền) và danh mục tài sản phục vụ Hồ sơ di trú định cư quốc tế.
          </p>
        </div>

        <!-- FULL-SIZE TEAM PHOTO: Hiển thị 100% toàn bộ tập thể nội bộ công ty không bị cắt cúp -->
        <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-[#111921]">
          <img 
            :src="siteSettings?.teamPhotoUrl || '/images/team-photo.jpg'" 
            alt="Tập thể toàn thể cán bộ nhân viên MHD Valuation" 
            loading="lazy" 
            class="w-full h-auto max-h-[750px] object-contain object-center mx-auto"
          />
        </div>

        <!-- 4 Core Assurance Badges -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div class="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-[#0E1620] border border-slate-200/60 dark:border-white/5">
            <div class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">01</div>
            <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Bảo mật thông tin khách hàng tuyệt đối</span>
          </div>
          <div class="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-[#0E1620] border border-slate-200/60 dark:border-white/5">
            <div class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">02</div>
            <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Khảo sát hiện trường thực tế 100%</span>
          </div>
          <div class="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-[#0E1620] border border-slate-200/60 dark:border-white/5">
            <div class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">03</div>
            <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Kiểm soát rủi ro độc lập 3 cấp độ</span>
          </div>
          <div class="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-[#0E1620] border border-slate-200/60 dark:border-white/5">
            <div class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">04</div>
            <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Hệ thống ngân hàng chấp thuận 100%</span>
          </div>
        </div>

      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- SECTION 3: VISION, MISSION & CORE VALUES (EDITORIAL BENTO GRID)           -->
    <!-- ========================================================================= -->
    <section class="py-20 bg-slate-50 dark:bg-[#0A1016] transition-colors duration-500 relative">
      <div class="container mx-auto px-4 max-w-7xl">
        
        <div class="text-center max-w-3xl mx-auto mb-14">
          <span class="text-xs font-extrabold uppercase tracking-widest text-primary">KIM CHỈ NAM HOẠT ĐỘNG</span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white mt-2">
            Tầm Nhìn Chiến Lược &amp; Giá Trị Cốt Lõi
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
            Định hướng phát triển bền vững tạo lập chuẩn mực dịch vụ thẩm định giá chuyên nghiệp tại Việt Nam.
          </p>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <!-- Bento Box 1: Tầm nhìn (Vision - 6 Cols) -->
          <div class="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-white dark:bg-[#10171F] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
            <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            
            <span class="text-xs font-extrabold uppercase tracking-widest text-primary block mb-1.5">ĐỊNH HƯỚNG DÀI HẠN</span>
            <h3 class="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white mb-3">
              Tầm Nhìn
            </h3>
            
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify font-normal">
              Trở thành thương hiệu thẩm định giá độc lập hàng đầu tại Việt Nam, tiên phong áp dụng hệ thống cơ sở dữ liệu số hóa thị trường tài chính và bất động sản. MHD luôn tâm niệm:
              <strong class="text-primary block mt-2">"Thành công của khách hàng là sự đảm bảo cho phát triển của MHD."</strong>
            </p>
          </div>

          <!-- Bento Box 2: Sứ mệnh (Mission - 6 Cols) -->
          <div class="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-white dark:bg-[#10171F] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
            <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <span class="text-xs font-extrabold uppercase tracking-widest text-amber-500 block mb-1.5">TRÁCH NHIỆM XÃ HỘI</span>
            <h3 class="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white mb-3">
              Sứ Mệnh
            </h3>
            
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify font-normal">
              MHD không chỉ cung cấp các kết quả định giá chính xác, khách quan để bảo vệ quyền lợi hợp pháp của mọi thành phần kinh tế, mà còn tích cực đóng góp xây dựng một môi trường tài chính minh bạch, hỗ trợ khơi thông dòng vốn tín dụng an toàn tại Việt Nam.
            </p>
          </div>

          <!-- Bento Box 3: 4 Giá trị cốt lõi (Core Values - Full 12 Cols) -->
          <div class="lg:col-span-12 rounded-3xl p-8 sm:p-10 bg-white dark:bg-[#10171F] border border-slate-200/80 dark:border-white/10 shadow-sm">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <span class="text-xs font-extrabold uppercase tracking-widest text-primary">CHUẨN MỰC NGHỀ NGHIỆP</span>
                <h3 class="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
                  4 Trụ Cột Giá Trị Cốt Lõi
                </h3>
              </div>
              <span class="text-xs font-semibold text-slate-400">Tuân thủ chuẩn mực IVSC 2024</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <!-- Pillar 1 -->
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-[#0A1016] border border-slate-200/60 dark:border-white/5 space-y-2.5">
                <div class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold text-xs">01</div>
                <h4 class="text-base font-extrabold text-slate-900 dark:text-white">MINH BẠCH</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Rõ ràng trong từng phương pháp tính toán, dữ liệu so sánh có căn cứ kiểm chứng xác thực.
                </p>
              </div>

              <!-- Pillar 2 -->
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-[#0A1016] border border-slate-200/60 dark:border-white/5 space-y-2.5">
                <div class="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-extrabold text-xs">02</div>
                <h4 class="text-base font-extrabold text-slate-900 dark:text-white">CHUẨN XÁC</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Ứng dụng mô hình kinh tế lượng khoa học, giảm thiểu tối đa sai số định giá tài sản thực tế.
                </p>
              </div>

              <!-- Pillar 3 -->
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-[#0A1016] border border-slate-200/60 dark:border-white/5 space-y-2.5">
                <div class="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-extrabold text-xs">03</div>
                <h4 class="text-base font-extrabold text-slate-900 dark:text-white">ĐỘC LẬP</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Đánh giá khách quan, không chịu bất kỳ sức ép hay thỏa hiệp xung đột lợi ích từ bên ngoài.
                </p>
              </div>

              <!-- Pillar 4 -->
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-[#0A1016] border border-slate-200/60 dark:border-white/5 space-y-2.5">
                <div class="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-extrabold text-xs">04</div>
                <h4 class="text-base font-extrabold text-slate-900 dark:text-white">ĐỒNG HÀNH</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Hỗ trợ pháp lý toàn diện, giải trình giá trị trước hội đồng tín dụng và cơ quan ban ngành.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- SECTION 4: EXECUTIVE LEADERSHIP (ELEGANT PRESENTATION)                    -->
    <!-- ========================================================================= -->
    <section class="py-20 bg-white dark:bg-[#070D12] transition-colors duration-500">
      <div class="container mx-auto px-4 max-w-7xl">
        
        <div class="flex flex-col sm:flex-row sm:items-end justify-between items-start gap-4 mb-12">
          <div class="max-w-2xl">
            <span class="text-xs font-extrabold uppercase tracking-widest text-primary">BAN ĐIỀU HÀNH CHIẾN LƯỢC</span>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mt-1.5">
              Hội Đồng Ban Giám Đốc
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
              Các chuyên gia điều hành cấp cao, trực tiếp giám sát và ký duyệt phát hành chứng thư thẩm định giá.
            </p>
          </div>
          
          <div class="shrink-0 pt-2 sm:pt-0">
            <NuxtLink 
              :to="localePath('/doi-ngu-nhan-su')" 
              class="inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-hover whitespace-nowrap transition-colors group"
            >
              <span class="whitespace-nowrap">Xem toàn bộ đội ngũ nhân sự</span>
              <span class="transform group-hover:translate-x-1.5 transition-transform shrink-0">&rarr;</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Leadership Cards Grid: Elegant Executive Presentation -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div 
            v-for="member in leadershipTeam" 
            :key="member.id"
            class="group bg-slate-50/70 dark:bg-[#10171F] rounded-3xl p-6 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <!-- Portrait Container: Centered Circle Avatar with Premium Ring -->
              <div class="relative flex flex-col items-center justify-center pt-2 pb-6">
                <div class="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-primary via-amber-400 to-primary/40 shadow-lg group-hover:scale-105 transition-transform duration-500">
                  <div class="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-[#1A2633]">
                    <img 
                      v-if="member.photo" 
                      :src="member.photo" 
                      :alt="member.name" 
                      loading="lazy" 
                      class="w-full h-full object-cover object-top filter contrast-[1.05]" 
                    />
                    <div v-else class="w-full h-full flex items-center justify-center text-primary text-xl font-black bg-primary/10">
                      {{ getInitials(member.name) }}
                    </div>
                  </div>
                </div>

                <!-- Executive Tag below avatar -->
                <div class="mt-4">
                  <span class="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider">
                    Lãnh Đạo
                  </span>
                </div>
              </div>

              <!-- Information Details -->
              <div class="text-center">
                <h3 class="text-base font-extrabold text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                  {{ member.name }}
                </h3>
                <p class="text-xs font-bold text-primary uppercase tracking-wider mt-1 mb-4">
                  {{ member.position }}
                </p>

                <div class="text-xs text-slate-500 dark:text-slate-400 space-y-1.5 text-center leading-relaxed font-normal">
                  <div v-for="(desc, dIdx) in (member.description ? member.description.split('\n') : [])" :key="dIdx">
                    <p>{{ desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer Experience Badge -->
            <div v-if="member.experience" class="mt-6 pt-3.5 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between text-xs">
              <span class="text-slate-400 font-medium">Kinh nghiệm:</span>
              <span class="text-primary font-bold">{{ member.experience }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- ========================================================================= -->
    <!-- SECTION 5: STRATEGIC CALL TO ACTION                                      -->
    <!-- ========================================================================= -->
    <section class="py-20 bg-slate-50 dark:bg-[#0A1016] transition-colors duration-500 relative">
      <div class="container mx-auto px-4 max-w-5xl">
        <div class="rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#0B131B] to-[#121E2A] text-white relative overflow-hidden shadow-2xl border border-white/10 text-center space-y-6">
          
          <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-amber-400 text-xs font-extrabold tracking-wider uppercase">
            HỢP TÁC CHIẾN LƯỢC CÙNG MHD
          </span>

          <h2 class="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
            Bạn Đang Cần Thẩm Định Tài Sản Phục Vụ Vốn Vay Hoặc Dự Án Đầu Tư?
          </h2>

          <p class="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
            Đội ngũ Thẩm định viên Thẻ Đỏ của MHD sẵn sàng tiếp nhận hồ sơ và báo phí dịch vụ, thời gian khảo sát thực địa trong vòng 120 phút.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 pt-3">
            <NuxtLink 
              :to="localePath('/lien-he')" 
              class="px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              Gửi Yêu Cầu Thẩm Định Ngay
            </NuxtLink>
            
            <a 
              href="tel:02835153516" 
              class="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/15 text-white text-xs font-extrabold uppercase tracking-wider transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Hotline: (028) 3515 3516</span>
            </a>
          </div>

          <!-- Ambient Light Blob -->
          <div class="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n, useLocalePath, useSeoMeta, useHead } from '#imports'
import { usePayload } from '~/composables/usePayload'

const { t } = useI18n()
const localePath = useLocalePath()
const { fetchPosts, fetchGlobal } = usePayload()

// Fetch Global Settings (Team Photo)
const { data: siteSettings } = await fetchGlobal('site-settings')

// Fetch Leadership Team
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

const getInitials = (name) => {
  if (!name) return 'MHD'
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

useHead({
  title: computed(() => t('about.meta_title') || 'Giới Thiệu - MHD Valuation')
})

useSeoMeta({
  title: computed(() => t('about.meta_title') || 'Giới Thiệu - MHD Valuation'),
  ogTitle: computed(() => t('about.meta_title') || 'Giới Thiệu - Công Ty Thẩm Định Giá MHD'),
  description: computed(() => t('about.meta_desc') || 'Giới thiệu về Công ty TNHH Thẩm Định Giá MHD, đội ngũ lãnh đạo, tầm nhìn, sứ mệnh.'),
  ogDescription: computed(() => t('about.meta_desc') || 'Đơn vị thẩm định giá độc lập hàng đầu được Bộ Tài Chính cấp phép hành nghề.'),
  ogImage: '/images/logo-mhd.png'
})
</script>

<style scoped>
/* Page-level styles */
</style>
