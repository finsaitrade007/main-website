import JsonLd from "@/components/JsonLd";
import type { FaqItem, FaqSection } from "@/lib/faq-fallbacks";
import { resolvePageFaqs } from "@/lib/page-seo";
import {
  buildArticleStructuredData,
  buildPageStructuredData,
  buildRegulationsStructuredData,
} from "@/lib/structured-data";

type StandardProps = {
  variant?: "standard";
  path: string;
  title: string;
  description: string;
  faqSection?: FaqSection;
  faqs?: FaqItem[];
};

type RegulationsProps = {
  variant: "regulations";
  title: string;
  description: string;
  faqs: FaqItem[];
};

type ArticleProps = {
  variant: "article";
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  author?: string;
};

type PageJsonLdProps = StandardProps | RegulationsProps | ArticleProps;

export default async function PageJsonLd(props: PageJsonLdProps) {
  if (props.variant === "regulations") {
    return (
      <JsonLd
        data={buildRegulationsStructuredData(props.faqs, {
          title: props.title,
          description: props.description,
        })}
      />
    );
  }

  if (props.variant === "article") {
    return <JsonLd data={buildArticleStructuredData(props)} />;
  }

  const faqs = props.faqSection
    ? await resolvePageFaqs(props.faqSection)
    : props.faqs;

  return (
    <JsonLd
      data={buildPageStructuredData({
        path: props.path,
        title: props.title,
        description: props.description,
        faqs,
      })}
    />
  );
}
