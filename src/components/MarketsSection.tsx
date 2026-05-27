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
      "Trade major, minor, and exotic forex pairs with deep liquidity, competitive spreads, and ultra-fast execution on the global foreign exchange market.",
    image: null,
    order: 1,
  },
  {
    id: 2,
    documentId: "fallback-crypto",
    slug: "crypto",
    name: "Crypto",
    description:
      "Access Bitcoin, Ethereum, and hundreds of altcoins. Trade crypto CFDs with leverage around the clock on a secure, regulated platform.",
    image: null,
    order: 2,
  },
  {
    id: 3,
    documentId: "fallback-indices",
    slug: "indices",
    name: "Indices",
    description:
      "Trade top global stock indices and capture price movements across major economies, including US, European, Asian, and international markets.",
    image: null,
    order: 3,
  },
  {
    id: 4,
    documentId: "fallback-metals",
    slug: "metals",
    name: "Metals",
    description:
      "Diversify your portfolio with gold, silver, crude oil, natural gas, and other high-demand commodities traded across global markets.",
    image: null,
    order: 4,
  },
  {
    id: 5,
    documentId: "fallback-stocks",
    slug: "stocks",
    name: "Stocks",
    description:
      "Invest and trade shares of leading international companies listed on major global stock exchanges through a professional online trading platform.",
    image: null,
    order: 5,
  },
];

const FALLBACK_HEADER = {
  marketsBadge: "Market You Can Trade",
  marketsTitlePrefix: "Trade Every Market That ",
  marketsTitleAccent: "Matters",
  marketsDescription:
    "Finsai Trade gives modern traders access to 5,000+ trading instruments across forex, crypto, global stocks, indices, commodities, and CFDs.",
};

export default async function MarketsSection() {
  const [home, fetched] = await Promise.all([getHomepage(), getMarkets()]);
  const header = home ?? FALLBACK_HEADER;
  const markets =
    fetched && fetched.length > 0 ? fetched : FALLBACK_MARKETS;

  return (
    <section style={{ background: "#050208", padding: "100px 0" }}>
      <MarketsAccordion
        markets={markets}
        badge={header.marketsBadge}
        titlePrefix={header.marketsTitlePrefix}
        titleAccent={header.marketsTitleAccent}
        description={header.marketsDescription}
      />
    </section>
  );
}
