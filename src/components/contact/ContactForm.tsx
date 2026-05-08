"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="px-6 md:px-10 py-28">

      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hero-heading uppercase font-black mb-16"
          style={{
            fontSize: "clamp(3rem,10vw,9rem)",
          }}
        >
          Send A Message
        </motion.h2>

        <div className="space-y-10">

          {/* NAME */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent border-b border-white/20 pb-5 text-white outline-none placeholder:text-white/30 transition-all duration-300 focus:border-white"
            style={{
              fontSize: "clamp(1.2rem,2vw,2rem)",
            }}
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent border-b border-white/20 pb-5 text-white outline-none placeholder:text-white/30 transition-all duration-300 focus:border-white"
            style={{
              fontSize: "clamp(1.2rem,2vw,2rem)",
            }}
          />

          {/* MESSAGE */}
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full bg-transparent border-b border-white/20 pb-5 text-white outline-none placeholder:text-white/30 resize-none transition-all duration-300 focus:border-white"
            style={{
              fontSize: "clamp(1.2rem,2vw,2rem)",
            }}
          />

          {/* BUTTON */}
          <div className="pt-10">

            <button
              className="rounded-full px-10 py-4 md:px-14 md:py-5 text-white uppercase tracking-[0.25em] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                boxShadow:
                  "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
              }}
            >
              Send Message
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}