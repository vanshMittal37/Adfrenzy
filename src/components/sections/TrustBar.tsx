import { MetaLogo, GoogleLogo, ShopifyLogo, GoKwikLogo } from "./PartnerLogos";

export interface PartnerBadge {
  name: string;
  logo: React.ComponentType<{ className?: string }>;
  color: string;
  verified: boolean;
}

export function TrustBar() {
  const partnerBadges: PartnerBadge[] = [
    { name: "Meta Business Partner", logo: MetaLogo, color: "text-[#0668E1]", verified: false },
    { name: "Google Partner", logo: GoogleLogo, color: "", verified: false },
    { name: "Shopify Partner", logo: ShopifyLogo, color: "text-[#95BF47]", verified: false },
    { name: "GoKwik", logo: GoKwikLogo, color: "text-amber-400", verified: false }
  ];

  const verifiedBadges = partnerBadges.filter((b) => b.verified);

  if (verifiedBadges.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-surface border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-6 font-bold">
          TRUSTED PARTNERSHIPS
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {verifiedBadges.map((badge, idx) => {
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
