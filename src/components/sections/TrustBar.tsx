import { MetaLogo, GoogleLogo, ShopifyLogo, GoKwikLogo, BiteSpeedLogo } from "./PartnerLogos";

export interface PartnerBadge {
  id: string;
  name: string;
  logo: React.ComponentType<{ className?: string }>;
  color: string;
  badgeBg: string;
  verified: boolean;
}

export function TrustBar() {
  const partnerBadges: PartnerBadge[] = [
    { id: "meta", name: "Meta Business Partner", logo: MetaLogo, color: "text-[#0668E1]", badgeBg: "hover:border-[#0668E1]/40 hover:shadow-[#0668E1]/10", verified: true },
    { id: "google", name: "Google Partner", logo: GoogleLogo, color: "", badgeBg: "hover:border-blue-400/40 hover:shadow-blue-500/10", verified: true },
    { id: "shopify", name: "Shopify Partner", logo: ShopifyLogo, color: "text-[#95BF47]", badgeBg: "hover:border-[#95BF47]/40 hover:shadow-[#95BF47]/10", verified: true },
    { id: "gokwik", name: "GoKwik Partner", logo: GoKwikLogo, color: "text-amber-400", badgeBg: "hover:border-amber-400/40 hover:shadow-amber-500/10", verified: true },
    { id: "bitespeed", name: "BiteSpeed Partner", logo: BiteSpeedLogo, color: "text-purple-400", badgeBg: "hover:border-purple-400/40 hover:shadow-purple-500/10", verified: true }
  ];

  return (
    <section className="py-8 sm:py-10 bg-[#080c16] border-b border-border-subtle overflow-hidden relative" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-5">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-bold">
          TRUSTED SCALE PARTNERS
        </p>
      </div>

      {/* Interactive Strip Container */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Edge Gradient Mask */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#080c16] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#080c16] to-transparent z-10 pointer-events-none" />

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-4">
          {partnerBadges.map((badge) => {
            const LogoComponent = badge.logo;
            return (
              <div
                key={badge.id}
                className={`px-5 py-3 rounded-2xl bg-[#0f172a]/90 border border-slate-800/80 ${badge.badgeBg} transition-all duration-300 text-xs sm:text-sm font-semibold text-text-primary flex items-center gap-3 shadow-md hover:scale-105 group cursor-default`}
              >
                <LogoComponent className={`w-5 h-5 ${badge.color} transition-transform duration-300 group-hover:scale-110`} />
                <span className="tracking-wide font-medium group-hover:text-white transition-colors">{badge.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

