import type { Metadata } from "next";
import TickerBar from "@/components/TickerBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MarketsSection from "@/components/MarketsSection";
import PlatformsSection from "@/components/PlatformsSection";
import AccountTypesSection from "@/components/AccountTypesSection";
import StepsSection from "@/components/StepsSection";
import AwardsSection from "@/components/AwardsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { getHomepage, seoToMetadata } from "@/lib/strapi";

const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: "What is Finsai Trade?",
    answer:
      "Finsai Trade is a multi-asset trading platform that provides access to global financial markets through a single account. Traders can buy and sell forex, stocks, cryptocurrencies, commodities, indices, and CFDs using advanced trading tools and professional-grade technology.",
  },
  {
    question: "Why choose Finsai Trade for online trading?",
    answer:
      "Finsai Trade combines multi-asset market access, fast trade execution, advanced charting tools, social trading features, and secure trading infrastructure. It is designed to help both new and experienced traders access global markets with confidence.",
  },
  {
    question: "Does Finsai Trade use MetaTrader 5 (MT5)?",
    answer:
      "Yes. Finsai Trade is powered by MetaTrader 5 (MT5), one of the world's most popular trading platforms. MT5 offers advanced technical analysis, automated trading capabilities, real-time market data, and powerful charting tools for multi-asset trading.",
  },
  {
    question:
      "What are the benefits of trading on a multi-asset trading platform?",
    answer:
      "A multi-asset trading platform enables traders to access multiple markets from a single account. This makes it easier to diversify investments, manage risk, and take advantage of opportunities across forex, stocks, commodities, cryptocurrencies, and indices.",
  },
  {
    question: "How do I open a trading account with Finsai Trade?",
    answer:
      "Getting started is simple. Register for an account online, complete the verification process, fund your account, and begin trading global markets through the MT5 trading platform. New traders can also start with a demo account before moving to live trading.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepage();
  return seoToMetadata(data?.seo, {
    title: "Finsai Trade — Trade Global Markets Without Limits",
    description:
      "The powerful multi-asset trading platform for modern traders. Trade Forex, Crypto, Stocks, Indices, and Metals with tight spreads, up to 500x leverage, and 24/7 support.",
  });
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerBar />
      <FeaturesSection />
      <MarketsSection />
      <PlatformsSection />
      <AccountTypesSection />
      <StepsSection />
      <AwardsSection />
      <TestimonialsSection />
      <FAQSection faqs={HOMEPAGE_FAQS} />
      <CTASection />
    </>
  );
}
