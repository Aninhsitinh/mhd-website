import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('magnetic', {
    mounted(el) {
      if (!process.client) return;
      el.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
      
      const onMouseMove = (e) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        // Calculate pull strength
        const maxPull = 15 // pixels
        const pullX = (x / (rect.width / 2)) * maxPull
        const pullY = (y / (rect.height / 2)) * maxPull
        
        el.style.transform = `translate(${pullX}px, ${pullY}px)`
      }
      
      const onMouseLeave = () => {
        el.style.transform = `translate(0px, 0px)`
      }

      el.addEventListener('mousemove', onMouseMove, { passive: true })
      el.addEventListener('mouseleave', onMouseLeave, { passive: true })
      
      // Store functions for cleanup
      el._magneticCleanup = () => {
        el.removeEventListener('mousemove', onMouseMove)
        el.removeEventListener('mouseleave', onMouseLeave)
      }
    },
    unmounted(el) {
      if (!process.client) return;
      if (el._magneticCleanup) {
        el._magneticCleanup()
      }
    },
    getSSRProps(binding, vnode) {
      return {}
    }
  })
})
