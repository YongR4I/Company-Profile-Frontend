import HeroHeader from "@/components/shared/HeroHeader";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import Partners from "@/components/shared/Partners";
import CTA from "@/components/shared/CTA";
import Footer from "@/components/layout/Footer";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <HeroHeader
        title={
          <>
            Sabiru <span className="text-water-300">Blog</span>
          </>
        }
        subtitle="What's on our mind"
        variant="subpage"
      />
      <BlogGrid />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}
