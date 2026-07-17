import CommonLayout from "@/components/layout/CommonLayout";
import { ServiceItem } from "@/types/services";
import ServiceRow from "./ServiceRow";

const defaultServices = [
  {
    title: "Digital Transformation",
    description:
      "We help businesses embrace digital transformation through innovative technology, strategic planning, and solutions designed to improve efficiency, productivity, and sustainable growth.",
    iconUrl: "/icons/services/Vector.svg",
  },
  {
    title: "Software Development",
    description:
      "We build reliable web, mobile, and enterprise applications tailored to your business needs, delivering scalable, secure, and high-performance digital solutions.",
    iconUrl: "/icons/services/Vector-1.svg",
  },
  {
    title: "IT Consulting",
    description:
      "We provide strategic technology consulting to help organizations identify opportunities, define digital roadmaps, and implement solutions aligned with business objectives.",
    iconUrl: "/icons/services/Vector-2.svg",
  },
  {
    title: "System Integration",
    description:
      "We connect systems, data, and business processes into a unified digital ecosystem, enabling seamless collaboration and more efficient operations.",
    iconUrl: "/icons/services/Vector-3.svg",
  },
  {
    title: "Managed Support",
    description:
      "We provide continuous maintenance, monitoring, and technical support to ensure your digital solutions remain secure, optimized, and ready for future growth.",
    iconUrl: "/icons/services/Vector-4.svg",
  },
];

interface ServicesGridProps {
  items?: ServiceItem[];
}

export default function ServicesGrid({ items }: ServicesGridProps) {
  // If items is an empty array, it means Strapi returned no data.
  const isCollectionEmpty = items && items.length === 0;

  // Use items if provided and not empty, else use defaultServices
  const displayServices = items && items.length > 0 ? items : (isCollectionEmpty ? [] : defaultServices);

  return (
    <CommonLayout className="h-fit! flex-col items-start justify-center py-16 md:py-24">
      {isCollectionEmpty ? (
        <div className="w-full py-20 flex flex-col items-center justify-center text-center gap-4">
          <h3 className="text-2xl text-white font-medium">Services Coming Soon</h3>
          <p className="text-gray-400 max-w-[500px]">
            We are currently updating our services catalog in the CMS. Please check back later to see what we can offer.
          </p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-8 md:gap-20">
          {displayServices.map((service, index) => (
            <ServiceRow
              key={index}
              title={service.title}
              description={service.description}
              iconUrl={service.iconUrl || "/icons/services/Vector.svg"}
              isLast={index === displayServices.length - 1}
              delay={index * 100}
            />
          ))}
        </div>
      )}
    </CommonLayout>
  );
}
