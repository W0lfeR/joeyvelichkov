/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production"
const path = require('path');

const nextConfig = {
  basePath: isProduction ? '/fj' : "",
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.forEach((rule) => {
      const { oneOf } = rule;
      if (oneOf) {
        oneOf.forEach((one) => {
          if (!`${one.issuer?.and}`.includes('_app')) return;
          one.issuer.and = [path.resolve(__dirname)];
        });
      }
    })
    return config;
  },
}


module.exports = nextConfig
