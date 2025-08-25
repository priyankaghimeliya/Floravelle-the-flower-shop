import React from "react";
import { HeroSection } from "./HeroSection";
import { FlowersSection } from "./FlowersSection";
import { BouquetSection } from "./BouquetSection";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";

export default function MainPage() {
  return (
    <main className="relative w-full bg-white">
      <HeroSection />
      <FlowersSection />
      <BouquetSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
