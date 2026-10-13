import Link from "next/link";
import BlogImage from "./BlogImage";
import s from "./blog.module.css";

export type BlogCardData = {
  href: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  /** Pre-formatted, e.g. "Oct 5, 2026". */
  date?: string;
  readTime?: string;
};

export const CARD_IMAGE_SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px";

/**
 * Blog card: the whole card is one link — image, category, title, excerpt and
 * "Read More" are all inside it. The title is an H3 clamped to two lines so
 * every card in a row lines up; the excerpt is the short description beneath.
 */
export default function BlogCard({
  post,
  priority = false,
}: {
  post: BlogCardData;
  priority?: boolean;
}) {
  const meta = [post.date, post.readTime].filter(Boolean).join(" · ");
  return (
    <Link href={post.href} className={s.card}>
      <div className={s.cardMedia}>
        {/* Decorative here: the title inside the same link already names it. */}
        <BlogImage src={post.image} alt="" sizes={CARD_IMAGE_SIZES} priority={priority} />
      </div>
      <div className={s.cardBody}>
        <span className={s.cardCategory}>{post.category}</span>
        <h3 className={s.cardTitle} title={post.title}>
          {post.title}
        </h3>
        <p className={s.cardExcerpt}>{post.excerpt}</p>
        <div className={s.cardFoot}>
          <span className={s.cardMore}>
            Read More
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {meta ? <span className={s.cardMeta}>{meta}</span> : null}
        </div>
      </div>
    </Link>
  );
}
