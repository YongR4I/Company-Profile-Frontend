import { getTranslations } from "next-intl/server";
import HeroHeader from "@/components/shared/HeroHeader";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import Partners from "@/components/shared/Partners";
import CTA from "@/components/shared/CTA";
import { getBlogPosts, getBlogPage } from "@/lib/strapi-services";
import { toBlogPost } from "@/lib/mappers";
import { blogData } from "@/data/blog";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const [posts, page] = await Promise.all([
    getBlogPosts(locale),
    getBlogPage(locale),
  ]);

  const displayPosts = posts.length > 0 ? posts.map(toBlogPost) : blogData;

  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <HeroHeader
        title={
          <>
            {t("heroTitle")}
          </>
        }
        subtitle={page?.heroSubtitle || t("heroSubtitle")}
        variant="subpage"
      />
      <BlogGrid posts={displayPosts} />
      <Partners locale={locale} />
      <CTA locale={locale} />
    </div>
  );
}
