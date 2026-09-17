<template>
  <NuxtLink 
    :to="`/tai-lieu/${doc.slug}`"
    class="group flex flex-col h-full bg-surface rounded-3xl p-7 transition-all duration-500 shadow-corporate hover:shadow-2xl hover:-translate-y-1.5 relative overflow-hidden"
  >
    <!-- Top Header: Badge & Date / Category -->
    <div class="flex items-center justify-between gap-3 mb-5">
      <span 
        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider"
        :class="isLegalDoc(doc) ? 'bg-primary/10 text-primary' : 'bg-surface-muted text-text-secondary'"
      >
        <span class="w-1.5 h-1.5 rounded-full" :class="isLegalDoc(doc) ? 'bg-primary' : 'bg-text-muted'"></span>
        {{ getCategoryLabel(doc) }}
      </span>

      <span class="text-[11px] text-text-muted font-mono flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {{ formatDate(doc.date) }}
      </span>
    </div>

    <!-- Document Symbol / Icon & Title -->
    <div class="flex items-start gap-4 mb-4">
      <div 
        class="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
        :class="isLegalDoc(doc) ? 'bg-primary text-white shadow-md' : 'bg-surface-muted text-primary'"
      >
        <!-- Legal Scale / Document Icon -->
        <svg v-if="isLegalDoc(doc)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>

      <div class="min-w-0 flex-1">
        <h3 
          class="text-base font-bold text-text group-hover:text-primary transition-colors leading-snug line-clamp-2"
          v-html="doc.title"
        ></h3>
        <p class="text-[11px] text-text-muted mt-1 font-mono">
          {{ getDocIssuer(doc) }}
        </p>
      </div>
    </div>

    <!-- Brief Description / Excerpt -->
    <p class="text-xs text-text-secondary line-clamp-3 leading-relaxed mb-6 flex-grow">
      {{ getCleanExcerpt(doc) }}
    </p>

    <!-- Bottom Action Footer (Borderless) -->
    <div class="pt-4 mt-auto flex items-center justify-between text-xs">
      <span class="text-[11px] text-text-muted font-medium flex items-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Văn bản chuẩn hóa
      </span>
      <span class="text-primary font-bold inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
        Tra cứu nội dung
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  doc: {
    type: Object,
    required: true
  }
})

const isLegalDoc = (doc) => {
  return doc.categories?.includes(94) || 
         /thông tư|quyết định|nghị định|luật/i.test(doc.title || '')
}

const getCategoryLabel = (doc) => {
  if (doc.categories?.includes(94) || /thông tư|quyết định|nghị định/i.test(doc.title || '')) {
    return 'Văn bản pháp luật'
  }
  if (doc.categories?.includes(96) || /tiêu chuẩn|tài liệu/i.test(doc.title || '')) {
    return 'Tiêu chuẩn & Nghiệp vụ'
  }
  return 'Tài liệu lưu trữ'
}

const getDocIssuer = (doc) => {
  const t = doc.title || ''
  if (/BTC/i.test(t) || /bộ tài chính/i.test(doc.content || '')) {
    return 'Cơ quan ban hành: Bộ Tài chính'
  }
  if (/chính phủ/i.test(doc.content || '')) {
    return 'Cơ quan ban hành: Chính phủ'
  }
  return 'Tài liệu nghiên cứu chuyên ngành MHD'
}

const getCleanExcerpt = (doc) => {
  let ex = doc.excerpt || ''
  ex = ex.replace(/BỘ TÀI CHÍNH/gi, '')
         .replace(/CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM/gi, '')
         .replace(/Độc lập - Tự do - Hạnh phúc/gi, '')
         .replace(/_+/g, '')
         .replace(/&#8212;/g, '')
         .replace(/&nbsp;/g, ' ')
         .trim()
  return ex || 'Xem chi tiết toàn văn văn bản pháp lý và các điều khoản hướng dẫn nghiệp vụ thẩm định giá tại MHD Valuation.'
}

const formatDate = (dateString) => {
  if (!dateString) return 'Lưu hành hiện hành'
  try {
    const d = new Date(dateString)
    if (isNaN(d.getTime())) return 'Lưu hành hiện hành'
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(d)
  } catch {
    return 'Lưu hành hiện hành'
  }
}
</script>
