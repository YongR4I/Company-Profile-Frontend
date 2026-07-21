import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import type { BlogPost } from "@/types/blog";
import ScrollReveal from "@/components/ui/ScrollReveal";

function renderContent(content: string) {
  if (!content) return null;
  const blocks = content.split("\n\n");

  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith("### ")) {
      return <h3 key={i} className="text-white text-heading-h4 font-medium mt-10 mb-4">{trimmed.replace("### ", "")}</h3>;
    }
    if (trimmed.startsWith("## ")) {
      return <h2 key={i} className="text-white text-heading-h3 font-medium mt-12 mb-5">{trimmed.replace("## ", "")}</h2>;
    }
    if (trimmed.startsWith("###")) {
      return <h3 key={i} className="text-white text-heading-h4 font-medium mt-10 mb-4">{trimmed.replace("###", "")}</h3>;
    }
    if (trimmed.startsWith("##")) {
      return <h2 key={i} className="text-white text-heading-h3 font-medium mt-12 mb-5">{trimmed.replace("##", "")}</h2>;
    }
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").map((line) => line.replace("- ", ""));
      return (
        <ul key={i} className="text-gray-300 text-body-base leading-relaxed mb-6 list-disc list-inside space-y-1">
          {items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      );
    }
    if (trimmed.startsWith("```")) return null;

    return <p key={i} className="text-gray-300 text-body-base leading-relaxed mb-6">{trimmed}</p>;
  });
}

interface BlogDetailProps {
  post: BlogPost;
  locale?: string;
}

export default async function BlogDetail({ post, locale }: BlogDetailProps) {
  const t = await getTranslations({ locale: locale || "en", namespace: "blog" });
  return (
    <article className="w-full bg-[#040A0C] min-h-screen">
      <div className="w-full max-w-[820px] mx-auto px-4 md:px-0 py-12 md:py-16">
        <ScrollReveal delay={0} duration={400} direction="left">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 mt-25 group"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200 ease-out group-hover:-translate-x-1">
              <path d="M15.8333 10H4.16667M4.16667 10L10 15.8333M4.16667 10L10 4.16667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-body-base font-medium">{t("backToBlog")}</span>
          </Link>
        </ScrollReveal>

        {post.tags && post.tags.length > 0 && (
          <ScrollReveal delay={100} duration={400} direction="right">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-white/10 border border-white/20 text-white text-xs px-4 py-1.5 rounded-full transition-[border-color,background-color] duration-200 ease-out hover:border-white/40 hover:bg-white/15">
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal delay={200} duration={600} direction="up">
          <h1
            className="text-white font-medium italic tracking-tight leading-[1.1] mb-8"
            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(32px, 5vw, 72px)" }}
          >
            {post.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300} duration={500} direction="up">
          <div className="flex items-center gap-4 pb-8 mb-10 border-b border-white/10">
            <div className="w-12 h-12 rounded-full bg-water-700 overflow-hidden flex-shrink-0 flex items-center justify-center transition-transform duration-300 ease-out hover:scale-110">
              {post.author.avatarUrl ? (
                <Image
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              ) : (
                <span className="text-white/50 text-lg font-semibold">
                  {post.author.name?.charAt(0)?.toUpperCase() || "?"}
                </span>
              )}
            </div>
            <div>
              <p className="text-white text-body-base font-medium">{post.author.name}</p>
              <p className="text-gray-400 text-body-small">
                {[post.author.role, post.date, post.readTime].filter(Boolean).join(" · ")}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {post.imageUrl ? (
          <ScrollReveal delay={400} duration={700} direction="up">
            <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-10 bg-gradient-to-br from-water-800 to-water-700">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </ScrollReveal>
        ) : (
          <div className="w-full aspect-[16/7] rounded-2xl mb-10 bg-gradient-to-br from-water-800 to-water-700" />
        )}

        <div className="blog-content">
          {renderContent(post.content)}
        </div>
      </div>
    </article>
  );
}
