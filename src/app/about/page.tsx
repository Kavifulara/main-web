import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function AboutPage() {
  return (
    <main
      className="overflow-x-clip bg-[#0C0C0C] text-white"
      style={{
        fontFamily: "'Kanit', sans-serif",
      }}
    >
      <HeroSection />
      <MarqueeSection /> 
      <AboutSection /> 
      <ServicesSection />
    </main>
  );
}