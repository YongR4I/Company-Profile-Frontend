import Link from "next/link";
import Image from "next/image";

const companyLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Instagram", href: "#" },
];

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        fill="white"
      />
    </svg>
  );
}

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
              className="object-contain"
            />
          </div>

          {/* Links columns */}
          <div className="flex flex-wrap gap-12 lg:gap-32">
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
                      className="text-heading-h3 font-normal text-white hover:text-water-200 transition-colors"
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
                    <span className="text-heading-h3 font-normal text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Section */}
        <div className="flex justify-end py-6">
          <div className="flex gap-2.5">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[50px] h-[50px] rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-water-900 transition-colors"
              >
                <InstagramIcon />
              </Link>
            ))}
          </div>
        </div>

        {/* Address Section */}
        <div className="flex flex-col sm:flex-row justify-end gap-10 py-6">
          {/* Office Card */}
          <div className="max-w-[404px]">
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
          <div className="max-w-[300px]">
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
