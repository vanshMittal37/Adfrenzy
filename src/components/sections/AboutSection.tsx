export function AboutSection() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-white/10" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              We're building the kind of agency we'd{" "}
              <span className="font-serif-italic font-normal italic text-slate-200">
                want to work with
              </span>
              .
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              SparkMedia.ad is a growth and creative agency helping ambitious brands turn attention into measurable business results.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We bring strategy, creative, media, conversion and retention together so every part of the customer journey works toward the same goal. No unnecessary layers. No disconnected teams. Just smart people working together around the numbers that matter.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 font-mono text-xs text-neutral-300">
              <div className="p-3 bg-[#151515] rounded border border-white/10">
                <span className="text-[#FFE500] font-bold block">MODEL:</span>
                Integrated Growth Loop
              </div>
              <div className="p-3 bg-[#151515] rounded border border-white/10">
                <span className="text-[#FFE500] font-bold block">FOCUS:</span>
                Performance & Creative
              </div>
              <div className="p-3 bg-[#151515] rounded border border-white/10">
                <span className="text-[#FFE500] font-bold block">HQ:</span>
                [Global Hub]
              </div>
              <div className="p-3 bg-[#151515] rounded border border-white/10">
                <span className="text-[#FFE500] font-bold block">FOUNDED:</span>
                [2024+]
              </div>
            </div>
          </div>

          {/* Right Column Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 border-l-4 border-l-[#FFE500] space-y-6">
              <h3 className="text-xl font-bold text-white">Our Core Principles</h3>
              <ul className="space-y-4 text-xs text-neutral-300">
                <li className="space-y-1">
                  <span className="text-[#FFE500] font-bold block">01. ACTION OVER DECK</span>
                  <p className="text-neutral-400">We prefer testing in market over endless strategy decks. Speed is a competitive advantage.</p>
                </li>
                <li className="space-y-1">
                  <span className="text-[#FFE500] font-bold block">02. DATA BRIEFS CREATIVE</span>
                  <p className="text-neutral-400">Ad data informs our next video hook, thumbnail, and landing page layout.</p>
                </li>
                <li className="space-y-1">
                  <span className="text-[#FFE500] font-bold block">03. P&L ALIGNMENT</span>
                  <p className="text-neutral-400">We treat your contribution margins and ad budgets with absolute ownership.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
