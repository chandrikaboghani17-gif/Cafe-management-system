/** @type {import('next').NextConfig} */

const nextConfig = {
  allowedDevOrigins: ['10.187.166.138'],

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig