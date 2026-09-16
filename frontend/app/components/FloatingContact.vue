<template>
  <div class="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-4 print:hidden">
    <!-- Zalo Button -->
    <a href="https://zalo.me/3920702626611603828" target="_blank" class="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0068ff] text-white shadow-lg shadow-[#0068ff]/40 hover:bg-[#0055d4] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
      <!-- Pulsing Rings -->
      <span class="absolute inset-0 rounded-full animate-ping bg-[#0068ff] opacity-75"></span>
      <span class="absolute -inset-2 rounded-full border border-[#0068ff]/30 animate-pulse"></span>
      <span class="absolute -inset-4 rounded-full border border-[#0068ff]/20 animate-pulse delay-75"></span>
      
      <!-- Icon (Text for Zalo since it's cleaner) -->
      <span class="font-bold text-sm tracking-wider relative z-10 group-hover:scale-110 transition-transform">Zalo</span>
    </a>

    <!-- Phone Button -->
    <a href="tel:02835153516" class="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:bg-primary-light hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
      <!-- Pulsing Rings -->
      <span class="absolute inset-0 rounded-full animate-ping bg-primary opacity-75"></span>
      <span class="absolute -inset-2 rounded-full border border-primary/30 animate-pulse"></span>
      <span class="absolute -inset-4 rounded-full border border-primary/20 animate-pulse delay-75"></span>
      
      <!-- Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </a>
  </div>
</template>
