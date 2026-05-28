import RewardsHeroSection from "@/components/RewardsHeroSection";
import RewardsPromotionsSection from "@/components/RewardsPromotionsSection";
import RewardsLoyaltyProgramSection from "@/components/RewardsLoyaltyProgramSection";
import RewardsIBProgramSection from "@/components/RewardsIBProgramSection";
import RewardsCTASection from "@/components/RewardsCTASection";

export const metadata = {
  title: "Rewards | Finsai Trade",
  description:
    "Promotions, loyalty tiers and partner payouts — rewards built for active traders and affiliates on Finsai Trade.",
};

export default function RewardsPage() {
  return (
    <>
      <RewardsHeroSection />
      <RewardsPromotionsSection />
      <RewardsLoyaltyProgramSection />
      <RewardsIBProgramSection />
      <RewardsCTASection />
    </>
  );
}
