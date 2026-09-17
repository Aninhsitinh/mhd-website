<template>
  <div class="flex items-center gap-3">
    <span class="text-sm font-semibold text-text-secondary mr-2">{{ $t('share.title') || 'Chia sẻ:' }}</span>
    
    <!-- Facebook -->
    <a 
      :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`" 
      target="_blank" 
      rel="noopener noreferrer"
      class="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors shadow-sm"
      title="Chia sẻ lên Facebook"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
    </a>

    <!-- LinkedIn -->
    <a 
      :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`" 
      target="_blank" 
      rel="noopener noreferrer"
      class="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors shadow-sm"
      title="Chia sẻ lên LinkedIn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    </a>

    <!-- Zalo -->
    <a 
      :href="`https://sp.zalo.me/plugins/share?u=${encodeURIComponent(url)}`" 
      target="_blank" 
      rel="noopener noreferrer"
      class="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-[#0068ff] hover:bg-[#0068ff] hover:text-white transition-colors shadow-sm font-bold text-[9px]"
      title="Chia sẻ qua Zalo"
    >
      Zalo
    </a>

    <!-- Copy Link -->
    <button 
      @click="copyLink"
      class="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-text-secondary hover:bg-text hover:text-surface transition-colors shadow-sm relative group"
      title="Sao chép liên kết"
    >
      <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
      
      <!-- Tooltip -->
      <span class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {{ copied ? 'Đã sao chép!' : 'Sao chép link' }}
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  url: {
    type: String,
    default: ''
  }
})

const url = ref(props.url)
const copied = ref(false)

onMounted(() => {
  if (!url.value && process.client) {
    url.value = window.location.href
  }
})

const copyLink = () => {
  if (!process.client) return
  
  navigator.clipboard.writeText(url.value).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }).catch(err => {
    console.error('Failed to copy link: ', err)
  })
}
</script>
