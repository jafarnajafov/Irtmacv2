/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "irtmac.rightwellton.az",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/az",
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;
