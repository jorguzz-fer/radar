/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@radar/database', '@radar/types'],
}

export default nextConfig
