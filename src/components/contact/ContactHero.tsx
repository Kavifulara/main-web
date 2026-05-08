"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6">

      {/* GLOW */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-fuchsia-700/20 blur-[160px] top-[-120px] left-1/2 -translate-x-1/2" />

      {/* HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center z-10"
        style={{
          fontSize: "clamp(4rem, 12vw, 13rem)",
        }}
      >
        Let&apos;s Talk
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="text-[#D7E2EA] text-center mt-8 max-w-2xl leading-relaxed z-10"
        style={{
          fontSize: "clamp(1rem,1.6vw,1.3rem)",
        }}
      >
        Need help with your order, support, partnerships or anything else?
        We&apos;d love to hear from you.
      </motion.p>

      {/* MASCOT */}
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 1 }}
        src="/images/hero-portrait.png"
        alt="Mascot"
        className="w-[260px] sm:w-[340px] md:w-[420px] object-contain mt-14 relative z-10"
      />

    </section>
  );
}