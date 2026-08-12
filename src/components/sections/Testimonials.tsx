"use client";

import { useState, useRef } from "react";
import { testimonialsData, Testimonial } from "@/data/testimonials";
import { Quote, Play, Pause } from "lucide-react";

function TestimonialCard({ t }: { t: Testimonial }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div
      className="glass-card p-6 flex flex-col justify-between h-full relative border-t-2 border-t-accent overflow-hidden transition-all duration-300 shadow-lg"
    >
      <div className="flex flex-col space-y-6 flex-grow">
        {/* 1:1 Square Video Container */}
        {t.videoUrl && (
          <div 
            className="relative w-full aspect-square overflow-hidden bg-black rounded-lg border border-border-subtle shadow-md group cursor-pointer"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover object-center block"
            >
              <source src={t.videoUrl} type="video/mp4" />
              Your browser does not support video.
            </video>
            
            {/* Custom Overlay with Yellow Play Button */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/35 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/45">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-[0_0_20px_var(--accent-soft)] transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 fill-current ml-1 text-black" />
                </div>
              </div>
            )}

            {/* Subtle Pause button on hover when playing */}
            {isPlaying && (
              <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-black/20 flex items-center justify-center transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center shadow-lg">
                  <Pause className="w-8 h-8 fill-current text-black" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Testimonial Quote */}
        <div className="flex gap-3 pt-2">
          <Quote className="w-6 h-6 text-accent/30 flex-shrink-0 mt-1" />
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed italic">
            "{t.quote}"
          </p>
        </div>
      </div>

      {/* Footer Details */}
      <div className="pt-4 mt-6 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 z-10 w-full">
        <div>
          <div className="font-bold text-text-primary text-sm sm:text-base">
            {t.authorName}
          </div>
          <div className="text-xs sm:text-sm text-text-secondary font-mono">
            {t.authorTitle} · {t.companyName}
          </div>
        </div>
        {t.metricsHighlight && (
          <span className="bg-accent/10 border border-accent/25 text-accent px-3 py-1 rounded-md text-xs font-mono font-bold whitespace-nowrap self-end sm:self-auto">
            {t.metricsHighlight}
          </span>
        )}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-background border-b border-border-subtle" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
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
            Hear from our clients on how our tailored growth systems and data analysis drive sales.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {testimonialsData.map((t) => (
            <div key={t.id} className="h-full">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
