import type { Metadata } from "next";
import RewardsHeroSection from "@/components/RewardsHeroSection";
import RewardsIBSection from "@/components/RewardsIBSection";
import RewardsCTASection from "@/components/RewardsCTASection";
import PageJsonLd from "@/components/PageJsonLd";
import { cmsPageMetadata, PAGE_SEO, resolveSeoText } from "@/lib/page-seo";

export async function generateMetadata(): Promise<Metadata> {
  return cmsPageMetadata(null, PAGE_SEO.rewards);
}

export default async function RewardsPage() {
  const seo = resolveSeoText(null, PAGE_SEO.rewards);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.rewards.path}
        title={seo.title}
        description={seo.description}
      />
      <RewardsHeroSection />
      <RewardsIBSection />
      <RewardsCTASection />
    </>
  );
}
