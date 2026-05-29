import withPWAInit from '@ducanh2912/next-pwa'
import type { NextConfig } from 'next'

// Config for PWA
const withPWA = withPWAInit({
  dest: 'public', // Output directory for service worker and precache files (relative to Next.js root directory).
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development to prevent compilation loops
  cacheOnFrontEndNav: true, // Enable additional route caching when users navigate through pages with next/link.
  aggressiveFrontEndNavCaching: true, // Cache every <link rel="stylesheet" /> and <script /> on frontend navigation.
  reloadOnOnline: true, // Reload the app when it has gone back online.
  workboxOptions: {
    disableDevLogs: true, // Disable logging during development.
  },
})

// Next.js configuration object
const nextConfig: NextConfig = {
  // Add this to silence the Turbopack warning
  turbopack: {},
  // Configure pageExtensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    // List of allowed domains for external images
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
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'uptime.betterstack.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
    // Modern image format support
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true, // Allows SVG images to be used
    unoptimized: false, // Setting 'unoptimized' to value 'false' means that images will be optimized by 'Next.js Image Optimization API'.
  },

  // Redirects configuration
  async redirects() {
    return [
      {
        source: '/about-me', // The deleted page
        destination: '/resume', // Redirect to 'resume'
        permanent: true, // Use 301 for permanent redirect
      },
      {
        source: '/personal-projects/eshop', // The deleted page
        destination: '/personal-projects', // Redirect to 'personal-projects'
        permanent: true, // Use 301 for permanent redirect
      },
      {
        source: '/personal-projects/cryptomania', // The deleted page
        destination: '/personal-projects', // Redirect to 'personal-projects'
        permanent: true, // Use 301 for permanent redirect
      },
      {
        source: '/status-page', // Renamed page
        destination: '/status', // Redirect to 'status'
        permanent: true, // Use 301 for permanent redirect
      },
      {
        source: '/downloads', // Redirect directory listing to resume page
        destination: '/resume', // Redirect to 'resume'
        permanent: false, // Use 302 — download paths are internal, may change
      },
    ]
  },

  // Custom HTTP headers configuration
  async headers() {
    return [
      {
        source: '/:path*', // Apply to all routes
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              // Only allow resources to be loaded from the same origin
              "default-src 'self'",

              // Allow scripts from same origin, inline scripts, Google Tag Manager, and Hotjar
              // 'unsafe-eval' is only required in development for Turbopack — excluded from production
              `script-src 'self' 'unsafe-inline' ${process.env.NODE_ENV === 'development' ? "'unsafe-eval' " : ''}https://*.googletagmanager.com https://*.hotjar.com`,

              // Allow API/network requests to same origin, Google Analytics, and Hotjar endpoints
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.hotjar.com wss://*.hotjar.com https://*.hotjar.io wss://*.hotjar.io",

              // Allow styles from same origin and inline styles (required for Tailwind CSS)
              "style-src 'self' 'unsafe-inline'",

              // Allow images from same origin, Google Analytics, Hotjar, data URIs, and any HTTPS source
              "img-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://*.hotjar.com data: https:",

              // Allow fonts from Hotjar
              "font-src 'self' https://*.hotjar.com",

              // Allow frames from Hotjar (for feedback widgets)
              'frame-src https://*.hotjar.com',
            ].join('; '),
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|png|webp|avif|gif)', // Match any image files in any directory
        headers: [
          {
            key: 'Cache-Control',
            value:
              process.env.NODE_ENV === 'development'
                ? 'no-cache, no-store, must-revalidate' // Disable caching in development for instant updates
                : 'public, max-age=3600, must-revalidate', // Cache for 1 hour in production, then revalidate
          },
        ],
      },
    ]
  },
}

// Merge the configurations (PWA)
export default withPWA({
  ...nextConfig,
})
