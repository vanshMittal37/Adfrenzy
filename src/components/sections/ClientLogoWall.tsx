export function ClientLogoWall() {
  const dummyClients = [
    "[D2C APPAREL]",
    "[BEAUTY BRAND]",
    "[HOME DECOR]",
    "[WELLNESS LABS]",
    "[JEWELRY CO]",
    "[FITNESS STUDIO]",
    "[FOOD & BEV]",
    "[SOCIETY & TECH]"
  ];

  return (
    <section className="py-16 bg-background border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-8">
          Trusted by ambitious brands across D2C, E-Commerce & Tech
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {dummyClients.map((client, idx) => (
            <div
              key={idx}
              className="py-4 px-3 rounded-lg bg-surface border border-border-subtle text-xs font-mono text-text-primary font-semibold flex items-center justify-center hover:border-accent/40 transition-all duration-300 shadow-sm hover:scale-[1.02]"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
