/**
 * Overlay CMS values onto a complete local fallback object.
 *
 * Strapi returns every optional field as `string | null | undefined`, so
 * spreading a page payload over a fallback (`{ ...FALLBACK, ...cms }`) both
 * widens the resulting type and lets `null` clobber a good default. This keeps
 * the fallback's concrete types and only takes CMS values that are actually
 * present — `null`, `undefined` and blank strings are ignored.
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
