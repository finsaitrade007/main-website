import Link from "next/link";
import s from "./blog.module.css";

export type Crumb = { name: string; href: string };

/**
 * Home → Blog → Category → Article. Every level but the last is a link; the
 * current page is marked aria-current and truncates on narrow screens. The
 * matching BreadcrumbList structured data is emitted with the article's
 * JSON-LD from the same list.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const last = items.length - 1;
  return (
    <nav aria-label="Breadcrumb" className={s.breadcrumbs}>
      <ol>
        {items.map((item, i) =>
          i === last ? (
            <li key={item.href} className={s.crumbCurrent} aria-current="page">
              <span title={item.name}>{item.name}</span>
            </li>
          ) : (
            <li key={item.href}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ),
        )}
      </ol>
    </nav>
  );
}
