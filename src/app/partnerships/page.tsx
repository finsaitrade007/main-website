import type { Metadata } from "next";
import IBHeroSection from "@/components/IBHeroSection";
import IBWhySection from "@/components/IBWhySection";
import IBCalculatorSection from "@/components/IBCalculatorSection";
import IBStatsSection from "@/components/IBStatsSection";
import IBHowToSection from "@/components/IBHowToSection";
import FAQSection from "@/components/FAQSection";
import IBCTASection from "@/components/IBCTASection";
import { getPartnershipsPage, seoToMetadata } from "@/lib/strapi";
import type { FAQItem } from "@/components/FAQSection";

const PARTNERSHIPS_FAQS: FAQItem[] = [
  {
    question: "What is the Finsai Trade Introducing Broker (IB) Program?",
    answer:
      "The Finsai Trade IB Program allows partners to earn commissions by referring traders to the platform. Whether you're an influencer, educator, affiliate, or trading community owner, you can build a recurring revenue stream by growing your client network with Finsai Trade.",
  },
  {
    question: "How do I earn commissions with Finsai Trade?",
    answer:
      "As an IB partner, you earn commissions based on the trading activity of the clients you refer. Finsai Trade offers transparent tracking, competitive payouts, and performance-based rewards to help maximize your earning potential.",
  },
  {
    question:
      "Do I need trading experience to join the Finsai Trade IB Program?",
    answer:
      "No. You don't need to be an experienced trader to become an IB partner. If you have an audience, network, or community interested in trading, you can start referring clients and earning commissions with Finsai Trade.",
  },
  {
    question: "What tools and support does Finsai Trade provide for IB partners?",
    answer:
      "Finsai Trade provides IB partners with dedicated support, marketing materials, referral tracking tools, analytics dashboards, and prompt assistance to help you onboard clients and grow your business efficiently.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPartnershipsPage();
  return seoToMetadata(data?.seo, {
    title: "IB & Affiliate Partnerships | Finsai Trade",
    description:
      "Earn industry-leading commissions with the Finsai Trade IB program. Multi-tier rebates, real-time reports, and fast payouts for partners worldwide.",
  });
}

export default async function PartnershipsPage() {
  const data = await getPartnershipsPage();

  const calculatorTitle = data?.calculatorTitle ?? "Unlock Your Earning Potential";
  const calculatorDescription =
    data?.calculatorDescription ?? "Specify the expected values of your partner network";

  return (
    <>
      <IBHeroSection />
      <IBWhySection />
      <IBCalculatorSection title={calculatorTitle} description={calculatorDescription} />
      <IBStatsSection />
      <IBHowToSection />
      <FAQSection faqs={PARTNERSHIPS_FAQS} />
      <IBCTASection />
    </>
  );
}
