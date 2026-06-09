import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isExternal } from "@/lib/links";

type SmartLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children?: ReactNode;
  };

/**
 * Drop-in replacement for next/link's `Link`. Automatically opens external
 * URLs in a new tab (target="_blank" + rel="noopener noreferrer") while
 * leaving internal route navigation untouched. Explicit `target`/`rel`
 * props passed in still win.
 */
export default function SmartLink({
  href,
  target,
  rel,
  ...rest
}: SmartLinkProps) {
  const hrefString = typeof href === "string" ? href : "";
  const external = isExternal(hrefString);
  return (
    <Link
      href={href}
      target={target ?? (external ? "_blank" : undefined)}
      rel={rel ?? (external ? "noopener noreferrer" : undefined)}
      {...rest}
    />
  );
}
