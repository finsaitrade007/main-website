import { getAboutPage, type StrapiAboutPage, type StrapiPoint } from "@/lib/strapi";
import AboutBuiltByTradersClient from "./AboutBuiltByTradersClient";

type Fallback = Pick<
  StrapiAboutPage,
  "builtBadge" | "builtTitle" | "builtDescription"
> & { builtPoints: StrapiPoint[] };

const FALLBACK: Fallback = {
  builtBadge: "Our Story",
  builtTitle: "Built to Make Global Trading Simpler, Faster, and Fully Transparent",
  builtDescription:
    "Founded by professional traders and fintech investors, Finsai Trade unifies raw market liquidity, intuitive execution, and structured learning into a single connected trading ecosystem.",
  builtPoints: [
    {
      id: 1,
      title: "Built By Traders",
      description:
        "Created by a team with deep experience across global markets, Finsai Trade was designed to solve the everyday complexity faced by retail and institutional participants alike.",
    },
    {
      id: 2,
      title: "The Solutions",
      description:
        "Institutional-grade tools, multi asset broker direct market access, zero hidden markups, and 24/7 multilingual client support ensure every user receives the same competitive edge as an institutional liquidity trading broker desk.",
    },
    {
      id: 3,
      title: "The Ecosystem",
      description:
        "From instantaneous execution to technical insights, automated trading systems, and referral rewards, our online multi asset broker infrastructure operates reliably at enterprise scale.",
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
