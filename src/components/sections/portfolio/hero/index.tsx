import CommonLayout from "@/components/layout/CommonLayout";

export default function PortfolioHero() {
  return (
    <CommonLayout
      className="!h-[calc(100vh-10rem)] !bg-cover !bg-center !bg-no-repeat items-end justify-start !px-4 md:!px-18 pb-[80px]"
      style={{ backgroundImage: "url('/images/hero/Hero.png')" }}
    >
      <div className="absolute inset-0 bg-water-900/60 mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none bg-gradient-to-b from-transparent to-[#040A0C] to-90%" />
      <div className="w-full relative z-10 text-left flex flex-col justify-end h-full">
        <h1
          className="text-white font-bold text-[clamp(60px,10vw,120px)] tracking-tighter leading-[0.9]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          CLIENT<br />
          PROJECT
        </h1>
      </div>
    </CommonLayout>
  );
}
