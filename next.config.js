/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: 'src',
    newNextLinkBehavior: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
