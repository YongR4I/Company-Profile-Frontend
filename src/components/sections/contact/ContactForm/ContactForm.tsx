"use client";

import CommonLayout from "@/components/layout/CommonLayout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import React, { useActionState } from "react";
import { submitContactForm, ContactFormState } from "@/app/contact/actions";

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

const benefits = [
  "Discuss your project requirements",
  "Free project consultation",
  "Quick response from our team",
];

const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <CommonLayout className="!h-fit py-16 md:py-24 items-center">
      <div className="max-w-[1596px] w-full mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Left Side */}
        <div className="md:w-[40%] flex flex-col gap-8">
          <ScrollReveal delay={0} duration={500} direction="up">
            <h1
              className="text-white font-semibold tracking-tight leading-[1.05]"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(32px, 5vw, 56px)",
              }}
            >
              Let&apos;s Build <span className="italic">Together</span>
            </h1>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            {benefits.map((item, index) => (
              <ScrollReveal key={item} delay={150 + index * 100} duration={400} direction="left">
                <div className="flex items-center gap-3">
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
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-[60%]">
          {state.status === "success" ? (
            // ✅ Success state
            <div className="flex flex-col items-start gap-6 py-12">
              <div className="w-16 h-16 rounded-full bg-water-600/20 border border-water-400/40 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#55C6CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-semibold">Message Sent!</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{state.message}</p>
              <button
                onClick={() => window.location.reload()}
                className="text-water-300 hover:text-water-200 underline underline-offset-4 text-sm transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form action={formAction} className="flex flex-col gap-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name *"
                  required
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder-white/50 outline-none transition-all duration-200 focus:border-white"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder-white/50 outline-none transition-all duration-200 focus:border-white"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder-white/50 outline-none transition-all duration-200 focus:border-white"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder-white/50 outline-none transition-all duration-200 focus:border-white"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
                />
              </div>
              <input
                name="message"
                type="text"
                placeholder="How Can We Help? *"
                required
                className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder-white/50 outline-none transition-all duration-200 focus:border-white"
                style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
              />

              {/* Error message */}
              {state.status === "error" && (
                <p className="text-red-400 text-sm">{state.message}</p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="group relative overflow-hidden bg-white text-[clamp(16px,2vw,18px)] font-semibold text-water-700 w-full py-3 rounded-full transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 transition-all duration-300">
                  {isPending ? "Sending..." : "Send"}
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-water-300/40 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="absolute inset-0 rounded-full ring-2 ring-water-400/0 group-hover:ring-water-400/40 transition-all duration-300 pointer-events-none" />
              </button>
            </form>
          )}
        </div>
      </div>
    </CommonLayout>
  );
}
