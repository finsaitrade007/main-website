/**
 * Returns true when an href points to an external URL
 * (anything starting with http://, https://, or //).
 */
export function isExternal(href: string | undefined | null): boolean {
  if (!href) return false;
  return /^(https?:)?\/\//i.test(href);
}

/**
 * Convenience helper that returns the target/rel props needed to make a
 * link open in a new tab when its href is external, and an empty object
 * otherwise. Spread it onto a Link/<a> element:
 *
 *   <Link href={data.href} {...externalLinkProps(data.href)} />
 */
export function externalLinkProps(
  href: string | undefined | null,
): { target?: "_blank"; rel?: "noopener noreferrer" } {
  return isExternal(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}
