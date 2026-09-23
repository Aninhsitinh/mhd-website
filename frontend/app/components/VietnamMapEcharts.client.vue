<template>
  <div class="relative w-full h-[480px] sm:h-[580px] md:h-[750px] lg:h-[800px] bg-transparent flex items-center justify-center">
    
    <!-- Removed Background Glow as requested -->



    <!-- ECharts Container -->
    <div 
      v-show="!errorMsg" 
      ref="chartRef" 
      class="w-full h-full"
    ></div>
    <div v-show="errorMsg" class="absolute inset-0 flex items-center justify-center bg-bg text-red-500 font-bold p-10 z-50 text-center">
      Error: {{ errorMsg }}
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch, computed } from 'vue'
import { useI18n, useColorMode } from '#imports'
import * as echarts from 'echarts'
// Restoring the original detailed GeoJSON (2.1MB) for high-definition map and islands
import vietnamGeoJson from '~/assets/vietnam2.json'

const { t, tm } = useI18n()
const colorMode = useColorMode()
const chartRef = ref(null)
const errorMsg = ref('')
let chart = null

const isDark = computed(() => colorMode.value === 'dark')

// Theme styles configuration
const getThemeConfig = (dark) => {
  if (dark) {
    return {
      geo: {
        itemStyle: {
          areaColor: '#3F4547', // Graphite surface in dark mode
          borderColor: '#555C5E', // Subtle dark border
          borderWidth: 1,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 10
        },
        emphasis: {
          itemStyle: {
            areaColor: '#4F5759',
            borderColor: '#EC4A00',
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(31, 41, 44, 0.96)',
        textStyle: { color: '#F4F2EE' },
        textColor: '#F4F2EE'
      }
    }
  } else {
    return {
      geo: {
        itemStyle: {
          areaColor: '#EBE7DF', // Warm Paper tone matching section background
          borderColor: '#A4A8A9', // Subtle crisp border
          borderWidth: 1,
          shadowColor: 'rgba(0, 0, 0, 0.05)',
          shadowBlur: 10
        },
        emphasis: {
          itemStyle: {
            areaColor: '#FFF0E8',
            borderColor: '#EC4A00',
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        textStyle: { color: '#1F292C' },
        textColor: '#1F292C'
      }
    }
  }
}

// Adjusted real coordinates with artificial spacing (jitter) to prevent overlap on the map
const coordinateMap = {
  "CHI NHÁNH HÀ NỘI": [105.8342, 21.0278],
  "CHI NHÁNH NGHỆ AN": [105.6813, 18.6734],
  "CHI NHÁNH ĐÀ NẴNG": [108.2022, 16.0544],
  "CHI NHÁNH BÌNH ĐỊNH": [109.2272, 13.7820],
  "CHI NHÁNH KHÁNH HOÀ": [109.1967, 12.2388],
  "CHI NHÁNH ĐĂKLĂK": [108.0382, 12.6667],
  
  // Southern cluster - offset to spread them out visually
  "CHI NHÁNH BÌNH PHƯỚC": [106.8997, 11.8367], // Moved slightly North
  "VPĐD ĐỒNG NAI": [107.1243, 11.0333], // Moved East
  "CHI NHÁNH BÀ RỊA - VŨNG TÀU": [107.4714, 10.3936], // Moved South-East
  "VPĐD LONG AN": [106.1150, 10.6364], // Moved West
  "VPĐD TRÀ VINH": [106.4353, 9.7408], // Moved South
  "VPĐD VĨNH LONG": [105.7722, 10.1520], // Moved West
  "VPĐD AN GIANG": [104.9167, 10.6167], // Moved West
}

// Prepare data points from i18n
const getMapData = () => {
  const rawBranches = tm('contact.branches') || []
  const dataPoints = rawBranches.map(b => {
    const coords = coordinateMap[b.name] || [106.6297, 10.8231]
    return {
      name: b.name,
      value: coords.concat([100]), // [lng, lat, value/size]
      address: b.address,
      phone: b.phone,
      email: b.email
    }
  })
  
  // Add HQ
  dataPoints.push({
    name: "TRỤ SỞ CHÍNH (TP.HCM)",
    value: [106.6297, 10.8231, 200],
    address: t('contact.address'),
    phone: "028 3515 3516",
    email: "info@mhd.com.vn"
  })
  
  return dataPoints
}

const updateMapTheme = () => {
  if (!chart) return
  const theme = getThemeConfig(isDark.value)
  chart.setOption({
    tooltip: {
      backgroundColor: theme.tooltip.backgroundColor,
      textStyle: theme.tooltip.textStyle
    },
    geo: {
      itemStyle: theme.geo.itemStyle,
      emphasis: theme.geo.emphasis
    }
  })
}

// Watch theme change
watch(isDark, () => {
  updateMapTheme()
})

const handleResize = () => {
  if (!chart) return
  chart.resize()
  const isMob = window.innerWidth < 768
  chart.setOption({
    geo: {
      zoom: isMob ? 1.25 : 1.1,
      center: isMob ? [107.5, 16.0] : undefined
    }
  })
}

let observer = null

const initChart = () => {
  if (chart || !chartRef.value) return

  try {
    // Register Vietnam Map
    echarts.registerMap('VN', vietnamGeoJson)
    
    chart = echarts.init(chartRef.value)
    
    const mapData = getMapData()
    const isMobile = window.innerWidth < 768
    const theme = getThemeConfig(isDark.value)
    
    const option = {
      tooltip: {
        trigger: 'item',
        backgroundColor: theme.tooltip.backgroundColor,
        borderWidth: 0,
        extraCssText: 'border-radius: 16px; box-shadow: 0 10px 30px -4px rgba(0, 0, 0, 0.25); backdrop-filter: blur(8px);',
        textStyle: theme.tooltip.textStyle,
        padding: isMobile ? 14 : 18,
        confine: true,
        formatter: function (params) {
          if (!params.data) return ''
          const { name, address, phone, email } = params.data
          const textColor = isDark.value ? '#F4F2EE' : '#1F292C'
          return `
            <div style="font-family: 'Montserrat', sans-serif;">
              <h4 style="font-size: ${isMobile ? '14px' : '16px'}; font-weight: bold; color: #EC4A00; margin-bottom: 8px;">${name}</h4>
              <div style="font-family: 'Inter', sans-serif; font-size: ${isMobile ? '12px' : '13px'}; line-height: 1.6; white-space: normal; max-width: 250px; color: ${textColor};">
                <div style="display: flex; align-items: flex-start; margin-bottom: 6px;">
                  <svg xmlns="http://www.w3.org/2000/svg" style="width:16px; height:16px; flex-shrink:0; color:#EC4A00; margin-top:2px; margin-right:8px;" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>${address}</span>
                </div>
                <div style="display: flex; align-items: flex-start; margin-bottom: 6px;">
                  <svg xmlns="http://www.w3.org/2000/svg" style="width:16px; height:16px; flex-shrink:0; color:#EC4A00; margin-top:2px; margin-right:8px;" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>${phone}</span>
                </div>
                <div style="display: flex; align-items: flex-start;">
                  <svg xmlns="http://www.w3.org/2000/svg" style="width:16px; height:16px; flex-shrink:0; color:#EC4A00; margin-top:2px; margin-right:8px;" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>${email}</span>
                </div>
              </div>
            </div>
          `
        }
      },
      geo: {
        map: 'VN',
        roam: false,
        zoom: isMobile ? 1.25 : 1.1,
        center: isMobile ? [107.5, 16.0] : undefined,
        itemStyle: theme.geo.itemStyle,
        emphasis: {
          itemStyle: theme.geo.emphasis.itemStyle,
          label: {
            show: false
          }
        }
      },
      series: [
        {
          name: 'Mạng lưới MHD',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: mapData,
          symbolSize: function (val) {
            const baseSize = val[2] === 200 ? 15 : 8;
            return isMobile ? baseSize * 0.85 : baseSize;
          },
          itemStyle: {
            color: '#EC4A00', // Preserved brand orange dots
            shadowBlur: 15,
            shadowColor: '#EC4A00'
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
            scale: 2.5,
            period: 6
          },
          emphasis: {
            scale: true
          }
        }
      ]
    }
    
    chart.setOption(option)
    window.addEventListener('resize', handleResize)
  } catch (err) {
    errorMsg.value = err.message || err.toString()
  }
}

onMounted(async () => {
  if (!process.client) return
  await nextTick()

  if (!chartRef.value) return

  // High performance: Only init ECharts when the user scrolls near the map section
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        initChart()
        observer.disconnect()
        observer = null
      }
    }, { rootMargin: '200px 0px' })
    observer.observe(chartRef.value)
  } else {
    // Fallback for older browsers
    initChart()
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
  if (chart) {
    chart.dispose()
    chart = null
  }
  window.removeEventListener('resize', handleResize)
})
</script>
