import { getTranslations } from "next-intl/server";
import HeroHeader from "@/components/shared/HeroHeader";
import HeroFooter from "@/components/sections/home/HeroFooter";
import AboutPreview, { AboutHeadline } from "@/components/sections/home/AboutPreview";
import Headline from "@/components/shared/Headline";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Partners from "@/components/shared/Partners";
import CTA from "@/components/shared/CTA";
import { getHomepage } from "@/lib/strapi-services";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const homepageData = await getHomepage(locale);
  const blocks = homepageData?.pageBlocks || [];

  const heroBlock = blocks.find((b: any) => b.__component === "blocks.hero");
  const aboutHeadlineBlock = blocks.find((b: any) => b.__component === "blocks.about-headline");
  const solutionsBlock = blocks.find((b: any) => b.__component === "blocks.solutions");
  const whyChooseUsBlock = blocks.find((b: any) => b.__component === "blocks.why-choose-us");

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <HeroHeader
        title={heroBlock?.title || t("heroTitle")}
        subtitle={heroBlock?.subtitle}
        variant="home"
      />
      <HeroFooter locale={locale} />
      <AboutHeadline 
        headline={aboutHeadlineBlock?.headline} 
        description={aboutHeadlineBlock?.description}
        defaultHeadline={t("aboutHeadline")}
        defaultDescription={t("aboutDescription")}
      />
      <AboutPreview items={solutionsBlock?.items} locale={locale} />
      <Headline text={whyChooseUsBlock?.headline || t("whyChooseUs")} />
      <WhyChooseUs items={whyChooseUsBlock?.items} locale={locale} />
      <Partners locale={locale} />
      <CTA locale={locale} />
    </div>
  );
}
