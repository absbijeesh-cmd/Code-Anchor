"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor, Menu, X, ShieldCheck, ChevronRight, PhoneCall } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Ropes", href: "/ropes" },
    { name: "Activities", href: "/activities" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-navy/90 backdrop-blur-md border-b border-secondary/20 shadow-lg py-3"
          : "bg-brand-navy/70 backdrop-blur-sm border-b border-white/10 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo + Company Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-400 p-0.5 shadow-md shadow-primary-500/30 group-hover:shadow-secondary/50 transition-all duration-300">
              <div className="w-full h-full bg-brand-navy rounded-[10px] flex items-center justify-center">
                <Anchor className="w-6 h-6 text-secondary-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-wider text-white flex items-center gap-1.5">
                CODE<span className="text-secondary-400">ANCHOR</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-secondary-300 font-medium">
                High-Tensile Rope Works
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "text-brand-navy bg-secondary-400 shadow-md shadow-secondary-400/20"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-primary-900/40 border border-primary-500/30 px-3 py-1.5 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-secondary-400" />
              <span>UIAA & CE EN 1891 Certified</span>
            </div>

            <Link
              href="/ropes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-md shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-200 border border-primary-400/30"
            >
              <span>Explore Ropes</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-400"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-navy/95 backdrop-blur-xl border-b border-secondary/20 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    active
                      ? "bg-secondary-400 text-brand-navy font-bold"
                      : "text-slate-200 hover:bg-white/10"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs text-slate-300 px-2 py-1">
              <ShieldCheck className="w-4 h-4 text-secondary-400" />
              <span>Tested to UIAA & CE Safety Standards</span>
            </div>
            <Link
              href="/ropes"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-xl font-semibold bg-primary-500 hover:bg-primary-600 text-white text-sm shadow-md"
            >
              View Ropes Catalogue
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
