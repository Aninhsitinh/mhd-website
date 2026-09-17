<template>
  <div class="min-h-screen bg-bg pb-24">
    <!-- Corporate Careers Hero Header -->
    <header class="pt-32 pb-16 bg-bg notranslate">
      <div class="container mx-auto px-4 max-w-6xl">
        <nav class="text-xs text-text-muted mb-4 flex items-center gap-2 font-mono">
          <NuxtLink to="/" class="hover:text-primary transition-colors">TRANG CHỦ</NuxtLink>
          <span>/</span>
          <NuxtLink to="/tuyen-dung" class="hover:text-primary transition-colors">TUYỂN DỤNG</NuxtLink>
          <span>/</span>
          <span class="text-primary font-bold">CƠ HỘI NGHỀ NGHIỆP</span>
        </nav>

        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div class="max-w-2xl">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
              <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Gia Nhập Đội Ngũ Định Giá Tiên Phong
            </span>
            <h1 class="text-3xl md:text-5xl font-display font-bold text-text leading-tight uppercase">
              Cơ Hội Nghề Nghiệp
            </h1>
            <p class="text-text-secondary mt-3 text-sm md:text-base leading-relaxed">
              Phát triển sự nghiệp cùng MHD Valuation — Môi trường thẩm định giá chuyên nghiệp, minh bạch với lộ trình thăng tiến rõ ràng và cơ hội tiếp cận các dự án tài chính quy mô lớn.
            </p>
          </div>

          <!-- Quick Navigation Pill Toggle -->
          <div class="flex items-center gap-2.5 p-1.5 bg-surface rounded-full shadow-corporate shrink-0 self-start lg:self-auto">
            <NuxtLink 
              to="/tuyen-dung" 
              class="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-primary transition-all"
            >
              Văn Hóa &amp; Quyền Lợi
            </NuxtLink>
            <NuxtLink 
              to="/co-hoi-nghe-nghiep" 
              class="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-white shadow-md transition-all"
            >
              Vị Trí Đang Mở ({{ postsData?.length || 3 }})
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Key Employee Benefits Highlights -->
    <section class="pb-12 notranslate">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-6 rounded-3xl bg-surface shadow-corporate flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-bold font-display text-text">Đào Tạo Chứng Chỉ</h4>
              <p class="text-xs text-text-secondary mt-1 leading-relaxed">Hỗ trợ thi Thẻ Thẩm định viên Bộ Tài chính.</p>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-surface shadow-corporate flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-bold font-display text-text">Lộ Trình Bứt Phá</h4>
              <p class="text-xs text-text-secondary mt-1 leading-relaxed">Đánh giá năng lực và thăng tiến định kỳ 6 tháng.</p>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-surface shadow-corporate flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-bold font-display text-text">Đội Ngũ Chuyên Gia</h4>
              <p class="text-xs text-text-secondary mt-1 leading-relaxed">Làm việc trực tiếp cùng chuyên gia đầu ngành.</p>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-surface shadow-corporate flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-bold font-display text-text">Phúc Lợi Toàn Diện</h4>
              <p class="text-xs text-text-secondary mt-1 leading-relaxed">Bảo hiểm sức khỏe, du lịch nghỉ dưỡng hàng năm.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Openings Section -->
    <section class="py-6 notranslate">
      <div class="container mx-auto px-4 max-w-6xl">
        
        <!-- Controls: Search & Smart Filter Pills (100% Borderless) -->
        <div class="p-4 md:p-6 rounded-3xl bg-surface shadow-corporate mb-10 space-y-4">
          
          <div class="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <!-- Search Input -->
            <div class="relative flex-1">
              <input
                v-model="filters.keyword"
                type="text"
                placeholder="Tìm kiếm vị trí tuyển dụng (Thẩm định giá, Kinh doanh, Thực tập...)"
                class="w-full pl-11 pr-4 py-3 rounded-2xl bg-bg text-text text-sm placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary shadow-inner transition-all"
              />
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-text-muted absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <button 
                v-if="filters.keyword" 
                @click="filters.keyword = ''" 
                class="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text text-xs"
              >
                ✕
              </button>
            </div>

            <!-- Total Results Counter -->
            <div class="px-4 text-xs font-mono font-bold text-text-muted text-right md:text-left self-center">
              Đang hiển thị: <span class="text-primary font-bold">{{ jobs.length }}</span> vị trí
            </div>
          </div>

          <!-- Location Filters Pills -->
          <div class="flex flex-wrap items-center gap-2 pt-2">
            <span class="text-xs text-text-muted font-bold font-mono uppercase mr-2">Địa điểm:</span>
            <button
              v-for="loc in locationOptions"
              :key="loc.value"
              @click="filters.location = loc.value"
              class="px-4 py-1.5 rounded-full text-xs font-bold transition-all"
              :class="filters.location === loc.value ? 'bg-primary text-white shadow-sm' : 'bg-bg text-text-secondary hover:text-primary'"
            >
              {{ loc.label }}
            </button>
          </div>

        </div>

        <!-- Openings Display: Interactive Role Cards -->
        <div v-if="pending" class="space-y-4">
          <div v-for="i in 3" :key="i" class="bg-surface rounded-3xl h-44 animate-pulse shadow-corporate"></div>
        </div>
        
        <div v-else-if="jobs.length > 0" class="space-y-5">
          <div 
            v-for="job in jobs" 
            :key="job.id" 
            class="group p-6 md:p-8 rounded-3xl bg-surface shadow-corporate hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <!-- Job Info Left -->
              <div class="space-y-3 flex-1 min-w-0">
                <!-- Badges Row -->
                <div class="flex flex-wrap items-center gap-2.5">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-primary/10 text-primary">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {{ getJobType(job) }}
                  </span>
                  
                  <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium bg-bg text-text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {{ getDiaDiem(job.categories) }}
                  </span>

                  <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium bg-bg text-text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ getQuantity(job) }}
                  </span>
                </div>

                <!-- Job Title -->
                <h3 class="text-xl md:text-2xl font-bold font-display text-text group-hover:text-primary transition-colors">
                  <NuxtLink :to="`/co-hoi-nghe-nghiep/${job.slug}`" v-html="job.title"></NuxtLink>
                </h3>

                <!-- Short Clean Excerpt -->
                <p class="text-xs md:text-sm text-text-secondary line-clamp-2 leading-relaxed max-w-3xl">
                  {{ cleanJobExcerpt(job) }}
                </p>
              </div>

              <!-- Action Right -->
              <div class="flex sm:flex-row md:flex-col items-stretch sm:items-center md:items-end gap-3 shrink-0 pt-4 md:pt-0">
                <NuxtLink 
                  :to="`/co-hoi-nghe-nghiep/${job.slug}`" 
                  class="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-primary text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary-hover transition-all text-center inline-flex items-center justify-center gap-2 group-hover:scale-105"
                >
                  Xem Mô Tả &amp; Ứng Tuyển
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </NuxtLink>
                <span class="text-[11px] text-text-muted font-mono hidden md:block text-right">
                  Cập nhật: {{ formatDate(job.date) }}
                </span>
              </div>

            </div>
          </div>
        </div>
        
        <!-- Empty State -->
        <div v-else class="p-16 text-center bg-surface rounded-3xl shadow-corporate max-w-xl mx-auto">
          <div class="w-16 h-16 rounded-full bg-surface-muted flex items-center justify-center mx-auto text-text-muted mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-base font-bold text-text mb-2">Chưa tìm thấy vị trí phù hợp</h3>
          <p class="text-xs text-text-secondary mb-5 leading-relaxed">
            Hiện tại không có vị trí nào khớp với tiêu chí tìm kiếm của bạn. Bạn vẫn có thể gửi CV chủ động để lưu vào hồ sơ nhân tài của MHD.
          </p>
          <div class="flex items-center justify-center gap-3">
            <button 
              @click="filters.keyword = ''; filters.location = ''" 
              class="px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-md"
            >
              Xem Tất Cả Vị Trí
            </button>
            <NuxtLink 
              to="/tuyen-dung" 
              class="px-5 py-2.5 rounded-full bg-bg text-text text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors"
            >
              Gửi Hồ Sơ Dự Tuyển
            </NuxtLink>
          </div>
        </div>

      </div>
    </section>

    <!-- Talent Pool Callout Banner -->
    <section class="pt-8 notranslate">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="p-8 md:p-12 rounded-3xl bg-surface shadow-corporate flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="space-y-2 text-center md:text-left">
            <h3 class="text-xl md:text-2xl font-bold font-display text-text">
              Chưa tìm thấy vị trí tuyển dụng phù hợp?
            </h3>
            <p class="text-xs md:text-sm text-text-secondary max-w-2xl leading-relaxed">
              Hãy gửi CV của bạn vào ngân hàng nhân tài của MHD Valuation. Bộ phận Tuyển dụng sẽ chủ động liên hệ khi có cơ hội tương thích với năng lực của bạn.
            </p>
          </div>
          <NuxtLink 
            to="/tuyen-dung" 
            class="px-8 py-3.5 rounded-2xl bg-bg text-text hover:text-primary font-bold text-xs uppercase tracking-wider shadow-corporate hover:shadow-corporate-hover transition-all shrink-0 inline-flex items-center gap-2"
          >
            <span>Gửi Hồ Sơ Dự Tuyển</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

