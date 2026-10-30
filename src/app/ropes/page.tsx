"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  SlidersHorizontal,
  Gauge,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  Sparkles,
  Info,
  CheckCircle,
} from "lucide-react";
import { ropesData, RopeItem } from "@/data/ropesData";
import { formatCurrency } from "@/lib/utils";
import RopeModal from "@/components/RopeModal";

export default function RopesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGaugeRange, setSelectedGaugeRange] = useState("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "gauge-asc" | "gauge-desc">("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalRope, setModalRope] = useState<RopeItem | null>(null);

  const itemsPerPage = 6;

  const categories = ["All", "Static", "Dynamic", "Marine", "Canyoneering", "Tactical", "Arborist"];
  const gaugeRanges = [
    { label: "All Gauges", value: "All" },
    { label: "Sub-10mm (Fast & Light)", value: "sub-10" },
    { label: "10.0mm - 11.0mm (Flagship & Rescue)", value: "10-11" },
    { label: "11.5mm+ (Heavy Tactical & Rigging)", value: "11.5-plus" },
  ];

  // Filtering and Sorting
  const filteredRopes = useMemo(() => {
    return ropesData
      .filter((rope) => {
        // Search query
        const matchesSearch =
          rope.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          rope.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          rope.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
          rope.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          rope.gauge.toString().includes(searchQuery);

        // Category filter
        const matchesCategory = selectedCategory === "All" || rope.category === selectedCategory;

        // Gauge filter
        let matchesGauge = true;
        if (selectedGaugeRange === "sub-10") {
          matchesGauge = rope.gauge < 10.0;
        } else if (selectedGaugeRange === "10-11") {
          matchesGauge = rope.gauge >= 10.0 && rope.gauge <= 11.0;
        } else if (selectedGaugeRange === "11.5-plus") {
          matchesGauge = rope.gauge >= 11.5;
        }

        return matchesSearch && matchesCategory && matchesGauge;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "gauge-asc") return a.gauge - b.gauge;
        if (sortBy === "gauge-desc") return b.gauge - a.gauge;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [searchQuery, selectedCategory, selectedGaugeRange, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredRopes.length / itemsPerPage) || 1;
  const paginatedRopes = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredRopes.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredRopes, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 320, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-brand-navy text-white pt-28 pb-24">
      {/* Page Header Hero */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-secondary-400/20 text-secondary-300 border border-secondary-400/30">
            <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
            <span>Complete Technical Rope Inventory</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            ENGINEERED ROPES &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-primary-300">
              GAUGE SYSTEMS
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Browse our full spectrum of laboratory-tested ropes. From our flagship{" "}
            <strong className="text-secondary-300">10.2 mm Static Nylon Adventure Rope</strong> to dynamic
            alpine leads and heavy arborist bull lines, each spool is precision calibrated.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-8 p-4 sm:p-6 rounded-3xl bg-slate-900/90 border border-secondary-400/30 backdrop-blur-xl shadow-2xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by rope name, 10.2mm, static, dynamic, price..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-slate-950/80 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary-400/50"
              />
            </div>

            {/* Gauge Filter */}
            <div className="md:col-span-4">
              <select
                value={selectedGaugeRange}
                onChange={(e) => {
                  setSelectedGaugeRange(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-slate-950/80 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-secondary-400/50 cursor-pointer"
              >
                {gaugeRanges.map((g) => (
                  <option key={g.value} value={g.value} className="bg-slate-900 text-white">
                    {g.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-950/80 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-secondary-400/50 cursor-pointer"
              >
                <option value="featured" className="bg-slate-900 text-white">Sort: Featured Ropes</option>
                <option value="price-asc" className="bg-slate-900 text-white">Price: Low to High</option>
                <option value="price-desc" className="bg-slate-900 text-white">Price: High to Low</option>
                <option value="gauge-asc" className="bg-slate-900 text-white">Gauge: Thin to Thick</option>
                <option value="gauge-desc" className="bg-slate-900 text-white">Gauge: Thick to Thin</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none">
            <span className="text-xs text-slate-400 font-semibold mr-1 shrink-0">Discipline:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-secondary-400 text-brand-navy font-bold shadow-md"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Ropes Listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results summary bar */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
          <div>
            Showing <strong className="text-white">{filteredRopes.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}</strong> -{" "}
            <strong className="text-white">
              {Math.min(currentPage * itemsPerPage, filteredRopes.length)}
            </strong>{" "}
            of <strong className="text-secondary-300">{filteredRopes.length}</strong> certified ropes
          </div>
          <div>
            Page <strong className="text-white">{currentPage}</strong> of <strong className="text-white">{totalPages}</strong>
          </div>
        </div>

        {/* Empty state */}
        {paginatedRopes.length === 0 && (
          <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-white/10 p-8">
            <Info className="w-10 h-10 text-secondary-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No matching ropes found</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Try adjusting your gauge range, category filters, or search keywords.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedGaugeRange("All");
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-secondary-400 text-brand-navy"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {paginatedRopes.map((rope) => (
            <div
              key={rope.id}
              className="group rounded-3xl bg-slate-900/90 border border-white/10 hover:border-secondary-400/50 p-5 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between backdrop-blur-md overflow-hidden relative"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-4 border border-white/10">
                  <Image
                    src={rope.image}
                    alt={rope.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Gauge Chip */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-navy/90 text-secondary-300 border border-secondary-400/40 text-xs font-mono font-bold flex items-center gap-1.5 shadow-md">
                    <Gauge className="w-3.5 h-3.5 text-secondary-400" />
                    <span>{rope.gauge} mm Ø</span>
                  </div>

                  {/* Category Chip */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white border border-white/15">
                    {rope.category}
                  </div>

                  {/* Breaking Strength Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-mono text-secondary-300 font-bold">
                      {rope.breakingStrength}
                    </span>
                    <span className="text-[11px] text-slate-300">
                      {rope.weight}
                    </span>
                  </div>
                </div>

                {/* Rope Name & Price */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-secondary-300 transition-colors leading-tight">
                    {rope.name}
                  </h3>
                </div>

                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl font-black text-secondary-400 font-display">
                    {formatCurrency(rope.price)}
                  </span>
                  <span className="text-xs text-slate-400">/ {rope.length}</span>
                </div>

                <p className="text-xs text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
                  {rope.description}
                </p>

                {/* Specs Details Grid */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/10 text-[11px]">
                  <div className="bg-white/5 p-2 rounded-xl">
                    <span className="text-slate-400 block text-[10px]">Static Stretch</span>
                    <span className="font-semibold text-slate-200">{rope.elongation}</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl">
                    <span className="text-slate-400 block text-[10px]">Sheath Cover</span>
                    <span className="font-semibold text-slate-200">{rope.sheathProportion}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 flex items-center justify-between border-t border-white/10">
                <span className="text-[11px] text-slate-400">
                  {rope.certifications[0]}
                </span>

                <button
                  onClick={() => setModalRope(rope)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-primary-500 hover:bg-primary-600 text-white shadow-md transition-all active:scale-95"
                >
                  View Details &amp; Gauge
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
            <div className="text-xs text-slate-400">
              Showing page <strong className="text-white">{currentPage}</strong> of{" "}
              <strong className="text-white">{totalPages}</strong>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNumber = idx + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                      currentPage === pageNumber
                        ? "bg-secondary-400 text-brand-navy shadow-md scale-105"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <RopeModal rope={modalRope} onClose={() => setModalRope(null)} />
    </div>
  );
}
