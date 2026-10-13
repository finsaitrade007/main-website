/**
 * Blog authors, keyed by the exact `author` string used on posts in blogs.ts.
 *
 * Drives the author box at the end of every article and the `author` node in
 * the article's structured data. A post whose author is not listed here still
 * renders: the box falls back to the name alone with an initials avatar.
 *
 * Adding a named writer (recommended for E-E-A-T): add an entry with
 * `kind: "Person"`, a square photo of at least 160 × 160 in public/authors/,
 * the person's role, relevant experience, areas of expertise, a 90–120
 * character bio and their public profile links, then set `author` on their
 * posts to the same name.
 */

export type AuthorLink = { label: string; href: string };

export type Author = {
  name: string;
  /** Person for named writers; Organization for team / desk bylines. */
  kind: "Person" | "Organization";
  /** e.g. "Market Analyst", "Editorial Team". */
  role: string;
  /** Square image under /public, at least 160 × 160. */
  photo?: string;
  /** e.g. "8 years trading FX and commodities". Shown when present. */
  experience?: string;
  expertise?: string[];
  /** 90–120 characters. */
  bio: string;
  links?: AuthorLink[];
};

const FINSAI_LINKEDIN = "https://www.linkedin.com/company/finsai-trade";

export const AUTHORS: Record<string, Author> = {
  "Finsai Trade Team": {
    name: "Finsai Trade Team",
    kind: "Organization",
    role: "Editorial Team",
    photo: "/authors/finsai-trade.png",
    expertise: ["Market analysis", "Trading education", "Trading platforms"],
    bio: "Market analysis and trading education from the Finsai Trade editorial team, written for active traders.",
    links: [{ label: "LinkedIn", href: FINSAI_LINKEDIN }],
  },
  "Finsai Trade Research": {
    name: "Finsai Trade Research",
    kind: "Organization",
    role: "Research Desk",
    photo: "/authors/finsai-trade.png",
    expertise: ["Macro & markets", "Trading strategy", "Risk management"],
    bio: "Research-led commentary on markets, macro events and trading strategy from the Finsai Trade research desk.",
    links: [{ label: "LinkedIn", href: FINSAI_LINKEDIN }],
  },
};

/** Registry entry for a byline, or a minimal stand-in so nothing breaks. */
export function getAuthor(name: string | undefined): Author | null {
  if (!name) return null;
  return (
    AUTHORS[name] ?? {
      name,
      kind: "Person",
      role: "Contributor",
      bio: "",
    }
  );
}
