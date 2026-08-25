"use client";

import { useEffect } from "react";

export function MetaPixelConversion() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      // Fire Meta Schedule standard event for booking conversions
      (window as any).fbq("track", "Schedule");
      (window as any).fbq("track", "Lead");
    }
  }, []);

  return null;
}
