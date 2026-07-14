import HeroHeader from "@/components/shared/HeroHeader";
import ContactForm from "@/components/sections/contact/ContactForm";
import { getContactPage } from "@/lib/strapi-services";

export default async function ContactPage() {
  const pageData = await getContactPage();

  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <HeroHeader
        title={
          <>
            Contact <span className="text-water-300">Us</span>
          </>
        }
        subtitle={pageData?.heroSubtitle || "Let's Connect"}
      />
      <ContactForm />
    </div>
  );
}
