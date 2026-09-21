<template>
  <div class="min-h-screen bg-bg">
    <!-- Corporate Header -->
    <header class="pt-32 pb-16 bg-bg">
      <div class="container mx-auto px-4 max-w-6xl">
        <nav class="text-xs text-text-muted mb-3">
          <NuxtLink :to="localePath('/')" class="hover:text-primary transition-colors">Trang chủ</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-text-secondary">{{ $t('nav.contact') || 'Liên hệ' }}</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-display font-bold text-text leading-tight uppercase">{{ $t('contact.title') }}</h1>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container mx-auto px-4 pb-20 md:pb-28">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <!-- Contact Info -->
          <div class="bg-surface rounded-3xl p-8 sm:p-10 shadow-corporate flex flex-col justify-between">
            <div>
              <h2 class="text-2xl md:text-3xl font-bold text-primary mb-8">{{ $t('contact.company_name') }}</h2>
              
              <div class="space-y-6">
                <!-- Address -->
                <div class="flex items-start gap-4 group">
                  <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-base font-bold text-text mb-1">{{ $t('contact.headquarters') }}</h3>
                    <p class="text-text-secondary text-sm leading-relaxed">{{ $t('contact.address') }}</p>
                  </div>
                </div>

                <!-- Hotline -->
                <div class="flex items-start gap-4 group">
                  <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-base font-semibold text-text mb-1">{{ $t('contact.hotline') }}</h3>
                    <a href="tel:02835153516" class="text-text-secondary hover:text-primary font-medium transition-colors text-sm">(028) 3515 3516</a>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start gap-4 group">
                  <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-base font-semibold text-text mb-1">{{ $t('contact.email') }}</h3>
                    <a href="mailto:info@mhd.com.vn" class="text-text-secondary hover:text-primary transition-colors text-sm">info@mhd.com.vn</a>
                  </div>
                </div>

                <!-- Tax -->
                <div class="flex items-start gap-4 group">
                  <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-base font-semibold text-text mb-1">{{ $t('contact.tax_code') }}</h3>
                    <p class="text-text-secondary text-sm">0312231570</p>
                  </div>
                </div>

                <!-- Bank -->
                <div class="flex items-start gap-4 group">
                  <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-base font-semibold text-text mb-1">{{ $t('contact.bank') }}</h3>
                    <p class="text-text-secondary text-sm">{{ $t('contact.bank_desc') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-surface rounded-3xl p-8 sm:p-10 shadow-corporate">
            <h2 class="text-2xl font-bold text-text mb-6">{{ $t('contact.form.title') }}</h2>
            
            <form @submit.prevent="submitForm" class="space-y-4">
              <!-- Name -->
              <div>
                <input 
                  type="text" 
                  v-model="formData.name"
                  :placeholder="$t('contact.form.name_placeholder')" 
                  class="w-full px-4 py-3.5 min-h-[48px] text-base sm:text-sm rounded-xl bg-bg text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted"
                  :class="{ 'ring-2 ring-red-500': errors.name }"
                />
              </div>
              
              <!-- Email and Phone -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="email" 
                    v-model="formData.email"
                    :placeholder="$t('contact.form.email_placeholder')" 
                    class="w-full px-4 py-3.5 min-h-[48px] text-base sm:text-sm rounded-xl bg-bg text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted"
                    :class="{ 'ring-2 ring-red-500': errors.email }"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    v-model="formData.phone"
                    :placeholder="$t('contact.form.phone_placeholder')" 
                    class="w-full px-4 py-3.5 min-h-[48px] text-base sm:text-sm rounded-xl bg-bg text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted"
                    :class="{ 'ring-2 ring-red-500': errors.phone }"
                  />
                </div>
              </div>
              
              <!-- Message -->
              <div>
                <textarea 
                  v-model="formData.message"
                  :placeholder="$t('contact.form.message_placeholder')" 
                  rows="4"
                  class="w-full px-4 py-3.5 text-base sm:text-sm rounded-xl bg-bg text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-text-muted"
                  :class="{ 'ring-2 ring-red-500': errors.message }"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-corporate hover:shadow-corporate-glow transform hover:-translate-y-0.5 active:scale-[0.99] flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isSubmitting ? $t('contact.form.submitting') : $t('contact.form.submit') }}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
    

    <!-- Branches Section -->
    <div class="container mx-auto px-4 pb-16 md:pb-20">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-2xl md:text-4xl font-bold text-text">{{ $t('contact.branch_system') }}</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div v-for="(branch, index) in branches" :key="index" class="bg-surface rounded-2xl p-6 shadow-corporate hover:shadow-corporate-hover transition-all duration-300 group flex flex-col">
          <h3 class="text-xl font-bold text-primary mb-4 pb-1 transition-colors">{{ branch.name }}</h3>
          
          <div class="space-y-4 flex-1 flex flex-col justify-between">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <p class="text-sm text-text-secondary leading-relaxed">{{ branch.address }}</p>
            </div>
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <p class="text-sm text-text-secondary font-medium">{{ branch.phone }}</p>
            </div>
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <p class="text-sm text-text-secondary truncate"><a :href="'mailto:' + branch.email" class="hover:text-primary transition-colors">{{ branch.email }}</a></p>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto mt-16 p-6 bg-surface shadow-corporate rounded-2xl">
        <p class="text-sm text-text-secondary italic leading-relaxed text-center">
          <strong class="text-text">{{ $t('contact.notice') }}</strong> {{ $t('contact.notice_desc') }}
        </p>
      </div>
    </div>

    <!-- Floating Toast Notification -->
    <Transition name="toast">
      <div v-if="submitStatus" 
           class="fixed bottom-8 right-8 z-50 p-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[300px] max-w-sm backdrop-blur-md"
           :class="{
             'bg-green-500/90 text-white': submitStatus === 'success',
             'bg-red-500/90 text-white': submitStatus === 'error',
             'bg-orange-500/90 text-white': submitStatus === 'validation'
           }">
        <!-- Icon -->
        <svg v-if="submitStatus === 'success'" class="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <svg v-if="submitStatus === 'error'" class="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <svg v-if="submitStatus === 'validation'" class="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        
        <!-- Text -->
        <p class="font-medium text-sm">
          <span v-if="submitStatus === 'success'">{{ $t('contact.form.success') }}</span>
          <span v-if="submitStatus === 'error'">{{ errorMessage || $t('contact.form.error') }}</span>
          <span v-if="submitStatus === 'validation'">{{ $t('contact.form.validation') }}</span>
        </p>

        <!-- Close button -->
        <button @click="submitStatus = null" class="ml-auto p-1 hover:bg-white/20 rounded-lg transition-colors">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useI18n, useLocalePath } from '#imports'

