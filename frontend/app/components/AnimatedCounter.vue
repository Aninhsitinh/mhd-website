<template>
  <span ref="counterRef">{{ displayValue }}</span>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 2000
  },
  suffix: {
    type: String,
    default: ''
  }
})

const displayValue = ref('0' + props.suffix)
const counterRef = ref(null)
let hasAnimated = false

const formatNumber = (num) => {
  // Format with dots for thousands if needed, but for now simple string
  if (num >= 10000) return '10.000' + props.suffix
  if (num >= 5000) return '5000' + props.suffix
  return num + props.suffix
}

const animate = () => {
  if (hasAnimated) return
  hasAnimated = true
  
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / props.duration, 1)
    
    // easeOutExpo
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
    
    const currentVal = Math.floor(easeProgress * props.value)
    displayValue.value = formatNumber(currentVal)
    
    if (progress < 1) {
      window.requestAnimationFrame(step)
    } else {
      displayValue.value = formatNumber(props.value)
    }
  }
  window.requestAnimationFrame(step)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animate()
      observer.disconnect()
    }
  }, { threshold: 0.1 })
  
  if (counterRef.value) {
    observer.observe(counterRef.value)
  }
})
</script>
