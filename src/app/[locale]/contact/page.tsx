import { getTranslations } from "next-intl/server";
import HeroHeader from "@/components/shared/HeroHeader";
import ContactForm from "@/components/sections/contact/ContactForm";
import { getContactPage } from "@/lib/strapi-services";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  const pageData = await getContactPage(locale);

  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <HeroHeader
        title={
          <>
            {t("heroTitle")}
          </>
        }
        subtitle={pageData?.heroSubtitle || t("heroSubtitle")}
      />
      <ContactForm />
    </div>
  );
}
