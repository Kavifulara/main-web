"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Email",
    value: "support@bakfig.com",
  },

  {
    title: "Phone",
    value: "+91 98765 43210",
  },

  {
    title: "Instagram",
    value: "@bakfig",
  },
];

export default function ContactInfo() {
  return (
    <section className="px-6 md:px-10 py-20">

      <div className="max-w-6xl mx-auto border-t border-white/10">

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.1,
              duration: 0.8,
            }}
            className="py-10 border-b border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >

            <h2
              className="text-[#D7E2EA]/60 uppercase tracking-[0.3em]"
              style={{
                fontSize: "clamp(0.8rem,1vw,1rem)",
              }}
            >
              {item.title}
            </h2>

            <p
              className="font-medium"
              style={{
                fontSize: "clamp(1.5rem,4vw,4rem)",
              }}
            >
              {item.value}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}