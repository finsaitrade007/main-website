import { getPartnershipsPage } from "@/lib/strapi";
import IBWhyClient from "./IBWhyClient";

const FALLBACK_TABS = [
  {
    label: "Rebates",
    title: "Earn More from Every Active Client",
    description:
      "Competitive rebates designed to reward performance as your network grows.",
  },
  {
    label: "Detailed Reports",
    title: "Track Every Result with Clarity",
    description:
      "Monitor referrals, trading activity, commissions, and payouts through detailed live reports.",
  },
  {
    label: "Multi-Tier Mode",
    title: "Scale Your Network More Efficiently",
    description:
      "Build and manage multi-level partner structures designed for long-term growth.",
  },
  {
    label: "Regulated Broker",
    title: "Trade with Confidence and Trust",
    description:
      "Partner with a secure and transparent trading environment built for modern traders.",
  },
];

export default async function IBWhySection() {
  const data = await getPartnershipsPage();

  const title = data?.whyTitle ?? "Why Top IBs Choose Finsai Trade";
  const description =
    data?.whyDescription ??
    "Built for partners who want faster growth, stronger earnings, and long-term success";
  const ctaLabel = data?.heroPrimaryCtaLabel ?? "Start Earning Today →";
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
