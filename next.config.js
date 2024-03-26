/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DASHBOARD_BASE_URL_API: process.env.DASHBOARD_BASE_URL_API,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
