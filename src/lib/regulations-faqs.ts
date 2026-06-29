import type { FaqItem } from "@/lib/faq-fallbacks";
import {
  FINSAI_COMPANY_REG_NO,
  FINSAI_LICENSE_NO,
} from "@/lib/site";

export const REGULATIONS_FAQS: FaqItem[] = [
  {
    question: "Is Finsai Trade regulated by a financial authority?",
    answer:
      `Yes, Finsai Trade is regulated by the Financial Services Commission (FSC) of Mauritius under license number ${FINSAI_LICENSE_NO}.`,
  },
  {
    question: "Which jurisdictions does Finsai Trade operate in?",
    answer:
      "Finsai Trade currently operates in Mauritius, under the regulatory framework established by the Financial Services Commission (FSC).",
  },
  {
    question: "How does Finsai Trade protect client funds?",
    answer:
      "We maintain segregation of client funds in accordance with FSC Mauritius requirements. Refer to our client agreement for details.\n\nNote: Mauritius does not operate a client compensation scheme; client protections rely on regulatory oversight and fund segregation practices.",
  },
  {
    question: "What is the regulatory status of Finsai Trade in Mauritius?",
    answer:
      `Finsai Trade (Mauritius) Ltd holds an Investment Dealer License (license number ${FINSAI_LICENSE_NO}, company registration ${FINSAI_COMPANY_REG_NO}) issued by the Financial Services Commission (FSC) of Mauritius. This license authorizes Finsai Trade to provide investment dealing and related financial services in compliance with Mauritian financial regulations.`,
  },
  {
    question: "Does regulation vary between Finsai Trade's legal entities?",
    answer:
      "Yes, regulation may vary between Finsai Trade's legal entities. Different entities within the group hold different license types, specifically an Investment Dealer License and a Global Business License each carrying its own regulatory obligations and scope of permitted activities. Clients are encouraged to review which entity they are contracting with to understand the specific regulatory protections that apply to them.",
  },
];
