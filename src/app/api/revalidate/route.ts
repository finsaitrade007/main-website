import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const CMS_TAGS = [
  "homepage",
  "markets",
  "platforms",
  "steps",
  "awards",
  "testimonials",
  "journey-cards",
  "account-tiers",
  "faqs",
  "about-page",
  "careers-page",
  "accounts-page",
  "payments-page",
  "services-page",
  "partnerships-page",
  "blogs-page",
  "contactus-page",
  "nav-items",
] as const;

const MODEL_TO_TAG: Record<string, (typeof CMS_TAGS)[number]> = {
  "api::homepage.homepage": "homepage",
  "api::market.market": "markets",
  "api::platform.platform": "platforms",
  "api::step.step": "steps",
  "api::award.award": "awards",
  "api::testimonial.testimonial": "testimonials",
  "api::journey-card.journey-card": "journey-cards",
  "api::account-tier.account-tier": "account-tiers",
  "api::faq.faq": "faqs",
  "api::about-page.about-page": "about-page",
  "api::careers-page.careers-page": "careers-page",
  "api::accounts-page.accounts-page": "accounts-page",
  "api::payments-page.payments-page": "payments-page",
  "api::services-page.services-page": "services-page",
  "api::partnerships-page.partnerships-page": "partnerships-page",
  "api::blogs-page.blogs-page": "blogs-page",
  "api::contactus-page.contactus-page": "contactus-page",
};

const MODEL_TO_PATHS: Record<string, string[]> = {
  "api::homepage.homepage": ["/"],
  "api::market.market": ["/"],
  "api::platform.platform": ["/"],
  "api::step.step": ["/", "/services"],
  "api::award.award": ["/"],
  "api::testimonial.testimonial": ["/"],
  "api::journey-card.journey-card": ["/"],
  "api::account-tier.account-tier": ["/accounts"],
  "api::faq.faq": ["/"],
  "api::about-page.about-page": ["/about"],
  "api::careers-page.careers-page": ["/careers"],
  "api::accounts-page.accounts-page": ["/accounts"],
  "api::payments-page.payments-page": ["/payments"],
  "api::services-page.services-page": ["/services"],
  "api::partnerships-page.partnerships-page": ["/partnerships"],
  "api::blogs-page.blogs-page": ["/blogs"],
  "api::contactus-page.contactus-page": ["/contactus"],
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
  for (const path of paths) revalidatePath(path);

  return NextResponse.json({
    revalidated: true,
    tag: tag ?? null,
    paths,
    model: model ?? null,
  });
}
