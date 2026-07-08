import CommonLayout from "@/components/layout/CommonLayout";

export default function OurMission() {
  return (
    <CommonLayout className="h-fit! flex-col items-start justify-center py-16 md:py-24">
      <div className="w-full text-left">
        <span
          className="text-white tracking-tighter block mb-4 md:mb-6"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(18px, 2.5vw, 28px)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Our Mission
        </span>
        <p
          className="text-white font-medium w-4/5"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(24px, 4vw, 56px)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            
          }}
        >
          We build reliable, scalable digital solutions that empower businesses
          to innovate, adapt, and achieve sustainable growth.
          <br />
          <br />
          Our mission is to accelerate digital transformation through strategic
          thinking, modern engineering, and innovative technology—delivering
          measurable outcomes that create lasting business value.  
        </p>
      </div>
    </CommonLayout>
  );
}
          