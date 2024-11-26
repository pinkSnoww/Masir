/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_USERNAME: process.env.API_USERNAME,
    API_PASSWORD: process.env.API_PASSWORD,
    API_BASE_URL: process.env.API_BASE_URL,
  },
  images: {
    domains: ['171.22.25.164'],
  },
}

module.exports = nextConfig;