const { t, tm } = useI18n()
const localePath = useLocalePath()

// Form Data
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const errors = reactive({
  name: false,
  email: false,
  phone: false,
  message: false
})

const isSubmitting = ref(false)
const submitStatus = ref(null) // null, 'success', 'error', 'validation'
const errorMessage = ref('')

const validateForm = () => {
  let isValid = true
  errors.name = !formData.name.trim()
  errors.email = !formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)
  errors.phone = !formData.phone.trim()
  errors.message = !formData.message.trim()

  if (errors.name || errors.email || errors.phone || errors.message) {
    isValid = false
    submitStatus.value = 'validation'
  }
  return isValid
}

const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  submitStatus.value = null
  errorMessage.value = ''

  try {
    // Proxy the request through our Nuxt server endpoint to avoid CORS issues
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      }
    })

    if (response && response.success) {
      submitStatus.value = 'success'
      // Reset form
      formData.name = ''
      formData.email = ''
      formData.phone = ''
      formData.message = ''
    } else {
      submitStatus.value = 'error'
      errorMessage.value = response?.data?.message || ''
    }
  } catch (error) {
    console.error('Form submission error:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
    
    // Clear status message after 5 seconds for all toast types
    if (submitStatus.value) {
      setTimeout(() => {
        submitStatus.value = null
      }, 5000)
    }
  }
}

const branches = computed(() => tm('contact.branches') || [])

useHead({
  title: computed(() => t('contact.meta_title'))
})

useSeoMeta({
  title: computed(() => t('contact.meta_title')),
  ogTitle: computed(() => t('contact.meta_title')),
  description: computed(() => t('contact.meta_desc')),
  ogDescription: computed(() => t('contact.meta_desc')),
  ogImage: '/images/logo-mhd.png'
})
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
