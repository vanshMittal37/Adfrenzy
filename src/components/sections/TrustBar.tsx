import { MetaLogo, GoogleLogo, ShopifyLogo, GoKwikLogo } from "./PartnerLogos";

export function TrustBar() {
  const partnerBadges = [
    { name: "Meta Business Partner", logo: MetaLogo, color: "text-[#0668E1]" },
    { name: "Google Partner", logo: GoogleLogo, color: "" },
    { name: "Shopify Partner", logo: ShopifyLogo, color: "text-[#95BF47]" },
    { name: "GoKwik Partner", logo: GoKwikLogo, color: "text-amber-400" }
  ];

  return (
    <section className="py-12 bg-surface border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-6 font-bold">
          TRUSTED PARTNERSHIPS
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {partnerBadges.map((badge, idx) => {
            const LogoComponent = badge.logo;
            return (
              <div
                key={idx}
                className="px-5 py-2.5 rounded-xl bg-surface-secondary/70 border border-border-subtle hover:border-accent/40 transition-all duration-300 text-xs sm:text-sm font-semibold text-text-primary flex items-center gap-3 shadow-sm hover:scale-105"
              >
                <LogoComponent className={`w-5 h-5 ${badge.color}`} />
                <span>{badge.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
