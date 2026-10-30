"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  ArrowRight,
  Shield,
  Gauge,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Mountain,
} from "lucide-react";
import { activitiesData, ActivityItem } from "@/data/activitiesData";

export default function ActivitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeActivity = activitiesData[activeIndex];

  return (
    <section className="relative py-24 bg-brand-navy text-white overflow-hidden border-t border-white/10">
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-secondary-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary-500/20 text-secondary-300 border border-primary-500/30">
              <Compass className="w-3.5 h-3.5 text-secondary-400" />
              <span>Section 3: Real-World Applications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              ROPE ACTIVITIES IN{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-primary-300">
                EXTREME ENVIRONMENTS
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              From vertical frozen couloirs to swift canyon torrents and high-rise rescue missions, see how
              CodeAnchor ropes perform when stakes are absolute.
            </p>
          </div>

          <Link
            href="/activities"
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-400 hover:text-white transition-colors group shrink-0"
          >
            <span>Explore All Activities &amp; Guides</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Interactive Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Animated Hero Image & Key Details */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-slate-900/90 border border-white/10 p-4 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
            {/* Main Stage Animated Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeActivity.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeActivity.image}
                    alt={activeActivity.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Activity Badge */}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-brand-navy/90 text-secondary-300 text-xs font-bold border border-secondary-400/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
                    <span>{activeActivity.badge}</span>
                  </div>

                  {/* Recommended Gauge Indicator */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-brand-navy/85 border border-white/15 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-secondary-400" />
                      <span className="text-xs text-slate-300">
                        Recommended Gauge:{" "}
                        <strong className="text-white font-mono">{activeActivity.recommendedGauge}</strong>
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-secondary-300 bg-secondary-400/20 px-2.5 py-1 rounded-md border border-secondary-400/30">
                      {activeActivity.recommendedType}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Title & Detailed Overview */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-secondary-400">
                  {activeActivity.category} Discipline
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                  Difficulty: {activeActivity.difficulty}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {activeActivity.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeActivity.description}
              </p>

              {/* Essential Gear Chips */}
              <div className="pt-2">
                <div className="text-xs text-slate-400 font-semibold mb-2">Essential Kit &amp; Rigging:</div>
                <div className="flex flex-wrap gap-2">
                  {activeActivity.essentialGear.map((gear) => (
                    <span
                      key={gear}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200"
                    >
                      <CheckCircle2 className="w-3 h-3 text-secondary-400" />
                      {gear}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Activity Selector List */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                Select Activity to Animate:
              </div>

              {activitiesData.slice(0, 5).map((act, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={act.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 border ${
                      isSelected
                        ? "bg-primary-500/20 border-secondary-400/60 shadow-lg shadow-primary-500/20 translate-x-2"
                        : "bg-slate-900/60 border-white/10 hover:bg-white/5 hover:border-white/20"
                    }`}
                  >
                    {/* Small thumbnail */}
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10">
                      <Image
                        src={act.image}
                        alt={act.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-semibold text-secondary-300 uppercase">
                          {act.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {act.recommendedGauge}
                        </span>
                      </div>
                      <h4
                        className={`text-sm font-bold truncate mt-0.5 ${
                          isSelected ? "text-white" : "text-slate-200"
                        }`}
                      >
                        {act.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {act.recommendedType}
                      </p>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? "text-secondary-400 translate-x-1" : "text-slate-500"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Bottom Activities Link */}
            <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-primary-500/20 to-secondary-400/20 border border-secondary-400/30 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Full Activity Guides</div>
                <div className="text-[11px] text-slate-300">Technical rigging manuals and safety rules</div>
              </div>
              <Link
                href="/activities"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-secondary-400 hover:bg-secondary-300 text-brand-navy shadow-md transition-all"
              >
                View Tab
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
