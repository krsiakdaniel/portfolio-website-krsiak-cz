import type { Config } from 'tailwindcss'

const config: Config = {
  // Config file for Tailwind CSS
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
    'md:text-7xl',
    'sm:text-9xl',
    'lg:text-9xl',
    'bg-red-600',
    'hover:bg-red-800',
    'focus:ring-red-300',
    'bg-blue-600',
    'hover:bg-blue-800',
    'focus:ring-blue-300',
    'bg-gray-600',
    'hover:bg-gray-800',
    'focus:ring-gray-300',

    // Alert Type Classes
    'border-blue-300',
    'bg-blue-100',
    'text-blue-800',
    'border-green-300',
    'bg-green-100',
    'text-green-800',
    'border-yellow-300',
    'bg-yellow-100',
    'text-yellow-800',
    'border-red-300',
    'bg-red-100',
    'text-red-800',
    'border-neutral-300',
    'bg-neutral-100',
    'text-neutral-800',
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
  // Theme configuration
  theme: {
    extend: {
      colors: {
        violet: {
          600: '#6829D3',
        },
      },
    },
  },
  // Plugins
  plugins: [require('flowbite/plugin')],
}

export default config
