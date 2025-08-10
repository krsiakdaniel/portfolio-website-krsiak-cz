import type { Config } from 'tailwindcss'

// Extend the Config type to include safelist with pattern support
type ExtendedConfig = Config & {
  safelist?: (string | { pattern: RegExp })[]
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
  // Using pattern-based approach for better maintainability and scalability
  safelist: [
    { pattern: /bg-(blue|gray|green|neutral|red|yellow)-(100|600|800)/ }, // Background colors
    { pattern: /border-(blue|green|neutral|red|yellow)-300/ }, // Border colors
    { pattern: /focus:ring-(blue|gray|green|red|yellow)-(300|400)/ }, // Focus ring colors
    { pattern: /hover:bg-(blue|gray|green|red|yellow)-800/ }, // Hover background colors
    { pattern: /text-(blue|green|neutral|red|yellow)-800/ }, // Text colors
    { pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/ }, // Text sizes
    { pattern: /(sm|md|lg):text-(6xl|7xl|9xl)/ }, // Responsive text sizes
  ],
}

export default config
