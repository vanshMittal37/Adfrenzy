"use client";

import { useState, useRef, useEffect } from "react";
import { testimonialsData, Testimonial } from "@/data/testimonials";
import { Quote, Play, ChevronLeft, ChevronRight } from "lucide-react";

function TestimonialCard({ t }: { t: Testimonial }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay on hover blocked or interrupted:", err.message);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => {
        console.log("Play failed:", err.message);
      });
    }
  };

  return (
    <div
      className="glass-card p-4.5 flex flex-col justify-between w-[280px] h-[370px] sm:w-[310px] sm:h-[420px] relative border-t-2 border-t-accent overflow-hidden transition-all duration-300 shadow-md rounded-2xl"
    >
      <div className="flex flex-col space-y-3 flex-grow overflow-hidden">
        {/* Video Container (occupies 60% height) */}
        {t.videoUrl && (
          <div 
            className="relative w-full h-[60%] overflow-hidden bg-black rounded-lg border border-border-subtle shadow-sm group cursor-pointer"
            onClick={togglePlay}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              muted
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover object-center block"
            >
              <source src={t.videoUrl} type="video/mp4" />
              Your browser does not support video.
            </video>
            
            {/* Custom Overlay with Yellow Play Button (only shows when not playing) */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/35 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/45 pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-[0_0_15px_var(--accent-soft)] transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-5 h-5 fill-current ml-0.5 text-black" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Testimonial Quote (made text smaller: text-[11px] sm:text-xs) */}
        <div className="flex gap-2 flex-grow overflow-y-auto no-scrollbar">
          <Quote className="w-4 h-4 text-accent/30 flex-shrink-0 mt-0.5" />
          <p className="text-text-secondary text-[11px] sm:text-xs leading-relaxed italic whitespace-normal">
            {t.quote}
          </p>
        </div>
      </div>

      {/* Footer Details (made text smaller) */}
      <div className="pt-2 mt-2 border-t border-border-subtle flex flex-col justify-between gap-1 z-10 w-full">
        <div className="flex justify-between items-center w-full">
          <div>
            <div className="font-bold text-text-primary text-[11px] sm:text-xs">
              {t.authorName}
            </div>
            <div className="text-[9px] sm:text-[10px] text-text-secondary font-mono">
              {t.authorTitle} · {t.companyName}
            </div>
          </div>
          {t.metricsHighlight && (
            <span className="bg-accent/10 border border-accent/25 text-accent px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-bold whitespace-nowrap">
              {t.metricsHighlight}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 35; // Pixels per second

    const scroll = (time: number) => {
      if (!isHovered && container) {
        const delta = (time - lastTime) / 1000;
        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (currentScroll < maxScroll) {
          container.scrollLeft = currentScroll + speed * delta;
          lastTime = time;
          animationFrameId = requestAnimationFrame(scroll);
        }
      } else {
        lastTime = time;
        animationFrameId = requestAnimationFrame(scroll);
      }
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 310; // card width
      const gap = 24; // gap-6
      const scrollAmount = direction === "left" ? -(cardWidth + gap) : (cardWidth + gap);
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-24 bg-background border-b border-border-subtle overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
              Trusted by brands that{" "}
              <span className="font-serif-italic font-normal italic text-accent">
                scaled with us
              </span>
              .
            </h2>
            <p className="text-text-secondary text-base sm:text-lg">
              Hear from our clients on how our growth systems and data analysis drive sales.
            </p>
          </div>

          {/* Left/Right Click Scroll Buttons */}
          <div className="flex gap-3 justify-center md:justify-end">
            <button
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full border border-border-subtle bg-surface flex items-center justify-center text-text-primary hover:text-accent hover:border-accent transition-all shadow-sm cursor-pointer"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full border border-border-subtle bg-surface flex items-center justify-center text-text-primary hover:text-accent hover:border-accent transition-all shadow-sm cursor-pointer"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative w-full">
          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-4 sm:px-6"
          >
            {testimonialsData.map((t) => (
              <div key={t.id} className="flex-shrink-0">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
