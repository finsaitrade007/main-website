import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    // Next 16 whitelists quality values and defaults to 75, which visibly
    // softens these illustrations. Allow lossless-grade 100.
    qualities: [75, 100],
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
