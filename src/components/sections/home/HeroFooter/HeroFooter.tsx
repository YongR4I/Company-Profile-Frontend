import SocialButton from "@/components/ui/SocialButton";
import CommonLayout from "@/components/layout/CommonLayout";
import React from "react";
import {
  RiLinkedinFill,
  RiInstagramFill,
  RiFacebookFill,
  RiPhoneFill,
} from "react-icons/ri";
import { IoIosMail } from "react-icons/io";

interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
  copyValue?: string;
}

const socialLinks: SocialLink[] = [
  { icon: RiLinkedinFill, href: "https://www.linkedin.com/company/sabirudev", label: "LinkedIn" },
  { icon: RiInstagramFill, href: "https://www.instagram.com/sabirudev/", label: "Instagram" },
  { icon: RiFacebookFill, href: "https://www.facebook.com/samudrabirudevelop/", label: "Facebook" },
  { icon: RiPhoneFill, href: "tel:+6282242698548", label: "Phone", copyValue: "0822 4269 8548" },
  { icon: IoIosMail, href: "mailto:samudrabirudevelop@gmail.com", label: "Email", copyValue: "samudrabirudevelop@gmail.com" },
];

export default function HeroFooter() {
  return (
    <CommonLayout
      className="bg-[#071115] flex flex-col md:flex-row justify-between items-start md:items-center h-fit! py-8 md:py-10 gap-6 md:gap-8"
      id="hero-footer"
    >
      <div className="text-wrapper w-full md:w-auto">
        <p className="text-white w-full max-w-[400px] text-heading-h4 leading-relaxed">
          From strategy to deployment, we help businesses build modern digital
          products that are scalable, secure, and ready for the future.
        </p>
      </div>
      <div className="social-container w-full md:w-auto flex flex-row justify-start md:justify-end items-center gap-4">
        {socialLinks.map(({ icon: Icon, href, label, copyValue }) => (
          <SocialButton key={label} href={href} aria-label={label} copyValue={copyValue}>
            <Icon size={30} />
          </SocialButton>
        ))}
      </div>
    </CommonLayout>
  );
}
