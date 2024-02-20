/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // if (isServer) {
    //   require('./scripts/sitemap-generator')
    // }
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }
    return config
  },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     require('./scripts/sitemap-generator')
  //   }
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
  //   }
  //   return config
  // },
  devIndicators: {
    buildActivity: false
  }

}

// Conditionally set the output based on the environment
if (process.env.NEXT_PUBLIC_SEO === "false") {
  nextConfig.output = 'export'
  nextConfig.images.unoptimized = true
}

module.exports = nextConfig
