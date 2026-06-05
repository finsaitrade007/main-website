import type { Metadata } from "next";
import IBHeroSection from "@/components/BlogsHeroSection";
import BlogsNewsSection from "@/components/BlogsNewsSection";
import { getBlogsPage, seoToMetadata } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getBlogsPage();
  return seoToMetadata(data?.seo, {
    title: "Trader Knowledge Hub — Blogs & Market News | Finsai Trade",
    description:
      "Sharp market insights, trading education, and analysis you can act on. Track macro events, technical setups, and platform updates from Finsai Trade.",
  });
}

export default function PartnershipsPage() {
  return (
    <>
      <IBHeroSection />
      <BlogsNewsSection />
    </>
  );
}
