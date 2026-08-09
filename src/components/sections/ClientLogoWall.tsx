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
    <section className="py-16 bg-[#0D0D0D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-8">
          Trusted by ambitious brands across D2C, E-Commerce & Tech
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {dummyClients.map((client, idx) => (
            <div
              key={idx}
              className="py-4 px-3 rounded-lg bg-[#151515] border border-white/10 text-xs font-mono text-neutral-300 font-semibold flex items-center justify-center hover:border-[#FFE500]/40 transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
