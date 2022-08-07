/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

}

module.exports = nextConfig

module.exports = {
  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },
  env: {
    INFURA_ID: process.env.INFURA_ID,
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
// module.exports = withBundleAnalyzer({})