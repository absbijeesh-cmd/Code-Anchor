"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight, User, Sparkles, X, ChevronRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  summary: string;
  image: string;
  content: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "The Physics of 10.2 mm Static Kernmantle: Why Gauge Precision Matters",
    category: "Materials Science",
    date: "Oct 24, 2026",
    readTime: "5 min read",
    author: "Dr. Elena Vance, Tensile Engineer",
    summary:
      "A deep dive into how 0.1 mm tolerances affect friction cam bite, sheath slippage, and edge-cut durability in high-angle alpine operations.",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=80",
    content: [
      "In critical high-angle rope access and rescue operations, the choice of rope gauge is not merely a question of weight—it dictates the exact friction coefficient through descenders and mechanical ascenders.",
      "Our tests demonstrated that a precise 10.2 mm diameter provides the optimal balance: thick enough to provide high thermal absorption under rapid abseiling friction, yet slender enough to travel without dragging through pulleys and prusiks.",
      "Furthermore, the ultrasonic fused cutting edge prevents the inner core from receding within the outer mantle, ensuring that the anchor knot retains 100% of its rated tensile geometry.",
    ],
  },
  {
    id: "blog-2",
    title: "Anatomy of the Cutting Edge: Sheath Delamination Prevention",
    category: "Field Testing",
    date: "Oct 18, 2026",
    readTime: "7 min read",
    author: "Marcus Lindqvist, SAR Instructor",
    summary:
      "Why traditional hot-knife rope cuts fray under heavy load cycles, and how molecular ultrasonic fused seals revolutionize edge longevity.",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Traditional field cutting of synthetic cordage using butane hot knives often leaves brittle, unbonded polymer beads. Under repetitive bending cycles over carabiners, the outer mantle detaches from the core fibers—a phenomenon known as sheath slippage.",
      "CodeAnchor's ultrasonic end-sealing technique binds the 32 individual sheath carrier strands directly to the outer core bundles at 20 kHz vibrational frequency without thermal brittleness.",
      "In lab fatigue testing, ropes with ultrasonic fused edges survived over 4,000 cycles across sharp granite edges without an millimeter of sheath slippage.",
    ],
  },
  {
    id: "blog-3",
    title: "Buoyancy & Hydrophobia: The Secret to Swiftwater Canyoneering Ropes",
    category: "Hydrology & Adventure",
    date: "Oct 10, 2026",
    readTime: "4 min read",
    author: "Chloe Dubois, Canyoneering Guide",
    summary:
      "Exploring closed-cell polypropylene jackets and hydrophobic core treatments that keep adventure ropes buoyant in swirling hydraulic pools.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Water absorption is the silent enemy of technical ropes: wet nylon ropes can lose up to 15% of their dynamic energy absorption and double in carrying weight.",
      "The HydroShield series combines a low-density polypropylene sheath with dry-infused polyamide core strands, resulting in a rope that floats on surface foam and sheds 95% of absorbed moisture in under five minutes of sun exposure.",
      "This buoyant property drastically reduces the risk of rope entrapment behind submerged boulders and logs in narrow slot canyon waterways.",
    ],
  },
];

export default function BlogSection() {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section className="relative py-24 bg-brand-navy text-white overflow-hidden border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-secondary-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-secondary-400/15 text-secondary-300 border border-secondary-400/30">
              <BookOpen className="w-3.5 h-3.5 text-secondary-400" />
              <span>Animated Technical Journal &amp; Blog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              ROPE SCIENCE &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-primary-300">
                EXPEDITION CHRONICLES
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Insights from our materials laboratory and field test expeditions. Learn the engineering behind
              rope gauges, cutting edge seals, and dynamic load tolerances.
            </p>
          </div>
        </div>

        {/* Animated Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl bg-slate-900/80 border border-white/10 hover:border-secondary-400/50 p-5 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between backdrop-blur-md cursor-pointer"
              onClick={() => setActiveArticle(post)}
            >
              <div>
                {/* Article Image */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-4 border border-white/10">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-brand-navy/90 text-secondary-300 text-xs font-semibold border border-secondary-400/30">
                    {post.category}
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-secondary-400" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-secondary-400" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-secondary-300 transition-colors leading-snug mb-2">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              {/* Author & CTA */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 truncate max-w-[160px]">
                  {post.author}
                </span>

                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-bold text-secondary-400 group-hover:text-white transition-colors"
                >
                  <span>Read Paper</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-secondary-400/40 rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-brand-navy">
                <span className="text-xs font-mono text-secondary-300 uppercase tracking-wider">
                  {activeArticle.category} • {activeArticle.readTime}
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal body */}
              <div className="overflow-y-auto p-6 space-y-4">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-display font-extrabold text-white leading-tight">
                  {activeArticle.title}
                </h3>

                <div className="text-xs text-secondary-300 font-medium">
                  By {activeArticle.author} | Published {activeArticle.date}
                </div>

                <div className="space-y-3 pt-2 text-sm text-slate-300 leading-relaxed">
                  {activeArticle.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Modal footer */}
              <div className="px-6 py-3.5 border-t border-white/10 bg-brand-navy flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-secondary-400 hover:bg-secondary-300 text-brand-navy transition-colors"
                >
                  Done Reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
