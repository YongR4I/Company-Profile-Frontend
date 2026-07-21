import { notFound } from "next/navigation";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/strapi-services";
import { toBlogPost } from "@/lib/mappers";
import BlogDetail from "@/components/sections/blog/BlogDetail";
import { routing } from "@/i18n/routing";
import { blogData } from "@/data/blog";

export async function generateStaticParams() {
  const results = await Promise.all(
    routing.locales.map(async (locale) => {
      const posts = await getBlogPosts(locale);
      return posts.map((post) => ({ locale, slug: post.slug }));
    })
  );
  return results.flat();
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const strapiPost = await getBlogPostBySlug(slug, locale);

  let post;
  if (strapiPost) {
    post = toBlogPost(strapiPost);
  } else {
    const localMatch = blogData.find((b) => b.slug === slug);
    if (!localMatch) {
      notFound();
    }
    post = localMatch;
  }

  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <BlogDetail post={post} locale={locale} />
    </div>
  );
}
