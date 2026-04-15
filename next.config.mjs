/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: false,
    webpack: (config) => {
        config.parallelism = 1;
        return config;
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'irtmac.rightwellton.az',
            port: '',
            pathname: '/storage/**',
        }],
    },
    async redirects() {
        return [{
            source: '/',
            destination: '/az',
            permanent: true,
        }];
    },
    reactStrictMode: false,
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
