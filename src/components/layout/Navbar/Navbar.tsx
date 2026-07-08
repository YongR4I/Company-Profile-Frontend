"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  RiTwitterXFill,
  RiLinkedinFill,
  RiYoutubeFill,
  RiFacebookFill,
  RiGithubFill,
} from "react-icons/ri";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: RiTwitterXFill, href: "https://x.com", label: "X" },
  { icon: RiLinkedinFill, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: RiYoutubeFill, href: "https://youtube.com", label: "YouTube" },
  { icon: RiFacebookFill, href: "https://facebook.com", label: "Facebook" },
  { icon: RiGithubFill, href: "https://github.com", label: "GitHub" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle dynamic background blur on scroll
  useEffect(() => {
    const hero = document.querySelector("section");
    if (!hero) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 80);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        rootMargin: "-80px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-99 flex items-center justify-between px-6 md:px-8 py-5 transition-all duration-300 ${
        isScrolled
          ? "bg-water-900/80 backdrop-blur-md border-b border-water-300/10"
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/branding/logo.png"
              alt="Sabiru Logo"
              width={80}
              height={28}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-[15px]">
            {menuItems.filter(item => item.label !== "Home" && item.label !== "Contact Us").map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[clamp(16px,2vw,18px)] font-medium text-white hover:text-gray-300 transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            className="group relative overflow-hidden bg-white text-[clamp(16px,2vw,18px)] font-semibold text-water-700 px-6 py-3 rounded-full transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center gap-2"
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

        {/* Mobile Hamburger/Close Button */}
        <button
          className="flex md:hidden items-center justify-center w-10 h-10 focus:outline-none z-100 relative text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {/* Hamburger Icon */}
          <span
            className={`absolute transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>

          {/* Close Icon */}
          <span
            className={`absolute transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-98 bg-[#040A0C] flex flex-col justify-between px-8 py-16 pt-32 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Background glow effects matching dark ocean-tech aesthetic */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,_rgba(85,198,202,0.12)_0%,_transparent_60%)] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_bottom,_rgba(73,166,204,0.08)_0%,_transparent_50%)] pointer-events-none z-0" />

        {/* Navigation Links */}
        <div className="relative z-10 flex flex-col items-start gap-4 mt-8">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-5xl sm:text-6xl font-bold tracking-tight text-white hover:text-water-200 transition-all duration-500 ease-out leading-none ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                fontFamily: "var(--font-inter)",
                transitionDelay: `${isOpen ? index * 50 + 100 : 0}ms`,
              }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social Links Footer */}
        <div
          className={`relative z-10 flex flex-row gap-3 items-center justify-start transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: `${isOpen ? menuItems.length * 50 + 150 : 0}ms`,
          }}
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/20 hover:border-white/80 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 bg-white/5 hover:bg-white/10"
              aria-label={label}
            >
              <Icon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
