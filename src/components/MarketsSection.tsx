import MarketsAccordion from "./MarketsAccordion";
import {
  getHomepage,
  getMarkets,
  type StrapiMarket,
} from "@/lib/strapi";

const FALLBACK_MARKETS: StrapiMarket[] = [
  {
    id: 1,
    documentId: "fallback-forex",
    slug: "forex",
    name: "Forex",
    description:
      "Trade the global forex market with a trusted forex broker, offering major, minor, and exotic currency pairs, deep liquidity, competitive spreads, and ultra-fast execution.",
    localImage: "/markets/forex.png",
    order: 1,
  },
  {
    id: 2,
    documentId: "fallback-crypto",
    slug: "crypto",
    name: "Crypto",
    description:
      "Access leading cryptocurrency trading markets 24/7 with real-time pricing, advanced charting, and seamless execution on a professional trading platform.",
    localImage: "/markets/crypto.png",
    order: 2,
  },
  {
    id: 3,
    documentId: "fallback-indices",
    slug: "indices",
    name: "Indices",
    description:
      "Trade major stock indices from the US, Europe, Asia, and global markets to capitalize on market movements through advanced indices trading tools.",
    localImage: "/markets/indices.png",
    order: 3,
  },
  {
    id: 4,
    documentId: "fallback-metals",
    slug: "metals",
    name: "Metals",
    description:
      "Explore commodity trading opportunities with gold, silver, crude oil, natural gas, and other globally traded commodities from a single platform.",
    localImage: "/markets/metals.png",
    order: 4,
  },
  {
    id: 5,
    documentId: "fallback-stocks",
    slug: "stocks",
    name: "Stocks",
    description:
      "Experience online stock trading with access to leading international companies listed on major global stock exchanges through one professional trading platform.",
    localImage: "/markets/stocks.png",
    order: 5,
  },
];

const FALLBACK_HEADER = {
  marketsBadge: "Trade Without Limits ",
  marketsTitlePrefix: "Trade Every Market That Matters",
  marketsTitleAccent: "",
  marketsDescription:
    "Finsai Trade gives modern traders access to 5,000+ trading instruments across forex, crypto, global stocks, indices, commodities, and CFDs.",
};

export default async function MarketsSection() {
  const [home, fetched] = await Promise.all([getHomepage(), getMarkets()]);
  const header = home ?? FALLBACK_HEADER;
  const markets =
    fetched && fetched.length > 0 ? fetched : FALLBACK_MARKETS;
  const titlePrefix = header.marketsTitleAccent
    ? `${header.marketsTitlePrefix}${header.marketsTitleAccent}`
    : header.marketsTitlePrefix;

  return (
    <section style={{ background: "#050208" }}>
      <MarketsAccordion
        markets={markets}
        badge={header.marketsBadge}
        titlePrefix={titlePrefix}
        description={header.marketsDescription}
      />
    </section>
  );
}
