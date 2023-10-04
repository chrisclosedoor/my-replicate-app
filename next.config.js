/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pbxt.replicate.delivery', 'replicate.com', 'replicate.delivery'],
  },
};

module.exports = nextConfig;
