import { notFound } from "next/navigation";
import { blogData } from "@/data/blog";
import BlogDetail from "@/components/sections/blog/BlogDetail";

export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <BlogDetail post={post} />
    </div>
  );
}
