"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Layers,
  Gauge,
  ArrowDown,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Maximize2,
  Crosshair,
  Compass,
  Cpu,
} from "lucide-react";

export default function HeroScrollySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // Monitor scroll within the scrolly container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Determine step based on scroll progress:
      // 0 - 0.28 -> Step 0: Company Description & Attractive Sentence
      // 0.29 - 0.65 -> Step 1: 10.2 mm Static Nylon Adventure Rope
      // 0.66 - 0.95 -> Step 2: Cutting Edge Zoom & Gauge Details
      // > 0.95 -> Step 3: Shift to Section 2
      if (progress < 0.3) {
        setActiveStep(0);
      } else if (progress < 0.65) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (stepIndex: number) => {
    if (!containerRef.current) return;
    const windowHeight = window.innerHeight;
    const totalScrollable = containerRef.current.offsetHeight - windowHeight;
    const targetProportions = [0.05, 0.45, 0.82];
    const targetScroll = containerRef.current.offsetTop + totalScrollable * targetProportions[stepIndex];
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const scrollToSection2 = () => {
    const el = document.getElementById("section-rope-types");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative bg-brand-navy text-white min-h-[300vh]"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-topo-pattern">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Top Progress & Step Navigator */}
        <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary-400/15 text-secondary-300 border border-secondary-400/30">
              <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
              Scroll Interactive Experience
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Scroll down or click steps to inspect technology
            </span>
          </div>

          {/* Step Selector Pills */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
            {[
              { label: "1. Brand Vision", index: 0 },
              { label: "2. 10.2mm Flagship", index: 1 },
              { label: "3. Cutting Edge & Gauge", index: 2 },
            ].map((step) => (
              <button
                key={step.index}
                onClick={() => scrollToStep(step.index)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeStep === step.index
                    ? "bg-gradient-to-r from-primary-500 to-secondary-400 text-brand-navy shadow-md font-bold"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {step.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex items-center my-auto py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            {/* Left Column: Animated Descriptions */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <AnimatePresence mode="wait">
                {activeStep === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary-500/20 text-secondary-300 text-xs font-semibold border border-primary-400/30">
                      <Shield className="w-4 h-4 text-secondary-400" />
                      <span>Certified Life-Safety Engineering</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-[1.1]">
                      UNYIELDING{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 via-secondary-400 to-primary-300">
                        STRENGTH
                      </span>{" "}
                      AT THE CUTTING EDGE.
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                      CodeAnchor manufactures world-class high-tensile technical ropes designed for alpine
                      expeditions, tactical search & rescue, and extreme outdoor missions. Where human life
                      hangs on every fiber, compromise is not an option.
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => scrollToStep(1)}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-brand-navy font-bold px-6 py-3 rounded-xl shadow-lg shadow-secondary-400/20 hover:scale-105 active:scale-95 transition-all text-sm"
                      >
                        <span>Scroll Down to Inspect Rope</span>
                        <ArrowDown className="w-4 h-4 animate-bounce" />
                      </button>

                      <Link
                        href="/ropes"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 transition-all"
                      >
                        <span>Browse Ropes</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Trust badges */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-lg">
                      <div>
                        <div className="text-2xl font-black text-secondary-300">32+ kN</div>
                        <div className="text-xs text-slate-400">Tensile Tenacity</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-secondary-300">100%</div>
                        <div className="text-xs text-slate-400">Virgin Polyamide</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-secondary-300">0.05mm</div>
                        <div className="text-xs text-slate-400">Gauge Precision</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-secondary-400/20 text-secondary-200 text-xs font-semibold border border-secondary-400/40">
                      <Gauge className="w-4 h-4 text-secondary-400" />
                      <span>Scroll Activated: Flagship Showcase</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
                      10.2 mm Static Nylon{" "}
                      <span className="text-secondary-400">Adventure Rope</span>
                    </h2>

                    <p className="text-base text-slate-300 leading-relaxed">
                      Custom-engineered for deep cave ascents, big-wall hauling, and rapid alpine SAR operations.
                      Crafted from continuous virgin Polyamide 6.6 with an ultra-dense 32-carrier sheath that
                      repels sharp rock abrasion and dynamic friction heat.
                    </p>

                    {/* High-Impact Spec Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-white/5 border border-secondary-400/30 backdrop-blur-sm">
                        <div className="text-xs text-secondary-300 font-medium">Diameter Gauge</div>
                        <div className="text-2xl font-black text-white mt-1">10.2 mm</div>
                        <div className="text-[11px] text-slate-400">Calibrated ±0.05 mm</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/5 border border-secondary-400/30 backdrop-blur-sm">
                        <div className="text-xs text-secondary-300 font-medium">Breaking Strength</div>
                        <div className="text-2xl font-black text-white mt-1">32.4 kN</div>
                        <div className="text-[11px] text-slate-400">7,280 lbf Ultimate MBS</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/5 border border-secondary-400/30 backdrop-blur-sm">
                        <div className="text-xs text-secondary-300 font-medium">Static Elongation</div>
                        <div className="text-2xl font-black text-white mt-1">&lt; 1.9%</div>
                        <div className="text-[11px] text-slate-400">Tested at 150 kg payload</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/5 border border-secondary-400/30 backdrop-blur-sm">
                        <div className="text-xs text-secondary-300 font-medium">Unit Weight</div>
                        <div className="text-2xl font-black text-white mt-1">68 g/m</div>
                        <div className="text-[11px] text-slate-400">Lightweight Packability</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        onClick={() => scrollToStep(2)}
                        className="inline-flex items-center gap-2 bg-secondary-400 hover:bg-secondary-300 text-brand-navy font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md"
                      >
                        <span>Continue Scroll to Zoom Cutting Edge</span>
                        <ArrowDown className="w-4 h-4 animate-bounce" />
                      </button>
                      <Link
                        href="/ropes"
                        className="text-xs text-secondary-300 hover:text-white underline underline-offset-4"
                      >
                        View Full Specs & Order
                      </Link>
                    </div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary-500/20 text-secondary-300 text-xs font-semibold border border-primary-400/40">
                      <Crosshair className="w-4 h-4 text-secondary-400 animate-spin" />
                      <span>Microscopic Cross-Section Analysis</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
                      ROPE CUTTING EDGE <br />
                      <span className="text-secondary-400">&amp; 10.2 MM GAUGE DETAILS</span>
                    </h2>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      Inspecting the ultrasonic fused cutting edge reveals the dual-layer Kernmantle architecture.
                      Each microscopic strand is pre-twisted and heat-set under controlled tension to eliminate
                      core slippage and sheath rupture under high friction descenders.
                    </p>

                    {/* Technical Anatomy Details */}
                    <div className="space-y-2.5 text-xs text-slate-200">
                      <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-secondary-400 mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-white">Precision 10.20 mm Outer Gauge:</strong> Seamlessly
                          travels through modern mechanical rope grabs, ascenders, and Petzl ID/Rig pulleys.
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-secondary-400 mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-white">38% Protective Sheath Mantle:</strong> 32 tightly
                          interlaced carriers shield the inner core from rock crystal cutting and UV breakdown.
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-secondary-400 mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-white">62% Parallel Core Bundles:</strong> High-tenacity
                          polyamide strands carrying the primary tensile load without torsional twisting.
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-secondary-400 mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-white">Ultrasonic Sealed Cutting Edge:</strong> Clean
                          molecular-bonded end seal guarantees zero sheath-core unraveling.
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-4">
                      <button
                        onClick={scrollToSection2}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-brand-navy font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all text-xs"
                      >
                        <span>Shift to Section 2: Explore Rope Types</span>
                        <ArrowDown className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Visual Transformation (Rope Image & Cutting Edge Zoom) */}
            <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px] sm:min-h-[440px]">
              {/* Outer Decorative Tech Frame */}
              <div className="relative w-full max-w-md aspect-square rounded-3xl p-1 bg-gradient-to-br from-primary-500/40 via-secondary-400/30 to-brand-navy shadow-2xl border border-white/15 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                {/* Tech HUD overlays */}
                <div className="absolute top-3 left-4 text-[10px] tracking-widest font-mono text-secondary-300 flex items-center gap-1.5 z-30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  OPTICAL SENSOR: 10.2 MM CALIBRATION
                </div>
                <div className="absolute top-3 right-4 text-[10px] tracking-widest font-mono text-slate-400 z-30">
                  REF: CA-102-ST
                </div>

                {/* Animated Visual Canvas */}
                <div className="relative w-full h-full rounded-[22px] overflow-hidden flex items-center justify-center bg-slate-950">
                  {/* Step 0: Hero High-Tensile Rope Graphic */}
                  {activeStep === 0 && (
                    <motion.div
                      key="img-step-0"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.1, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=80"
                        alt="CodeAnchor Technical Adventure Rope"
                        fill
                        priority
                        className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />

                      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-brand-navy/80 border border-secondary-400/30 backdrop-blur-md">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-secondary-300 font-semibold">Flagship Adventure Line</span>
                          <span className="text-emerald-400 font-mono">32.4 kN CERTIFIED</span>
                        </div>
                        <div className="text-sm font-bold text-white mt-1">
                          Scroll to inspect 10.2mm gauge cutting edge
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 1: 10.2mm Static Nylon Adventure Rope Highlight */}
                  {activeStep === 1 && (
                    <motion.div
                      key="img-step-1"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.2, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1601224748193-d34f2a7924fe?auto=format&fit=crop&w=1200&q=80"
                        alt="10.2 mm Static Nylon Adventure Rope"
                        fill
                        className="object-cover opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/90 via-transparent to-primary-900/40" />

                      {/* Caliper Overlay Graphic */}
                      <div className="absolute inset-x-8 top-12 flex flex-col items-center">
                        <div className="w-full border-t-2 border-dashed border-secondary-400 relative">
                          <div className="absolute -top-3 left-0 w-3 h-6 border-l-2 border-secondary-400" />
                          <div className="absolute -top-3 right-0 w-3 h-6 border-r-2 border-secondary-400" />
                          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-secondary-400 text-brand-navy font-mono font-black text-xs shadow-lg">
                            GAUGE: 10.2 mm
                          </span>
                        </div>
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 border border-primary-500/40 backdrop-blur-md">
                        <div className="text-xs text-secondary-300 font-bold uppercase tracking-wider">
                          Nylon 6.6 Kernmantle Weave
                        </div>
                        <div className="text-xs text-slate-300 mt-1">
                          Ultra-low elongation static structure optimized for rappels and fixed ascents.
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: ZOOM INTO ROPE CUTTING EDGE & GAUGE DETAILS */}
                  {activeStep === 2 && (
                    <motion.div
                      key="img-step-2"
                      initial={{ scale: 1.4, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.6, opacity: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-slate-950"
                    >
                      {/* Macro Cutting Edge Diagram & Measurement Callouts */}
                      <div className="relative w-56 h-56 rounded-full flex items-center justify-center p-3 border-4 border-secondary-400 shadow-[0_0_50px_rgba(158,206,225,0.4)] animate-pulseGlow bg-slate-900">
                        {/* Outer Sheath Braided Ring */}
                        <div className="relative w-full h-full rounded-full border-[10px] border-primary-500/90 flex items-center justify-center bg-slate-800 overflow-hidden">
                          {/* Inner Core Bundles Pattern */}
                          <div className="grid grid-cols-4 gap-1.5 p-3 w-full h-full rounded-full bg-slate-950 items-center justify-center">
                            {Array.from({ length: 16 }).map((_, i) => (
                              <div
                                key={i}
                                className="w-5 h-5 rounded-full bg-gradient-to-br from-secondary-300 to-primary-400 shadow-inner border border-white/40 flex items-center justify-center"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                              </div>
                            ))}
                          </div>

                          {/* Center Core Centerpiece */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-secondary-400 text-center">
                              <span className="text-[11px] font-mono font-bold text-secondary-300">
                                10.20 mm
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Sheath Thickness Annotation */}
                        <div className="absolute -top-4 -right-4 px-2.5 py-1 rounded-md bg-secondary-400 text-brand-navy font-bold text-[10px] shadow-lg flex items-center gap-1">
                          <Layers className="w-3 h-3" />
                          <span>Mantle: 38% (1.4mm)</span>
                        </div>

                        {/* Core Proportion Annotation */}
                        <div className="absolute -bottom-4 -left-4 px-2.5 py-1 rounded-md bg-primary-500 text-white font-bold text-[10px] shadow-lg flex items-center gap-1 border border-primary-300">
                          <Cpu className="w-3 h-3" />
                          <span>Core: 62% Nylon 6.6</span>
                        </div>
                      </div>

                      {/* Caliper digital measurement badge */}
                      <div className="mt-6 w-full max-w-xs p-3 rounded-xl bg-brand-navy/90 border border-secondary-400/40 backdrop-blur-md">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-300 flex items-center gap-1">
                            <Gauge className="w-3.5 h-3.5 text-secondary-400" />
                            Digital Caliper Gauge:
                          </span>
                          <span className="font-mono font-extrabold text-secondary-300 text-sm">
                            10.20 ± 0.05 mm
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-between">
                          <span>Cutting Edge: Ultrasonic Fused</span>
                          <span className="text-emerald-400 font-semibold">Zero Fray Seal</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator & Jump to Section 2 */}
        <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-32 bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary-500 to-secondary-400 h-full transition-all duration-150"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              {Math.round(scrollProgress * 100)}% Scrolled
            </span>
          </div>

          <button
            onClick={scrollToSection2}
            className="flex items-center gap-2 text-xs font-semibold text-secondary-300 hover:text-white transition-colors group"
          >
            <span>Shift to Section 2: Rope Types</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
