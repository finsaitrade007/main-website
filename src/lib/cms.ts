/**
 * Overlay CMS values onto a complete local fallback object.
 *
 * Strapi returns every optional field as `string | null | undefined`, so
 * spreading a page payload over a fallback (`{ ...FALLBACK, ...cms }`) both
 * widens the resulting type and lets `null` clobber a good default. This keeps
 * the fallback's concrete types and only takes CMS values that are actually
 * present — `null`, `undefined` and blank strings are ignored.
 *
 * Iteration is over the *fallback's* keys, not the CMS payload's. That is
 * deliberate: the fallback defines the contract the component renders against,
 * so an unexpected field appearing in the API response can never leak into the
 * result.
 *
 * There used to be a second, subtly different helper (`cms-fallback.ts`'s
 * `withFallback`, which iterated fallback keys, versus this file's
 * `mergeWithFallbacks`, which iterated CMS keys). Both claimed the same
 * purpose. They are now one function.
 */
export function withFallback<T extends Record<string, unknown>>(
  fallback: T,
  cms: Partial<Record<keyof T, unknown>> | null | undefined,
): T {
  if (!cms) return fallback;

  const out = { ...fallback };
  for (const key of Object.keys(fallback) as (keyof T)[]) {
    const value = cms[key];
    if (value === null || value === undefined) continue;
    if (typeof value === "string" && value.trim() === "") continue;
    // An empty array is Strapi saying "this component has no entries",
    // not "override the fallback with nothing".
    if (Array.isArray(value) && value.length === 0) continue;
    out[key] = value as T[keyof T];
  }
  return out;
}
