import Hero from "@/components/sections/home/hero";
import HeroFooter from "@/components/sections/home/herofooter";
import AboutHeadline from "@/components/sections/home/about/AboutHeadline";
import AboutSection from "@/components/sections/home/about";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Hero />
      <HeroFooter />
      <AboutHeadline />
      <AboutSection />
    </div>
  );
}
