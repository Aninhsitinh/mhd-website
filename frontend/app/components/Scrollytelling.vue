<template>
  <section class="bg-surface relative overflow-hidden pt-20" ref="scrollContainer">
    <!-- Header -->
    <div class="container mx-auto px-4 mb-16 text-center relative z-10">
      <h2 class="text-3xl md:text-5xl font-black text-text mb-4">
        Quy trình <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Thẩm định giá</span>
      </h2>
      <p class="text-text-secondary max-w-2xl mx-auto">Chuẩn hóa 5 bước nghiêm ngặt theo tiêu chuẩn thẩm định giá Việt Nam.</p>
    </div>

    <!-- The Pinned Section -->
    <div class="h-[500vh]" ref="triggerSection">
      <div class="sticky top-0 h-screen flex items-center justify-center overflow-hidden" ref="pinArea">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative">
          
          <!-- Text Content (Left) -->
          <div class="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
            <div v-for="(step, index) in steps" :key="index"
                 :class="`absolute inset-0 flex flex-col justify-center step-content step-${index + 1}`"
                 :style="{ opacity: index === 0 ? 1 : 0, transform: index === 0 ? 'translateY(0)' : 'translateY(40px)' }">
              <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">{{ index + 1 }}</div>
              <h3 class="text-2xl md:text-3xl font-bold mb-4 text-text">{{ step.title }}</h3>
              <p class="text-text-secondary text-lg">{{ step.description }}</p>
            </div>
          </div>

          <!-- 3D Visualization Area (Right) -->
          <div class="w-full md:w-1/2 h-[300px] md:h-[500px] relative flex items-center justify-center perspective-[1000px]">
            <!-- Glow background -->
            <div class="absolute w-64 h-64 bg-primary/20 rounded-full blur-[100px] vis-glow"></div>
            
            <!-- The 3D Object that transforms -->
            <div class="relative w-64 h-64 transform-style-3d vis-object rotate-x-[60deg] rotate-z-[-45deg]">
              
              <!-- State 1: Wireframe Box (Overview) -->
              <div class="absolute inset-0 border-2 border-primary/40 rounded-xl grid grid-cols-4 grid-rows-4 state-1 transition-opacity duration-300">
                <div v-for="i in 16" :key="i" class="border border-primary/20"></div>
                <div class="absolute inset-0 bg-primary/5"></div>
              </div>
              
              <!-- State 2: Blueprint Lines (Planning) -->
              <div class="absolute inset-0 opacity-0 state-2 transition-opacity duration-300">
                 <div class="w-full h-1/3 border-b-2 border-primary/40 relative">
                   <div class="absolute bottom-0 left-0 h-full w-2 bg-primary/80 animate-pulse"></div>
                 </div>
                 <div class="w-full h-1/3 border-b-2 border-primary/40 relative">
                   <div class="absolute bottom-0 left-1/4 h-full w-2 bg-primary/60 animate-pulse"></div>
                 </div>
                 <div class="w-full h-1/3 relative">
                   <div class="absolute bottom-0 left-1/2 h-full w-2 bg-primary/40 animate-pulse"></div>
                 </div>
              </div>

              <!-- State 3: Map/Target (Survey) -->
              <div class="absolute inset-0 opacity-0 state-3 flex items-center justify-center transition-opacity duration-300">
                <div class="w-32 h-32 rounded-full border-2 border-dashed border-primary animate-[spin_10s_linear_infinite] flex items-center justify-center">
                  <div class="w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                    <div class="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#e85d20]"></div>
                  </div>
                </div>
              </div>

              <!-- State 4: Data Bars (Analysis) -->
              <div class="absolute inset-0 flex items-end justify-around p-4 opacity-0 state-4 transition-opacity duration-300">
                <div class="w-4 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm h-[30%] bar"></div>
                <div class="w-4 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm h-[60%] bar"></div>
                <div class="w-4 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm h-[40%] bar"></div>
                <div class="w-4 bg-gradient-to-t from-primary/20 to-orange-400 rounded-t-sm h-[90%] bar"></div>
                <div class="w-4 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm h-[70%] bar"></div>
              </div>
              
              <!-- State 5: Final Report/Cube (Report) -->
              <div class="absolute inset-0 bg-primary/10 border-4 border-primary rounded-xl backdrop-blur-sm opacity-0 state-5 flex items-center justify-center shadow-[0_0_50px_rgba(232,93,32,0.4)] transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-primary drop-shadow-[0_0_10px_rgba(232,93,32,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useI18n } from '#imports'

