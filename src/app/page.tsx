import Hero from "@/components/sections/home/hero";
import About from "@/components/sections/home/about";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Hero />
      <About />
    </div>
  );
}
