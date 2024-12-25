/** @type {import('next').NextConfig} */
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
    dangerouslyAllowSVG: true,
    unoptimized: false,
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

export default nextConfig
