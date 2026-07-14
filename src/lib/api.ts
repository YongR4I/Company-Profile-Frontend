/**
 * Highly optimized fetch utility for Next.js App Router and Strapi 5.
 * Uses Next.js native fetch instead of Axios for superior caching and ISR support.
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * Helper to build query string from an object.
 * While `qs` library is common for Strapi, native URLSearchParams works fine for basic queries,
 * but for nested populate queries (e.g. ?populate=deep), passing raw string or simple objects is preferred.
 */
function buildQueryString(params: Record<string, string | number | boolean>) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query.append(key, String(value));
    }
  });
  return query.toString();
}

interface FetchApiOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
  /** Next.js fetch cache options. Default: { revalidate: 60 } (1 minute) */
  next?: NextFetchRequestConfig;
}

export async function fetchApi<T>(path: string, options: FetchApiOptions = {}): Promise<T> {
  const { params, next, ...customConfig } = options;

  let url = `${API_URL}${path}`;
  if (params && Object.keys(params).length > 0) {
    url += `?${buildQueryString(params)}`;
  } else if (!path.includes('?')) {
    // Default populate deep for Strapi if no params passed
    url += '?populate=*';
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  const config: RequestInit = {
    method: 'GET',
    headers,
    ...customConfig,
  };

  // Next.js Cache Configuration (ISR / SSG)
  if (next) {
    config.next = next;
  } else if (config.method === 'GET') {
    // Default cache revalidation of 60 seconds for GET requests
    config.next = { revalidate: 60 };
  }

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      // Use console.warn instead of console.error to avoid triggering the Next.js Dev Overlay
      console.warn(`Strapi API Warning (${response.status}):`, errorData);
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    // Also use console.warn here for the same reason
    console.warn(`Fetch API Failed for path: ${path}`, (error as Error).message);
    throw error;
  }
}
