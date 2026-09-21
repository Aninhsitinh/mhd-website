<template>
  <NuxtLoadingIndicator color="#ea580c" :height="3" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ReadingProgressBar />
  <FloatingContact />
  <AIChatBot />
  <ExitIntentPopup />
  <ScrollToTop />
</template>

<script setup>
import { getOrganizationSchema, getWebSiteSchema } from '~/utils/seoSchema'

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(getOrganizationSchema())
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify(getWebSiteSchema())
    }
  ]
})
</script>

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
