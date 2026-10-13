import BlogListing, { type ListingCard } from "@/components/blog/BlogListing";
import { formatBlogDate } from "@/lib/blogs";
import { categorySlug, getCategories, getSortedPosts } from "@/lib/blog-helpers";

/**
 * Blog listing: search, category filter, paginated card grid.
 *
 * `page` and `category` come from the URL (/blogs?category=…&page=…), so every
 * page of the archive is a real, crawlable address that renders on the
 * server.
 */
export default function BlogsGridSection({
  page = 1,
  category = null,
}: {
  page?: number;
  category?: string | null;
}) {
  const cards: ListingCard[] = getSortedPosts().map((post) => ({
    slug: post.slug,
    href: `/blogs/${post.slug}`,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    categorySlug: categorySlug(post.category),
    image: post.image,
    date: formatBlogDate(post.publishedAt),
    readTime: post.readTime,
    searchText: `${post.title} ${post.excerpt} ${post.category}`.toLowerCase(),
  }));

  return <BlogListing cards={cards} categories={getCategories()} activeCategory={category} page={page} />;
}
