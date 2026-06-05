import ContactUsHeroSection from "@/components/ContactUsHeroSection";
import ContactSupportFormSection from "@/components/ContactSupportFormSection";

export const metadata = {
  title: "Contact Us | Finsai Trade",
  description:
    "Get in touch with the Finsai Trade team for support, partnerships, and inquiries.",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactUsHeroSection />
      <ContactSupportFormSection />
    </>
  );
}
