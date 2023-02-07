/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: 'src',
    newNextLinkBehavior: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
