/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'irtmac.rightwellton.az',
            port: '',
            pathname: '/storage/**',
        }, ],
    },
    async redirects() {
        return [{
            source: '/',
            destination: '/az',
            permanent: true,
        }, ];
    },
    reactStrictMode: false,
    experimental: {
        missingSuspenseWithCSRBailout: false,
        legacyBrowsers: false, // Köhnə brauzerlər üçün dəstəyi söndürür
        modern: true, // Müasir JS istifadəsini aktiv edir
    },

};

export default nextConfig;