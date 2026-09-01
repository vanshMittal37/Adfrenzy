export function TrustBar() {
  const partnerBadges = [
    { name: "Meta Business Partner", isConfirmed: false },
    { name: "Google Partner", isConfirmed: false },
    { name: "Shopify Partner", isConfirmed: false },
    { name: "GoKwik Partner", isConfirmed: false }
  ];

  return (
    <section className="py-12 bg-[#0D0D0D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
          Trusted partner
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {partnerBadges.map((badge, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-lg bg-[#151515] border border-white/10 text-xs sm:text-sm font-semibold text-neutral-300 flex items-center gap-2"
            >
              <span>{badge.name}</span>
              {!badge.isConfirmed && (
                <span className="text-[9px] font-mono text-neutral-500 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                  [Placeholder]
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
