"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export function DayScheduleModal() {
  const [dayScheduleUrl, setDayScheduleUrl] = useState<string>("");

  useEffect(() => {
    setDayScheduleUrl(process.env.NEXT_PUBLIC_DAYSCHEDULE_URL || "");

    const handleOpen = () => {
      const url = process.env.NEXT_PUBLIC_DAYSCHEDULE_URL;
      if (url && typeof (window as any).daySchedule === "object") {
        (window as any).daySchedule.initPopupWidget({
          url: url
        });
      } else if (url) {
        window.open(url, "_blank");
      } else {
        const el = document.getElementById("book-a-call");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("open-dayschedule", handleOpen);
    return () => window.removeEventListener("open-dayschedule", handleOpen);
  }, []);

  return null;
}
