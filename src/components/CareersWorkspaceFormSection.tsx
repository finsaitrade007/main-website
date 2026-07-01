import {
  getCareersPage,
  type StrapiCareersPage,
  type StrapiPoint,
} from "@/lib/strapi";
import CareersWorkspaceFormClient from "./CareersWorkspaceFormClient";

type Fallback = Pick<
  StrapiCareersPage,
  "workspaceTitle" | "workspaceDescription" | "formTitle" | "formTermsText" | "formSubmitLabel"
> & { workspaceBenefits: StrapiPoint[] };

const FALLBACK: Fallback = {
  workspaceTitle: "Why Work With Finsai Trade",
  workspaceDescription:
    "Join a workplace focused on growth, flexibility, ownership, and meaningful impact across global fintech and trading markets.",
  formTitle: "Apply Now",
  formTermsText:
    "I have read and accepted the terms and conditions specified in the Privacy Policy and currently consent to the collecting, processing and disclosing of the personal data provided by me to fulfil the above-said purposes.",
  formSubmitLabel: "MESSAGE US",
  workspaceBenefits: [
    {
      id: 1,
      title: "Growth That Moves Fast",
      description: "Learn quickly through high-impact projects and cross-functional collaboration.",
    },
    {
      id: 2,
      title: "Ownership & Autonomy",
      description: "Take initiative, share ideas, and drive meaningful outcomes.",
    },
    {
      id: 3,
      title: "Flexible Team Culture",
      description: "Work in a transparent and collaborative environment built around flexibility.",
    },
    {
      id: 4,
      title: "Real Global Impact",
      description: "Build products and experiences used by traders worldwide.",
    },
  ],
};

export default async function CareersWorkspaceFormSection() {
  const data = await getCareersPage();
  const title = data?.workspaceTitle ?? FALLBACK.workspaceTitle;
  const description = data?.workspaceDescription ?? FALLBACK.workspaceDescription;
  const formTitle = data?.formTitle ?? FALLBACK.formTitle;
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
      formTitle={formTitle}
      termsText={termsText}
      submitLabel={submitLabel}
      benefits={benefits}
    />
  );
}
