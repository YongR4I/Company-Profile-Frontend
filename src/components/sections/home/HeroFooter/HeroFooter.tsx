import SocialButton from "@/components/ui/SocialButton";
import CommonLayout from "@/components/layout/CommonLayout";
import React from "react";
import {
  RiLinkedinFill,
  RiInstagramFill,
  RiTiktokFill,
} from "react-icons/ri";

const socialLinks = [
  { icon: RiLinkedinFill, href: "https://linkedin.com" },
  { icon: RiInstagramFill, href: "https://instagram.com" },
  { icon: RiTiktokFill, href: "https://tiktok.com" },
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
        {socialLinks.map(({ icon: Icon, href }) => (
          <SocialButton key={href} href={href}>
            <Icon size={30} />
          </SocialButton>
        ))}
      </div>
    </CommonLayout>
  );
}
