"use client";

import { useState } from "react";
import Image from "next/image";
import { getApprovedLogos, ClientBrand } from "@/data/clients";

function LogoCard({ client }: { client: ClientBrand }) {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={client.website}
      target="_blank"
      rel="noopener noreferrer"
      title={`${client.name} — Official Website`}
      className="client-logo-card flex items-center justify-center px-5 py-3.5 w-36 sm:w-44 h-16 sm:h-20 rounded-2xl flex-shrink-0 group cursor-pointer"
    >
      {!imgError ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={client.logo}
            alt={client.logoAlt}
            width={140}
            height={48}
            className="max-w-[130px] sm:max-w-[140px] max-h-[38px] sm:max-h-[44px] w-auto h-auto object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105"
            onError={() => setImgError(true)}
            unoptimized={client.logo.startsWith("http")}
          />
        </div>
      ) : (
        <span className="font-mono text-xs font-bold text-text-secondary group-hover:text-accent tracking-wider uppercase text-center truncate">
          {client.name}
        </span>
      )}
    </a>
  );
}

export function ClientLogoWall() {
  const allLogos = getApprovedLogos();

  return (
    <section className="py-14 bg-background border-b border-border-subtle overflow-hidden" id="work">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
          CLIENTS
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
          Brands that scaled with us
        </h2>
        <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto">
          Trusted by ambitious D2C brands building for the long term.
        </p>
      </div>

      {/* Single Horizontal Strip Marquee Container (Scrolling Right to Left) */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Edge gradient masks */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-rtl flex flex-nowrap items-center shrink-0 whitespace-nowrap gap-4 sm:gap-6" style={{ width: "max-content" }}>
          {/* Main 20 unique client logos sequence */}
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
