"use client";

import React from "react";
import Link from "next/link";
import {
  Anchor,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-navy text-slate-300 border-t border-secondary/20 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-400 p-0.5 shadow-md">
                <div className="w-full h-full bg-brand-navy rounded-[10px] flex items-center justify-center">
                  <Anchor className="w-5 h-5 text-secondary-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-wider text-white">
                  CODE<span className="text-secondary-400">ANCHOR</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-secondary-300 font-semibold">
                  Technical Rope Systems
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Engineers and weavers of high-modulus Kernmantle ropes. From the 10.2mm Static Nylon Adventure
              Rope to tactical heat-resistant aramid cordage, we deliver zero-compromise security for every
              vertical challenge.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 border border-[#25D366]/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Live Desk</span>
              </a>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-secondary-400" />
                <span>UIAA Certified</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-secondary-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-secondary-400" />
                  <span>Home Landing</span>
                </Link>
              </li>
              <li>
                <Link href="/ropes" className="hover:text-secondary-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-secondary-400" />
                  <span>Ropes Catalog</span>
                </Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-secondary-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-secondary-400" />
                  <span>Activities &amp; Rigging</span>
                </Link>
              </li>
              <li>
                <a href="#section-rope-types" className="hover:text-secondary-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-secondary-400" />
                  <span>Rope Categories</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Rope Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-white">
              Rope Technologies
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ropes" className="hover:text-white transition-colors">
                  10.2mm Static Nylon Adventure
                </Link>
              </li>
              <li>
                <Link href="/ropes" className="hover:text-white transition-colors">
                  9.8mm Apex Dynamic Lead
                </Link>
              </li>
              <li>
                <Link href="/ropes" className="hover:text-white transition-colors">
                  12.0mm OceanGrip Double Braid
                </Link>
              </li>
              <li>
                <Link href="/ropes" className="hover:text-white transition-colors">
                  9.0mm HydroShield Canyoneering
                </Link>
              </li>
              <li>
                <Link href="/ropes" className="hover:text-white transition-colors">
                  11.5mm TechRescue Kevlar
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-white">
              Global Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-secondary-400 mt-0.5 shrink-0" />
                <span>44 Alpine Ridge Way, Boulder, CO 80302, USA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-secondary-400 shrink-0" />
                <span>+1 (800) 555-ROPE (7673)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-secondary-400 shrink-0" />
                <span>engineering@codeanchor-ropes.com</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] text-slate-400">Hours of Operation:</div>
              <div className="text-xs font-medium text-white">Mon – Fri: 08:00 – 18:00 MST</div>
            </div>
          </div>
        </div>

        {/* Safety Warning Notice */}
        <div className="my-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-amber-300">Life-Safety Notice:</strong> Technical climbing, rope rescue,
            canyoneering, and working at height are inherently dangerous activities. Inspect your ropes and cutting
            edges before every use. Immediately retire any rope subjected to severe dynamic impact or sheath abrasion.
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} CodeAnchor Technical Rope Systems Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Tensile Certificate Verification
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              ISO 9001 Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
