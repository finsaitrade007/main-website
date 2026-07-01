import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    // In Next.js 16+, image optimization rejects localhost / private-IP
    // upstreams as an SSRF safeguard. Only opt-in for local dev.
    dangerouslyAllowLocalIP: isDev,
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/platform",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "/platform/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
