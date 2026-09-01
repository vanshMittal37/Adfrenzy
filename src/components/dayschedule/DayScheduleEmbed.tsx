"use client";

import { useEffect, useState } from "react";

export function DayScheduleEmbed() {
  const [dayScheduleUrl, setDayScheduleUrl] = useState<string>("");

  useEffect(() => {
    setDayScheduleUrl(process.env.NEXT_PUBLIC_DAYSCHEDULE_URL || "");
  }, []);

  if (!dayScheduleUrl) {
    return (
      <div className="p-12 text-center border border-border-subtle rounded-2xl glass-card text-text-secondary font-mono text-sm">
        [Calendly / WhatsApp link placeholder - Please configure NEXT_PUBLIC_DAYSCHEDULE_URL]
      </div>
    );
  }

  return (
    <div
      className="dayschedule-widget inline-body min-w-[320px] h-[650px] w-full border border-border-subtle rounded-2xl overflow-hidden"
      data-url={dayScheduleUrl}
    />
  );
}