const { fetchPosts } = usePayload()

// Fetch job listings
const { data: postsData, pending } = await fetchPosts({ per_page: 50 }, 'jobs')

const filters = reactive({
  keyword: '',
  location: ''
})

const locationOptions = [
  { value: '', label: 'Tất cả địa điểm' },
  { value: 'hcm', label: 'Hồ Chí Minh' },
  { value: 'dn', label: 'Đà Nẵng' },
  { value: 'qn', label: 'Quy Nhơn' },
]

const LOCATION_CATEGORY = {
  hcm: 12,
  dn: 13,
  qn: 14
}

const stripHtml = (value = '') => value.replace(/<[^>]*>?/gm, '').toLowerCase()

const jobs = computed(() => {
  const list = postsData.value || []
  const keyword = filters.keyword.trim().toLowerCase()
  const locationCat = filters.location ? LOCATION_CATEGORY[filters.location] : null

  return list.filter((job) => {
    if (keyword && !stripHtml(job.title).includes(keyword) && !stripHtml(job.excerpt || '').includes(keyword)) {
      return false
    }
    if (locationCat) {
      const cats = job.categories || []
      const hasAnyLocation = cats.some((id) => id === 12 || id === 13 || id === 14)
      if (filters.location === 'hcm') {
        if (!(cats.includes(12) || !hasAnyLocation)) return false
      } else if (!cats.includes(locationCat)) {
        return false
      }
    }
    return true
  })
})

