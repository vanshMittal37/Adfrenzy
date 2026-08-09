"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-calendly", handleOpen);
    return () => window.removeEventListener("open-calendly", handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0A0A]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#FFE500] rounded-full" />
            <h3 className="text-white font-bold text-lg">Book Your Growth Strategy Call</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content iframe / fallback */}
        <div className="h-[600px] w-full bg-[#111111] flex flex-col items-center justify-center p-6 text-center">
          {calendlyUrl.includes("YOUR_ACCOUNT") ? (
            <div className="max-w-md space-y-4">
              <div className="w-12 h-12 bg-[#FFE500]/10 text-[#FFE500] rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                📅
              </div>
              <h4 className="text-xl font-bold text-white">Calendly Integration Configured</h4>
              <p className="text-sm text-neutral-400">
                To connect your live booking calendar, set the <code className="text-[#FFE500] bg-black/50 px-2 py-1 rounded">NEXT_PUBLIC_CALENDLY_URL</code> environment variable in your deployment environment.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-yellow px-6 py-2.5 text-sm font-bold mt-2"
              >
                Close Window
              </button>
            </div>
          ) : (
            <iframe
              src={calendlyUrl}
              className="w-full h-full border-0"
              title="Schedule a strategy call"
            />
          )}
        </div>
      </div>
    </div>
  );
}
