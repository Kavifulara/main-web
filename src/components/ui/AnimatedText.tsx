"use client";

import {
  motion,
  useScroll,
} from "framer-motion";

import { useRef } from "react";

interface Props {
  text: string;
}

export default function AnimatedText({ text }: Props) {

  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p
      ref={ref}
      className="flex flex-wrap justify-center leading-relaxed max-w-[560px] text-center text-[#D7E2EA] font-medium"
      style={{
        fontSize: "clamp(1rem,2vw,1.35rem)",
      }}
    >
      {text.split("").map((char, i) => {

        const start = i / text.length;

        return (
          <motion.span
            key={i}
            style={{
              opacity: scrollYProgress,
            }}
            className="relative"
          >
            {char}
          </motion.span>
        );
      })}
    </p>
  );
}