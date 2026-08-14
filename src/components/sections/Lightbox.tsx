"use client";

import { useState, useEffect } from "react";
import { Maximize2, X } from "lucide-react";

interface LightboxProps {
  src: string;
  alt: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionDesc: string;
}

export function Lightbox({ src, alt, sectionEyebrow, sectionTitle, sectionDesc }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="space-y-6 pt-10 border-t border-border-subtle">
      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold block">
          {sectionEyebrow}
        </span>
        <h3 className="text-2xl font-bold text-text-primary">
          {sectionTitle}
        </h3>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          {sectionDesc}
        </p>
      </div>

      <div 
        onClick={() => setIsOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-xl border border-border-subtle bg-surface-secondary shadow-lg hover:shadow-accent-soft/20 hover:border-accent transition-all duration-300"
      >
        <div className="relative w-full overflow-hidden">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-auto object-contain transform group-hover:scale-[1.01] transition-transform duration-500"
          />
        </div>
        
        {/* Subtle hover overlay hint */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-background/90 backdrop-blur border border-accent/30 text-accent font-mono text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            <Maximize2 className="w-3.5 h-3.5 text-accent" />
            <span>Click to Zoom</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setIsOpen(false)}
        >
          {/* Close button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 z-50 p-2 bg-surface hover:bg-surface-secondary text-text-primary hover:text-accent rounded-full border border-border-subtle transition-colors cursor-pointer shadow-md"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Large Image wrapper to prevent clicks on it from closing modal */}
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg border border-border-subtle shadow-2xl"
            />
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center text-xs font-mono text-text-secondary whitespace-nowrap">
              {sectionTitle}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
