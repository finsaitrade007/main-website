/**
 * Merge a CMS payload over local fallbacks without letting null/empty values
 * clobber defaults. Strapi often returns `null` for unfilled optional fields.
 */
export function mergeWithFallbacks<T extends Record<string, unknown>>(
  fallback: T,
  cms: Partial<T> | null | undefined,
): T {
  if (!cms) return fallback;

  const result = { ...fallback };
  for (const key of Object.keys(cms) as (keyof T)[]) {
    const value = cms[key];
    if (value == null) continue;
    if (typeof value === "string" && value.trim() === "") continue;
    if (Array.isArray(value) && value.length === 0) continue;
    result[key] = value as T[keyof T];
  }
  return result;
}
