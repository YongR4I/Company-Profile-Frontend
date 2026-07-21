import { ServiceItem } from "@/types/services";

export const servicesData: ServiceItem[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Building modern, responsive, and high-performance web applications tailored to your business needs.",
    iconUrl: "/icons/services/Vector.svg",
    features: [
      "Custom React / Next.js Apps",
      "E-Commerce Solutions",
      "SEO Optimization",
      "Content Management Systems"
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Creating seamless native and cross-platform mobile experiences for iOS and Android platforms.",
    iconUrl: "/icons/services/Vector-1.svg",
    features: [
      "React Native Apps",
      "Flutter Apps",
      "App Store & Google Play Publishing",
      "Offline-first Architecture"
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Crafting beautiful, intuitive, and user-centered interfaces that drive engagement and conversion.",
    iconUrl: "/icons/services/Vector-2.svg",
    features: [
      "Wireframing & Prototyping",
      "User Research & Testing",
      "Design Systems",
      "Interactive Mockups"
    ]
  }
];
