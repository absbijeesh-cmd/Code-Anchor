"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Gauge,
  ShieldCheck,
  Scale,
  Zap,
  ArrowRight,
  Sparkles,
  Info,
} from "lucide-react";

export default function GaugeCalculatorSection() {
  const [activityType, setActivityType] = useState<"climb" | "rescue" | "canyon" | "arborist" | "marine">("rescue");
  const [loadKg, setLoadKg] = useState<number>(180);
  const [safetyFactor, setSafetyFactor] = useState<number>(10);

  // Dynamic calculations
  // Force (kN) = (loadKg * 9.81 * safetyFactor) / 1000
  const requiredKn = ((loadKg * 9.81 * safetyFactor) / 1000).toFixed(1);

  // Determine recommended rope and gauge
  const getRecommendation = () => {
    const kn = parseFloat(requiredKn);
    if (activityType === "climb") {
      return {
        gauge: "9.8 mm",
        name: "9.8 mm Apex Dry Dynamic Climbing Rope",
        reason: "Optimized energy-absorbing dynamic elasticity with low peak impact force (< 8.8 kN).",
        link: "/ropes",
      };
    }
    if (activityType === "canyon") {
      return {
        gauge: "9.0 mm",
        name: "9.0 mm HydroShield Floating Canyoneering Rope",
        reason: "Buoyant polypropylene-nylon construction designed to float and resist grit abrasion.",
        link: "/ropes",
      };
    }
    if (activityType === "arborist") {
      return {
        gauge: "14.0 mm",
        name: "14.0 mm ArborTitan 16-Strand Bull Rope",
        reason: "Engineered for massive shock-load dissipation during heavy timber limb lowering.",
        link: "/ropes",
      };
    }
    if (activityType === "marine") {
      return {
        gauge: "12.0 mm",
        name: "12.0 mm OceanGrip Double Braid Marine Rigging Line",
        reason: "Zero rotational torque and zero saltwater degradation for high-load winches.",
        link: "/ropes",
      };
    }

    // Default Rescue
    if (kn > 30) {
      return {
        gauge: "11.5 mm",
        name: "11.5 mm TechRescue Heat-Resistant Tactical Rope",
        reason: "Extreme 44.2 kN tensile rating certified for 2-person rescue loads (NFPA General Use).",
        link: "/ropes",
      };
    }
    return {
      gauge: "10.2 mm",
      name: "10.2 mm Static Nylon Adventure Rope",
      reason: "Our flagship low-stretch static line; delivers 32.4 kN breaking strength for single and team hauling.",
      link: "/ropes",
    };
  };

  const rec = getRecommendation();

  return (
    <section className="relative py-24 bg-gradient-to-b from-brand-navy via-slate-950 to-brand-navy text-white overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-secondary-400/15 text-secondary-300 border border-secondary-400/30">
            <Calculator className="w-3.5 h-3.5 text-secondary-400" />
            <span>Section 4: Technical Rope Gauge &amp; Safety Calculator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
            CALCULATE YOUR REQUIRED{" "}
            <span className="text-secondary-400">ROPE GAUGE &amp; MBS</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Input your expected payload, operational discipline, and safety factor to calculate the ideal rope
            diameter and certified minimum breaking strength.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-secondary-400/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Input Controls */}
            <div className="md:col-span-7 space-y-6">
              {/* Activity Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-bold">
                  1. Operational Discipline:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "rescue", label: "Rescue / Haul" },
                    { id: "climb", label: "Lead Climbing" },
                    { id: "canyon", label: "Canyoneering" },
                    { id: "arborist", label: "Arborist Rig" },
                    { id: "marine", label: "Marine / Yacht" },
                  ].map((act) => (
                    <button
                      key={act.id}
                      onClick={() => setActivityType(act.id as any)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all text-center ${
                        activityType === act.id
                          ? "bg-secondary-400 text-brand-navy font-bold shadow-md"
                          : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {act.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payload Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                    2. Estimated Payload Load:
                  </label>
                  <span className="font-mono text-sm font-black text-secondary-300">
                    {loadKg} kg ({(loadKg * 2.20462).toFixed(0)} lbs)
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="10"
                  value={loadKg}
                  onChange={(e) => setLoadKg(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-secondary-400"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>50 kg (Solo)</span>
                  <span>250 kg (Tandem Litter)</span>
                  <span>600 kg (Heavy Rigging)</span>
                </div>
              </div>

              {/* Safety Factor Selection */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                    3. Required Safety Factor:
                  </label>
                  <span className="font-mono text-sm font-black text-secondary-300">
                    {safetyFactor} : 1 Ratio
                  </span>
                </div>
                <div className="flex gap-2">
                  {[
                    { factor: 5, label: "5:1 (Standard)" },
                    { factor: 7, label: "7:1 (Arborist)" },
                    { factor: 10, label: "10:1 (Life Safety / NFPA)" },
                    { factor: 15, label: "15:1 (Extreme)" },
                  ].map((item) => (
                    <button
                      key={item.factor}
                      onClick={() => setSafetyFactor(item.factor)}
                      className={`flex-1 py-2 px-2 rounded-xl text-xs font-semibold transition-all ${
                        safetyFactor === item.factor
                          ? "bg-primary-500 text-white border border-primary-300 shadow-md font-bold"
                          : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Recommendation Output Display */}
            <div className="md:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-brand-navy to-slate-950 border border-secondary-400/40 shadow-xl relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Calculated Minimum MBS</span>
                  <span className="font-mono text-emerald-400 font-bold">LIVE COMPUTED</span>
                </div>

                <div>
                  <div className="text-4xl font-display font-black text-white">
                    {requiredKn}{" "}
                    <span className="text-lg text-secondary-400 font-sans font-normal">kN</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    ({((parseFloat(requiredKn) * 224.809)).toFixed(0)} lbf breaking tenacity)
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-wider font-mono text-secondary-300 block mb-1">
                    Optimal Gauge Calibration
                  </span>
                  <div className="text-2xl font-display font-extrabold text-secondary-400 flex items-center gap-2">
                    <Gauge className="w-6 h-6 text-secondary-400" />
                    <span>{rec.gauge} Diameter</span>
                  </div>
                </div>

                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="text-xs font-bold text-white">{rec.name}</div>
                  <div className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                    {rec.reason}
                  </div>
                </div>
              </div>

              <Link
                href={rec.link}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-secondary-400 hover:bg-secondary-300 text-brand-navy shadow-md transition-all active:scale-95"
              >
                <span>View {rec.gauge} Rope Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Global Safety Certification Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <ShieldCheck className="w-6 h-6 text-secondary-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-white">UIAA 101 / 107</div>
            <div className="text-xs text-slate-400">International Mountaineering</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <ShieldCheck className="w-6 h-6 text-secondary-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-white">CE EN 1891 Type A</div>
            <div className="text-xs text-slate-400">European Low-Stretch Static</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <ShieldCheck className="w-6 h-6 text-secondary-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-white">NFPA 1983 (G &amp; T)</div>
            <div className="text-xs text-slate-400">Life Safety Rescue Rope</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <ShieldCheck className="w-6 h-6 text-secondary-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-white">ISO 9001:2015</div>
            <div className="text-xs text-slate-400">Continuous Batch Testing</div>
          </div>
        </div>
      </div>
    </section>
  );
}
