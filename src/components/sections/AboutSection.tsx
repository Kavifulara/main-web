"use client";

import FadeIn from "../ui/FadeIn";
import AnimatedText from "../ui/AnimatedText";
import ContactButton from "../ui/ContactButton";

export default function AboutSection() {

  const text =
    "Seeing people go out in the market to buy a particular item , search for it whole day and return home empty handed or after purchasing that item for more gave us the idea to create this website . Today , we not only solve the problems of the customers by helping them buy good products but also help the sellers to sell their products . We believe that BaKFiG is not only a website , but it is an initiative by us dedicated completely for the people . Let's build something incredible together!";

  return (
    <section className="relative min-h-screen px-5 sm:px-8 md:px-10 py-20 flex flex-col justify-center items-center overflow-hidden">

      {/* DECORATIONS */}

      <FadeIn delay={0.1} x={-80}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
        />
      </FadeIn>

      {/* CONTENT */}

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">

        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{
              fontSize: "clamp(3rem,12vw,160px)",
            }}
          >
            About Us
          </h2>
        </FadeIn>

        {/* <AnimatedText text={text} /> */}
        <p className="max-w-[560px] text-center text-[#D7E2EA]">
          {text}
        </p>

        <div className="pt-16 sm:pt-20 md:pt-24">
          <ContactButton />
        </div>

      </div>
    </section>
  );
}