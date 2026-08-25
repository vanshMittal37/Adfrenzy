import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Calendar, Sparkles } from "lucide-react";
import { MetaPixelConversion } from "@/components/analytics/MetaPixelConversion";

export const metadata: Metadata = {
  title: "Thank You — Booking Confirmed",
  description:
    "Your strategy call with SparkMedia has been successfully scheduled. We look forward to speaking with you.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#0A0A0A] text-white min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      <MetaPixelConversion />
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,200,0,0.12)_0%,transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
        {/* Animated Success Badge Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/30 text-[#FFE500] shadow-[0_0_50px_rgba(255,200,0,0.2)]">
          <CheckCircle className="w-10 h-10 stroke-[2.5]" />
        </div>

        {/* Header content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/25 text-[11px] font-mono tracking-widest text-[#FFE500] uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BOOKING CONFIRMED</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Thank you for booking a{" "}
            <span className="font-serif-italic font-normal italic text-[#FFE500]">
              strategy call
            </span>
            .
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg max-w-lg mx-auto font-normal leading-relaxed">
            Your meeting has been successfully scheduled. We look forward to speaking with you.
          </p>
        </div>

        {/* Information card */}
        <div className="glass-card p-6 sm:p-8 border-[#FFE500]/20 rounded-2xl bg-[#141416] text-left max-w-md mx-auto space-y-4 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#FFE500]/10 border border-[#FFE500]/20 text-[#FFE500] shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">What happens next?</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                A calendar invitation with meeting details and video call link has been dispatched to your email address.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Homepage Button */}
        <div className="pt-4">
          <Link
            href="/"
            className="btn-yellow px-8 py-4 text-base font-extrabold inline-flex items-center justify-center gap-2.5 rounded-full cursor-pointer hover:scale-[1.02] transition-transform"
          >
            <span>Back to SparkMedia</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
