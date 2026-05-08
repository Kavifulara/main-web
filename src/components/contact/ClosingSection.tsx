"use client";

import { motion } from "framer-motion";

export default function ClosingSection() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-32">

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="hero-heading font-black uppercase text-center leading-none tracking-tight"
        style={{
          fontSize: "clamp(3rem,10vw,10rem)",
        }}
      >
        Build Something
        <br />
        Incredible With Us
      </motion.h2>

    </section>
  );
}