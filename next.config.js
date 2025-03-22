/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
    loader: 'custom',
    loaderFile: './image-loader.js',
    path: '',
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
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig 