import withPWAInit from '@ducanh2912/next-pwa'

// Config for PWA
const withPWA = withPWAInit({
  dest: 'public', // Output directory for service worker and precache files (relative to Next.js root directory).
  disable: false, // Disable PWA in certain environments if needed (development, staging, ...).
  cacheOnFrontendNav: true, // Enable additional route caching when users navigate through pages with next/link.
  aggressiveFrontEndNavCaching: true, // Cache every <link rel="stylesheet" /> and <script /> on frontend navigation.
  reloadOnOnline: true, // Reload the app when it has gone back online.
  workboxOptions: {
    disableDevLogs: true, // Disable logging during development.
  },
})

// Config for Next.js
const nextConfig = {
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
    dangerouslyAllowSVG: true, // Allows SVG images to be used
    unoptimized: false, // Setting 'unoptimized' to value 'false' means that images will be optimized by 'Next.js Image Optimization API'.
  },
  async redirects() {
    return [
      {
        source: '/personal-projects/eshop', // The deleted page
        destination: '/personal-projects/', // Redirect to projects
        permanent: true, // Use 301 for permanent redirect
      },
    ]
  },
}

// Merge the two configurations
export default withPWA({
  ...nextConfig,
})
