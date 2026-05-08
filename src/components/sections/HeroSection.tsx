"use client";

import FadeIn from "../ui/FadeIn";
import ContactButton from "../ui/ContactButton";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative bg-[#0C0C0C]">

      {/* NAVBAR */}
      <FadeIn y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA]">

        </nav>
      </FadeIn>

      {/* HEADING */}
      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black tracking-tight leading-none whitespace-nowrap w-full text-center "
            style={{
              fontSize: "clamp(4rem, 11vw, 12rem)"
            }}
          >
            Hi, We&apos;re BaKFiG
          </h1>
        </FadeIn>
      </div>

      {/* PORTRAIT */}
      <FadeIn delay={0.6} y={30}>
        <div className="absolute left-1/2 -translate-x-1/2 z-[5] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">

          <div>
            <img
              src="/images/hero-portrait.png"
              alt="Hero Portrait"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-cover"
            />
          </div>

        </div>
      </FadeIn>

      {/* BOTTOM BAR */}
      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">

        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{
              fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)",
            }}
          >
            We make shopping easy and fun
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>

      </div>
    </section>
  );
}