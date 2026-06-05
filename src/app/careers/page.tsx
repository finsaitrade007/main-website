import type { Metadata } from "next";
import CareersHeroSection from "@/components/CareersHeroSection";
import CareersWorkspaceFormSection from "@/components/CareersWorkspaceFormSection";
import { getCareersPage, seoToMetadata } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getCareersPage();
  return seoToMetadata(data?.seo, {
    title: "Careers at Finsai Trade — Build the Future of Trading",
    description:
      "Join the Finsai Trade team and help build the future of multi-asset trading.",
  });
}

export default function CareersPage() {
  return (
    <>
      <CareersHeroSection />
      <CareersWorkspaceFormSection />
    </>
  );
}
