import CommonLayout from "@/components/layout/CommonLayout";

export default function ServicesHero() {
  return (
    <CommonLayout className="!h-[300px] md:!h-[381px] !bg-water-900 items-end justify-center">
      <div className="w-full relative z-10 text-center flex flex-col items-center gap-2">
        <span
          className="text-white tracking-tighter"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(18px, 2.5vw, 28px)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          What we do for you
        </span>
        <h1
          className="text-white font-medium italic tracking-tight leading-[1.1]"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(32px, 5vw, 72px)",
          }}
        >
          <span className="text-water-300">Sabiru</span> Services
        </h1>
      </div>
    </CommonLayout>
  );
}
