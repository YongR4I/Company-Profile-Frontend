import { fetchApi } from './api';
import {
  StrapiResponse,
  SiteSettings,
  Homepage,
  Service,
  Portfolio,
  BlogPost,
  AboutPage,
  ServicesPage,
  PortfolioPage,
  BlogPage,
  ContactPage,
  PartnerPage,
  Cta,
  Category,
  Technology,
  Tag
} from '@/types/strapi';

// Using populate=* for simplicity, but for Strapi 5 we often need ?populate=deep
// Since we don't have the strapi-plugin-populate-deep installed yet by default,
// we will specify the relations we need explicitly if deep is not available,
// but let's assume we can use a complex populate parameter or just populate=*.
// In Strapi 5 Document API, populate=* populates the first level of relations.
// We'll use a hardcoded string `?populate=*` or deep population.

const DEFAULT_POPULATE = 'populate=*';

// --- Single Types ---

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const res = await fetchApi<StrapiResponse<SiteSettings>>(`/site-setting?populate[0]=navLinks&populate[1]=socialLinks&populate[2]=footerCompanyLinks&populate[3]=footerServiceLinks&populate[4]=logo`);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getHomepage(): Promise<Homepage | null> {
  try {
    const res = await fetchApi<StrapiResponse<Homepage>>(`/homepage?populate[pageBlocks][populate]=*`);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getAboutPage(): Promise<AboutPage | null> {
  try {
    const res = await fetchApi<StrapiResponse<AboutPage>>(`/about-page?populate[0]=processSteps`);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getServicesPage(): Promise<ServicesPage | null> {
  try {
    const res = await fetchApi<StrapiResponse<ServicesPage>>(`/services-page?${DEFAULT_POPULATE}`);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getPortfolioPage(): Promise<PortfolioPage | null> {
  try {
    const res = await fetchApi<StrapiResponse<PortfolioPage>>(`/portfolio-page?${DEFAULT_POPULATE}`);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getBlogPage(): Promise<BlogPage | null> {
  try {
    const res = await fetchApi<StrapiResponse<BlogPage>>(`/blog-page?${DEFAULT_POPULATE}`);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getContactPage(): Promise<ContactPage | null> {
  try {
    const res = await fetchApi<StrapiResponse<ContactPage>>(`/contact-page?${DEFAULT_POPULATE}`);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getPartnerPage(): Promise<PartnerPage | null> {
  try {
    const res = await fetchApi<StrapiResponse<PartnerPage>>(`/partner?populate[0]=partnerList.logo`);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getCta(): Promise<Cta | null> {
  try {
    const res = await fetchApi<StrapiResponse<Cta>>(`/cta?${DEFAULT_POPULATE}`);
    return res.data;
  } catch (e) {
    return null;
  }
}

// --- Collection Types ---

export async function getServices(): Promise<Service[]> {
  try {
    const res = await fetchApi<StrapiResponse<Service[]>>(`/services?populate[0]=features&populate[1]=icon`);
    return res.data;
  } catch (e) {
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const res = await fetchApi<StrapiResponse<Service[]>>(`/services?filters[slug][$eq]=${slug}&populate[0]=features&populate[1]=icon`);
    return res.data[0] || null;
  } catch (e) {
    return null;
  }
}

export async function getPortfolios(): Promise<Portfolio[]> {
  try {
    const res = await fetchApi<StrapiResponse<Portfolio[]>>(`/portfolios?populate[0]=category&populate[1]=technologies&populate[2]=image`);
    return res.data;
  } catch (e) {
    return [];
  }
}

export async function getPortfolioBySlug(slug: string): Promise<Portfolio | null> {
  try {
    const res = await fetchApi<StrapiResponse<Portfolio[]>>(`/portfolios?filters[slug][$eq]=${slug}&populate[0]=category&populate[1]=technologies&populate[2]=image`);
    return res.data[0] || null;
  } catch (e) {
    return null;
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetchApi<StrapiResponse<BlogPost[]>>(`/blog-posts?populate=*&sort=date:desc`);
    return res.data;
  } catch (e) {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetchApi<StrapiResponse<BlogPost[]>>(`/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
    return res.data[0] || null;
  } catch (e) {
    return null;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetchApi<StrapiResponse<Category[]>>('/categories');
    return res.data;
  } catch (e) {
    return [];
  }
}

export async function getTags(): Promise<Tag[]> {
  try {
    const res = await fetchApi<StrapiResponse<Tag[]>>('/tags');
    return res.data;
  } catch (e) {
    return [];
  }
}

export async function getTechnologies(): Promise<Technology[]> {
  try {
    const res = await fetchApi<StrapiResponse<Technology[]>>(`/technologies?${DEFAULT_POPULATE}`);
    return res.data;
  } catch (e) {
    return [];
  }
}
