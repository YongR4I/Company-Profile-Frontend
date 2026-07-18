import { notFound } from "next/navigation";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/strapi-services";
import { toBlogPost } from "@/lib/mappers";
import BlogDetail from "@/components/sections/blog/BlogDetail";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const strapiPost = await getBlogPostBySlug(slug, locale);

  if (!strapiPost) {
    notFound();
  }

  const post = toBlogPost(strapiPost);

  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <BlogDetail post={post} locale={locale} />
    </div>
  );
}
