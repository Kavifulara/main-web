"use client";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ClosingSection from "@/components/contact/ClosingSection";

export default function ContactPage() {
  return (
    <main
      className="bg-[#0C0C0C] text-white overflow-x-clip"
      style={{
        fontFamily: "'Kanit', sans-serif",
      }}
    >
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <ClosingSection />
    </main>
  );
}