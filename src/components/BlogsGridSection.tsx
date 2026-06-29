import ResponsiveScale from "@/components/ResponsiveScale";
import { BLOG_POSTS } from "@/lib/blogs";
import { BlogsSearchDesktop, BlogsSearchMobile } from "@/components/BlogsSearchSection";

const allBlogCards = BLOG_POSTS.map((post) => ({
  title: post.title,
  category: post.category,
  image: post.image,
  desc: post.excerpt,
  href: `/blogs/${post.slug}`,
}));

export default function BlogsGridSection() {
  return (
    <section
      className="page-section"
      style={{
        background: "#050208",
        overflow: "hidden",
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <div className="steps-horizontal">
        <ResponsiveScale designWidth={1440}>
          <div style={{ position: "relative", width: "1440px", minHeight: "880px" }}>
            <BlogsSearchDesktop allCards={allBlogCards} />
          </div>
        </ResponsiveScale>
      </div>

      <div className="steps-vertical" style={{ padding: "48px 20px" }}>
        <BlogsSearchMobile allCards={allBlogCards} />
      </div>
    </section>
  );
}
