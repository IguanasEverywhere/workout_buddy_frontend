import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'standalone',
   async rewrites() {
    return [
      {
        source: '/api/local/:path*',
        destination: 'http://host.docker.interal:5555/:path*',
      },
    ];
  },
};

export default nextConfig;
