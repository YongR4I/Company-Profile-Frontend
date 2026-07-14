import type { BlogPost as StrapiBlogPost } from "@/types/strapi";
import type { BlogPost as LocalBlogPost } from "@/types/blog";

function strapiImageUrl(img: { url: string } | null | undefined, fallback = ""): string {
  if (!img?.url) return fallback;
  if (img.url.startsWith("http")) return img.url;
  return `${process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") || "http://localhost:1337"}${img.url}`;
}

export function toBlogPost(post: StrapiBlogPost): LocalBlogPost {
  return {
    id: String(post.id),
    title: post.title,
    excerpt: post.excerpt,
    content: typeof post.content === "string" ? post.content : JSON.stringify(post.content),
    imageUrl: strapiImageUrl(post.image),
    slug: post.slug,
    author: {
      name: post.author?.name || "",
      avatarUrl: strapiImageUrl(post.author?.avatar),
      role: post.author?.role || "",
    },
    date: post.date,
    readTime: `${Math.ceil((typeof post.content === "string" ? post.content : "").split(" ").length / 200) || 3} min read`,
    tags: post.tags?.map((t) => t.name) || [],
  };
}
