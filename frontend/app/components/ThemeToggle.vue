<template>
  <button
    @click="toggleTheme"
    type="button"
    class="relative group flex items-center justify-center w-10 h-10 rounded-full bg-slate-100/80 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-700 dark:text-amber-300 border border-slate-200/80 dark:border-white/10 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
    :aria-label="isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'"
    :title="isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'"
  >
    <!-- Sun Icon (Active when dark mode) -->
    <svg 
      v-if="isDark" 
      xmlns="http://www.w3.org/2000/svg" 
      class="h-5 w-5 transform transition-transform duration-500 rotate-0 hover:rotate-90 text-amber-400" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>

    <!-- Moon Icon (Active when light mode) -->
    <svg 
      v-else 
      xmlns="http://www.w3.org/2000/svg" 
      class="h-5 w-5 transform transition-transform duration-500 rotate-0 hover:-rotate-12 text-slate-700" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>

    <!-- Subtle Ambient Glow -->
    <span class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-primary/10 dark:bg-amber-400/10 blur-sm"></span>
  </button>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed(() => {
  return colorMode.value === 'dark'
})

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
