"use client";

export interface ClientLogo {
  name: string;
  isPlaceholder?: boolean;
}

export function ClientLogoWall() {
  // Configurable data-driven client logo list as specified in section 8
  const clientLogos: ClientLogo[] = [
    { name: "Brand Logo 1", isPlaceholder: true },
    { name: "Brand Logo 2", isPlaceholder: true },
    { name: "Brand Logo 3", isPlaceholder: true },
    { name: "Brand Logo 4", isPlaceholder: true },
    { name: "Brand Logo 5", isPlaceholder: true },
    { name: "Brand Logo 6", isPlaceholder: true },
    { name: "Brand Logo 7", isPlaceholder: true },
    { name: "Brand Logo 8", isPlaceholder: true },
  ];

  return (
    <section className="py-16 bg-background border-b border-border-subtle overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h3 className="text-sm sm:text-base font-mono uppercase tracking-widest text-text-secondary">
          Brands that scaled with us
        </h3>
      </div>

      {/* Data-driven Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-background/0 z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-background/0 z-10 pointer-events-none" />

        <div className="animate-marquee-rtl flex gap-6">
          {/* First loop set */}
          {clientLogos.map((client, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="flex items-center justify-center p-4 w-44 h-20 rounded-2xl bg-surface border border-border-subtle flex-shrink-0"
            >
              <span className="font-mono text-xs font-bold text-text-secondary tracking-wider uppercase">
                [{client.name}]
              </span>
            </div>
          ))}
          {/* Second loop set for continuous loop */}
          {clientLogos.map((client, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="flex items-center justify-center p-4 w-44 h-20 rounded-2xl bg-surface border border-border-subtle flex-shrink-0"
            >
              <span className="font-mono text-xs font-bold text-text-secondary tracking-wider uppercase">
                [{client.name}]
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
