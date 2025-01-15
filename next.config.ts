import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: { remotePatterns: [
    {
      protocol: 'https',
      hostname: 'brand.assets.adidas.com',
      port: '',
      pathname: '/image/upload/**',
      search: '',
    },
  ]}
};

export default nextConfig;
