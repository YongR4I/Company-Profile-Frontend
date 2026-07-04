export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  slug: string;
  client?: string;
  date?: string;
  technologies?: string[];
}
