export default function Hero() {
  return (
    <section 
      className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center top-0 left-0 -z-10"
      style={{ backgroundImage: "url('/images/hero/Hero.png')" }}
    >
      <div className="w-full max-w-screen-2xl mx-auto px-5 sm:px-8 mt-16 md:mt-10">
        <h1 
          className="text-white font-medium text-[clamp(28px,7.5vw,70px)] tracking-tight leading-[1.1] sm:leading-[1.1]"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Digital Innovation.<br />
          Designed Around Your<br />
          Business.
        </h1>
      </div>
    </section>
  );
}
