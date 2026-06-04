import { getPartnershipsPage } from "@/lib/strapi";
import IBWhyClient from "./IBWhyClient";

const FALLBACK_TABS = [
  {
    label: "Robust Support",
    title: "Trade global currency pairs with tight spreads and fast execution.",
    description:
      "Access the world's most liquid financial market and trade majors, minors, and exotics 24/5 with real-time pricing and advanced tools.",
  },
  {
    label: "Transparency",
    title: "Full transparency on every trade and commission earned.",
    description:
      "We provide clear and honest reporting on all your referrals, trades, and commissions — no hidden fees, no surprises.",
  },
  {
    label: "Attractive Rebates",
    title: "Earn competitive rebates on every trade your clients make.",
    description:
      "Our rebate structure is designed to maximize your earnings with every referral, giving you a reliable and growing income stream.",
  },
  {
    label: "Competitive Tools",
    title: "Access powerful tools to grow your partner network.",
    description:
      "From marketing materials to real-time dashboards, we equip you with everything you need to succeed as an introducing broker.",
  },
];

export default async function IBWhySection() {
  const data = await getPartnershipsPage();

  const title = data?.whyTitle ?? "Why Become an IB with Finsai Trade?";
  const description =
    data?.whyDescription ?? "Smart, secure, and reliable trading for everyone, everywhere.";
  const ctaLabel = data?.heroPrimaryCtaLabel ?? "Explore More →";
  const ctaHref = data?.heroPrimaryCtaHref ?? "https://fx.finsaitrade.com/auth/register";

  const tabs =
    data?.whyFeatures?.length
      ? data.whyFeatures.map((feature) => ({
          label: feature.iconKey ?? feature.title,
          title: feature.title,
          description: feature.description ?? "",
        }))
      : FALLBACK_TABS;

  return (
    <IBWhyClient
      title={title}
      description={description}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
      tabs={tabs}
    />
  );
}
