import PaymentsHeroSection from "@/components/PaymentsHeroSection";
import PaymentsTrustBar from "@/components/PaymentsTrustBar";
import PaymentsMethodsSection from "@/components/PaymentsMethodsSection";
import PaymentsCTASection from "@/components/PaymentsCTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Payments | Finsai Trade",
  description:
    "Fund your Finsai Trade account securely with cards, UPI, e-wallets, crypto, and bank transfer. Industry-leading PCI DSS encryption.",
};

export default function PaymentsPage() {
  return (
    <>
      <PaymentsHeroSection />
      <PaymentsTrustBar />
      <PaymentsMethodsSection />
      <PaymentsCTASection />
      <FAQSection />
    </>
  );
}
