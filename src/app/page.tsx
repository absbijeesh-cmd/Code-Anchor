import React from "react";
import HeroScrollySection from "@/components/HeroScrollySection";
import RopeTypesSection from "@/components/RopeTypesSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import GaugeCalculatorSection from "@/components/GaugeCalculatorSection";
import BlogSection from "@/components/BlogSection";

export default function HomePage() {
  return (
    <div className="relative w-full">
      {/* Section 1: Interactive Scrollytelling Experience */}
      <HeroScrollySection />

      {/* Section 2: Animated Rope Types Showcase */}
      <RopeTypesSection />

      {/* Section 3: Animated Activities Showcase */}
      <ActivitiesSection />

      {/* Section 4: Interactive Rope Gauge & Tensile Safety Calculator */}
      <GaugeCalculatorSection />

      {/* Animated Blog Section */}
      <BlogSection />
    </div>
  );
}
