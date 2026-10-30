"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gauge,
  Shield,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
  SlidersHorizontal,
} from "lucide-react";
import { ropesData, RopeItem } from "@/data/ropesData";
import { formatCurrency } from "@/lib/utils";
import RopeModal from "./RopeModal";

export default function RopeTypesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalRope, setActiveModalRope] = useState<RopeItem | null>(null);

  const categories = ["All", "Static", "Dynamic", "Marine", "Canyoneering", "Tactical", "Arborist"];

  const filteredRopes =
    selectedCategory === "All"
      ? ropesData.slice(0, 6) // Highlight 6 distinct types
      : ropesData.filter((r) => r.category === selectedCategory);

  return (
    <section
      id="section-rope-types"
      className="relative py-24 bg-gradient-to-b from-brand-navy via-slate-900 to-brand-navy text-white overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-secondary-400/15 text-secondary-300 border border-secondary-400/30">
              <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
              <span>Section 2: High-Performance Cordage Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              ENGINEERED ROPE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-primary-300">
                CATEGORIES &amp; TYPES
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore purpose-built tensile ropes calibrated for distinctive physical demands—from dynamic fall
              arrest elasticity to ultra-rigid static rigging lines.
            </p>
          </div>

          <Link
            href="/ropes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-400 hover:text-white transition-colors group shrink-0"
          >
            <span>View Full 12-Product Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs text-slate-400 font-medium mr-2 flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filter:
          </span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-secondary-400 text-brand-navy shadow-md shadow-secondary-400/20 font-bold scale-105"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredRopes.map((rope, idx) => (
              <motion.div
                key={rope.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-3xl bg-slate-900/80 border border-white/10 hover:border-secondary-400/50 p-5 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between backdrop-blur-md overflow-hidden"
              >
                {/* Subtle Card Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Rope Box Image */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-5 border border-white/10">
                    <Image
                      src={rope.image}
                      alt={rope.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Gauge Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-navy/90 text-secondary-300 border border-secondary-400/30 text-xs font-mono font-bold flex items-center gap-1.5 shadow-md">
                      <Gauge className="w-3.5 h-3.5 text-secondary-400" />
                      <span>{rope.gauge} mm Ø</span>
                    </div>

                    {/* Category Label */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white border border-white/15">
                      {rope.category}
                    </div>

                    {/* Breaking load ribbon */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="font-mono text-secondary-300 font-bold">
                        {rope.breakingStrength.split(" ")[0]} {rope.breakingStrength.split(" ")[1]}
                      </span>
                      <span className="text-[11px] text-slate-300">
                        {rope.weight}
                      </span>
                    </div>
                  </div>

                  {/* Rope Name & Description */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-secondary-300 transition-colors">
                        {rope.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {rope.description}
                    </p>
                  </div>

                  {/* Micro Specs Bar */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/10 text-[11px]">
                    <div className="bg-white/5 p-2 rounded-lg">
                      <span className="text-slate-400 block text-[10px]">Elongation</span>
                      <span className="font-semibold text-slate-200">{rope.elongation}</span>
                    </div>
                    <div className="bg-white/5 p-2 rounded-lg">
                      <span className="text-slate-400 block text-[10px]">Sheath Weave</span>
                      <span className="font-semibold text-slate-200">{rope.sheathProportion}</span>
                    </div>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="mt-5 pt-3 flex items-center justify-between border-t border-white/10">
                  <div>
                    <span className="text-xs text-slate-400 block">Standard Unit</span>
                    <span className="text-lg font-black text-secondary-400 font-display">
                      {formatCurrency(rope.price)}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveModalRope(rope)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-primary-500 hover:bg-primary-600 text-white shadow-md transition-all active:scale-95"
                  >
                    <span>Inspect Box</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Popup */}
      <RopeModal
        rope={activeModalRope}
        onClose={() => setActiveModalRope(null)}
      />
    </section>
  );
}
