/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'images/[path][name][ext]',
      },
    });
    return config;
  },
}

module.exports = nextConfig 