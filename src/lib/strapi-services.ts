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

const DEFAULT_POPULATE = 'populate=*';

function withLocale(path: string, locale?: string): string {
  if (!locale) return path;
  const separator = path.includes('?') ? '&' : '?';
  return `${path}${separator}locale=${locale}`;
}

export async function getSiteSettings(locale?: string): Promise<SiteSettings | null> {
  try {
    const path = withLocale(
      `/site-setting?populate[0]=navLinks&populate[1]=socialLinks&populate[2]=footerCompanyLinks&populate[3]=footerServiceLinks&populate[4]=logo`,
      locale
    );
    const res = await fetchApi<StrapiResponse<SiteSettings>>(path);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getHomepage(locale?: string): Promise<Homepage | null> {
  try {
    const path = withLocale(
      `/homepage?populate[pageBlocks][populate]=*`,
      locale
    );
    const res = await fetchApi<StrapiResponse<Homepage>>(path);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getAboutPage(locale?: string): Promise<AboutPage | null> {
  try {
    const path = withLocale(
      `/about-page?populate[0]=processSteps`,
      locale
    );
    const res = await fetchApi<StrapiResponse<AboutPage>>(path);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getServicesPage(locale?: string): Promise<ServicesPage | null> {
  try {
    const path = withLocale(
      `/services-page?${DEFAULT_POPULATE}`,
      locale
    );
    const res = await fetchApi<StrapiResponse<ServicesPage>>(path);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getPortfolioPage(locale?: string): Promise<PortfolioPage | null> {
  try {
    const path = withLocale(
      `/portfolio-page?${DEFAULT_POPULATE}`,
      locale
    );
    const res = await fetchApi<StrapiResponse<PortfolioPage>>(path);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getBlogPage(locale?: string): Promise<BlogPage | null> {
  try {
    const path = withLocale(
      `/blog-page?${DEFAULT_POPULATE}`,
      locale
    );
    const res = await fetchApi<StrapiResponse<BlogPage>>(path);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getContactPage(locale?: string): Promise<ContactPage | null> {
  try {
    const path = withLocale(
      `/contact-page?${DEFAULT_POPULATE}`,
      locale
    );
    const res = await fetchApi<StrapiResponse<ContactPage>>(path);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getPartnerPage(locale?: string): Promise<PartnerPage | null> {
  try {
    const path = withLocale(
      `/partner?populate[0]=partnerList.logo`,
      locale
    );
    const res = await fetchApi<StrapiResponse<PartnerPage>>(path);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getCta(locale?: string): Promise<Cta | null> {
  try {
    const path = withLocale(
      `/cta?${DEFAULT_POPULATE}`,
      locale
    );
    const res = await fetchApi<StrapiResponse<Cta>>(path);
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getServices(locale?: string): Promise<Service[]> {
  try {
    const path = withLocale(
      `/services?populate[0]=features&populate[1]=icon`,
      locale
    );
    const res = await fetchApi<StrapiResponse<Service[]>>(path);
    return res.data;
  } catch (e) {
    return [];
  }
}

export async function getServiceBySlug(slug: string, locale?: string): Promise<Service | null> {
  try {
    const path = withLocale(
      `/services?filters[slug][$eq]=${slug}&populate[0]=features&populate[1]=icon`,
      locale
    );
    const res = await fetchApi<StrapiResponse<Service[]>>(path);
    return res.data[0] || null;
  } catch (e) {
    return null;
  }
}

export async function getPortfolios(locale?: string): Promise<Portfolio[]> {
  try {
    const path = withLocale(
      `/portfolios?populate[0]=category&populate[1]=technologies&populate[2]=image&populate[3]=images`,
      locale
    );
    const res = await fetchApi<StrapiResponse<Portfolio[]>>(path);
    return res.data;
  } catch (e) {
    return [];
  }
}

export async function getPortfolioBySlug(slug: string, locale?: string): Promise<Portfolio | null> {
  try {
    const path = withLocale(
      `/portfolios?filters[slug][$eq]=${slug}&populate[0]=category&populate[1]=technologies&populate[2]=image&populate[3]=images`,
      locale
    );
    const res = await fetchApi<StrapiResponse<Portfolio[]>>(path);
    return res.data[0] || null;
  } catch (e) {
    return null;
  }
}

export async function getBlogPosts(locale?: string): Promise<BlogPost[]> {
  try {
    const path = withLocale(
      `/blog-posts?populate=*&sort=date:desc`,
      locale
    );
    const res = await fetchApi<StrapiResponse<BlogPost[]>>(path);
    return res.data;
  } catch (e) {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string, locale?: string): Promise<BlogPost | null> {
  try {
    const path = withLocale(
      `/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
      locale
    );
    const res = await fetchApi<StrapiResponse<BlogPost[]>>(path);
    return res.data[0] || null;
  } catch (e) {
    return null;
  }
}

export async function getCategories(locale?: string): Promise<Category[]> {
  try {
    const path = withLocale(`/categories?${DEFAULT_POPULATE}`, locale);
    const res = await fetchApi<StrapiResponse<Category[]>>(path);
    return res.data;
  } catch (e) {
    return [];
  }
}

export async function getTags(locale?: string): Promise<Tag[]> {
  try {
    const path = withLocale(`/tags?${DEFAULT_POPULATE}`, locale);
    const res = await fetchApi<StrapiResponse<Tag[]>>(path);
    return res.data;
  } catch (e) {
    return [];
  }
}

export async function getTechnologies(locale?: string): Promise<Technology[]> {
  try {
    const path = withLocale(`/technologies?${DEFAULT_POPULATE}`, locale);
    const res = await fetchApi<StrapiResponse<Technology[]>>(path);
    return res.data;
  } catch (e) {
    return [];
  }
}
