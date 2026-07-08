import HeroHeader from "@/components/shared/HeroHeader";
import HeroFooter from "@/components/sections/home/HeroFooter";
import AboutPreview, { AboutHeadline } from "@/components/sections/home/AboutPreview";
import Headline from "@/components/shared/Headline";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Partners from "@/components/shared/Partners";
import CTA from "@/components/shared/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <HeroHeader
        title={
          <>
            Digital Innovation.
            <br />
            Designed Around Your
            <br />
            Business.
          </>
        }
        variant="home"
      />
      <HeroFooter />
      <AboutHeadline />
      <AboutPreview />
      <Headline text="Why Busiesses Choose Us?" />
      <WhyChooseUs />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}
