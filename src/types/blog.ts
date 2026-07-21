export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  slug: string;
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  };
  date: string;
  readTime: string;
  tags?: string[];
}
