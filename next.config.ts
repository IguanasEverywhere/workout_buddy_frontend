import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   async rewrites() {
    return [
      {
        source: '/api/local/:path*',
        destination: 'http://127.0.0.1:5555/:path*',
      },
    ];
  },
};

export default nextConfig;
