import type { Metadata } from "next";
import BlogsHeroSection from "@/components/BlogsHeroSection";
import BlogsGridSection from "@/components/BlogsGridSection";
import PageJsonLd from "@/components/PageJsonLd";
import {
  cmsPageMetadata,
  PAGE_SEO,
  resolveSeoText,
} from "@/lib/page-seo";
import { getBlogsPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getBlogsPage();
  return cmsPageMetadata(data?.seo, PAGE_SEO.blogs);
}

export default async function BlogsPage() {
  const data = await getBlogsPage();
  const seo = resolveSeoText(data?.seo, PAGE_SEO.blogs);

  return (
    <>
      <PageJsonLd
        path={PAGE_SEO.blogs.path}
        title={seo.title}
        description={seo.description}
      />
      <BlogsHeroSection />
      <BlogsGridSection />
    </>
  );
}
