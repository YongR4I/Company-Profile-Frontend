export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

// Components
export interface NavLink {
  id: number;
  label: string;
  href: string;
}

export interface SocialLink {
  id: number;
  platform: 'Facebook' | 'Instagram' | 'LinkedIn' | 'TikTok' | 'YouTube' | 'WhatsApp' | 'X_Twitter';
  url: string;
}

export interface FeatureItem {
  id: number;
  featureName: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
}

export interface SolutionItem {
  id: number;
  title: string;
  description: string;
  icon?: StrapiImage;
}

export interface PartnerItem {
  id: number;
  name: string;
  logo?: StrapiImage;
  websiteUrl?: string;
}

// Collections
export interface Service {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  icon: StrapiImage;
  features: FeatureItem[];
}

export interface Category {
  id: number;
  documentId: string;
  title: string;
  slug: string;
}

export interface Technology {
  id: number;
  documentId: string;
  name: string;
  logo?: StrapiImage;
}

export interface Tag {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

export interface Author {
  id: number;
  documentId: string;
  name: string;
  role: string;
  avatar?: StrapiImage;
}

export interface Portfolio {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  image: StrapiImage;
  client?: string;
  date: string;
  category: Category;
  technologies: Technology[];
}

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any; // Using any for richtext blocks for simplicity, can be typed strictly with @strapi/blocks-react-renderer types
  image: StrapiImage;
  date: string;
  author: Author;
  tags: Tag[];
}

// Single Types
export interface SiteSettings {
  id: number;
  documentId: string;
  siteName: string;
  logo?: StrapiImage;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  footerCompanyLinks: NavLink[];
  footerServiceLinks: Service[];
  officeAddress: string;
  workshopAddress: string;
  heroFooterText: string;
}

export interface PartnerPage {
  id: number;
  documentId: string;
  title: string;
  description: string;
  partnerList: PartnerItem[];
}

export interface Cta {
  id: number;
  documentId: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export interface Homepage {
  id: number;
  documentId: string;
  pageBlocks: any[]; // Dynamic zone blocks
}

export interface AboutPage {
  id: number;
  documentId: string;
  heroSubtitle: string;
  missionLabel: string;
  missionText: string;
  processLabel: string;
  processSteps: ProcessStep[];
}

export interface ServicesPage {
  id: number;
  documentId: string;
  heroSubtitle: string;
}

export interface PortfolioPage {
  id: number;
  documentId: string;
  heroTitle: string;
}

export interface BlogPage {
  id: number;
  documentId: string;
  heroSubtitle: string;
}

export interface ContactPage {
  id: number;
  documentId: string;
  heroSubtitle: string;
}
