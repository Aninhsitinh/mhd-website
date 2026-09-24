<template>
  <div class="min-h-screen bg-bg">
    <!-- Corporate Hero Header (Borderless) -->
    <header class="pt-32 pb-14 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl">
        <nav class="text-xs text-text-muted mb-4 flex items-center gap-2">
          <NuxtLink :to="localePath('/')" class="hover:text-primary transition-colors">{{ $t('nav.home') }}</NuxtLink>
          <span>/</span>
          <span class="text-text-secondary">{{ $t('nav.services') || 'Lĩnh vực' }}</span>
        </nav>
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-3">
              Dịch vụ thẩm định chuyên sâu
            </div>
            <h1 class="text-3xl md:text-5xl font-display font-bold text-text leading-tight uppercase">Lĩnh Vực Thẩm Định Giá</h1>
            <p class="text-text-secondary max-w-2xl mt-3 text-sm md:text-base leading-relaxed">
              MHD cung cấp hệ thống giải pháp định giá toàn diện, độc lập và khách quan cho mọi nhóm tài sản theo Tiêu chuẩn Thẩm định giá Việt Nam (TĐGVN) và thông lệ quốc tế.
            </p>
          </div>
          <!-- Trust Badge Pill -->
          <div class="flex items-center gap-6 py-3 px-6 bg-surface rounded-2xl shadow-sm border border-black/5 dark:border-white/5">
            <div class="text-center">
              <div class="text-2xl font-bold font-display text-primary">06</div>
              <div class="text-xs text-text-muted uppercase font-medium">Lĩnh vực cốt lõi</div>
            </div>
            <div class="w-px h-8 bg-surface-muted"></div>
            <div class="text-center">
              <div class="text-2xl font-bold font-display text-text">100%</div>
              <div class="text-xs text-text-muted uppercase font-medium">Pháp lý chuẩn mực</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Services Grid Section (Borderless Clean Cards) -->
    <section class="py-6 pb-24 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <NuxtLink 
            v-for="(service, idx) in serviceList" 
            :key="service.slug"
            :to="localePath(`/linh-vuc/${service.slug}`)" 
            class="group flex flex-col h-full bg-surface rounded-2xl overflow-hidden shadow-corporate hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative border border-black/5 dark:border-white/5"
          >
            <!-- Top Image Visual with Gradient -->
            <div class="relative aspect-[16/10] overflow-hidden bg-surface-muted">
              <img 
                :src="service.image" 
                :alt="service.name" 
                loading="lazy" 
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <!-- Number badge on top left -->
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white shadow-sm">
                  0{{ idx + 1 }}
                </span>
              </div>

              <!-- Pill tags on image bottom -->
              <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span class="text-white text-base font-bold font-display uppercase tracking-wide drop-shadow-md">
                  {{ service.name }}
                </span>
              </div>
            </div>

            <!-- Content Details (Always visible, clean, readable) -->
            <div class="p-6 md:p-8 flex flex-col flex-grow justify-between space-y-4 bg-surface">
              <div>
                <p class="text-xs md:text-sm text-text-secondary leading-relaxed line-clamp-3 mb-4">
                  {{ service.desc }}
                </p>

                <!-- Key Object Pills -->
                <div class="space-y-2 text-xs">
                  <div class="flex items-center gap-2 text-text-secondary">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span class="truncate font-medium text-text">{{ service.highlight }}</span>
                  </div>
                  <div class="flex items-center gap-2 text-text-muted">
                    <span class="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                    <span class="truncate">{{ service.purpose }}</span>
                  </div>
                </div>
              </div>

              <!-- Bottom Action -->
              <div class="pt-4 flex items-center justify-between text-xs font-bold mt-auto bg-surface border-t border-black/5 dark:border-white/5">
                <span class="text-xs text-text-muted uppercase tracking-wider font-medium">Tiêu chuẩn TĐGVN</span>
                <span class="text-primary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Xem chi tiết
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </NuxtLink>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLocalePath } from '#imports'

const localePath = useLocalePath()

useHead({
  title: 'Lĩnh Vực Thẩm Định Giá - MHD Valuation',
  meta: [
    { name: 'description', content: 'Các lĩnh vực thẩm định giá chuyên sâu của MHD: Bất động sản, Động sản, Doanh nghiệp M&A, Dự án đầu tư, Lợi thế thương mại và Định cư.' }
  ]
})

const serviceList = [
  {
    slug: 'tham-dinh-gia-bat-dong-san',
    name: 'Bất động sản',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    desc: 'Định giá quyền sử dụng đất, nhà ở, dự án khu đô thị, cao ốc văn phòng, trung tâm thương mại và khu công nghiệp.',
    highlight: 'Đất dự án, KĐT, TTTM, Cao ốc văn phòng',
    purpose: 'Thế chấp tín dụng, chuyển nhượng & M&A'
  },
  {
    slug: 'tham-dinh-gia-dong-san',
    name: 'Động sản & Thiết bị',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    desc: 'Thẩm định máy móc thiết bị, dây chuyền sản xuất công nghệ cao, phương tiện vận tải đường bộ và tàu biển chuyên dụng.',
    highlight: 'Dây chuyền sản xuất, máy móc, tàu thuyền',
    purpose: 'Bảo lãnh hạn mức ngân hàng, xác định giá thành'
  },
  {
    slug: 'tham-dinh-gia-doanh-nghiep',
    name: 'Giá trị Doanh nghiệp',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    desc: 'Đánh giá toàn diện giá trị tài sản hữu hình và vô hình của doanh nghiệp phục vụ cổ phần hóa, niêm yết và M&A.',
    highlight: 'Cổ phần, cổ phiếu, M&A và liên doanh vốn',
    purpose: 'Cổ phần hóa, phát hành cổ phiếu, tái cơ cấu'
  },
  {
    slug: 'tham-dinh-du-an-dau-tu',
    name: 'Dự án Đầu tư',
    image: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    desc: 'Phân tích tính khả thi tài chính, chiết khấu dòng tiền, đánh giá suất sinh lời và rủi ro phương án đầu tư.',
    highlight: 'Mô hình chiết khấu DCF, NPV, IRR dự án',
    purpose: 'Đàm phán góp vốn, quyết định đầu tư an toàn'
  },
  {
    slug: 'tham-dinh-loi-the-thuong-mai',
    name: 'Lợi thế Thương mại',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    desc: 'Định lượng tài sản vô hình tiềm ẩn: nhãn hiệu, thương hiệu độc quyền, sáng chế công nghệ, quyền thuê và uy tín kinh doanh.',
    highlight: 'Thương hiệu, sáng chế, quyền khai thác',
    purpose: 'Nhượng quyền, gọi vốn đầu tư, định giá vô hình'
  },
  {
    slug: 'tham-dinh-tai-san-de-dinh-cu',
    name: 'Tài sản Định cư',
    image: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    desc: 'Thẩm định hồ sơ giá trị tài sản chuẩn quốc tế phục vụ chứng minh năng lực tài chính xin visa định cư, du học và đầu tư nước ngoài.',
    highlight: 'Hồ sơ chứng minh tài chính quốc tế',
    purpose: 'Hồ sơ định cư nước ngoài, du học, đầu tư di trú'
  }
]
</script>
