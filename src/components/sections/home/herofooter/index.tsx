import SocialButton from "@/components/common/SocialButton";
import CommonLayout from "@/components/layout/CommonLayout";
import Link from "next/link";
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
      className="bg-[#071115] flex flex-row justify-between items-end-safe h-fit!"
      id="hero-footer"
    >
      <div className="text-wrapper w-full items-center">
        <p className="text-white w-100 text-heading-h4">
          From strategy to deployment, we help businesses build modern digital
          products that are scalable, secure, and ready for the future.
        </p>
      </div>
      <div className="social-container w-full h-full flex flex-row justify-end items-center gap-4">
        {socialLinks.map(({ icon: Icon, href }) => (
          <SocialButton key={href} href={href}>
            <Icon size={30} />
          </SocialButton>
        ))}
      </div>
    </CommonLayout>
  );
}
