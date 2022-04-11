/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  reactStrictMode:true,
  env : {
    API_ENDPOINT: process.env.API_ENDPOINT
  }
}
