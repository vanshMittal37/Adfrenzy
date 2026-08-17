import Image from "next/image";

const marqueeItemsCol1 = [
  { type: "image", url: "/assets/kaftanize.jpeg", title: "Kaftanize Fashion Campaign" },
  { type: "image", url: "/assets/fashionfloorindia.jpeg", title: "Fashion Floor India Catalog" },
  { type: "image", url: "/assets/figLiving.jpeg", title: "FIG Living Design Curation" },
  { type: "image", url: "/assets/iyka.jpeg", title: "IYKA Minimalist Apparel" },
];

const marqueeItemsCol2 = [
  { type: "image", url: "/assets/panillafashion.jpeg", title: "Panilla Fashion Visual Ad" },
  { type: "image", url: "/assets/sanctuaryliving.jpeg", title: "Sanctuary Living Portfolio" },
  { type: "image", url: "/assets/theepisode.jpeg", title: "The Episode Brand Motion" },
  { type: "image", url: "/assets/wildcherry.jpeg", title: "Wild Cherry Direct Response" },
];

const marqueeItemsCol3 = [
  { type: "image", url: "/assets/muddnme.jpeg", title: "MuddnMe Lifestyle Web" },
  { type: "image", url: "/assets/etiquetteapperel.jpeg", title: "Etiquette Apparel Strategy" },
  { type: "image", url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600", title: "Aura Premium Watch" },
  { type: "image", url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600", title: "Sonic Over-Ear Headphones" },
];

export function CreativeMarquee() {
  return (
    <section className="py-12 bg-[#0A0A0A] overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          LIVE WORK PREVIEW · HIGH-VELOCITY CREATIVE WALL
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto h-[480px] overflow-hidden mask-linear-gradient">
        {/* Top/Bottom Gradient Overlay Masks */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-full">
          {/* Column 1 (Scrolls Upward) */}
          <div className="flex flex-col gap-6 animate-rise-up">
            {[...marqueeItemsCol1, ...marqueeItemsCol1].map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden border border-white/10 group bg-[#151515] flex-none aspect-[3/4]"
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-semibold text-white bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 (Scrolls Downward) */}
          <div className="hidden sm:flex flex-col gap-6 animate-rise-down">
            {[...marqueeItemsCol2, ...marqueeItemsCol2].map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden border border-white/10 group bg-[#151515] flex-none aspect-[3/4]"
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-semibold text-white bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 (Scrolls Upward) */}
          <div className="hidden md:flex flex-col gap-6 animate-rise-up">
            {[...marqueeItemsCol3, ...marqueeItemsCol3].map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden border border-white/10 group bg-[#151515] flex-none aspect-[3/4]"
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-semibold text-white bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
