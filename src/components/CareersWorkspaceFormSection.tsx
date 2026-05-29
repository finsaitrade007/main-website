import {
  getCareersPage,
  type StrapiCareersPage,
  type StrapiPoint,
} from "@/lib/strapi";
import CareersWorkspaceFormClient from "./CareersWorkspaceFormClient";

type Fallback = Pick<
  StrapiCareersPage,
  "workspaceTitle" | "workspaceDescription" | "formTermsText" | "formSubmitLabel"
> & { workspaceBenefits: StrapiPoint[] };

const FALLBACK: Fallback = {
  workspaceTitle: "More than just a work space",
  workspaceDescription:
    "Finsai Trade is engineered to deliver seamless execution, institutional-grade tools and reliable uptime — so you can stay in control wherever you trade. Whether you're a beginner or a pro, our platform helps you trade smarter and faster.",
  formTermsText:
    "I have read and accepted the terms and conditions specified in the Privacy Policy and currently consent to the collecting, processing and disclosing of the personal data provided by me to fulfil the above-said purposes.",
  formSubmitLabel: "MESSAGE US",
  workspaceBenefits: [
    {
      id: 1,
      title: "Collaborate with top talents",
      description: "Deep dive into market dynamics with institutional tools.",
    },
    {
      id: 2,
      title: "Innovate & Make an Impact",
      description: "Real-time quotes and lightning-fast execution speed.",
    },
    {
      id: 3,
      title: "Growth & Development",
      description: "Advanced calculators and margin alerts to stay safe.",
    },
    {
      id: 4,
      title: "Global & Inclusive Culture",
      description: "Backtesting engines to refine your trading edge.",
    },
  ],
};

export default async function CareersWorkspaceFormSection() {
  const data = await getCareersPage();
  const title = data?.workspaceTitle ?? FALLBACK.workspaceTitle;
  const description = data?.workspaceDescription ?? FALLBACK.workspaceDescription;
  const termsText = data?.formTermsText ?? FALLBACK.formTermsText;
  const submitLabel = data?.formSubmitLabel ?? FALLBACK.formSubmitLabel;
  const benefits =
    data?.workspaceBenefits && data.workspaceBenefits.length > 0
      ? data.workspaceBenefits
      : FALLBACK.workspaceBenefits;

  return (
    <CareersWorkspaceFormClient
      title={title}
      description={description}
      termsText={termsText}
      submitLabel={submitLabel}
      benefits={benefits}
    />
  );
}
