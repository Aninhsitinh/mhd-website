import { ref, onMounted, onUnmounted } from 'vue'

export const useScrollProgress = () => {
  const progress = ref(0)

  const updateProgress = () => {
    if (typeof window === 'undefined') return
    
    // Calculate how far down the user has scrolled
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    
    // Total scrollable area
    const maxScroll = documentHeight - windowHeight
    
    // Prevent division by zero or negative values
    if (maxScroll <= 0) {
      progress.value = 100
      return
    }
    
    // Calculate percentage (0 to 100)
    progress.value = Math.min(100, Math.max(0, (scrollPosition / maxScroll) * 100))
  }

  onMounted(() => {
    window.addEventListener('scroll', updateProgress, { passive: true })
    // Initial calculation
    updateProgress()
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', updateProgress)
    }
  })

  return { progress }
}
