"use client";

import React from "react";
import Image from "next/image";
import { X, ShieldCheck, Gauge, Layers, Activity, CheckCircle, ExternalLink, MessageCircle } from "lucide-react";
import { RopeItem } from "@/data/ropesData";
import { formatCurrency } from "@/lib/utils";

interface RopeModalProps {
  rope: RopeItem | null;
  onClose: () => void;
}

export default function RopeModal({ rope, onClose }: RopeModalProps) {
  if (!rope) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello CodeAnchor! I am interested in ordering or requesting technical data for: ${rope.name} (${rope.gauge}mm gauge).`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-secondary-400/30 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-brand-navy">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-secondary-400/20 text-secondary-300 border border-secondary-400/30">
              {rope.category} Grade
            </span>
            <span className="text-xs font-mono text-slate-400">
              Gauge: {rope.gauge} mm
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6 text-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image Preview */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <Image
                src={rope.image}
                alt={rope.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-brand-navy/90 text-secondary-300 text-xs font-mono font-bold border border-secondary-400/40">
                {rope.gauge} mm Ø
              </div>
            </div>

            {/* Basic Info & Pricing */}
            <div className="space-y-3">
              <h3 className="text-2xl font-display font-bold text-white leading-tight">
                {rope.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-secondary-400 font-display">
                  {formatCurrency(rope.price)}
                </span>
                <span className="text-xs text-slate-400">/ {rope.length}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {rope.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {rope.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/15 text-slate-300"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-secondary-400" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div className="border-t border-white/10 pt-5">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-secondary-300 mb-3 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-secondary-400" />
              Engineered Specifications
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-slate-400">Diameter Gauge</div>
                <div className="text-base font-bold text-white mt-0.5">{rope.gauge} mm</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-slate-400">Tensile MBS</div>
                <div className="text-base font-bold text-white mt-0.5">{rope.breakingStrength}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-slate-400">Static Elongation</div>
                <div className="text-base font-bold text-white mt-0.5">{rope.elongation}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-slate-400">Sheath Proportion</div>
                <div className="text-base font-bold text-white mt-0.5">{rope.sheathProportion}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-slate-400">Unit Weight</div>
                <div className="text-base font-bold text-white mt-0.5">{rope.weight}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-slate-400">Fiber Composition</div>
                <div className="text-xs font-semibold text-white mt-1 truncate" title={rope.material}>
                  {rope.material}
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Usage */}
          <div className="border-t border-white/10 pt-4">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-secondary-300 mb-2">
              Optimal Field Activities
            </h4>
            <div className="flex flex-wrap gap-2">
              {rope.recommendedFor.map((act) => (
                <span
                  key={act}
                  className="px-3 py-1 rounded-full text-xs bg-primary-500/20 text-secondary-200 border border-primary-500/30 flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-secondary-400" />
                  {act}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-brand-navy flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            Close
          </button>

          <a
            href={`https://wa.me/15551234567?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
