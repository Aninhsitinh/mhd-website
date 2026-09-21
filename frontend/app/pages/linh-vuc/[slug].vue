<template>
  <div class="min-h-screen bg-bg">
    <!-- 404 Not Found -->
    <div v-if="!service" class="min-h-screen pt-32 pb-20 bg-bg text-center flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold text-text mb-4">Lĩnh vực không tồn tại</h1>
      <NuxtLink :to="localePath('/linh-vuc')" class="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-all shadow-corporate">
        Về Trang Lĩnh Vực
      </NuxtLink>
    </div>

    <!-- Page Content -->
    <article v-else class="min-h-screen bg-bg">
      <!-- Streamlined Header (Borderless) -->
      <header class="relative pt-32 pb-10 overflow-hidden bg-bg">
        <!-- Ambient Glow -->
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute -top-40 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-4 max-w-7xl relative z-10" data-aos="fade-up">
          <nav class="text-xs text-text-muted mb-4 flex items-center gap-2">
            <NuxtLink :to="localePath('/')" class="hover:text-primary transition-colors">Trang chủ</NuxtLink>
            <span>/</span>
            <NuxtLink :to="localePath('/linh-vuc')" class="hover:text-primary transition-colors">Lĩnh vực</NuxtLink>
            <span>/</span>
            <span class="text-primary font-medium truncate max-w-[250px]" v-html="service.title"></span>
          </nav>

          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary">
              Dịch vụ thẩm định MHD
            </span>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600">
              TIÊU CHUẨN TĐGVN
            </span>
          </div>

          <h1 class="text-3xl md:text-5xl font-display font-bold text-text leading-tight mb-4 max-w-5xl" v-html="service.title"></h1>
          <p class="text-base md:text-lg text-text-secondary leading-relaxed max-w-4xl">
            Cung cấp giải pháp định giá độc lập, trung thực và khách quan, phục vụ đa dạng nhu cầu giao dịch, tín dụng ngân hàng, đầu tư và pháp lý.
          </p>
        </div>
      </header>

      <!-- Main Content Layout (Continuous Flow + Sidebar) -->
      <div class="container mx-auto px-4 max-w-7xl pb-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column (8 cols): Structured Content Sections -->
          <div class="lg:col-span-8 space-y-8">
            
            <!-- Clean Intro Summary Box (Cleaned, no Flatsome trash tags) -->
            <div v-if="introText" class="p-8 md:p-10 rounded-3xl bg-surface shadow-corporate">
              <div class="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-primary mb-3">
                <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                TỔNG QUAN DỊCH VỤ
              </div>
              <h2 class="text-xl md:text-2xl font-bold font-display text-text mb-4">Ý nghĩa & Giá trị thẩm định</h2>
              <div class="text-sm md:text-base text-text-secondary leading-relaxed font-normal bg-bg p-6 rounded-2xl shadow-sm space-y-3" v-html="introText"></div>
            </div>

            <!-- Sections List (Borderless Cards) -->
            <div 
              v-for="(section, idx) in service.sections" 
              :key="idx" 
              class="p-8 md:p-10 rounded-3xl bg-surface shadow-corporate"
            >
              <!-- Section Header: Badge & Title aligned (Borderless) -->
              <div class="flex items-start gap-4 mb-6 pb-2">
                <div class="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 mt-0.5">
                  0{{ idx + 1 }}
                </div>
                <div class="flex-1 min-w-0">
                  <span class="text-[11px] font-mono font-bold uppercase tracking-wider text-primary block mb-1">Hạng mục chi tiết</span>
                  <h3 class="text-lg md:text-xl font-bold font-display text-text leading-snug">{{ section.title }}</h3>
                </div>
              </div>

              <!-- Section Content: Directly flush with card padding, beautifully formatted -->
              <div class="service-content text-sm md:text-base text-text-secondary leading-relaxed" v-html="cleanHtml(section.content)"></div>
            </div>

            <!-- Process Milestone Box (6-Step Standard Workflow) -->
            <div class="p-8 md:p-10 rounded-3xl bg-surface shadow-corporate">
              <div class="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-secondary mb-3">
                <span class="w-2 h-2 rounded-full bg-secondary"></span>
                CHUẨN HÓA QUY TRÌNH
              </div>
              <h3 class="text-lg md:text-xl font-bold font-display text-text mb-6">Quy trình thực hiện thẩm định giá tại MHD</h3>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="p-4 rounded-2xl bg-bg shadow-sm flex items-start gap-3">
                  <span class="w-7 h-7 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">1</span>
                  <div>
                    <h4 class="text-xs font-bold text-text uppercase">Tiếp nhận yêu cầu</h4>
                    <p class="text-[11px] text-text-secondary mt-0.5">Tiếp nhận hồ sơ pháp lý tài sản và mục tiêu thẩm định từ khách hàng.</p>
                  </div>
                </div>

                <div class="p-4 rounded-2xl bg-bg shadow-sm flex items-start gap-3">
                  <span class="w-7 h-7 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">2</span>
                  <div>
                    <h4 class="text-xs font-bold text-text uppercase">Báo phí & Ký hợp đồng</h4>
                    <p class="text-[11px] text-text-secondary mt-0.5">Thống nhất phương án phí, kế hoạch và ký kết hợp đồng dịch vụ.</p>
                  </div>
                </div>

                <div class="p-4 rounded-2xl bg-bg shadow-sm flex items-start gap-3">
                  <span class="w-7 h-7 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">3</span>
                  <div>
                    <h4 class="text-xs font-bold text-text uppercase">Lập kế hoạch thẩm định</h4>
                    <p class="text-[11px] text-text-secondary mt-0.5">Xác định cơ sở giá trị, phương pháp tiếp cận và nhân sự thẩm định viên.</p>
                  </div>
                </div>

                <div class="p-4 rounded-2xl bg-bg shadow-sm flex items-start gap-3">
                  <span class="w-7 h-7 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">4</span>
                  <div>
                    <h4 class="text-xs font-bold text-text uppercase">Khảo sát hiện trường</h4>
                    <p class="text-[11px] text-text-secondary mt-0.5">Thị sát thực địa, lập biên bản khảo sát và đối chiếu dữ liệu thị trường.</p>
                  </div>
                </div>

                <div class="p-4 rounded-2xl bg-bg shadow-sm flex items-start gap-3">
                  <span class="w-7 h-7 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">5</span>
                  <div>
                    <h4 class="text-xs font-bold text-text uppercase">Phân tích & Lập báo cáo</h4>
                    <p class="text-[11px] text-text-secondary mt-0.5">Xử lý mô hình định giá, kiểm tra kiểm toán nội bộ và lập chứng thư.</p>
                  </div>
                </div>

                <div class="p-4 rounded-2xl bg-bg shadow-sm flex items-start gap-3">
                  <span class="w-7 h-7 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">6</span>
                  <div>
                    <h4 class="text-xs font-bold text-text uppercase">Phát hành Chứng thư</h4>
                    <p class="text-[11px] text-text-secondary mt-0.5">Bàn giao Chứng thư và Báo cáo thẩm định giá chính thức cho khách hàng.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column (4 cols): Sticky Service Summary & CTA -->
          <div class="lg:col-span-4 space-y-6">
            <div class="sticky top-28 space-y-6">
              
              <!-- Quick Navigation to other services -->
              <div class="p-6 rounded-3xl bg-surface shadow-corporate">
                <h3 class="text-sm font-bold font-display text-text uppercase tracking-wider font-mono mb-4">
                  Danh mục lĩnh vực
                </h3>
                <div class="space-y-1.5">
                  <NuxtLink 
                    v-for="s in otherServices" 
                    :key="s.slug"
                    :to="localePath(`/linh-vuc/${s.slug}`)"
                    class="flex items-center justify-between p-3 rounded-xl transition-all text-xs font-semibold"
                    :class="s.slug === currentSlug ? 'bg-primary text-white shadow-sm' : 'text-text-secondary hover:text-primary hover:bg-bg'"
                  >
                    <span>{{ s.name }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>

              <!-- Consultation CTA Box (Borderless) -->
              <div class="p-6 rounded-3xl bg-gradient-to-br from-primary to-primary-hover text-white shadow-xl relative overflow-hidden">
                <div class="relative z-10">
                  <span class="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm mb-3">Tư vấn trực tiếp</span>
                  <h4 class="text-lg font-bold font-display leading-snug mb-2">Cần báo giá dịch vụ này?</h4>
                  <p class="text-xs text-white/90 leading-relaxed mb-5">
                    MHD cung cấp mức phí cạnh tranh, thời gian phát hành chứng thư nhanh chóng và đáp ứng khắt khe các yêu cầu bảo mật.
                  </p>
                  <NuxtLink 
                    :to="localePath('/lien-he')" 
                    class="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-primary font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-white/90 transition-all transform hover:-translate-y-0.5"
                  >
                    Yêu cầu báo phí thẩm định
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>

              <!-- Back to list -->
              <div class="text-center">
                <NuxtLink :to="localePath('/linh-vuc')" class="text-xs font-bold text-text-muted hover:text-primary transition-colors inline-flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Quay lại tất cả lĩnh vực
                </NuxtLink>
              </div>

            </div>
          </div>

        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, watchEffect } from 'vue'
