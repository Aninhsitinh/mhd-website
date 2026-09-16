import { onMounted, onUnmounted } from 'vue'

export const useScrollReveal = (options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) => {
  let observer = null

  const observeElements = () => {
    if (typeof window === 'undefined') return

    const elements = document.querySelectorAll('.reveal-on-scroll')
    
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }, options)

    elements.forEach(el => observer.observe(el))
  }

  onMounted(() => {
    observeElements()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  // Expose a way to re-trigger if DOM changes
  return {
    reobserve: observeElements
  }
}
