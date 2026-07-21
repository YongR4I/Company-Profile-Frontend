import type { 
  BlogPost as StrapiBlogPost,
  Service as StrapiService,
  Portfolio as StrapiPortfolio,
  WhyChooseItem,
  SolutionItem,
  ProcessStep,
  PartnerItem
} from "@/types/strapi";
import type { BlogPost as LocalBlogPost } from "@/types/blog";
import type { ServiceItem } from "@/types/services";
import type { PortfolioItem } from "@/types/portfolio";

export function strapiImageUrl(img: { url: string } | null | undefined, fallback = ""): string {
  if (!img?.url) return fallback;
  if (img.url.startsWith("http")) return img.url;
  return `${process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") || "http://localhost:1337"}${img.url}`;
}

export function extractRichText(content: unknown): string {
  if (!content) return "";
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";

  return content
    .map((block: any) => {
      if (!block || !block.type) return "";
      const getText = (children: any[]): string =>
        (children || []).map((child: any) => child.text || "").join("");

      switch (block.type) {
        case "paragraph":
          return getText(block.children);
        case "heading":
          return `${'#'.repeat(block.level || 1)} ${getText(block.children)}`;
        case "list":
          return (block.children || []).map((item: any) => `- ${getText(item.children)}`).join("\n");
        case "quote":
          return `> ${getText(block.children)}`;
        case "code":
          return `\`\`\`\n${getText(block.children)}\n\`\`\``;
        default:
          return getText(block.children);
      }
    })
    .filter(Boolean)
    .join("\n\n");
}

export function toBlogPost(post: StrapiBlogPost): LocalBlogPost {
  const contentText = extractRichText(post.content);
  const wordCount = contentText.split(/\s+/).filter(Boolean).length;
  return {
    id: String(post.documentId || post.id),
    title: post.title,
    excerpt: post.excerpt,
    content: contentText,
    imageUrl: strapiImageUrl(post.image),
    slug: post.slug,
    author: {
      name: post.author?.name || "",
      avatarUrl: strapiImageUrl(post.author?.avatar),
      role: post.author?.role || "",
    },
    date: post.date,
    readTime: `${Math.max(1, Math.ceil(wordCount / 200))} min read`,
    tags: post.tags?.map((t) => t.name) || [],
  };
}

export function toServiceItem(service: StrapiService): ServiceItem {
  return {
    id: String(service.documentId || service.id),
    title: service.title,
    description: service.description,
    iconUrl: strapiImageUrl(service.icon),
    features: service.features?.map((f) => f.featureName) || [],
  };
}

export function toPortfolioItem(portfolio: StrapiPortfolio): PortfolioItem {
  const primaryImage = strapiImageUrl(portfolio.image);
  const galleryImages = portfolio.images?.map((img) => strapiImageUrl(img)).filter(Boolean) || [];

  return {
    id: String(portfolio.documentId || portfolio.id),
    title: portfolio.title,
    category: portfolio.category?.title || "Uncategorized",
    description: portfolio.description,
    imageUrl: primaryImage,
    images: galleryImages.length > 0 ? [primaryImage, ...galleryImages] : [primaryImage],
    slug: portfolio.slug,
    client: portfolio.client,
    date: portfolio.date,
    technologies: portfolio.technologies?.map((t) => t.name) || [],
  };
}

export function toWhyCard(item: WhyChooseItem, index: number) {
  return {
    number: String(index + 1),
    title: item.title,
    description: item.description,
  };
}

export function toSolutionCard(item: SolutionItem) {
  return {
    title: item.title,
    description: item.description,
    iconUrl: strapiImageUrl(item.icon),
  };
}

export function toProcessStep(item: ProcessStep, index: number) {
  return {
    number: String(index + 1),
    title: item.title,
    description: item.description,
  };
}

export function toPartnerCard(item: PartnerItem) {
  return {
    name: item.name,
    logoUrl: strapiImageUrl(item.logo),
    websiteUrl: item.websiteUrl,
  };
}
