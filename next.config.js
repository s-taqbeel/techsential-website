/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.csd.gov.pk",
      },
    ],
  },
}

module.exports = nextConfig
