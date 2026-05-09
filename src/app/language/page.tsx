"use client";

import { motion } from "framer-motion";
import { Check, Languages } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguagePage() {
  const router = useRouter();

  const {
    language,
    setLanguage,
    t,
  } = useLanguage();

  const handleSelect = (
    lang: "en" | "hi"
  ) => {
    setLanguage(lang);

    setTimeout(() => {
      router.push("/");
    }, 400);
  };

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#050505]
        via-[#0a0a0a]
        to-[#111111]
        text-white
        flex
        items-center
        justify-center
        px-6
        relative
        overflow-hidden
      "
    >
      {/* Glow Effects */}

      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-white/5 blur-3xl rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-white/5 blur-3xl rounded-full" />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          w-full
          max-w-xl
          rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          p-8 md:p-10
          shadow-2xl
        "
      >
        {/* Icon */}

        <div className="flex justify-center mb-6">
          <div
            className="
              w-16 h-16
              rounded-2xl
              bg-white/5
              border border-white/10
              flex items-center justify-center
            "
          >
            <Languages size={30} />
          </div>
        </div>

        {/* Heading */}

        <motion.h1
          key={language}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            text-3xl
            md:text-4xl
            font-semibold
            text-center
            mb-3
            tracking-tight
          "
        >
          {t.language.title}
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          key={`${language}-subtitle`}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            text-white/60
            text-center
            mb-10
            text-sm md:text-base
          "
        >
          {t.language.subtitle}
        </motion.p>

        {/* Language Cards */}

        <div className="grid gap-5">
          {/* English */}

          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() =>
              handleSelect("en")
            }
            className={`
              relative
              overflow-hidden
              rounded-3xl
              border
              p-6
              text-left
              transition-all
              duration-300

              ${
                language === "en"
                  ? "border-white/30 bg-white/10"
                  : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-medium mb-1">
                  English
                </h2>

                <p className="text-white/50 text-sm">
                  Elegant Global Experience
                </p>
              </div>

              {language === "en" && (
                <div
                  className="
                    w-10 h-10
                    rounded-full
                    bg-white
                    text-black
                    flex items-center justify-center
                  "
                >
                  <Check size={18} />
                </div>
              )}
            </div>
          </motion.button>

          {/* Hindi */}

          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() =>
              handleSelect("hi")
            }
            className={`
              relative
              overflow-hidden
              rounded-3xl
              border
              p-6
              text-left
              transition-all
              duration-300

              ${
                language === "hi"
                  ? "border-white/30 bg-white/10"
                  : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className={`
                    text-2xl
                    font-medium
                    mb-1
                
                    ${
                      language === "hi"
                        ? "hindi-text"
                        : ""
                    }
                  `}
                >
                  हिन्दी
                </h2>

                <p className={`
                    text-white/50
                    text-sm
                
                    ${
                      language === "hi"
                        ? "hindi-text"
                        : ""
                    }
                  `}
                >
                  भारतीय अनुभव
                </p>
              </div>

              {language === "hi" && (
                <div
                  className="
                    w-10 h-10
                    rounded-full
                    bg-white
                    text-black
                    flex items-center justify-center
                  "
                >
                  <Check size={18} />
                </div>
              )}
            </div>
          </motion.button>
        </div>

        {/* Bottom Text */}

        <motion.p
          key={`${language}-bottom`}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            text-center
            text-white/40
            text-xs
            mt-8
          "
        >
          {language === "en"
            ? "You can change language anytime from the navbar"
            : "आप कभी भी नेवबार से भाषा बदल सकते हैं"}
        </motion.p>
      </motion.div>
    </div>
  );
}