import Link from "next/link";
import Image from "next/image";
import {
  RiLinkedinFill,
  RiInstagramFill,
  RiFacebookFill,
  RiPhoneFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SocialButton from "@/components/ui/SocialButton";
import { SiteSettings } from "@/types/strapi";
import { strapiImageUrl } from "@/lib/mappers";

const defaultCompanyLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const defaultServiceLinks = [
  { label: "Digital Transformation", href: "/services" },
  { label: "Software Development", href: "/services" },
  { label: "IT Consulting", href: "/services" },
  { label: "System Integration", href: "/services" },
  { label: "Managed Support", href: "/services" },
];

const defaultSocialLinks = [
  { icon: RiLinkedinFill, href: "https://www.linkedin.com/company/sabirudev", label: "LinkedIn" },
  { icon: RiInstagramFill, href: "https://www.instagram.com/sabirudev/", label: "Instagram" },
  { icon: RiFacebookFill, href: "https://www.facebook.com/samudrabirudevelop/", label: "Facebook" },
  { icon: RiPhoneFill, href: "tel:+6282242698548", label: "Phone", copyValue: "0822 4269 8548" },
  { icon: IoIosMail, href: "mailto:samudrabirudevelop@gmail.com", label: "Email", copyValue: "samudrabirudevelop@gmail.com" },
];

function getSocialIcon(platform: string) {
  switch (platform) {
    case 'Facebook': return RiFacebookFill;
    case 'Instagram': return RiInstagramFill;
    case 'LinkedIn': return RiLinkedinFill;
    case 'YouTube': return RiYoutubeFill;
    case 'X_Twitter': return RiTwitterXFill;
    case 'WhatsApp': return FaWhatsapp;
    case 'TikTok': return FaTiktok;
    default: return RiTwitterXFill;
  }
}

interface FooterProps {
  settings?: SiteSettings | null;
}

export default function Footer({ settings }: FooterProps) {
  const companyLinks = settings?.footerCompanyLinks?.length 
    ? settings.footerCompanyLinks.map(l => ({ label: l.label, href: l.href }))
    : defaultCompanyLinks;

  const serviceLinks = settings?.footerServiceLinks?.length
    ? settings.footerServiceLinks.map(s => ({ label: s.title, href: `/services/${s.slug}` }))
    : defaultServiceLinks;

  const socialLinks = settings?.socialLinks?.length
    ? settings.socialLinks.map(l => ({
        icon: getSocialIcon(l.platform),
        href: l.url,
        label: l.platform
      }))
    : defaultSocialLinks;

  const logoUrl = settings?.logo ? strapiImageUrl(settings.logo) : "/images/shared/footer/logo.png";
  const officeAddress = settings?.officeAddress || "Graha Mampang Lt.3 suite 305, Jl. Mampang Prpt. Raya No.KAV.100, RT.2/RW.1, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760";
  const workshopAddress = settings?.workshopAddress || "Alamat: Jl. Raya Sukahati Jl. Raya Karadenan, Sukahati, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16913";

  return (
    <footer className="relative bg-water-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 pointer-events-none">
        <Image
          src="/images/shared/footer/grid-bg.png"
          alt=""
          width={1200}
          height={1200}
          className="object-contain"
        />
      </div>
      <div className="absolute -left-30 -bottom-110 pointer-events-none">
        <Image
          src="/images/shared/footer/star-glow.png"
          alt=""
          width={900}
          height={900}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section: Logo + Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 py-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logoUrl}
              alt="Brand Logo"
              width={210}
              height={210}
              unoptimized
              className="object-contain w-[120px] h-[120px] sm:w-[210px] sm:h-[210px]"
            />
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-12 sm:flex sm:flex-row lg:gap-32 w-full lg:w-auto">
            {/* Company Links */}
            <div>
              <h4 className="text-heading-h5 font-medium text-gray-500 mb-3">
                Company
              </h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-heading-h4 md:text-heading-h3 font-normal text-white hover:text-water-200 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-heading-h5 font-medium text-gray-500 mb-3">
                Services
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="text-heading-h4 md:text-heading-h3 font-normal text-white hover:text-water-200 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Section */}
        <div className="flex justify-start lg:justify-end py-6">
          <div className="flex gap-2.5">
            {socialLinks.map(({ icon: Icon, href, label, copyValue }: any) => (
              <SocialButton key={label} href={href} aria-label={label} copyValue={copyValue}>
                <Icon size={24} />
              </SocialButton>
            ))}
          </div>
        </div>

        {/* Address Section */}
        <div className="flex flex-col sm:flex-row justify-start lg:justify-end gap-10 py-6">
          {/* Office Card */}
          <div className="w-full sm:max-w-[404px]">
            <h4 className="text-heading-h5 font-medium text-water-200 mb-2">
              Office
            </h4>
            <p className="text-body-base text-gray-400 leading-relaxed whitespace-pre-line">
              {officeAddress}
            </p>
          </div>

          {/* Workshop Card */}
          <div className="w-full sm:max-w-[300px]">
            <h4 className="text-heading-h5 font-medium text-water-200 mb-2">
              Workshop
            </h4>
            <p className="text-body-base text-gray-400 leading-relaxed whitespace-pre-line">
              {workshopAddress}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