const { t } = useI18n()
const triggerSection = ref(null)
const pinArea = ref(null)
let ctx

const steps = computed(() => [
  { title: t('process.steps.step_1.title'), description: t('process.steps.step_1.description') },
  { title: t('process.steps.step_2.title'), description: t('process.steps.step_2.description') },
  { title: t('process.steps.step_3.title'), description: t('process.steps.step_3.description') },
  { title: t('process.steps.step_4.title'), description: t('process.steps.step_4.description') },
  { title: t('process.steps.step_5.title'), description: t('process.steps.step_5.description') }
])

onMounted(async () => {
  if (!process.client) return
  
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerSection.value,
        start: "top top",
        end: "+=4000",
        scrub: 1,
        pin: pinArea.value,
        anticipatePin: 1
      }
    })

    // Step 1 -> 2
    tl.to(".step-1", { opacity: 0, y: -40, duration: 1 })
      .to(".step-2", { opacity: 1, y: 0, duration: 1 }, "<")
      .to(".state-1", { opacity: 0, duration: 0.5 }, "<0.5")
      .to(".state-2", { opacity: 1, duration: 0.5 }, "<")
      .to(".vis-object", { rotationZ: -90, duration: 1 }, "<")
      
    tl.to({}, { duration: 0.5 })

    // Step 2 -> 3
    tl.to(".step-2", { opacity: 0, y: -40, duration: 1 })
      .to(".step-3", { opacity: 1, y: 0, duration: 1 }, "<")
      .to(".state-2", { opacity: 0, duration: 0.5 }, "<0.5")
      .to(".state-3", { opacity: 1, duration: 0.5 }, "<")
      .to(".vis-object", { rotationX: 0, rotationZ: 0, duration: 1 }, "<")

    tl.to({}, { duration: 0.5 })

    // Step 3 -> 4
    tl.to(".step-3", { opacity: 0, y: -40, duration: 1 })
      .to(".step-4", { opacity: 1, y: 0, duration: 1 }, "<")
      .to(".state-3", { opacity: 0, duration: 0.5 }, "<0.5")
      .to(".state-4", { opacity: 1, duration: 0.5 }, "<")
      .to(".vis-object", { rotationX: 60, rotationZ: -45, scale: 1.1, duration: 1 }, "<")
      .fromTo(".state-4 .bar", 
        { scaleY: 0, transformOrigin: "bottom" },
        { scaleY: 1, stagger: 0.1, duration: 1, ease: "power2.out" }, "<0.2")

    tl.to({}, { duration: 0.5 })

    // Step 4 -> 5
    tl.to(".step-4", { opacity: 0, y: -40, duration: 1 })
      .to(".step-5", { opacity: 1, y: 0, duration: 1 }, "<")
      .to(".state-4", { opacity: 0, duration: 0.5 }, "<0.5")
      .to(".state-5", { opacity: 1, duration: 0.5 }, "<")
      .to(".vis-object", { rotationX: 0, rotationZ: 360, scale: 1, duration: 1.5, ease: "power1.inOut" }, "<")
      .to(".vis-glow", { scale: 1.5, opacity: 0.8, duration: 1 }, "<")

  }, triggerSection.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<style scoped>
.perspective-\[1000px\] {
  perspective: 1000px;
}
.transform-style-3d {
  transform-style: preserve-3d;
}
.rotate-x-\[60deg\] {
  transform: rotateX(60deg);
}
.rotate-z-\[-45deg\] {
  transform: rotateZ(-45deg);
}
</style>
