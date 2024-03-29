/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['app.codacy.com', 'github.com', 'img.shields.io', 'api.netlify.com'],
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig
