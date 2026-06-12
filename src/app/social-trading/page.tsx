import type { Metadata } from "next";
import SocialTradingHeroSection from "@/components/SocialTradingHeroSection";
import SocialTradingFeaturesSection from "@/components/SocialTradingFeaturesSection";
import SocialTradingHowItWorksSection from "@/components/SocialTradingHowItWorksSection";
import SocialTradingLeaderboardSection from "@/components/SocialTradingLeaderboardSection";
import SocialTradingJourneySection from "@/components/SocialTradingJourneySection";
import FAQSection from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import SocialTradingCTASection from "@/components/SocialTradingCTASection";

const SOCIAL_TRADING_FAQS: FAQItem[] = [
  {
    question:
      "What is Social Trading and how is it different from a managed account?",
    answer:
      "Social Trading lets you copy the trades of a strategy provider in real time through your own MT5 account — you retain full ownership and control. Unlike a managed account, no one has direct access to your funds. You can stop copying at any time, no notice required.",
  },
  {
    question: "Is my capital at risk?",
    answer:
      "Yes. Trading financial instruments involves significant risk and is not suitable for all investors. You can lose some or all of your invested capital. Social Trading does not eliminate market risk. Please read our full risk disclosure before proceeding.",
  },
  {
    question: "What is the minimum amount to start copying?",
    answer:
      "The minimum allocation per copy relationship is $200. Each copied trade must be above the minimum lot size supported by your account type. Positions below this threshold will not be opened in your account.",
  },
  {
    question: "How is the provider's commission calculated?",
    answer:
      "Providers earn a monthly performance-based commission set within a regulated range. The exact rate is disclosed on each provider's profile before you copy them. Commission is deducted from investor profits at the end of each billing cycle — providers only earn when you do.",
  },
  {
    question: "Can I copy multiple providers at the same time?",
    answer:
      "Yes. You can copy up to 10 strategy providers simultaneously from a single account, each with its own allocation and stop-loss configuration. This allows you to diversify across multiple strategies, instruments, and risk profiles.",
  },
  {
    question: "How do I qualify to become a strategy provider?",
    answer:
      "You need a live Finsai Trade MT5 account with at least 90 days of verified trading history, a minimum of 50 closed trades, and a risk score within our approved parameters. Apply through your client portal and our team will review your account within 5 business days.",
  },
  {
    question: "How quickly are trades copied to my account?",
    answer:
      "Trades are typically executed in your account within milliseconds of the provider's original order. Execution speed depends on server latency and market conditions, but the system is built for near-instantaneous replication.",
  },
];

export const metadata: Metadata = {
  title: "Social Trading — Copy Top Traders | Finsai Trade",
  description: "Follow experienced traders or become a strategy provider. Copy trades live, share your strategy, and earn rewards with Finsai Trade Social Trading.",
};

export default function SocialTradingPage() {
  return (
    <>
      <SocialTradingHeroSection />
      <SocialTradingFeaturesSection />
      <SocialTradingHowItWorksSection />
      <SocialTradingLeaderboardSection />
      <SocialTradingJourneySection />
      <FAQSection faqs={SOCIAL_TRADING_FAQS} />
      <SocialTradingCTASection />
    </>
  );
}
