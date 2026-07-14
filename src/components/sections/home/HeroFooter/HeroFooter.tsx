import SocialButton from "@/components/ui/SocialButton";
import CommonLayout from "@/components/layout/CommonLayout";
import React from "react";
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
import { getSiteSettings } from "@/lib/strapi-services";

// Static fallback social links
const defaultSocialLinks = [
  { icon: RiLinkedinFill, href: "https://www.linkedin.com/company/sabirudev", label: "LinkedIn", copyValue: undefined },
  { icon: RiInstagramFill, href: "https://www.instagram.com/sabirudev/", label: "Instagram", copyValue: undefined },
  { icon: RiFacebookFill, href: "https://www.facebook.com/samudrabirudevelop/", label: "Facebook", copyValue: undefined },
  { icon: RiPhoneFill, href: "tel:+6282242698548", label: "Phone", copyValue: "0822 4269 8548" },
  { icon: IoIosMail, href: "mailto:samudrabirudevelop@gmail.com", label: "Email", copyValue: "samudrabirudevelop@gmail.com" },
];

function getSocialIcon(platform: string) {
  switch (platform) {
    case "Facebook":   return RiFacebookFill;
    case "Instagram":  return RiInstagramFill;
    case "LinkedIn":   return RiLinkedinFill;
    case "YouTube":    return RiYoutubeFill;
    case "X_Twitter":  return RiTwitterXFill;
    case "WhatsApp":   return FaWhatsapp;
    case "TikTok":     return FaTiktok;
    default:           return RiTwitterXFill;
  }
}

export default async function HeroFooter() {
  // getSiteSettings is already called in layout.tsx — Next.js deduplicates
  // the fetch automatically so this does NOT cause an extra network request.
  const settings = await getSiteSettings();

  const socialLinks =
    settings?.socialLinks && settings.socialLinks.length > 0
      ? settings.socialLinks.map((l) => ({
          icon: getSocialIcon(l.platform),
          href: l.url,
          label: l.platform,
          copyValue: undefined as string | undefined,
        }))
      : defaultSocialLinks;

  const heroFooterText =
    settings?.heroFooterText ||
    "From strategy to deployment, we help businesses build modern digital products that are scalable, secure, and ready for the future.";

  return (
    <CommonLayout
      className="bg-[#071115] flex flex-col md:flex-row justify-between items-start md:items-center h-fit! py-8 md:py-10 gap-6 md:gap-8"
      id="hero-footer"
    >
      <div className="text-wrapper w-full md:w-auto">
        <p className="text-white w-full max-w-[400px] text-heading-h4 leading-relaxed">
          {heroFooterText}
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
