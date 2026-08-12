"use client";

export function ClientLogoWall() {
  const verifiedClients = [
    {
      name: "ZAZU",
      logoUrl: "https://zazu.co.in/cdn/shop/files/Untitled_design_3.png?v=1764053646&width=200",
      siteUrl: "https://zazu.co.in/",
      logoType: "dark",
      scaleClass: "max-h-12"
    },
    {
      name: "FIG Living",
      logoUrl: "https://www.figliving.com/cdn/shop/files/Untitled_180_x_180_px.png?v=1713941090&width=180",
      siteUrl: "https://www.figliving.com/",
      logoType: "dark",
      scaleClass: "max-h-15 scale-140" // Scaled up leaf emblem
    },
    {
      name: "Sanctuary Living",
      logoUrl: "https://sanctuaryliving.in/cdn/shop/files/sancturay_living_15.png?v=1657101120&width=400",
      siteUrl: "https://sanctuaryliving.in/",
      logoType: "dark",
      scaleClass: "max-h-18 scale-120" // Scaled up wordmark
    },
    {
      name: "Kaftanize",
      logoUrl: "https://kaftanize.com/cdn/shop/files/Kaftanize_Logo_1_df55ccd6-087b-4579-8d8a-b93856ee5cdd_880x.png?v=1705323827",
      siteUrl: "https://kaftanize.com/",
      logoType: "light",
      scaleClass: "max-h-12"
    },
    {
      name: "Panila Fashion",
      logoUrl: "https://panilafashion.com/cdn/shop/files/panilalfavico.png?v=1660828140&width=320",
      siteUrl: "https://panilafashion.com/",
      logoType: "dark",
      scaleClass: "max-h-12 scale-125"
    },
    {
      name: "Etiquette Apparel",
      logoUrl: "https://etiquetteapparel.com/cdn/shop/files/logo_1.png?v=1688995559&width=400",
      siteUrl: "https://etiquetteapparel.com/",
      logoType: "dark",
      scaleClass: "max-h-12"
    },
    {
      name: "Bhama Designs",
      logoUrl: "https://www.bhamadesigns.com/cdn/shop/files/pixelcut-export_240x.jpg?v=1719414583",
      siteUrl: "https://www.bhamadesigns.com/",
      logoType: "dark",
      scaleClass: "max-h-12 scale-120"
    },
    {
      name: "IYKA",
      logoUrl: "https://iyka.co.in/cdn/shop/files/logo.png?v=1766933340&width=600",
      siteUrl: "https://iyka.co.in/",
      logoType: "dark",
      scaleClass: "max-h-12"
    },
    {
      name: "The Episode",
      logoUrl: "https://theepisodee.com/cdn/shop/files/THE_EPISODE_logo_page-0001.jpg?v=1739039016",
      siteUrl: "https://theepisodee.com/",
      logoType: "dark",
      scaleClass: "max-h-12"
    },
    {
      name: "Femi9 by AS",
      logoUrl: "https://femi9byas.com/cdn/shop/files/Femine-9_wide_wide_3c349ec4-ea50-4782-9e73-7d6f61d65ce7_270x.png?v=1620664209",
      siteUrl: "https://femi9byas.com/",
      logoType: "dark",
      scaleClass: "max-h-12"
    },
    {
      name: "Fashion Floor India",
      logoUrl: "https://www.fashionfloorindia.com/cdn/shop/files/Logo_707187d2-f8d7-4886-8462-44dfae71a494.png?v=1652873851",
      siteUrl: "https://www.fashionfloorindia.com/",
      logoType: "dark",
      scaleClass: "max-h-12"
    },
    {
      name: "Wild Cherry",
      logoUrl: "https://wildcherry.in/cdn/shop/files/wildcherry_logo.png?crop=center&height=137&v=1675693740&width=584",
      siteUrl: "https://wildcherry.in/",
      logoType: "dark",
      scaleClass: "max-h-12"
    },
    {
      name: "MuddnMe",
      logoUrl: "https://muddnme.com/cdn/shop/files/mnm-desktop-logo_220x.png?v=1734088965",
      siteUrl: "https://muddnme.com/",
      logoType: "dark",
      scaleClass: "max-h-12"
    }
  ];

  return (
    <section className="py-20 bg-background border-b border-border-subtle overflow-hidden" id="work">
      {/* Self-contained CSS rules for responsive logo color inversion based on HTML theme class */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Default: Dark mode rules */
        .logo-filter-dark {
          filter: invert(1) brightness(1.2);
        }
        .logo-filter-light {
          filter: invert(0);
        }

        /* Light mode overrides */
        html.light .logo-filter-dark {
          filter: invert(0);
        }
        html.light .logo-filter-light {
          filter: invert(1) brightness(0.1);
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-sm sm:text-base font-mono uppercase tracking-widest text-text-secondary mb-12">
          Trusted by brands that scaled with us
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
          {verifiedClients.map((client, idx) => (
            <a
              key={idx}
              href={client.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-4 rounded-xl bg-surface border border-border-subtle hover:border-accent hover:shadow-[0_0_20px_var(--accent-soft)] transition-all duration-300 h-24 hover:scale-[1.03]"
              aria-label={`Visit official website of ${client.name}`}
            >
              <img
                src={client.logoUrl}
                alt={`${client.name} logo`}
                className={`max-w-full object-contain transition-all duration-300 ${client.scaleClass} ${
                  client.logoType === "dark" ? "logo-filter-dark" : "logo-filter-light"
                }`}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
