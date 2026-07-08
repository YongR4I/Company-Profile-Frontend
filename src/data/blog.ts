import { BlogPost } from "@/types/blog";

export const blogData: BlogPost[] = [
  {
    id: "1",
    title: "Why Next.js is the Ultimate Choice for Company Profiles",
    excerpt: "Learn how Next.js enhances SEO, loading performance, and developer experience for modern business sites.",
    content: "Next.js provides Server-Side Rendering (SSR) and Static Site Generation (SSG), making it a powerhouse for web applications. For company profiles, performance and SEO are critical. Next.js offers...",
    imageUrl: "/images/blog/why-nextjs.jpg",
    slug: "why-nextjs-for-company-profiles",
    author: {
      name: "Jane Doe",
      avatarUrl: "/images/authors/jane.jpg",
      role: "Lead Frontend Engineer"
    },
    date: "June 15, 2026",
    readTime: "5 min read",
    tags: ["Next.js", "SEO", "Web Development"]
  },
  {
    id: "2",
    title: "Introduction to Tailwind CSS v4 in Next.js",
    excerpt: "Explore the new features, performance boosts, and clean build pipelines in the latest Tailwind version.",
    content: "Tailwind CSS v4 introduces a fully CSS-first configuration pipeline and massive speed improvements. Learn how to migrate your existing projects and leverage the power of CSS variables...",
    imageUrl: "/images/blog/tailwind-v4.jpg",
    slug: "intro-tailwind-v4-nextjs",
    author: {
      name: "John Smith",
      avatarUrl: "/images/authors/john.jpg",
      role: "UI Architect"
    },
    date: "May 28, 2026",
    readTime: "4 min read",
    tags: ["Tailwind CSS", "CSS", "Frontend"]
  }
];
