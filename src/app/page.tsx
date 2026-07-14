import HeroHeader from "@/components/shared/HeroHeader";
import HeroFooter from "@/components/sections/home/HeroFooter";
import AboutPreview, { AboutHeadline } from "@/components/sections/home/AboutPreview";
import Headline from "@/components/shared/Headline";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Partners from "@/components/shared/Partners";
import CTA from "@/components/shared/CTA";
import { getHomepage } from "@/lib/strapi-services";

export default async function Home() {
  const homepageData = await getHomepage();
  const blocks = homepageData?.pageBlocks || [];

  // Find blocks by their Strapi component names
  const heroBlock = blocks.find((b: any) => b.__component === "blocks.hero");
  const aboutHeadlineBlock = blocks.find((b: any) => b.__component === "blocks.about-headline");
  const solutionsBlock = blocks.find((b: any) => b.__component === "blocks.solutions");
  const whyChooseUsBlock = blocks.find((b: any) => b.__component === "blocks.why-choose-us");


  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <HeroHeader
        title={heroBlock?.title || (
          <>
            Digital Innovation.
            <br />
            Designed Around Your
            <br />
            Business.
          </>
        )}
        subtitle={heroBlock?.subtitle}
        variant="home"
      />
      <HeroFooter />
      <AboutHeadline 
        headline={aboutHeadlineBlock?.headline} 
        description={aboutHeadlineBlock?.description} 
      />
      <AboutPreview items={solutionsBlock?.items} />
      <Headline text={whyChooseUsBlock?.headline || "Why Businesses Choose Us?"} />
      <WhyChooseUs items={whyChooseUsBlock?.items} />
      <Partners />
      <CTA />
    </div>
  );
}
