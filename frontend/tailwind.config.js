/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,vue,ts}",
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'rgb(var(--color-bg) / <alpha-value>)'
        },
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          hover: 'rgb(var(--color-primary-hover) / <alpha-value>)'
        },
        hero: 'rgb(var(--color-hero) / <alpha-value>)',
        accent: {
          soft: '#FFF0E8'
        },
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        border: {
          DEFAULT: 'rgba(var(--color-border), 0.15)',
          hover: 'rgba(var(--color-border), 0.3)'
        },
        text: {
          DEFAULT: 'rgb(var(--color-text) / <alpha-value>)',
          secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif']
      },
      dropShadow: {
        'corporate': '0 4px 6px rgba(0, 0, 0, 0.04)',
        'corporate-lg': '0 10px 20px rgba(0, 0, 0, 0.06)',
      },
      boxShadow: {
        'corporate': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'corporate-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
        'corporate-lg': '0 20px 40px -12px rgba(0, 0, 0, 0.09)',
        'corporate-dark': '0 8px 24px -4px rgba(0, 0, 0, 0.35)',
        'corporate-glow': '0 8px 25px -4px rgba(236, 74, 0, 0.35)',
      },
      borderRadius: {
        'corporate': '20px',
        'corporate-lg': '24px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        scan: {
          '0%': { top: '0%' },
          '50%': { top: '100%' },
          '100%': { top: '0%' }
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        marqueeReverse: 'marqueeReverse 40s linear infinite',
        scan: 'scan 2s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
