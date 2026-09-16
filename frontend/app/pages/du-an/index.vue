<template>
  <div>
    <!-- Corporate Hero Header (Borderless) -->
    <header class="pt-32 pb-12 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl">
        <nav class="text-xs text-text-muted mb-4 flex items-center gap-2">
          <NuxtLink to="/" class="hover:text-primary transition-colors">Trang chủ</NuxtLink>
          <span>/</span>
          <span class="text-text-secondary">{{ $t('nav.projects') || 'Dự án' }}</span>
        </nav>
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Interactive Project Portfolio
            </div>
            <h1 class="text-3xl md:text-5xl font-display font-bold text-text leading-tight uppercase">Hồ Sơ Năng Lực Dự Án</h1>
            <p class="text-text-secondary max-w-2xl mt-3 text-sm md:text-base leading-relaxed">
              Khám phá danh mục dự án thẩm định quy mô lớn của MHD qua góc nhìn tương tác kỹ thuật: Bất động sản phức hợp, hạ tầng đô thị, dây chuyền công nghiệp và M&A.
            </p>
          </div>
          
          <!-- Quick Trust Stats (Borderless & Soft Surface) -->
          <div class="flex items-center gap-6 py-3 px-6 bg-surface rounded-2xl shadow-sm">
            <div class="text-center">
              <div class="text-2xl font-bold font-display text-primary">1.000+</div>
              <div class="text-[11px] text-text-muted uppercase font-medium">Dự án hoàn tất</div>
            </div>
            <div class="w-px h-8 bg-surface-muted"></div>
            <div class="text-center">
              <div class="text-2xl font-bold font-display text-text">63</div>
              <div class="text-[11px] text-text-muted uppercase font-medium">Tỉnh thành</div>
            </div>
            <div class="w-px h-8 bg-surface-muted"></div>
            <div class="text-center">
              <div class="text-2xl font-bold font-display text-secondary">30+</div>
              <div class="text-[11px] text-text-muted uppercase font-medium">Ngân hàng & Quỹ</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Interactive Content Section -->
    <section class="py-6 pb-24 bg-bg">
      <div class="container mx-auto px-4 max-w-7xl">
        
        <!-- Filter Tabs & Mode Bar (Borderless) -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <!-- Single All Projects Indicator -->
          <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-primary text-white shadow-corporate">
            <span class="w-2 h-2 rounded-full bg-white"></span>
            Tất cả dự án
          </div>

          <!-- View Mode Toggle -->
          <div class="flex items-center gap-3 text-xs">
            <span class="text-text-muted hidden sm:inline">Chế độ xem:</span>
            <div class="flex items-center p-1 bg-surface rounded-xl shadow-sm">
              <button 
                @click="viewLayout = 'interactive'" 
                :class="viewLayout === 'interactive' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text'"
                class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all"
                title="Interactive Blueprint (Split View)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
                Tương tác kỹ thuật
              </button>
              <button 
                @click="viewLayout = 'grid'" 
                :class="viewLayout === 'grid' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text'"
                class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all"
                title="Dạng lưới thẻ"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Lưới thẻ
              </button>
            </div>
          </div>
        </div>

        <!-- Loading Skeletons with Shimmer -->
        <div v-if="pending && projects.length === 0" class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div class="lg:col-span-5 space-y-3">
            <div v-for="i in 5" :key="i" class="p-4 rounded-2xl bg-surface/60 shadow-corporate skeleton-shimmer flex items-center gap-4">
              <div class="w-20 h-20 rounded-xl bg-bg/80 shrink-0"></div>
              <div class="flex-grow space-y-2.5">
                <div class="h-3.5 bg-bg/80 rounded-md w-24"></div>
                <div class="h-4 bg-bg/80 rounded-md w-4/5"></div>
                <div class="h-3 bg-bg/80 rounded-md w-1/2"></div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-7 h-[600px] bg-surface/80 rounded-3xl shadow-corporate skeleton-shimmer p-8 flex flex-col justify-between">
            <div class="h-72 bg-bg/80 rounded-2xl w-full"></div>
            <div class="space-y-3 mt-6">
              <div class="h-6 bg-bg/80 rounded-md w-3/4"></div>
              <div class="h-4 bg-bg/80 rounded-md w-full"></div>
              <div class="h-4 bg-bg/80 rounded-md w-2/3"></div>
            </div>
          </div>
        </div>

        <!-- LAYOUT 1: INTERACTIVE BLUEPRINT SPLIT VIEW (PHƯƠNG ÁN B) -->
        <div v-else-if="filteredProjects.length > 0 && viewLayout === 'interactive'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- LEFT: Project Interactive Master List (5 cols) -->
          <div class="lg:col-span-5 space-y-3 order-2 lg:order-1 max-h-[750px] overflow-y-auto pr-2 no-scrollbar">
            <div 
              v-for="(project, idx) in filteredProjects" 
              :key="project.id"
              @mouseenter="selectedProject = project"
              @click="selectedProject = project"
              class="p-4 rounded-2xl cursor-pointer transition-all duration-300 relative group"
              :class="selectedProject?.id === project.id 
                ? 'bg-surface shadow-corporate translate-x-1.5' 
                : 'bg-surface/50 hover:bg-surface shadow-sm hover:shadow-md'"
            >
              <!-- Left Active Accent Bar -->
              <div 
                class="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full transition-all duration-300"
                :class="selectedProject?.id === project.id ? 'bg-primary' : 'bg-transparent group-hover:bg-primary/40'"
              ></div>

              <div class="flex items-center gap-4">
                <!-- Thumbnail -->
                <div class="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-surface-muted relative">
                  <img 
                    :src="project.featured_image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop'" 
                    :alt="project.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div v-if="project.gallery && project.gallery.length > 0" class="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-black/70 text-white">
                    {{ project.gallery.length }}
                  </div>
                </div>

                <!-- Info -->
                <div class="flex-grow min-w-0">
                  <div class="flex items-center justify-between gap-2 mb-1">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-primary">
                      {{ getCategoryName(project) }}
                    </span>
                    <span class="text-[10px] text-text-muted font-mono">
                      #0{{ idx + 1 }}
                    </span>
                  </div>

                  <h3 
                    class="text-sm font-bold text-text truncate group-hover:text-primary transition-colors leading-snug" 
                    v-html="project.title"
                  ></h3>

                  <div class="flex items-center gap-3 text-[11px] text-text-secondary mt-1.5">
                    <span v-if="getSpecs(project.slug).scale" class="font-medium truncate text-primary">
                      {{ getSpecs(project.slug).scale }}
                    </span>
                    <span v-if="getSpecs(project.slug).location" class="truncate text-text-muted">
                      {{ getSpecs(project.slug).location }}
                    </span>
                  </div>
                </div>

                <!-- Arrow indicator -->
                <div class="flex-shrink-0 text-text-muted group-hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT: Interactive Blueprint Viewport (7 cols - Sticky) -->
          <div class="lg:col-span-7 order-1 lg:order-2 lg:sticky lg:top-28">
            <div v-if="selectedProject" class="rounded-3xl overflow-hidden bg-surface shadow-2xl transition-all duration-500 relative">
              
              <!-- Large Interactive Visual -->
              <div class="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                <img 
                  :key="selectedProject.id"
                  :src="selectedProject.featured_image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'" 
                  :alt="selectedProject.title"
                  class="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-700 ease-out" 
                />
                
                <!-- Blueprint HUD Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20"></div>

                <!-- Top Tech Badges -->
                <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white shadow-sm">
                      {{ getCategoryName(selectedProject) }}
                    </span>
                    <span v-if="selectedSpecs.badge" class="px-3 py-1 rounded-full text-[11px] font-bold bg-primary text-white shadow-sm">
                      {{ selectedSpecs.badge }}
                    </span>
                  </div>

                  <span class="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-black/60 backdrop-blur-md text-emerald-400 flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    MHD VERIFIED
                  </span>
                </div>

                <!-- Bottom Image Blueprint Metrics -->
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <div class="text-[11px] font-mono tracking-widest text-primary-light uppercase mb-1">Thẩm định kỹ thuật số</div>
                  <h2 class="text-xl md:text-2xl font-bold font-display leading-snug drop-shadow-md" v-html="selectedProject.title"></h2>
                </div>
              </div>

              <!-- Interactive Blueprint Dossier Details -->
              <div class="p-6 md:p-8 space-y-6">
                <!-- Highlight Summary -->
                <p class="text-xs md:text-sm text-text-secondary leading-relaxed" v-html="selectedSpecs.highlight || selectedProject.excerpt"></p>

                <!-- Technical Blueprint Grid (4 specs) -->
                <div class="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-bg shadow-sm">
                  <div class="space-y-0.5">
                    <div class="text-[10px] font-mono text-text-muted uppercase">Quy mô tài sản</div>
                    <div class="text-xs md:text-sm font-bold text-text truncate">{{ selectedSpecs.scale || 'Hồ sơ tiêu chuẩn' }}</div>
                  </div>
                  <div class="space-y-0.5">
                    <div class="text-[10px] font-mono text-text-muted uppercase">Địa bàn thẩm định</div>
                    <div class="text-xs md:text-sm font-bold text-text truncate">{{ selectedSpecs.location || 'Việt Nam' }}</div>
                  </div>
                  <div class="space-y-0.5">
                    <div class="text-[10px] font-mono text-text-muted uppercase">Phương pháp định giá</div>
                    <div class="text-xs md:text-sm font-bold text-primary truncate">{{ selectedSpecs.method || 'Tiêu chuẩn TĐGVN' }}</div>
                  </div>
                  <div class="space-y-0.5">
                    <div class="text-[10px] font-mono text-text-muted uppercase">Mục đích thẩm định</div>
                    <div class="text-xs md:text-sm font-bold text-secondary truncate">{{ selectedSpecs.purpose ? 'Thế chấp & M&A' : 'Tài trợ vốn' }}</div>
                  </div>
                </div>

                <!-- Call to action bar -->
                <div class="flex items-center justify-between pt-2">
                  <div class="text-xs text-text-muted">
                    <template v-if="selectedProject.gallery && selectedProject.gallery.length > 0">
                      Hồ sơ ảnh thực địa: <strong class="text-text">{{ selectedProject.gallery.length }} tấm</strong>
                    </template>
                    <template v-else>
                      <span class="inline-flex items-center gap-1.5 text-text-muted">
                        <span class="w-1.5 h-1.5 rounded-full bg-surface-muted"></span>
                        Đang cập nhật ảnh thực địa
                      </span>
                    </template>
                  </div>

                  <NuxtLink 
                    :to="`/du-an/${selectedProject.slug}`"
                    class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold uppercase tracking-wider shadow-corporate hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    Mở hồ sơ khảo sát chi tiết
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- LAYOUT 2: CLEAN GRID VIEW (Borderless) -->
        <div v-else-if="filteredProjects.length > 0 && viewLayout === 'grid'">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
          </div>
          
          <div v-if="hasMore" class="flex justify-center mt-8">
            <button
              @click="loadMore"
              :disabled="loadingMore"
              class="px-8 py-3.5 bg-surface rounded-full text-text hover:text-primary transition-all font-bold text-xs uppercase tracking-wider shadow-corporate hover:shadow-corporate-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ loadingMore ? 'Đang tải...' : 'Tải thêm dự án' }}
            </button>
          </div>
        </div>

        <!-- Empty state -->
        <div v-else class="text-center py-20 bg-surface rounded-3xl shadow-sm">
          <p class="text-text-secondary text-lg">Chưa có dự án nào trong chuyên mục này.</p>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

