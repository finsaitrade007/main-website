import type { Metadata } from "next";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import ServicesPlatformsSection from "@/components/ServicesPlatformsSection";
import StepsSection from "@/components/StepsSection";
import FAQSection from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { getServicesPage, seoToMetadata } from "@/lib/strapi";

const SERVICES_FAQS: FAQItem[] = [
  {
    question: "Which trading platform is best for beginners?",
    answer:
      "If you're new to trading, the Finsai Trade App and Social Trading platform are great starting points. You can practice with demo accounts, copy experienced traders, and access user-friendly tools designed for beginners.",
  },
  {
    question: "What makes MetaTrader 5 (MT5) different from other platforms?",
    answer:
      "MT5 is one of the world's most advanced trading platforms, offering professional-grade charting, automated trading through Expert Advisors (EAs), multi-timeframe analysis, and advanced strategy testing tools.",
  },
  {
    question: "How does Social Trading work?",
    answer:
      "Social Trading allows you to automatically copy trades from experienced traders in real time. You can review performance metrics, manage risk settings, and follow strategies that match your trading goals.",
  },
  {
    question: "Can experienced traders earn through the platform?",
    answer:
      "Absolutely. With Social Trading, experienced traders can become strategy providers, build followers, and earn rewards based on their trading performance and community growth.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicesPage();
  return seoToMetadata(data?.seo, {
    title: "Trading Services | Finsai Trade — MT5, Social & Mobile",
    description:
      "Three trading environments built for every level. Trade with MT5, copy top performers via social trading, or stay connected with our upcoming mobile app.",
  });
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesPlatformsSection />
      <StepsSection />
      <FAQSection faqs={SERVICES_FAQS} />
    </>
  );
}
