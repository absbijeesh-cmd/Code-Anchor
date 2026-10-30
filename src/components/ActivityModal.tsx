"use client";

import React from "react";
import Image from "next/image";
import { X, ShieldCheck, Gauge, CheckCircle2, AlertTriangle, Compass, MessageCircle } from "lucide-react";
import { ActivityItem } from "@/data/activitiesData";

interface ActivityModalProps {
  activity: ActivityItem | null;
  onClose: () => void;
}

export default function ActivityModal({ activity, onClose }: ActivityModalProps) {
  if (!activity) return null;

  const whatsappInquiry = encodeURIComponent(
    `Hello CodeAnchor team! I am planning a project in "${activity.title}" and would like advice on selecting the right ropes (${activity.recommendedGauge}).`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-secondary-400/40 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-brand-navy">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary-400/20 text-secondary-300 border border-secondary-400/30">
              {activity.category}
            </span>
            <span className="text-xs text-slate-400">
              Difficulty: <strong className="text-white">{activity.difficulty}</strong>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 space-y-6 text-slate-200">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <Image
              src={activity.image}
              alt={activity.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-navy/90 text-secondary-300 text-xs font-bold border border-secondary-400/40">
              {activity.badge}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {activity.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {activity.description}
            </p>
          </div>

          {/* Recommended Rope & Gauge Specs */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-secondary-300 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-secondary-400" />
              Recommended Rope &amp; Gauge Calibration
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10">
                <span className="text-slate-400 block text-[11px]">Recommended Diameter</span>
                <span className="font-mono text-base font-bold text-secondary-300">
                  {activity.recommendedGauge}
                </span>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10">
                <span className="text-slate-400 block text-[11px]">Rope Construction</span>
                <span className="font-semibold text-white">
                  {activity.recommendedType}
                </span>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary-400" />
              <span>Safety Factor Guidelines: {activity.safetyFactor}</span>
            </div>
          </div>

          {/* Key Techniques */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-secondary-300 mb-2.5">
              Core Technical Disciplines
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {activity.keyTechniques.map((tech) => (
                <div key={tech} className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                  <Compass className="w-3.5 h-3.5 text-secondary-400 shrink-0" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Essential Gear */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-secondary-300 mb-2.5">
              Recommended Rigging Gear Checklist
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {activity.essentialGear.map((gear) => (
                <span
                  key={gear}
                  className="px-3 py-1 rounded-xl bg-primary-500/20 text-secondary-200 border border-primary-500/30 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary-400" />
                  {gear}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-brand-navy flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10"
          >
            Close Guide
          </button>
          <a
            href={`https://wa.me/15551234567?text=${whatsappInquiry}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consult an Expert on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
