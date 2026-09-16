<template>
  <ClientOnly>
    <div v-if="showPopup" class="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <!-- Backdrop -->
      <div 
        class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        @click="closePopup"
      ></div>

      <!-- Popup Content -->
      <div 
        class="relative bg-surface rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-300"
      >
        <!-- Close Button -->
        <button 
          @click="closePopup"
          class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-surface/50 hover:bg-black/5 text-text-secondary hover:text-text transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Header -->
        <div class="bg-gradient-to-r from-primary to-orange-400 p-8 text-center text-white">
          <h2 class="text-2xl md:text-3xl font-bold mb-2">{{ $t('popup.title') || 'Bạn Cần Tư Vấn Định Giá?' }}</h2>
          <p class="text-white/90">{{ $t('popup.subtitle') || 'Để lại thông tin, chuyên gia của chúng tôi sẽ gọi lại ngay trong 5 phút!' }}</p>
        </div>

        <!-- Form -->
        <div class="p-8">
          <form @submit.prevent="submitForm" class="space-y-4">
            <!-- Name -->
            <div>
              <input 
                type="text" 
                v-model="formData.name"
                :placeholder="$t('contact.form.name_placeholder') || 'Họ và tên của bạn'" 
                class="w-full px-4 py-3 rounded-xl bg-bg text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-text-muted"
                :class="{ 'ring-2 ring-red-500': errors.name }"
              />
            </div>
            
            <!-- Email and Phone -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input 
                  type="email" 
                  v-model="formData.email"
                  :placeholder="$t('contact.form.email_placeholder') || 'Email của bạn'" 
                  class="w-full px-4 py-3 rounded-xl bg-bg text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-text-muted"
                  :class="{ 'ring-2 ring-red-500': errors.email }"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  v-model="formData.phone"
                  :placeholder="$t('contact.form.phone_placeholder') || 'Số điện thoại'" 
                  class="w-full px-4 py-3 rounded-xl bg-bg text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-text-muted"
                  :class="{ 'ring-2 ring-red-500': errors.phone }"
                />
              </div>
            </div>
            
            <!-- Message -->
            <div>
              <textarea 
                v-model="formData.message"
                :placeholder="$t('contact.form.message_placeholder') || 'Nội dung cần tư vấn'" 
                rows="3"
                class="w-full px-4 py-3 rounded-xl bg-bg text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none placeholder:text-text-muted"
                :class="{ 'ring-2 ring-red-500': errors.message }"
              ></textarea>
            </div>

            <!-- Status Messages -->
            <div v-if="submitStatus === 'success'" class="p-3 bg-green-500/10 text-green-600 rounded-xl text-sm text-center font-medium shadow-sm">
              {{ $t('contact.form.success') || 'Gửi yêu cầu thành công!' }}
            </div>
            <div v-if="submitStatus === 'error'" class="p-3 bg-red-500/10 text-red-600 rounded-xl text-sm text-center font-medium shadow-sm">
              {{ errorMessage || $t('contact.form.error') || 'Có lỗi xảy ra, vui lòng thử lại sau.' }}
            </div>
            <div v-if="submitStatus === 'validation'" class="p-3 bg-orange-500/10 text-orange-600 rounded-xl text-sm text-center font-medium shadow-sm">
              {{ $t('contact.form.validation') || 'Vui lòng kiểm tra lại thông tin.' }}
            </div>
            
            <!-- Submit Button -->
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full py-4 mt-2 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-primary/30 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? ($t('contact.form.submitting') || 'Đang gửi...') : 'Yêu Cầu Tư Vấn Ngay' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const showPopup = ref(false)
const hasTriggered = ref(false)

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
const submitStatus = ref(null)
const errorMessage = ref('')

const closePopup = () => {
  showPopup.value = false
}

const POPUP_SUBMITTED_KEY = 'mhd_popup_submitted'
const POPUP_SHOWS_KEY = 'mhd_popup_shows'
const MAX_SHOWS_PER_DAY = 3

const checkAndShowPopup = () => {
  if (hasTriggered.value) return

  // Nếu khách hàng đã điền form thì không bao giờ hiện nữa
  if (localStorage.getItem(POPUP_SUBMITTED_KEY) === 'true') {
    hasTriggered.value = true // Stop checking this session
    return
  }

  // Kiểm tra số lần đã hiển thị trong ngày hôm nay
  const today = new Date().toDateString()
  let showsData = { date: today, count: 0 }
  
  try {
    const storedStr = localStorage.getItem(POPUP_SHOWS_KEY)
    if (storedStr) {
      const storedData = JSON.parse(storedStr)
      // Nếu đúng là ngày hôm nay thì lấy số lần count
      if (storedData.date === today) {
        showsData = storedData
      }
    }
  } catch (e) {
    console.error("Popup storage error", e)
  }

  // Nếu đã hiện đủ số lần tối đa trong ngày
  if (showsData.count >= MAX_SHOWS_PER_DAY) {
    hasTriggered.value = true
    return
  }

  // Show popup and mark as triggered for this page load session
  showPopup.value = true
  hasTriggered.value = true
  
  // Tăng số đếm và lưu lại
  showsData.count++
  localStorage.setItem(POPUP_SHOWS_KEY, JSON.stringify(showsData))
}

const handleMouseLeave = (e) => {
  // Trigger when mouse moves up outside the viewport (towards tabs/address bar)
  if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
    checkAndShowPopup()
  }
}

onMounted(() => {
  // Small delay so it doesn't trigger immediately on page load if cursor is outside
  setTimeout(() => {
    document.addEventListener('mouseleave', handleMouseLeave)
  }, 2000)
})

onUnmounted(() => {
  document.removeEventListener('mouseleave', handleMouseLeave)
})

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
      // Đánh dấu đã gửi thành công để không bao giờ hiện popup này nữa
      localStorage.setItem(POPUP_SUBMITTED_KEY, 'true')
      
      // Reset form
      formData.name = ''
      formData.email = ''
      formData.phone = ''
      formData.message = ''
      
      // Auto close after success
      setTimeout(() => {
        closePopup()
      }, 3000)
    } else {
      submitStatus.value = 'error'
      errorMessage.value = response?.data?.message || ''
    }
  } catch (error) {
    console.error('Popup Form submission error:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
    
    if (submitStatus.value === 'success' || submitStatus.value === 'validation') {
      setTimeout(() => {
        submitStatus.value = null
      }, 5000)
    }
  }
}
</script>
