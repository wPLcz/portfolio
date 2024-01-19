const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(
      __dirname,
      '@',
      ''
    )]
    // includePaths: [path.join(__dirname, 'app', '')],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['@'] = path.join(
      __dirname,
      'app'
    );
    // config.resolve.alias['@'] = path.join(__dirname);
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  }
}

module.exports = nextConfig

