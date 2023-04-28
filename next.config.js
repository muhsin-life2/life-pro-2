/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {

  reactStrictMode: true,
  images: {
    domains: ['life-cdn.lifepharmacy.com', 'lifeadmin-app.s3.me-south-1.amazonaws.com', 'www.lifepharmacy.com', 'via.placeholder.com'],
  },
  i18n
}

module.exports = nextConfig;



