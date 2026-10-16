import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Images for marketing e-mails live on the SPP server and are managed by marketing in the SPP CRM
// (Email assets). The e-mails load them from finsaitrade.com/email-assets/<name>, so this site
// passes those requests through. Nothing for them is kept in /public: a file there would win.
const EMAIL_ASSETS_ORIGIN = (process.env.EMAIL_ASSETS_ORIGIN || "https://partners.finsaitrade.com").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  images: {
    // Next 16 whitelists quality values and defaults to 75, which visibly
    // softens these illustrations. Allow lossless-grade 100.
    qualities: [75, 100],
    // In Next.js 16+, image optimization rejects localhost / private-IP
    // upstreams as an SSRF safeguard. Only opt-in for local dev.
    dangerouslyAllowLocalIP: isDev,
  },
  async rewrites() {
    return [
      {
        source: "/email-assets/:path*",
        destination: `${EMAIL_ASSETS_ORIGIN}/email-assets/:path*`,
      },
    ];
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
      // Pre-revamp regulation page. The current page with up-to-date licence
      // information is /regulations; the old URL must never serve content.
      {
        source: "/regulation",
        destination: "/regulations",
        permanent: true,
      },
      {
        source: "/regulation/:path*",
        destination: "/regulations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
