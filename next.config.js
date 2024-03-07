/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DASHBOARD_BASE_URL_API: process.env.DASHBOARD_BASE_URL_API,
  },
};

module.exports = nextConfig;
