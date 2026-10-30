"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Gauge,
  Shield,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Search,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  SlidersHorizontal,
} from "lucide-react";
import { activitiesData, ActivityItem } from "@/data/activitiesData";
import ActivityModal from "@/components/ActivityModal";

export default function ActivitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalActivity, setModalActivity] = useState<ActivityItem | null>(null);

  const itemsPerPage = 4; // 4 rich detailed cards per page

  const categories = ["All", "Mountaineering", "Canyoneering", "Rescue", "Marine", "Arborist", "Tactical"];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced", "Expert Only"];

  // Filtered activities
  const filteredActivities = useMemo(() => {
    return activitiesData.filter((act) => {
      const matchesSearch =
        act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.recommendedGauge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.recommendedType.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat = selectedCategory === "All" || act.category === selectedCategory;
      const matchesDiff = selectedDifficulty === "All" || act.difficulty === selectedDifficulty;

      return matchesSearch && matchesCat && matchesDiff;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage) || 1;
  const paginatedActivities = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredActivities.slice(start, start + itemsPerPage);
  }, [filteredActivities, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 320, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-brand-navy text-white pt-28 pb-24">
      {/* Page Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-secondary-400/20 text-secondary-300 border border-secondary-400/30">
            <Compass className="w-3.5 h-3.5 text-secondary-400" />
            <span>Field Rigging &amp; Adventure Pursuits</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            ROPE ACTIVITIES &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-primary-300">
              RIGGING GUIDELINES
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every vertical discipline requires specific cordage engineering. Discover proper rope gauge
            recommendations, tensile safety factors, and equipment checklists for high-risk mountain, water,
            tactical, and industrial applications.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-8 p-4 sm:p-6 rounded-3xl bg-slate-900/90 border border-secondary-400/30 backdrop-blur-xl shadow-2xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search activities (e.g., rescue, climbing, 10.2mm, canyoneering)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-slate-950/80 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary-400/50"
              />
            </div>

            {/* Difficulty Filter */}
            <div className="md:col-span-6">
              <select
                value={selectedDifficulty}
                onChange={(e) => {
                  setSelectedDifficulty(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-slate-950/80 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-secondary-400/50 cursor-pointer"
              >
                {difficulties.map((diff) => (
                  <option key={diff} value={diff} className="bg-slate-900 text-white">
                    {diff === "All" ? "All Difficulty Levels" : `Difficulty: ${diff}`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none">
            <span className="text-xs text-slate-400 font-semibold mr-1 shrink-0">Environment:</span>
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

      {/* Main Activities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results summary bar */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
          <div>
            Showing <strong className="text-white">{filteredActivities.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}</strong> -{" "}
            <strong className="text-white">
              {Math.min(currentPage * itemsPerPage, filteredActivities.length)}
            </strong>{" "}
            of <strong className="text-secondary-300">{filteredActivities.length}</strong> activity disciplines
          </div>
          <div>
            Page <strong className="text-white">{currentPage}</strong> of <strong className="text-white">{totalPages}</strong>
          </div>
        </div>

        {/* Empty state */}
        {paginatedActivities.length === 0 && (
          <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-white/10 p-8">
            <AlertCircle className="w-10 h-10 text-secondary-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No activities found</h3>
            <p className="text-xs text-slate-400 mt-1">
              Try adjusting your search criteria or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedDifficulty("All");
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-secondary-400 text-brand-navy"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Activity Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paginatedActivities.map((act) => (
            <div
              key={act.id}
              className="group rounded-3xl bg-slate-900/90 border border-white/10 hover:border-secondary-400/50 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between backdrop-blur-md overflow-hidden relative"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 border border-white/10">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-navy/90 text-secondary-300 border border-secondary-400/30 text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
                    <span>{act.badge}</span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white border border-white/15">
                    {act.category}
                  </div>

                  {/* Gauge callout */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-mono text-secondary-300 font-bold flex items-center gap-1">
                      <Gauge className="w-3.5 h-3.5 text-secondary-400" />
                      Rec. Gauge: {act.recommendedGauge}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-slate-200">
                      {act.difficulty}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-secondary-300 transition-colors leading-snug">
                  {act.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                  {act.description}
                </p>

                {/* Recommended Cordage info box */}
                <div className="mt-4 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-[11px]">Recommended Cordage:</span>
                    <span className="font-bold text-secondary-300">{act.recommendedType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-[11px]">Safety Factor:</span>
                    <span className="text-slate-200">{act.safetyFactor}</span>
                  </div>
                </div>

                {/* Essential gear preview tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {act.essentialGear.slice(0, 3).map((gear) => (
                    <span
                      key={gear}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10"
                    >
                      {gear}
                    </span>
                  ))}
                  {act.essentialGear.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-secondary-300">
                      +{act.essentialGear.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/ropes"
                  className="text-xs text-secondary-300 hover:text-white underline underline-offset-4"
                >
                  Find Matching Ropes
                </Link>

                <button
                  onClick={() => setModalActivity(act)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-primary-500 hover:bg-primary-600 text-white shadow-md transition-all active:scale-95"
                >
                  <span>Inspect Rigging Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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

      {/* Modal */}
      <ActivityModal
        activity={modalActivity}
        onClose={() => setModalActivity(null)}
      />
    </div>
  );
}
