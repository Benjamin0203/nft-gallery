/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: 'src',
    newNextLinkBehavior: false,
  },
  images: {
    domains: ['probably0.mypinata.cloud'],
  },
}

module.exports = nextConfig
