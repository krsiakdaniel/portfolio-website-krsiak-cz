import withPWA from 'next-pwa'

const nextConfig = withPWA({
  dest: 'public', // Output directory for service worker and precache files
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
})

/** @type {import('next').NextConfig} */
export default {
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.codacy.com',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'api.netlify.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
    dangerouslyAllowSVG: true,
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: '/personal-projects/eshop', // Deleted page
        destination: '/personal-projects/', // Redirect to page
        permanent: true, // Use 301 for permanent redirect
      },
    ]
  },
}
