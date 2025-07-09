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

// Next.js configuration object
const nextConfig = {
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
        source: '/status-page', // Renamed page
        destination: '/status', // Redirect to 'status'
        permanent: true, // Use 301 for permanent redirect
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
            key: 'Content-Security-Policy',
            value: [
              // Only allow resources to be loaded from the same origin
              "default-src 'self'",

              // Allow scripts from same origin, inline scripts, eval(), and Google Tag Manager
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com",

              // Allow API/network requests to same origin and Google Analytics endpoints
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",

              // Allow styles from same origin and inline styles (required for Tailwind CSS)
              "style-src 'self' 'unsafe-inline'",

              // Allow images from same origin, Google Analytics, data URIs, and any HTTPS source
              "img-src 'self' https://*.google-analytics.com https://*.googletagmanager.com data: https:",
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
      {
        source: '/recorder.js', // Smartlook analytics script
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, stale-while-revalidate=86400', // Cache for 1 year, allow stale content for 24h while revalidating
          },
        ],
      },
    ]
  },
}

// Merge the two configurations
export default withPWA({
  ...nextConfig,
})
