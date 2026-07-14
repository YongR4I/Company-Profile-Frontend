import HeroHeader from "@/components/shared/HeroHeader";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import Partners from "@/components/shared/Partners";
import CTA from "@/components/shared/CTA";
import { getBlogPosts, getBlogPage } from "@/lib/strapi-services";
import { toBlogPost } from "@/lib/mappers";

export default async function BlogPage() {
  const [posts, page] = await Promise.all([
    getBlogPosts(),
    getBlogPage(),
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <HeroHeader
        title={
          <>
            Sabiru <span className="text-water-300">Blog</span>
          </>
        }
        subtitle={page?.heroSubtitle || "What's on our mind"}
        variant="subpage"
      />
      <BlogGrid posts={posts.map(toBlogPost)} />
      <Partners />
      <CTA />
    </div>
  );
}
