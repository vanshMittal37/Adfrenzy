export function AboutSection() {
  return (
    <section className="py-24 bg-background border-b border-border-subtle text-text-primary transition-colors duration-300" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
              We&apos;re building the kind of agency we&apos;d{" "}
              <span className="font-serif-italic font-normal italic text-slate-200 underline decoration-accent/30 decoration-wavy decoration-2">
                want to work with
              </span>
              .
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Adfrenzy Media is a full-funnel growth partner helping ambitious D2C brands turn attention into measurable business results.
            </p>
            <p className="text-text-secondary/70 text-sm leading-relaxed">
              We bring strategy, creative, media, conversion and retention together so every part of the customer journey works toward the same goal. No unnecessary layers. No disconnected teams. Just smart people working together around the numbers that matter.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 font-mono text-xs text-text-secondary">
              <div className="p-3 bg-surface rounded border border-border-subtle">
                <span className="text-accent font-bold block">MODEL:</span>
                Integrated Growth Loop
              </div>
              <div className="p-3 bg-surface rounded border border-border-subtle">
                <span className="text-accent font-bold block">FOCUS:</span>
                Performance & Creative
              </div>
              <div className="p-3 bg-surface rounded border border-border-subtle">
                <span className="text-accent font-bold block">HQ:</span>
                Meerut, UP
              </div>
              <div className="p-3 bg-surface rounded border border-border-subtle">
                <span className="text-accent font-bold block">FOCUS:</span>
                D2C Scale
              </div>
            </div>
          </div>

          {/* Right Column Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 border-l-4 border-l-accent space-y-6 bg-surface border border-border-subtle rounded-r-2xl rounded-l-md shadow-md">
              <h3 className="text-xl font-bold text-text-primary">Our Core Principles</h3>
              <ul className="space-y-4 text-xs text-text-secondary">
                <li className="space-y-1">
                  <span className="text-accent font-bold block">01. ACTION OVER DECK</span>
                  <p className="text-text-secondary/80">We prefer testing in market over endless strategy decks. Speed is a competitive advantage.</p>
                </li>
                <li className="space-y-1">
                  <span className="text-accent font-bold block">02. DATA BRIEFS CREATIVE</span>
                  <p className="text-text-secondary/80">Ad data informs our next video hook, thumbnail, and landing page layout.</p>
                </li>
                <li className="space-y-1">
                  <span className="text-accent font-bold block">03. P&L ALIGNMENT</span>
                  <p className="text-text-secondary/80">We treat your contribution margins and ad budgets with absolute ownership.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
