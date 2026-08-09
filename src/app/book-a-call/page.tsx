import { CalendlyEmbed } from "@/components/calendly/CalendlyEmbed";

export const metadata = {
  title: "Book a Strategy Call — SparkMedia.ad",
  description: "Select a convenient time on our calendar to discuss your brand's growth levers."
};

export default function BookACallPage() {
  return (
    <div className="pt-32 pb-24 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            SCHEDULE A SESSION
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Pick a time that{" "}
            <span className="font-serif-italic font-normal italic text-slate-200">
              works for you
            </span>
            .
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg max-w-xl mx-auto">
            Let's analyze your current performance marketing, creative pipeline, and conversion bottlenecks together.
          </p>
        </div>

        <CalendlyEmbed />
      </div>
    </div>
  );
}
