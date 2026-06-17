import { getAboutPage, type StrapiAboutPage, type StrapiPoint } from "@/lib/strapi";
import AboutBuiltByTradersClient from "./AboutBuiltByTradersClient";

type Fallback = Pick<
  StrapiAboutPage,
  "builtBadge" | "builtTitle" | "builtDescription"
> & { builtPoints: StrapiPoint[] };

const FALLBACK: Fallback = {
  builtBadge: "Our Story",
  builtTitle: "Built to Make Global Trading Simpler and More Accessible",
  builtDescription:
    "Founded by experienced traders and investors, Finsai Trade combines powerful market access, intuitive technology, and trader education into one seamless ecosystem.",
  builtPoints: [
    {
      id: 1,
      title: "Built By Traders",
      description:
        "Created by a team with deep experience across global markets, Finsai Trade was designed to solve the complexity traders face every day.",
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
