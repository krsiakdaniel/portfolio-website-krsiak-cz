import type { Config } from 'tailwindcss'

// Extend the Config type to include safelist
type ExtendedConfig = Config & {
  safelist?: string[]
}

// Custom colors for the project
const customColors = {
  violet: {
    600: '#6829D3',
  },
}

// Custom keyframes for animations
const customKeyframes = {
  // CSS classname: animate-pulse-bubble
  pulseBubble: {
    '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
    '50%': { transform: 'scale(1.1)', opacity: '0.7' },
  },
  // CSS classname: animate-ghost-previous
  animateGhostPrevious: {
    '0%, 100%': { transform: 'translateX(0)' },
    '50%': { transform: 'translateX(-30px)' },
  },
  // CSS classname: animate-ghost-next
  animateGhostNext: {
    '0%, 100%': { transform: 'translateX(0)' },
    '50%': { transform: 'translateX(30px)' },
  },
  // CSS classname: animate-man-walk
  manWalk: {
    '0%, 100%': { transform: 'translateX(0)' },
    '50%': { transform: 'translateX(2px)' },
  },
  // CSS classname: animate-gentle-bounce
  gentleBounce: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
  // CSS classname: animate-fade-in-scroll
  fadeInScroll: {
    '0%': { opacity: '0', transform: 'translateY(10px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  // CSS classname: animate-slide-down
  slideDown: {
    '0%': { transform: 'translateY(-10px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  // CSS classname: animate-slide-up
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
  'man-walk': `manWalk ${ANIMATION_TIMING.TWO_SECONDS} ${EASE_IN_OUT} infinite`,
  'gentle-bounce': `gentleBounce ${ANIMATION_TIMING.TWO_SECONDS} ${EASE_IN_OUT} infinite`,
  'fade-in-scroll': `fadeInScroll ${ANIMATION_TIMING.HALF_SECOND} ${EASE_IN_OUT}`,
  'slide-down': `slideDown ${ANIMATION_TIMING.QUARTER_SECOND} ${EASE_IN_OUT}`,
  'slide-up': `slideUp ${ANIMATION_TIMING.QUARTER_SECOND} ${EASE_IN_OUT}`,
}

// Config file for Tailwind CSS
const config: ExtendedConfig = {
  // 1. Content paths - defines what files Tailwind scans for class names
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Application code
    './components/**/*.{js,ts,jsx,tsx}', // Reusable components
    './lib/**/*.{js,ts,jsx,tsx}', // Utility functions
  ],

  // 2. Theme configuration - core styling definitions
  theme: {
    extend: {
      colors: customColors,
      keyframes: customKeyframes,
      animation: customAnimations,
    },
  },

  // 3. Plugins - third-party extensions
  plugins: [],

  // 4. Safelist - classes always included in final CSS (for dynamic classes)
  safelist: [
    // Background colors
    'bg-blue-100',
    'bg-blue-600',
    'bg-gray-600',
    'bg-gray-800',
    'bg-green-100',
    'bg-green-600',
    'bg-neutral-100',
    'bg-red-100',
    'bg-red-600',
    'bg-yellow-100',
    'bg-yellow-600',

    // Border colors
    'border-blue-300',
    'border-green-300',
    'border-neutral-300',
    'border-red-300',
    'border-yellow-300',

    // Focus ring colors
    'focus:ring-blue-300',
    'focus:ring-blue-400',
    'focus:ring-gray-300',
    'focus:ring-gray-400',
    'focus:ring-green-400',
    'focus:ring-red-300',
    'focus:ring-red-400',
    'focus:ring-yellow-400',

    // Hover background colors
    'hover:bg-blue-800',
    'hover:bg-gray-800',
    'hover:bg-green-800',
    'hover:bg-red-800',
    'hover:bg-yellow-800',

    // Responsive text sizes
    'sm:text-6xl',
    'sm:text-9xl',
    'md:text-7xl',
    'lg:text-9xl',

    // Base text sizes
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

    // Text colors
    'text-blue-800',
    'text-green-800',
    'text-neutral-800',
    'text-red-800',
    'text-yellow-800',
  ],
}

export default config
