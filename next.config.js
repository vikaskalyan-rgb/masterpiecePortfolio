/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["swiper"],
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            'swiper/css': require.resolve('swiper/swiper.min.css'),
        };
        return config;
    },
}

module.exports = nextConfig