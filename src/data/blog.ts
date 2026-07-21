import { BlogPost } from "@/types/blog";

export const blogData: BlogPost[] = [
  {
    id: "1",
    title: "Why Next.js is the Ultimate Choice for Company Profiles",
    excerpt: "Learn how Next.js enhances SEO, loading performance, and developer experience for modern business sites.",
    content: `Next.js has rapidly become the go-to framework for building modern web applications, and for good reason. When it comes to company profile websites, where first impressions matter and performance directly impacts user engagement, Next.js offers a compelling suite of features that make it the ultimate choice.

## Server-Side Rendering for Superior SEO

One of the biggest challenges with React-based websites is search engine optimization. Traditional client-side rendered React apps serve an empty HTML shell to search engine crawlers, making it difficult for them to index your content. Next.js solves this problem with built-in Server-Side Rendering (SSR).

With SSR, your pages are fully rendered on the server before being sent to the client. This means search engines receive complete HTML content, resulting in better indexing and higher search rankings. For a company profile, where discoverability is crucial, this is a game-changer.

## Static Site Generation for Blazing Performance

Beyond SSR, Next.js also supports Static Site Generation (SSG), which pre-builds your pages at build time. The result is HTML files that can be served directly from a CDN, eliminating server round-trips and delivering content to users at lightning speed.

For company profiles that don't change frequently, SSG is the ideal approach. Pages load instantly, providing a smooth and engaging user experience that keeps potential clients interested.`,
    imageUrl: "/images/sections/portfolio/Card Image.png",
    slug: "why-nextjs-for-company-profiles",
    author: {
      name: "Jane Doe",
      avatarUrl: "/icons/blog/image 1.svg",
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
    content: `Tailwind CSS v4 represents a significant leap forward in utility-first CSS frameworks. With its fully CSS-first configuration pipeline and dramatic performance improvements, it offers a compelling upgrade for any Next.js project.

## What's New in Tailwind CSS v4

The most notable change in Tailwind CSS v4 is the shift to a CSS-first configuration approach. Instead of relying on a JavaScript configuration file (tailwind.config.js), you now define your design system directly in CSS using the @theme directive. This makes configuration more intuitive and aligns with how developers naturally think about styling.

### CSS-First Configuration

In v4, you can define custom colors, fonts, and spacing directly in your CSS file. The @theme directive integrates seamlessly with your existing styles, providing autocomplete and validation through VS Code's CSS language server. This eliminates the friction of switching between JavaScript and CSS files when making design changes.`,
    imageUrl: "/images/sections/portfolio/Card Image.png",
    slug: "intro-tailwind-v4-nextjs",
    author: {
      name: "John Smith",
      avatarUrl: "/icons/blog/image 2.svg",
      role: "UI Architect"
    },
    date: "May 28, 2026",
    readTime: "4 min read",
    tags: ["Tailwind CSS", "CSS", "Frontend"]
  },
  {
    id: "3",
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Discover best practices for designing and deploying high-performance RESTful APIs that scale with your business growth.",
    content: `Node.js has become the runtime of choice for building server-side applications, and when combined with Express, it provides a flexible and powerful foundation for creating APIs that can scale from a handful of users to millions.

## Why Node.js and Express?

Node.js offers an event-driven, non-blocking I/O model that makes it lightweight and efficient for data-intensive real-time applications. Express, as the most popular Node.js web framework, adds a robust set of features for building web applications and APIs without obscuring Node's core capabilities.

### The Event Loop Advantage

Node.js's event loop architecture allows it to handle thousands of concurrent connections with minimal overhead. Unlike traditional thread-based servers, Node.js uses a single thread to manage all connections, making it particularly well-suited for I/O-heavy API workloads.`,
    imageUrl: "/images/sections/portfolio/Card Image.png",
    slug: "building-scalable-apis-nodejs",
    author: {
      name: "Sarah Chen",
      avatarUrl: "/icons/blog/image 3.svg",
      role: "Backend Developer"
    },
    date: "April 10, 2026",
    readTime: "6 min read",
    tags: ["Node.js", "API", "Backend"]
  },
  {
    id: "4",
    title: "The Role of UI/UX in Digital Transformation",
    excerpt: "How thoughtful design drives user engagement and accelerates the success of digital transformation initiatives.",
    content: `Digital transformation is often viewed through the lens of technology — cloud migration, AI implementation, and system integration. But at its core, successful digital transformation is about people. This is where User Experience (UX) and User Interface (UI) design play a crucial role.

## Why UI/UX Matters in Digital Transformation

### Bridging the Gap Between Technology and Users

The most sophisticated technology stack is worthless if users cannot effectively interact with it. UI/UX design bridges the gap between complex backend systems and the humans who need to use them. Good design makes technology accessible, intuitive, and even enjoyable to use.

### Driving Adoption and Engagement

A well-designed interface encourages adoption. When employees and customers find digital tools easy to use, they are more likely to embrace them. This is critical for digital transformation initiatives, which often fail due to low adoption rates rather than technical shortcomings.`,
    imageUrl: "/images/sections/portfolio/Card Image.png",
    slug: "role-of-uiux-digital-transformation",
    author: {
      name: "Michael Torres",
      avatarUrl: "/icons/blog/image 4.svg",
      role: "UX Designer"
    },
    date: "March 22, 2026",
    readTime: "5 min read",
    tags: ["UI/UX", "Design", "Digital Transformation"]
  },
  {
    id: "5",
    title: "Cloud Migration Strategies for Modern Enterprises",
    excerpt: "A practical guide to planning and executing a seamless cloud migration for enterprise-level applications.",
    content: `Cloud migration has become a strategic imperative for enterprises seeking to modernize their IT infrastructure, reduce costs, and improve agility. However, migrating enterprise workloads to the cloud is a complex undertaking that requires careful planning and execution.

## Understanding the Cloud Migration Landscape

### The Business Case for Cloud Migration

Enterprises are moving to the cloud for several compelling reasons: reduced capital expenditure, increased scalability, improved disaster recovery, and access to advanced technologies like AI and machine learning. Cloud platforms also offer pay-as-you-go pricing models that align costs with actual usage.`,
    imageUrl: "/images/sections/portfolio/Card Image.png",
    slug: "cloud-migration-strategies",
    author: {
      name: "Alex Rivera",
      avatarUrl: "/icons/blog/image 5.svg",
      role: "Cloud Architect"
    },
    date: "February 14, 2026",
    readTime: "7 min read",
    tags: ["Cloud", "DevOps", "Enterprise"]
  }
];
