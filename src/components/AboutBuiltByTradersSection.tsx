import { getAboutPage, type StrapiAboutPage, type StrapiPoint } from "@/lib/strapi";
import AboutBuiltByTradersClient from "./AboutBuiltByTradersClient";

type Fallback = Pick<
  StrapiAboutPage,
  "builtBadge" | "builtTitle" | "builtDescription"
> & { builtPoints: StrapiPoint[] };

const FALLBACK: Fallback = {
  builtBadge: "Our Story",
  builtTitle: "Built by Traders. Driven by Purpose",
  builtDescription:
    "Finsai Trade platforms are engineered to deliver seamless execution, institutional-level tools, and reliable uptime — so you stay in control, wherever you trade. Whether you're a beginner or a pro, our platforms help you trade smarter and faster.",
  builtPoints: [
    {
      id: 1,
      title: "The Problem",
      description:
        "Trade major, minor, and exotic forex pairs with deep liquidity, competitive spreads, and ultra-fast execution on the global foreign exchange market.",
    },
    {
      id: 2,
      title: "The Solutions",
      description:
        "Institutional-grade tools, transparent pricing and 24/7 multilingual support — engineered so every trader gets the same edge top desks have always enjoyed.",
    },
    {
      id: 3,
      title: "The Ecosystem",
      description:
        "From execution to insight, learning, automation and rewards — built end-to-end so nothing breaks at scale, no matter what market you trade.",
    },
  ],
};

export default async function AboutBuiltByTradersSection() {
  const data = await getAboutPage();
  const badge = data?.builtBadge ?? FALLBACK.builtBadge;
  const title = data?.builtTitle ?? FALLBACK.builtTitle;
  const description = data?.builtDescription ?? FALLBACK.builtDescription;
  const points =
    data?.builtPoints && data.builtPoints.length > 0
      ? data.builtPoints
      : FALLBACK.builtPoints;

  return (
    <section style={{ background: "#050208" }}>
      <AboutBuiltByTradersClient
        badge={badge}
        title={title}
        description={description}
        points={points}
      />
    </section>
  );
}
