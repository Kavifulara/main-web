"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  const dropdownRef =
    useRef<HTMLDivElement>(null);

  const {
    language,
    setLanguage,
  } = useLanguage();

  
  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative z-[100]"
    >
      {/* Main Button */}

      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen(!open)}
        className="
          group
          relative
          flex
          items-center
          gap-2
          overflow-hidden
          rounded-full
          border border-white/10
          bg-white/[0.04]
          px-3.5 py-2
          backdrop-blur-xl
          transition-all
          duration-300
          hover:bg-white/[0.08]
          hover:border-white/20
        "
      >
        {/* Glow */}

        <div
          className="
            absolute inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
            bg-gradient-to-r
            from-white/[0.03]
            via-white/[0.07]
            to-white/[0.03]
          "
        />

        <Globe
          size={15}
          className="relative z-10 text-white/80"
        />

        <span
          className="
            relative z-10
            text-sm
            font-medium
            tracking-wide
          "
        >
          {language === "en"
            ? "EN"
            : "हिं"}
        </span>
      </motion.button>

      {/* Dropdown */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              absolute
              right-0
              mt-3
              w-52
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-black/80
              backdrop-blur-2xl
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            "
          >
            {/* English */}

            <button
              onClick={() => {
                setLanguage("en");
                setOpen(false);
              }}
              className={`
                group
                flex
                w-full
                items-center
                justify-between
                px-5 py-4
                transition-all
                duration-300

                ${
                  language === "en"
                    ? "bg-white/[0.07]"
                    : "hover:bg-white/[0.05]"
                }
              `}
            >
              <div>
                <p className="text-sm font-medium">
                  English
                </p>

                <p className="text-xs text-white/45 mt-1">
                  Global Experience
                </p>
              </div>

              {language === "en" && (
                <div
                  className="
                    h-2 w-2
                    rounded-full
                    bg-white
                  "
                />
              )}
            </button>

            {/* Divider */}

            <div className="h-px bg-white/5 mx-3" />

            {/* Hindi */}

            <button
              onClick={() => {
                setLanguage("hi");
                setOpen(false);
              }}
              className={`
                group
                flex
                w-full
                items-center
                justify-between
                px-5 py-4
                transition-all
                duration-300

                ${
                  language === "hi"
                    ? "bg-white/[0.07]"
                    : "hover:bg-white/[0.05]"
                }
              `}
            >
              <div>
                <p className="text-sm font-medium">
                  हिन्दी
                </p>

                <p className="text-xs text-white/45 mt-1">
                  भारतीय अनुभव
                </p>
              </div>

              {language === "hi" && (
                <div
                  className="
                    h-2 w-2
                    rounded-full
                    bg-white
                  "
                />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}