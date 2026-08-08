import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Crawl directives for the marketing site.
 *
 * `/api/*` is disallowed: those routes are the contact handler, the revalidate
 * webhook, the price proxy and the leaderboard feed — none are content, and
 * two of them are POST-only side-effecting endpoints.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
