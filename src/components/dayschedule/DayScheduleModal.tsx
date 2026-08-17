"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    daySchedule?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function DayScheduleModal() {
  const dayScheduleUrl = process.env.NEXT_PUBLIC_DAYSCHEDULE_URL || "https://dayschedule.com/sparkmedia/discovery";

  useEffect(() => {
    const handleOpen = () => {
      if (window.daySchedule && typeof window.daySchedule.initPopupWidget === "function") {
        window.daySchedule.initPopupWidget({
          url: dayScheduleUrl,
        });
      } else {
        console.warn("DaySchedule SDK not loaded yet. Retrying in 100ms...");
        setTimeout(handleOpen, 100);
      }
    };

    window.addEventListener("open-dayschedule", handleOpen);
    return () => window.removeEventListener("open-dayschedule", handleOpen);
  }, [dayScheduleUrl]);

  return null;
}
