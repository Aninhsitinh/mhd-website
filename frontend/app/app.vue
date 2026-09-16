<template>
  <NuxtLoadingIndicator color="#ea580c" :height="3" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <FloatingContact />
  <AIChatBot />
  <ExitIntentPopup />
  <ScrollToTop />
</template>
<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
