export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconUrl: string; // URL from Strapi media
  features: string[]; // Key features or sub-services
}
