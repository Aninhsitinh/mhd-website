<template>
  <div class="fixed bottom-40 right-6 z-40 flex flex-col items-end print:hidden">
    
    <!-- Chat Window -->
    <Transition name="chat-window">
      <div v-if="isOpen" class="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-surface backdrop-blur-xl shadow-corporate-lg rounded-2xl flex flex-col overflow-hidden origin-bottom-right">
        
        <!-- Header -->
        <div class="bg-primary p-4 flex justify-between items-center text-white">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <h3 class="font-bold text-lg leading-tight">MHD AI Assistant</h3>
              <p class="text-[11px] text-white/80">Trực tuyến - Sẵn sàng giải đáp</p>
            </div>
          </div>
          <button @click="toggleChat" class="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <!-- Messages Area -->
        <div class="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-bg/50" ref="messagesContainer">
          
          <!-- Welcome Message -->
          <div class="flex items-start gap-2 max-w-[85%]">
            <div class="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-sm">AI</div>
            <div class="p-3 bg-surface rounded-2xl rounded-tl-sm shadow-sm text-sm text-text">
              Xin chào! Tôi là Trợ lý AI của MHD Valuation. Bạn có câu hỏi nào về dịch vụ thẩm định giá cần tôi hỗ trợ không?
            </div>
          </div>

          <!-- Quick Suggestion Chips (Shown when chat history is empty) -->
          <div v-if="messages.length === 0" class="pl-10 flex flex-col gap-1.5 pt-1">
            <p class="text-[11px] font-semibold text-text-muted">Gợi ý câu hỏi nhanh:</p>
            <div class="flex flex-wrap gap-1.5">
              <button 
                v-for="q in quickQuestions" 
                :key="q"
                type="button"
                @click="sendQuickQuestion(q)"
                :disabled="isLoading"
                class="text-left text-xs bg-surface hover:bg-primary/10 hover:text-primary text-text-secondary px-3 py-1.5 rounded-full shadow-sm transition-colors disabled:opacity-50"
              >
                {{ q }}
              </button>
            </div>
          </div>

          <!-- Chat History -->
          <div v-for="(msg, index) in messages" :key="index" class="flex items-start gap-2 max-w-[85%]" :class="msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''">
            <div v-if="msg.role === 'assistant'" class="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-sm">AI</div>
            <div v-else class="w-8 h-8 rounded-full bg-surface text-text-secondary flex-shrink-0 flex items-center justify-center text-xs font-bold shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <div class="p-3 rounded-2xl shadow-sm text-sm" :class="msg.role === 'user' ? 'bg-primary text-white rounded-tr-sm' : 'bg-surface text-text rounded-tl-sm whitespace-pre-wrap'">
              {{ msg.content }}
            </div>
          </div>

          <!-- Typing Indicator -->
          <div v-if="isLoading" class="flex items-start gap-2 max-w-[85%]">
            <div class="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-sm">AI</div>
            <div class="p-4 bg-surface rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1">
              <div class="w-2 h-2 bg-text-muted rounded-full animate-bounce"></div>
              <div class="w-2 h-2 bg-text-muted rounded-full animate-bounce delay-75"></div>
              <div class="w-2 h-2 bg-text-muted rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <form @submit.prevent="sendMessage" class="p-3 bg-surface flex gap-2 items-end">
          <textarea 
            v-model="inputMessage" 
            @keydown.enter.prevent="sendMessage"
            rows="1"
            placeholder="Nhập câu hỏi của bạn..." 
            class="flex-1 bg-bg rounded-xl px-4 py-3 text-sm text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none transition-all placeholder:text-text-muted"
            style="min-height: 44px; max-height: 120px;"
          ></textarea>
          <button 
            type="submit" 
            :disabled="!inputMessage.trim() || isLoading"
            class="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-90 translate-x-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
          </button>
        </form>
      </div>
    </Transition>

    <!-- AI Floating Button -->
    <button @click="toggleChat" class="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-primary to-orange-400 text-white shadow-lg shadow-primary/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group z-50">
      <span v-if="!isOpen" class="absolute inset-0 rounded-full animate-ping bg-primary opacity-50"></span>
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 relative z-10 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 relative z-10 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, watch } from 'vue'

const isOpen = ref(false)
const inputMessage = ref('')
const messages = ref([])
const isLoading = ref(false)
const messagesContainer = ref(null)

const quickQuestions = [
  'Chi phí thẩm định giá bất động sản?',
  'Hồ sơ thẩm định dự án cần chuẩn bị gì?',
  'Quy trình thẩm định giá 6 bước của MHD',
  'Thời gian cấp chứng thư mất bao lâu?'
]

const sendQuickQuestion = (question) => {
  inputMessage.value = question
  sendMessage()
}

onMounted(() => {
  if (process.client) {
    const saved = localStorage.getItem('mhd_chat_history')
    if (saved) {
      try {
        messages.value = JSON.parse(saved)
      } catch (e) {
        console.error('Lỗi khi đọc lịch sử chat:', e)
      }
    }
  }
})

watch(messages, (newMessages) => {
  if (process.client) {
    localStorage.setItem('mhd_chat_history', JSON.stringify(newMessages))
  }
}, { deep: true })

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    scrollToBottom()
  }
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  const text = inputMessage.value.trim()
  if (!text || isLoading.value) return

  // Add user message
  messages.value.push({ role: 'user', content: text })
  inputMessage.value = ''
  isLoading.value = true
  scrollToBottom()

  try {
    const payload = {
      message: text,
      history: [...messages.value.slice(0, -1)]
    }

    const response = await $fetch('/api/chat', {
      method: 'POST',
      body: payload
    })

    if (response && response.reply) {
      messages.value.push({ role: 'assistant', content: response.reply })
    }
  } catch (error) {
    messages.value.push({ role: 'assistant', content: 'Xin lỗi, hệ thống AI đang quá tải hoặc gặp sự cố. Vui lòng thử lại sau.' })
    console.error(error)
  } finally {
    isLoading.value = false
    scrollToBottom()
  }
}
</script>

<style scoped>
.chat-window-enter-active,
.chat-window-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.chat-window-enter-from,
.chat-window-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}
</style>
