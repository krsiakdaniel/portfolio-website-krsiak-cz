/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['app.codacy.com', 'github.com', 'img.shields.io', 'api.netlify.com'],
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
