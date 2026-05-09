"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutUsCTA() {
  const { t } = useLanguage();

  return (
    <div className="flex justify-center py-20">

      <Link href="/about">

        <button className="group relative flex items-center gap-3 px-10 py-4 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-[1.03]">

          <span className="relative z-10">
            {t.aboutus.about}
          </span>

          <ArrowUpRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-20 transition duration-300" />

        </button>

      </Link>

    </div>
  );
}