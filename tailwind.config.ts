import type { Config } from 'tailwindcss'

// Extend the Config type to include safelist and screens
type ExtendedConfig = Config & {
  safelist?: string[]
  screens?: Record<string, string>
}

// Custom colors for the project
const customColors = {
  violet: {
    600: '#6829D3',
  },
}

// Custom keyframes for animations
const customKeyframes = {
  pulseBubble: {
    '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
    '50%': { transform: 'scale(1.1)', opacity: '0.7' },
  },
  animateGhostPrevious: {
    '0%, 100%': { transform: 'translateX(0)' },
    '50%': { transform: 'translateX(-30px)' },
  },
  animateGhostNext: {
    '0%, 100%': { transform: 'translateX(0)' },
    '50%': { transform: 'translateX(30px)' },
  },
  manWalk: {
    '0%, 100%': { transform: 'translateX(0)' },
    '50%': { transform: 'translateX(2px)' },
  },
  gentleBounce: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
  fadeIn: {
    '0%': { opacity: '0.5' },
    '100%': { opacity: '1' },
  },
  slideDown: {
    '0%': { transform: 'translateY(-10px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  slideUp: {
    '0%': { transform: 'translateY(0)', opacity: '1' },
    '100%': { transform: 'translateY(-10px)', opacity: '0' },
  },
}

// Animation timing
const ANIMATION_TIMING = {
  QUARTER_SECOND: '250ms',
  HALF_SECOND: '500ms',
  ONE_SECOND: '1000ms',
  TWO_SECONDS: '2000ms',
  THREE_SECONDS: '3000ms',
} as const

// Animation types
const EASE_IN_OUT = 'ease-in-out' as const

const customAnimations = {
  'pulse-bubble': `pulseBubble ${ANIMATION_TIMING.THREE_SECONDS} infinite`,
  'ghost-previous': `animateGhostPrevious ${ANIMATION_TIMING.TWO_SECONDS} ${EASE_IN_OUT} infinite`,
  'ghost-next': `animateGhostNext ${ANIMATION_TIMING.TWO_SECONDS} ${EASE_IN_OUT} infinite`,
  'man-walk': `manWalk infinite ${ANIMATION_TIMING.TWO_SECONDS} ${EASE_IN_OUT}`,
  'gentle-bounce': `gentleBounce infinite ${ANIMATION_TIMING.TWO_SECONDS} ${EASE_IN_OUT}`,
  'fade-in': `fadeIn ${ANIMATION_TIMING.HALF_SECOND} ${EASE_IN_OUT}`,
  'slide-down': `slideDown ${ANIMATION_TIMING.QUARTER_SECOND} ${EASE_IN_OUT}`,
  'slide-up': `slideUp ${ANIMATION_TIMING.QUARTER_SECOND} ${EASE_IN_OUT}`,
}

const customScreenSizes = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

const config: ExtendedConfig = {
  // Config file for Tailwind CSS
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // New - https://nextjs.org/docs/app
    './pages/**/*.{js,ts,jsx,tsx}', // Old version - https://nextjs.org/docs/pages/building-your-application/routing
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // https://nextjs.org/docs/app/building-your-application/configuring/src-directory
  ],
  // If you need to make sure Tailwind generates certain class names that don't exist in content files.
  safelist: [
    'bg-blue-100',
    'bg-blue-600',
    'bg-gray-600',
    'bg-gray-800',
    'bg-green-100',
    'bg-neutral-100',
    'bg-red-100',
    'bg-red-600',
    'bg-yellow-100',
    'border-blue-300',
    'border-green-300',
    'border-neutral-300',
    'border-red-300',
    'border-yellow-300',
    'focus:ring-blue-300',
    'focus:ring-gray-300',
    'focus:ring-red-300',
    'hover:bg-blue-800',
    'hover:bg-gray-800',
    'hover:bg-red-800',
    'sm:text-6xl',
    'sm:text-9xl',
    'md:text-7xl',
    'lg:text-9xl',
    'text-sm',
    'text-md',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl',
    'text-7xl',
    'text-8xl',
    'text-9xl',
    'text-blue-800',
    'text-green-800',
    'text-neutral-800',
    'text-red-800',
    'text-yellow-800',
  ],
  // Define custom screen sizes
  screens: customScreenSizes,
  // Theme configuration
  theme: {
    extend: {
      colors: customColors,
      animation: customAnimations,
      keyframes: customKeyframes,
    },
  },
  // Plugins
  plugins: [],
}

export default config
