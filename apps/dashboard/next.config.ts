import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@radar/database', '@radar/types'],
}

export default nextConfig
