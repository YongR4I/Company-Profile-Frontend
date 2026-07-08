import Link from "next/link";
import Image from "next/image";
import {
  RiLinkedinFill,
  RiInstagramFill,
  RiTiktokFill,
} from "react-icons/ri";

const companyLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  "Digital Transformation",
  "Software Development",
  "IT Consulting",
  "System Integration",
  "Managed Support",
];

const socialLinks = [
  { icon: RiLinkedinFill, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: RiInstagramFill, href: "https://instagram.com", label: "Instagram" },
  { icon: RiTiktokFill, href: "https://tiktok.com", label: "TikTok" },
];

export default function Footer() {
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
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section: Logo + Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 py-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/shared/footer/logo.png"
              alt="SA'RU Samudra Biru Dev Logo"
              width={210}
              height={210}
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
                    <span className="text-heading-h4 md:text-heading-h3 font-normal text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Section */}
        <div className="flex justify-start lg:justify-end py-6">
          <div className="flex gap-2.5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[50px] h-[50px] rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-water-900 transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </Link>
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
            <p className="text-body-base text-gray-400 leading-relaxed">
              Graha Mampang Lt.3 suite 305, Jl. Mampang Prpt. Raya
              No.KAV.100, RT.2/RW.1, Duren Tiga, Kec. Pancoran, Kota
              Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760
            </p>
          </div>

          {/* Workshop Card */}
          <div className="w-full sm:max-w-[300px]">
            <h4 className="text-heading-h5 font-medium text-water-200 mb-2">
              Workshop
            </h4>
            <p className="text-body-base text-gray-400 leading-relaxed">
              Alamat: Jl. Raya Sukahati Jl. Raya Karadenan, Sukahati, Kec.
              Cibinong, Kabupaten Bogor, Jawa Barat 16913
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
