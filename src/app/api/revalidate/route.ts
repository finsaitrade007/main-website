import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { FAQ_SECTIONS } from "@/lib/faq-fallbacks";
import { CMS_TAGS, resourceForModel } from "@/lib/cms-registry";

/**
 * Strapi webhook target. Configure in Strapi under Settings → Webhooks:
 *
 *   URL:    https://<frontend>/api/revalidate?secret=<REVALIDATE_SECRET>
 *   Events: entry.publish, entry.update, entry.unpublish, entry.delete
 *
 * Tag and path mappings live in `lib/cms-registry.ts` — adding a content type
 * there is all that's needed for it to be invalidated here.
 */

function isAuthorized(request: NextRequest): boolean {
  const secret = process.env.REVALIDATE_SECRET;
  // Fail closed: with no secret configured, nothing may trigger revalidation.
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
    const body = (await request.json()) as { model?: string; uid?: string };
    model = body.model ?? body.uid;
  } catch {
    // Query-only revalidation is fine — Strapi always sends a body, but manual
    // cache busts via ?tag= or ?all=1 do not.
  }

  if (revalidateAll) {
    for (const tag of CMS_TAGS) revalidateTag(tag, "max");
    for (const section of FAQ_SECTIONS) revalidateTag(`faqs-${section}`, "max");
    return NextResponse.json({ revalidated: true, scope: "all-tags" });
  }

  const resource = model ? resourceForModel(model) : undefined;
  const tag = tagParam ?? resource?.tag;
  const paths = resource?.paths ?? [];

  if (tag) revalidateTag(tag, "max");

  // `getFaqsBySection` tags per-section, so the parent `faqs` tag alone is not
  // enough to refresh an individual page's FAQ block.
  if (tag === "faqs") {
    for (const section of FAQ_SECTIONS) revalidateTag(`faqs-${section}`, "max");
  }

  for (const path of paths) revalidatePath(path);

  return NextResponse.json({
    revalidated: true,
    tag: tag ?? null,
    paths,
    model: model ?? null,
    // Surfaces webhook misconfiguration: a model Strapi sends that the registry
    // doesn't know about would otherwise silently do nothing.
    known: model ? Boolean(resource) : null,
  });
}
