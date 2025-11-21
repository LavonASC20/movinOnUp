import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', 
  reactStrictMode: true,
  basePath: "movinOnUp",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
