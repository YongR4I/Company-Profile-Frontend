import CommonLayout from "@/components/layout/CommonLayout";
import Image from "next/image";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.7554 10.2083L9.5887 2.04165L11.6668 -2.00934e-05L23.3335 11.6666L11.6668 23.3333L9.5887 21.2916L17.7554 13.125L0.000159202 13.125L0.000159457 10.2083L17.7554 10.2083Z"
        fill="#56C3F0"
      />
    </svg>
  );
}

const items = [
  "Let's Build Together",
  "Free project consultation",
  "Quick response from our team",
];

export default function ContactForm() {
  return (
    <CommonLayout className="!h-fit py-16 md:py-24 items-center">
      <div className="max-w-[1596px] w-full mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Left Side */}
        <div className="md:w-[40%] flex flex-col gap-8">
          <h1
            className="text-white font-semibold tracking-tight leading-[1.05]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(32px, 5vw, 56px)",
            }}
          >
            Let&apos;s Build <span className="italic">Together</span>
          </h1>

          <div className="flex flex-col gap-5">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <ArrowIcon className="flex-shrink-0" />
                <span
                  className="text-white font-medium"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(18px, 2vw, 24px)",
                    lineHeight: 1.3,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-[60%]">
          <form className="flex flex-col gap-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder-white/50 outline-none transition-all duration-200 focus:border-white"
                style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder-white/50 outline-none transition-all duration-200 focus:border-white"
                style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder-white/50 outline-none transition-all duration-200 focus:border-white"
                style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder-white/50 outline-none transition-all duration-200 focus:border-white"
                style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
              />
            </div>
            <input
              type="text"
              placeholder="How Can We Help?"
              className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder-white/50 outline-none transition-all duration-200 focus:border-white"
              style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
            />

            <button
              type="submit"
              className="group relative overflow-hidden bg-white text-[clamp(16px,2vw,18px)] font-semibold text-water-700 w-full py-3 rounded-full transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center justify-center gap-2"
            >
              <span className="relative z-10 transition-all duration-300">
                Send
              </span>
              <svg
                className="relative z-10"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.1 19.7868L0 17.6559L14.4 3.04412H1.5V0H19.5V18.2647H16.5V5.175L2.1 19.7868Z"
                  fill="#1E4454"
                />
              </svg>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-water-300/40 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
              <span className="absolute inset-0 rounded-full ring-2 ring-water-400/0 group-hover:ring-water-400/40 transition-all duration-300 pointer-events-none" />
            </button>
          </form>
        </div>
      </div>
    </CommonLayout>
  );
}
  