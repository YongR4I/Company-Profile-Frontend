import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5 bg-transparent transition-all duration-300">
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
          {['Services', 'Portfolio', 'About', 'Blog'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="text-[clamp(16px,2vw,18px)] font-medium text-white hover:text-gray-300 transition-colors"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {item}
            </Link>
          ))}
        </div>

        <button className="bg-white text-[#1E4454] px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2">
          Get in Touch
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
