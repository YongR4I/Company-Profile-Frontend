export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon reference (e.g. lucide icon name)
  features: string[]; // Key features or sub-services
}
