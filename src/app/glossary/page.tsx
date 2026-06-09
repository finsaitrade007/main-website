import type { Metadata } from "next";
import GlossaryHeroSection from "@/components/GlossaryHeroSection";
import GlossarySection from "@/components/GlossarySection";

export const metadata: Metadata = {
  title: "Trading Glossary - A-Z Guide to Trading Terms | Finsai Trade",
  description:
    "Clear, jargon-free definitions for every trading term - forex, CFDs, indices, commodities, crypto, MT5, leverage, spreads, and more. Search or browse A-Z.",
};

export default function GlossaryPage() {
  return (
    <>
      <GlossaryHeroSection />
      <GlossarySection />
    </>
  );
}
