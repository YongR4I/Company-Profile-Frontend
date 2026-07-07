import Hero from "@/components/sections/home/hero";
import HeroFooter from "@/components/sections/home/herofooter";
import AboutHeadline from "@/components/sections/home/about/AboutHeadline";
import AboutSection from "@/components/sections/home/about";
import Headline from "@/components/layout/Headline";
import WhyUs from "@/components/sections/home/WhyUs";
import HeadlineChild from "@/components/layout/HeadlineChild";
import Partners from "@/components/sections/Partners";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Hero />
      <HeroFooter />
      <AboutHeadline />
      <AboutSection />
      <Headline text="Why Busiesses Choose Us?" />
      <WhyUs />
      <Partners />
    </div>
  );
}
