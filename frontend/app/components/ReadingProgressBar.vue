<template>
  <div 
    class="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none transition-opacity duration-300"
    :class="scrollPercent > 1 ? 'opacity-100' : 'opacity-0'"
  >
    <div 
      class="h-full bg-primary transition-all duration-100 ease-out"
      :style="{ width: `${scrollPercent}%` }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollPercent = ref(0)

const updateScrollProgress = () => {
  if (typeof window === 'undefined') return
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  if (docHeight > 0) {
    scrollPercent.value = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
  updateScrollProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>
