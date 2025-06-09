import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  }
};
module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
}

export default nextConfig
