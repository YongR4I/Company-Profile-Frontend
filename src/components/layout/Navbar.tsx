import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-99 flex items-center justify-between px-8 py-5 bg-transparent transition-all duration-300">
      <div className="flex-shrink-0 flex items-center">
        <Link href="/">
          <Image
            src="/icons/sabiru-transparent 1.png"
            alt="Sabiru Logo"
            width={80}
            height={28}
            className="object-contain"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-[15px]">
          {["Services", "Portfolio", "About", "Blog"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[clamp(16px,2vw,18px)] font-medium text-white hover:text-gray-300 transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {item}
            </Link>
          ))}
        </div>

        <Link className="group relative overflow-hidden bg-white text-[clamp(16px,2vw,18px)] font-semibold text-water-700 px-6 py-3 rounded-full transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center gap-2"
          href="/contact"
        >
          <span className="relative z-10 transition-all duration-300">
            Get in Touch
          </span>
          <svg
            className="relative z-10"
            width="15"
            height="15"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.1 19.7868L0 17.6559L14.4 3.04412H1.5V0H19.5V18.2647H16.5V5.175L2.1 19.7868Z"
              fill="#1E4454"
            />
          </svg>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-water-300/40 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
          <span className="absolute inset-0 rounded-full ring-2 ring-water-400/0 group-hover:ring-water-400/40 transition-all duration-300 pointer-events-none" />
        </Link>
      </div>
    </nav>
  );
}
