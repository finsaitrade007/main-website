import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    // In Next.js 16+, image optimization rejects localhost / private-IP
    // upstreams as an SSRF safeguard. Only opt-in for local dev.
    dangerouslyAllowLocalIP: isDev,
  },
};

export default nextConfig;