<script setup>
import { ref, computed, watch } from 'vue'
import { getProjectSpecs } from '~/data/projectSpecs'

useHead({
  title: 'Hồ sơ năng lực dự án thẩm định giá - MHD Valuation',
  meta: [
    { name: 'description', content: 'Portfolio tương tác kỹ thuật các đại dự án thẩm định giá tiêu biểu của MHD: Bất động sản, Doanh nghiệp, Dây chuyền sản xuất máy móc thiết bị.' }
  ]
})

const { fetchPosts, fetchMorePosts } = usePayload()

const PER_PAGE = 24
const activeCategory = ref(0)
const viewLayout = ref('interactive') // 'interactive' (Phương án B) | 'grid'

const categories = [
  { id: 0, name: 'Tất cả dự án' },
  { id: 64, name: 'Bất động sản' },
  { id: 66, name: 'Doanh nghiệp & M&A' },
  { id: 70, name: 'Máy móc & Dây chuyền' },
]

// Lấy tất cả dự án
const { data: initialProjects, pending } = await fetchPosts({ per_page: PER_PAGE, page: 1 }, 'projects')

const projects = ref([...(initialProjects.value || [])])
const page = ref(1)
const hasMore = ref((initialProjects.value || []).length >= PER_PAGE)
const loadingMore = ref(false)

