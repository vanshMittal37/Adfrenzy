"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Sun, Moon } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

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

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  const openDaySchedule = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-dayschedule"));
    }
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#growth-loop" },
    { name: "Results", href: "#results" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b border-border-subtle ${
        isScrolled
          ? "py-3 shadow-xl"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/Logo_Adfrenzy_dark.png"
              alt="Adfrenzy Media logo"
              className="logo-dark-theme w-[140px] sm:w-[165px] h-auto object-contain"
            />
            <img
              src="/Logo_Adfrenzy_light.png"
              alt="Adfrenzy Media logo"
              className="logo-light-theme w-[140px] sm:w-[165px] h-auto object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-text-secondary hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={openDaySchedule}
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-5 py-2.5 text-sm font-bold inline-flex items-center gap-2 cursor-pointer rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Book a Growth Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2.5 text-text-secondary hover:text-text-primary transition-colors bg-white/5 hover:bg-white/10 rounded-full border border-border-subtle cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4 text-text-primary" />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-text-secondary hover:text-text-primary transition-colors bg-white/5 rounded-full border border-border-subtle cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4.5 h-4.5 text-accent" /> : <Moon className="w-4.5 h-4.5 text-text-primary" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-text-secondary hover:text-text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border-subtle px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-text-primary hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openDaySchedule();
              }}
              className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-3 text-center text-sm font-bold inline-flex items-center justify-center gap-2 cursor-pointer rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <span>Book a Growth Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
