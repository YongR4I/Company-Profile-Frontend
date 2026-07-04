export default function Hero() {
  return (
    <section
      className="h-[calc(100vh-10rem)] w-full bg-cover bg-center bg-no-repeat flex items-center top-0 left-0 md:px-16 relative"
      style={{ backgroundImage: "url('/images/hero/Hero.png')" }}
    >
      <div className="absolute bottom-0 left-0 w-full h-[171px] pointer-events-none bg-gradient-to-b from-transparent to-[#040A0C] to-80%" />
      <div className="w-full relative">
        <h1
          className="text-white font-medium text-[clamp(28px,7.5vw,80px)] tracking-tight leading-[1.1] sm:leading-[1.1]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Digital Innovation.
          <br />
          Designed Around Your
          <br />
          Business.
        </h1>
      </div>
    </section>
  );
}
