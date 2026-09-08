"use client";

import { useState } from "react";
import Image from "next/image";
import { getApprovedLogos, ClientBrand } from "@/data/clients";

function LogoCard({ client }: { client: ClientBrand }) {
  const [imgError, setImgError] = useState(false);
  // Special dark mode invert check for logos that are black pngs (e.g., theemryostore)
  const isDarkLogo = client.id === "the-emryo-store" || client.logo.includes("dscfacaqcxax");

  return (
    <a
      href={client.website}
      target="_blank"
      rel="noopener noreferrer"
      title={`${client.name} — Official Website`}
      className="client-logo-card flex items-center justify-center px-6 py-4 w-44 sm:w-56 h-20 sm:h-24 rounded-2xl flex-shrink-0 group cursor-pointer bg-[#0e1628]/70 hover:bg-[#131d35] border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 shadow-md hover:shadow-blue-500/10"
    >
      {!imgError ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={client.logo}
            alt={client.logoAlt}
            width={170}
            height={56}
            className={`max-w-[150px] sm:max-w-[170px] max-h-[46px] sm:max-h-[54px] w-auto h-auto object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105 ${
              isDarkLogo ? "brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" : "filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] font-extrabold"
            }`}
            onError={() => setImgError(true)}
            unoptimized={client.logo.startsWith("http")}
          />
        </div>
      ) : (
        <span className="font-mono text-xs sm:text-sm font-bold text-text-secondary group-hover:text-accent tracking-wider uppercase text-center truncate">
          {client.name}
        </span>
      )}
    </a>
  );
}

export function ClientLogoWall() {
  const allLogos = getApprovedLogos();

  return (
    <section className="py-16 sm:py-20 bg-background border-b border-border-subtle overflow-hidden relative" id="work">
      {/* Background Radial Glow for section highlight */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12 space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-extrabold shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          OUR CLIENT PORTFOLIO
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          Brands that <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 bg-clip-text text-transparent italic font-serif">scaled with us</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Trusted by ambitious D2C founders & market leaders generating multi-crore scale.
        </p>
      </div>

      {/* Single Horizontal Strip Marquee Container (Scrolling Right to Left) */}
      <div className="relative w-full overflow-hidden py-4 z-10">
        {/* Edge gradient masks */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-rtl flex flex-nowrap items-center shrink-0 whitespace-nowrap gap-5 sm:gap-7" style={{ width: "max-content" }}>
          {/* Main client logos sequence */}
          {allLogos.map((client, idx) => (
            <LogoCard key={`logo-set1-${client.id}-${idx}`} client={client} />
          ))}
          {/* Exact duplicate set for seamless infinite loop reset */}
          {allLogos.map((client, idx) => (
            <LogoCard key={`logo-set2-${client.id}-${idx}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
