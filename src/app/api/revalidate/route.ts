import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { FAQ_SECTIONS } from "@/lib/faq-fallbacks";

const CMS_TAGS = [
  "homepage",
  "markets",
  "platforms",
  "steps",
  "awards",
  "testimonials",
  "account-tiers",
  "faqs",
  "about-page",
  "careers-page",
  "accounts-page",
  "payments-page",
  "platform-page",
  "partnerships-page",
  "blogs-page",
  "contactus-page",
  "social-trading-page",
  "glossary-page",
  "regulations-page",
  "privacy-policy-page",
  "terms-conditions-page",
  "risk-disclosure-page",
  "aml-policy-page",
  "refund-policy-page",
  "client-agreement-page",
  "upfront-disclosure-page",
  "complaints-management-page",
  "conflicts-of-interest-policy-page",
  "nav-items",
] as const;

const MODEL_TO_TAG: Record<string, (typeof CMS_TAGS)[number]> = {
  "api::homepage.homepage": "homepage",
  "api::market.market": "markets",
  "api::platform.platform": "platforms",
  "api::step.step": "steps",
  "api::award.award": "awards",
  "api::testimonial.testimonial": "testimonials",
  "api::account-tier.account-tier": "account-tiers",
  "api::faq.faq": "faqs",
  "api::about-page.about-page": "about-page",
  "api::careers-page.careers-page": "careers-page",
  "api::accounts-page.accounts-page": "accounts-page",
  "api::payments-page.payments-page": "payments-page",
  "api::platform-page.platform-page": "platform-page",
  "api::partnerships-page.partnerships-page": "partnerships-page",
  "api::blogs-page.blogs-page": "blogs-page",
  "api::contactus-page.contactus-page": "contactus-page",
  "api::social-trading-page.social-trading-page": "social-trading-page",
  "api::glossary-page.glossary-page": "glossary-page",
  "api::regulations-page.regulations-page": "regulations-page",
  "api::privacy-policy-page.privacy-policy-page": "privacy-policy-page",
  "api::terms-conditions-page.terms-conditions-page": "terms-conditions-page",
  "api::risk-disclosure-page.risk-disclosure-page": "risk-disclosure-page",
  "api::aml-policy-page.aml-policy-page": "aml-policy-page",
  "api::refund-policy-page.refund-policy-page": "refund-policy-page",
  "api::client-agreement-page.client-agreement-page": "client-agreement-page",
  "api::upfront-disclosure-page.upfront-disclosure-page": "upfront-disclosure-page",
  "api::complaints-management-page.complaints-management-page": "complaints-management-page",
  "api::conflicts-of-interest-policy-page.conflicts-of-interest-policy-page":
    "conflicts-of-interest-policy-page",
};

const MODEL_TO_PATHS: Record<string, string[]> = {
  "api::homepage.homepage": ["/"],
  "api::market.market": ["/"],
  "api::platform.platform": ["/"],
  "api::step.step": ["/", "/platform"],
  "api::award.award": ["/"],
  "api::testimonial.testimonial": ["/"],
  "api::account-tier.account-tier": ["/accounts"],
  "api::faq.faq": ["/", "/accounts", "/platform", "/payments", "/partnerships", "/social-trading"],
  "api::about-page.about-page": ["/about"],
  "api::careers-page.careers-page": ["/careers"],
  "api::accounts-page.accounts-page": ["/accounts"],
  "api::payments-page.payments-page": ["/payments"],
  "api::platform-page.platform-page": ["/platform"],
  "api::partnerships-page.partnerships-page": ["/partnerships"],
  "api::blogs-page.blogs-page": ["/blogs"],
  "api::contactus-page.contactus-page": ["/contactus"],
  "api::social-trading-page.social-trading-page": ["/social-trading"],
  "api::glossary-page.glossary-page": ["/glossary"],
  "api::regulations-page.regulations-page": ["/regulations"],
  "api::privacy-policy-page.privacy-policy-page": ["/privacy-policy"],
  "api::terms-conditions-page.terms-conditions-page": ["/terms-conditions"],
  "api::risk-disclosure-page.risk-disclosure-page": ["/risk-disclosure"],
  "api::aml-policy-page.aml-policy-page": ["/aml-policy"],
  "api::refund-policy-page.refund-policy-page": ["/refund-policy"],
  "api::client-agreement-page.client-agreement-page": ["/client-agreement"],
  "api::upfront-disclosure-page.upfront-disclosure-page": ["/upfront-disclosure"],
  "api::complaints-management-page.complaints-management-page": [
    "/complaints-management",
  ],
  "api::conflicts-of-interest-policy-page.conflicts-of-interest-policy-page": [
    "/conflicts-of-interest-policy",
  ],
};

function isAuthorized(request: NextRequest): boolean {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) return false;
  const fromQuery = request.nextUrl.searchParams.get("secret");
  const fromHeader = request.headers.get("x-revalidate-secret");
  return fromQuery === secret || fromHeader === secret;
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const revalidateAll = request.nextUrl.searchParams.get("all") === "1";
  const tagParam = request.nextUrl.searchParams.get("tag");

  let model: string | undefined;
  try {
    const body = (await request.json()) as {
      model?: string;
      uid?: string;
    };
    model = body.model ?? body.uid;
  } catch {
    // query-only revalidation is fine
  }

  const tag = tagParam ?? (model ? MODEL_TO_TAG[model] : undefined);
  const paths = model ? (MODEL_TO_PATHS[model] ?? []) : [];

  if (revalidateAll) {
    for (const t of CMS_TAGS) revalidateTag(t, "max");
    return NextResponse.json({ revalidated: true, scope: "all-tags" });
  }

  if (tag) revalidateTag(tag, "max");
  if (tag === "faqs" || model === "api::faq.faq") {
    for (const section of FAQ_SECTIONS) {
      revalidateTag(`faqs-${section}`, "max");
    }
  }
  for (const path of paths) revalidatePath(path);

  return NextResponse.json({
    revalidated: true,
    tag: tag ?? null,
    paths,
    model: model ?? null,
  });
}
