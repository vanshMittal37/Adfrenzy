"use client";

import { useEffect } from "react";

export function MetaPixelConversion() {
  useEffect(() => {
    // Prevent duplicate Lead events on the same page load (e.g., React Strict Mode, re-renders)
    if (typeof window === "undefined" || (window as any).__meta_lead_fired) {
      return;
    }

    const fireLead = () => {
      if (typeof (window as any).fbq === "function") {
        if (!(window as any).__meta_lead_fired) {
          (window as any).__meta_lead_fired = true;
          (window as any).fbq("track", "Lead");
        }
        return true;
      }
      return false;
    };

    // Attempt to fire immediately if fbq stub is ready
    if (fireLead()) return;

    // Retry periodically if Meta Pixel SDK (fbq) is still loading
    const interval = setInterval(() => {
      if (fireLead()) {
        clearInterval(interval);
      }
    }, 100);

    // Timeout safety to clean up after 10s
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return null;
}