// Selected project for interactive split-view
const selectedProject = ref(projects.value[0] || null)

watch(initialProjects, (value) => {
  if (page.value === 1 && value) {
    projects.value = [...value]
    hasMore.value = value.length >= PER_PAGE
    if (!selectedProject.value && value.length > 0) {
      selectedProject.value = value[0]
    }
  }
})

const filteredProjects = computed(() => {
  if (!projects.value) return []
  if (activeCategory.value === 0) return projects.value
  return projects.value.filter(project => project.categories?.includes(activeCategory.value))
})

// Auto select first item when changing category
const handleCategoryChange = (catId) => {
  activeCategory.value = catId
  if (filteredProjects.value.length > 0) {
    selectedProject.value = filteredProjects.value[0]
  }
}

const selectedSpecs = computed(() => {
  return selectedProject.value ? getProjectSpecs(selectedProject.value.slug) : {}
})

const getSpecs = (slug) => getProjectSpecs(slug)

const getCategoryName = (project) => {
  if (project.categories?.includes(64)) return 'Bất động sản'
  if (project.categories?.includes(66)) return 'Doanh nghiệp'
  if (project.categories?.includes(70)) return 'Máy móc thiết bị'
  return 'Thẩm định giá'
}

const loadMore = async () => {
  if (loadingMore.value || !hasMore.value) return
  loadingMore.value = true
  try {
    const nextPage = page.value + 1
    const more = await fetchMorePosts({ per_page: PER_PAGE, page: nextPage }, 'projects')
    const existingIds = new Set(projects.value.map(p => p.id))
    const unique = more.filter(p => !existingIds.has(p.id))
    projects.value.push(...unique)
    page.value = nextPage
    hasMore.value = more.length >= PER_PAGE
  } catch (error) {
    console.error('Load more projects error:', error)
  } finally {
    loadingMore.value = false
  }
}
</script>
