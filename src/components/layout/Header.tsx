"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export function Header() {
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

  const openCalendly = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-calendly"));
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white group">
            <span className="w-3 h-3 bg-[#FFE500] rounded-sm group-hover:scale-125 transition-transform" />
            <span>Spark<span className="text-[#FFE500]">Media</span>.ad</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <Link href="/work" className="hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/process" className="hover:text-white transition-colors">
              Process
            </Link>
            <Link href="/results" className="hover:text-white transition-colors">
              Results
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Desktop Call CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={openCalendly}
              className="btn-yellow px-5 py-2.5 text-sm inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4 text-base font-medium text-neutral-300">
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors py-1"
            >
              Work
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors py-1"
            >
              Services
            </Link>
            <Link
              href="/process"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors py-1"
            >
              Process
            </Link>
            <Link
              href="/results"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors py-1"
            >
              Results
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors py-1"
            >
              About
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors py-1"
            >
              FAQ
            </Link>
          </nav>
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCalendly();
              }}
              className="w-full btn-yellow py-3 text-center text-sm font-bold inline-flex items-center justify-center gap-2"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
