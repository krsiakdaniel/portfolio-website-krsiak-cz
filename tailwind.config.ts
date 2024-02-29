import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // New - https://nextjs.org/docs/app
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Old version - https://nextjs.org/docs/pages/building-your-application/routing
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // https://nextjs.org/docs/app/building-your-application/configuring/src-directory
  ],
  screens: {
    xs: '320px',
    // => @media (min-width: 320px) { ... }

    sm: '640px',
    // => @media (min-width: 640px) { ... }

    md: '768px',
    // => @media (min-width: 768px) { ... }

    lg: '1024px',
    // => @media (min-width: 1024px) { ... }

    xl: '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  colors: {
    primary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6', // tailwind color: Violet
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065',
    },
  },
  theme: {},
  plugins: [require('flowbite/plugin')],
}
export default config
