import CareersHeroSection from "@/components/CareersHeroSection";
import CareersWorkspaceFormSection from "@/components/CareersWorkspaceFormSection";

export const metadata = {
  title: "Careers | Finsai Trade",
  description:
    "Join the Finsai Trade team and help build the future of multi-asset trading.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHeroSection />
      <CareersWorkspaceFormSection />
    </>
  );
}
