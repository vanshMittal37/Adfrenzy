"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    daySchedule?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function DayScheduleEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dayScheduleUrl = process.env.NEXT_PUBLIC_DAYSCHEDULE_URL || "https://sparkmedia.dayschedule.com/discovery-call";

  useEffect(() => {
    // Dynamically inject the custom element using standard DOM API
    if (containerRef.current) {
      containerRef.current.innerHTML = ""; // Clear loader
      const widget = document.createElement("dayschedule-widget");
      widget.setAttribute("url", dayScheduleUrl);
      widget.style.width = "100%";
      widget.style.height = "100%";
      widget.style.display = "block";
      containerRef.current.appendChild(widget);
    }
  }, [dayScheduleUrl]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Lock page scroll when hovering over the widget so iframe can scroll freely
    const lockScroll = () => {
      document.body.style.overflow = "hidden";
    };
    const unlockScroll = () => {
      document.body.style.overflow = "";
    };

    wrapper.addEventListener("mouseenter", lockScroll);
    wrapper.addEventListener("mouseleave", unlockScroll);

    // Cleanup: always restore scroll on unmount
    return () => {
      wrapper.removeEventListener("mouseenter", lockScroll);
      wrapper.removeEventListener("mouseleave", unlockScroll);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-xl min-h-[800px] flex items-center justify-center p-4"
    >
      {/* Load DaySchedule Widget Script */}
      <Script
        src="https://cdn.jsdelivr.net/npm/dayschedule-widget@latest/dist/dayschedule-widget.min.js"
        strategy="lazyOnload"
      />

      {/* Inline Embed Widget Component Container */}
      <div
        ref={containerRef}
        className="w-full h-[800px]"
        id="dayschedule-embed-container"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-mono text-text-secondary">Loading Booking Calendar...</p>
        </div>
      </div>
    </div>
  );
}
