"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <section className="w-full bg-[#040A0C]">
        <div className="w-full px-4 md:px-18 py-32 flex flex-col items-center justify-center text-center gap-4">
          <h3 className="text-2xl text-white font-medium mb-4">No Posts Yet</h3>
          <p className="text-gray-400 max-w-[600px]">
            We haven&apos;t published any blog posts to the CMS yet. Please check back later for our latest updates and insights.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#040A0C]">
      <div className="w-full px-4 md:px-18 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100} duration={500} direction="up">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-water-900 border border-water-300/10 rounded-2xl overflow-hidden transition-[border-color,transform,box-shadow] duration-300 ease-out hover:border-water-300/30 hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)] active:scale-[0.98]"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-water-800 to-water-700">
                  {post.imageUrl && (
                    <Image
                      src={post.imageUrl}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                      unoptimized
                    />
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs px-3 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3 p-5 md:p-6 flex-1">
                  <h3 className="text-white text-heading-h5 font-medium line-clamp-2 group-hover:text-water-300 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-body-small line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-9 h-9 rounded-full bg-water-700 flex-shrink-0 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-110">
                      {post.author.avatarUrl && (
                        <Image
                          src={post.author.avatarUrl}
                          alt=""
                          width={36}
                          height={36}
                          className="object-cover w-full h-full"
                          unoptimized
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-body-small font-medium truncate">
                        {post.author.name}
                      </p>
                      <p className="text-gray-500 text-xs truncate">
                        {post.date} &middot; {post.readTime}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
