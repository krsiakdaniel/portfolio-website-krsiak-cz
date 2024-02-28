import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // New - https://nextjs.org/docs/app
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Old version - https://nextjs.org/docs/pages/building-your-application/routing
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // https://nextjs.org/docs/app/building-your-application/configuring/src-directory
  ],
  // TODO: remove theme content, to allow tailwindcss to use the default theme
  // TODO: use default TW + flowbite
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '10rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
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
      green: {
        100: '#F0FEFA',
      },
      red: {
        500: '#C0392B',
      },
      orange: {
        100: '#ffedd5',
        500: '#f97316',
      },
      neutral: {
        900: '#111827',
        800: '#1F2937',
        700: '#374151',
        600: '#4B5563',
        500: '#6B7280',
        400: '#9CA3AF',
        300: '#D1D5DB',
        200: '#E5E7EB',
        100: '#F3F4F6',
        50: '#F9FAFB',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      'display-2xl': [
        '72px',
        {
          letterSpacing: '-0.025em',
          lineHeight: '90px',
        },
      ],
      'display-xl': [
        '60px',
        {
          letterSpacing: '-0.025em',
          lineHeight: '72px',
        },
      ],
      'display-lg': [
        '48px',
        {
          letterSpacing: '-0.025em',
          lineHeight: '60px',
        },
      ],
      'display-md': [
        '36px',
        {
          letterSpacing: '-0.025em',
          lineHeight: '45px',
        },
      ],
      'display-sm': [
        '30px',
        {
          letterSpacing: '0em',
          lineHeight: '40px',
        },
      ],
      'display-xs': [
        '24px',
        {
          letterSpacing: '0em',
          lineHeight: '32px',
        },
      ],
      'body-xl': [
        '20px',
        {
          letterSpacing: '0em',
          lineHeight: '28px',
        },
      ],
      'body-lg': [
        '18px',
        {
          letterSpacing: '0em',
          lineHeight: '28px',
        },
      ],
      'body-md': [
        '16px',
        {
          letterSpacing: '0em',
          lineHeight: '26px',
        },
      ],
      'body-sm': [
        '14px',
        {
          letterSpacing: '0em',
          lineHeight: '20px',
        },
      ],
      'body-xs': [
        '12px',
        {
          letterSpacing: '0em',
          lineHeight: '16px',
        },
      ],
    },
    extend: {
      spacing: {
        18: '72px',
        22: '88px',
        30: '120px',
      },
      backgroundImage: {
        'skills-line':
          'linear-gradient(90deg, #9CA3AF 0%, rgba(156, 163, 175, 0) 39.47%, rgba(156, 163, 175, 0) 50%, rgba(156, 163, 175, 0) 60.51%, #9CA3AF 100%);',
      },
      letterSpacing: {
        2: '2px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
