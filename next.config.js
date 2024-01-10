/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [__dirname, "styles"],
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
}

module.exports = nextConfig

