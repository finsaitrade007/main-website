import Image from "next/image";
import type { Author } from "@/lib/authors";
import s from "./blog.module.css";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

function LinkIcon({ label }: { label: string }) {
  if (/linkedin/i.test(label)) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M5.5 2.5H2.5v9h9v-3M8 2.5h3.5V6M11.5 2.5 6.5 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * "Written by" box near the end of every article: photo, name, role,
 * experience, expertise, short bio and profile links. Fields left empty in
 * the author registry are simply omitted.
 */
export default function AuthorBox({ author }: { author: Author }) {
  const role = [author.role, author.experience].filter(Boolean).join(" · ");
  return (
    <section id="author" className={s.author} aria-label={`About the author, ${author.name}`}>
      <div className={s.authorPhoto}>
        {author.photo ? (
          <Image src={author.photo} alt={author.name} width={96} height={96} sizes="96px" />
        ) : (
          <span aria-hidden>{initials(author.name)}</span>
        )}
      </div>
      <div>
        <p className={s.authorLabel}>Written by</p>
        <p className={s.authorName}>{author.name}</p>
        {role ? <p className={s.authorRole}>{role}</p> : null}
        {author.bio ? <p className={s.authorBio}>{author.bio}</p> : null}
        {author.expertise?.length ? (
          <ul className={s.authorTags} aria-label="Areas of expertise">
            {author.expertise.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
        {author.links?.length ? (
          <div className={s.authorLinks}>
            {author.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                <LinkIcon label={link.label} />
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
