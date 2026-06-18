import type { Metadata } from "next";
import { LegalLayout, LegalSection, P } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Regulations",
  description:
    "Finsai Trade regulatory information: licensing, registration and oversight by the Financial Services Commission Mauritius.",
};

export default function RegulationsPage() {
  return (
    <LegalLayout title="Regulations">
      <LegalSection>
        <P>
          At Finsai, we are committed to providing our clients with the
          highest level of transparency and standards in the financial
          industry. We operate under strict regulatory oversight from
          several international jurisdictions.
        </P>
      </LegalSection>

      <LegalSection title="Financial Services Commission Mauritius">
        <P>
          Finsai Trade (Mauritius) Ltd is a company regulated by the
          Financial Services Commission Mauritius with License no:
          GB25204899, Registered in Mauritius under company number C228371.
        </P>
        <P>
          <strong>Contact number:</strong>{" "}
          <a
            href="tel: "
            style={{ color: "#7DB9D6", textDecoration: "underline" }}
          >
                         
          </a>
        </P>
        <P>
          <strong>Registered address:</strong> 3 Emerald Park, Trianon,
          Quatre Bornes 72257, MAURITIUS
        </P>
      </LegalSection>
    </LegalLayout>
  );
}
