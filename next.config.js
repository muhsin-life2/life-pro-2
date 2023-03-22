/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['life-cdn.lifepharmacy.com', 'lifeadmin-app.s3.me-south-1.amazonaws.com', 'www.lifepharmacy.com'],
  },
}
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
