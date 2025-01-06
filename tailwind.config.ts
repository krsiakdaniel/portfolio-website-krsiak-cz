import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // New - https://nextjs.org/docs/app
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Old version - https://nextjs.org/docs/pages/building-your-application/routing
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // https://nextjs.org/docs/app/building-your-application/configuring/src-directory
  ],
  // If you need to make sure Tailwind generates certain class names that don’t exist in content files.
  safelist: [
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
    'sm:text-6xl',
    'lg:text-7xl',
    'sm:text-9xl',
    'lg:text-9xl',
    'bg-red-700',
    'hover:bg-red-800',
    'focus:ring-red-300',
    'bg-blue-700',
    'hover:bg-blue-800',
    'focus:ring-blue-300',
    'bg-gray-700',
    'hover:bg-gray-800',
    'focus:ring-gray-300',
  ],
  // Define custom screen sizes
  screens: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  theme: {
    extend: {
      keyframes: {
        walk: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(2px)' },
        },
      },
      animation: {
        walk: 'walk 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

export default config