const getDiaDiem = (catIds) => {
  if (!catIds || !Array.isArray(catIds)) return 'Hồ Chí Minh'
  const locs = []
  if (catIds.includes(12)) locs.push('TP. Hồ Chí Minh')
  if (catIds.includes(14)) locs.push('Quy Nhơn')
  if (catIds.includes(13)) locs.push('Đà Nẵng')
  
  return locs.length > 0 ? locs.join(', ') : 'TP. Hồ Chí Minh'
}

const getJobType = (job) => {
  if (/thực tập/i.test(job.title || '')) return 'Thực tập sinh'
  if (/chuyên viên/i.test(job.title || '')) return 'Toàn thời gian'
  return 'Toàn thời gian'
}

const getQuantity = (job) => {
  const text = (job.excerpt || '') + (job.content || '')
  const match = text.match(/Số lượng:\s*([^\n\.<]+)/i)
  if (match && match[1]) {
    return `Tuyển: ${match[1].trim()}`
  }
  return 'Tuyển dụng mở'
}

const cleanJobExcerpt = (job) => {
  let ex = job.excerpt || ''
  ex = ex.replace(/I\s*-\s*Mô tả công việc:?/gi, '')
         .replace(/Số lượng:.*?(Địa điểm làm việc:|$)/gi, '')
         .replace(/Địa điểm làm việc:.*?(I|$)/gi, '')
         .replace(/&nbsp;/g, ' ')
         .trim()
  return ex || 'Xem chi tiết tiêu chuẩn tuyển dụng, quyền lợi phúc lợi và hướng dẫn nộp hồ sơ ứng tuyển tại MHD Valuation.'
}

const formatDate = (dateString) => {
  if (!dateString) return 'Đang tuyển'
  try {
    const d = new Date(dateString)
    if (isNaN(d.getTime())) return 'Đang tuyển'
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(d)
  } catch {
    return 'Đang tuyển'
  }
}

useHead({
  title: 'Cơ Hội Nghề Nghiệp & Tuyển Dụng - MHD Valuation',
  meta: [
    {
      name: 'description',
      content: 'Khám phá các vị trí tuyển dụng chuyên viên thẩm định giá, nhân viên phát triển kinh doanh và sinh viên thực tập tại MHD Valuation trên toàn quốc.'
    }
  ]
})
</script>