import { services } from '~/data/services.js'
import { useLocalePath } from '#imports'

const route = useRoute()
const localePath = useLocalePath()
const currentSlug = computed(() => route.params.slug)
const service = computed(() => services[currentSlug.value] || null)

const otherServices = [
  { slug: 'tham-dinh-gia-bat-dong-san', name: 'Bất động sản' },
  { slug: 'tham-dinh-gia-dong-san', name: 'Động sản & Thiết bị' },
  { slug: 'tham-dinh-gia-doanh-nghiep', name: 'Giá trị Doanh nghiệp' },
  { slug: 'tham-dinh-du-an-dau-tu', name: 'Dự án Đầu tư' },
  { slug: 'tham-dinh-loi-the-thuong-mai', name: 'Lợi thế Thương mại' },
  { slug: 'tham-dinh-tai-san-de-dinh-cu', name: 'Tài sản Định cư' },
]

// Clean HTML and normalize line breaks and formatting
const cleanHtml = (html) => {
  if (!html) return ''
  return html
    .replace(/<\/?(?:div|section|span)[^>]*?(?:row|col|col-inner|ux-)[^>]*?>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/&nbsp;/gi, ' ')
    .trim()
}

const introText = computed(() => {
  if (!service.value?.introHtml) return ''
  return cleanHtml(service.value.introHtml)
})

watchEffect(() => {
  if (service.value) {
    const title = `${service.value.title.replace(/<[^>]*>?/gm, '')} - Lĩnh Vực Thẩm Định MHD`
    useHead({
      title: title,
      meta: [
        { name: 'description', content: `Dịch vụ ${service.value.title} tại MHD Valuation. Độc lập, khách quan, bảo mật và chính xác theo Tiêu chuẩn Thẩm định giá Việt Nam.` }
      ]
    })
  }
})
</script>

<style scoped lang="postcss">
:deep(.service-content ul) {
  @apply list-none space-y-3.5 my-4 pl-0;
}

:deep(.service-content li) {
  @apply relative pl-6 text-text-secondary leading-relaxed text-left block;
}

:deep(.service-content li::before) {
  content: "";
  @apply absolute left-1 top-2.5 w-2 h-2 rounded-full bg-primary/80;
}

:deep(.service-content p) {
  @apply mb-4 leading-relaxed text-left text-text-secondary;
}

:deep(.service-content p:last-child) {
  @apply mb-0;
}

:deep(.service-content strong) {
  @apply text-text font-bold;
}
</style>
