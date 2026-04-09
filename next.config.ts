import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  transpilePackages: ["trust-guard-js"],
  async redirects() {
    return [
      {
        source: '/our-capabilities',
        destination: '/our-expertise',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
