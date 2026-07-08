import CommonLayout from "@/components/layout/CommonLayout";
import Image from "next/image";

const services = [
  {
    title: "Digital Transformation",
    description:
      "We help businesses embrace digital transformation through innovative technology, strategic planning, and solutions designed to improve efficiency, productivity, and sustainable growth.",
    icon: "/icons/services/Vector.svg",
  },
  {
    title: "Software Development",
    description:
      "We build reliable web, mobile, and enterprise applications tailored to your business needs, delivering scalable, secure, and high-performance digital solutions.",
    icon: "/icons/services/Vector-1.svg",
  },
  {
    title: "IT Consulting",
    description:
      "We provide strategic technology consulting to help organizations identify opportunities, define digital roadmaps, and implement solutions aligned with business objectives.",
    icon: "/icons/services/Vector-2.svg",
  },
  {
    title: "System Integration",
    description:
      "We connect systems, data, and business processes into a unified digital ecosystem, enabling seamless collaboration and more efficient operations.",
    icon: "/icons/services/Vector-3.svg",
  },
  {
    title: "Managed Support",
    description:
      "We provide continuous maintenance, monitoring, and technical support to ensure your digital solutions remain secure, optimized, and ready for future growth.",
    icon: "/icons/services/Vector-4.svg",
  },
];

export default function ServicesGrid() {
  return (
    <CommonLayout className="h-fit! flex-col items-start justify-center py-16 md:py-24">
      <div className="w-full flex flex-col gap-16 md:gap-20">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col bg-transparent">
            <div className="flex flex-row items-center justify-between gap-8">
              {/* Title - Kiri */}
              <div className="w-[220px] flex-shrink-0">
                <h3 className="text-heading-h4 text-white whitespace-nowrap">
                  {service.title}
                </h3>
              </div>
              {/* Description - Tengah */}
              <div className="flex-1 flex justify-center px-4">
                <p
                  className="text-white/80 max-w-[420px] w-full"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(14px, 1.5vw, 16px)",
                    lineHeight: 1.7,
                  }}
                >
                  {service.description}
                </p>
              </div>
              {/* Icon - Kanan */}
              <div className="w-[80px] flex-shrink-0 flex justify-end">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
            {index < services.length - 1 && (
              <div className="w-full h-px bg-white/20 mt-16 md:mt-20" />
            )}
          </div>
        ))}
      </div>
    </CommonLayout>
  );
}
