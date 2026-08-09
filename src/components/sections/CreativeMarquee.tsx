import Image from "next/image";

const marqueeItemsCol1 = [
  { type: "image", url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=500&auto=format&fit=crop", title: "Luxury Product Shoot" },
  { type: "image", url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=500&auto=format&fit=crop", title: "Skincare UGC Reel" },
  { type: "image", url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=500&auto=format&fit=crop", title: "Apparel Motion Graphic" },
  { type: "image", url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=500&auto=format&fit=crop", title: "Shopify Store UI" },
];

const marqueeItemsCol2 = [
  { type: "image", url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop", title: "Klaviyo Email Flow" },
  { type: "image", url: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=500&auto=format&fit=crop", title: "Google Ad Campaign" },
  { type: "image", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop", title: "CRO Landing Page" },
  { type: "image", url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500&auto=format&fit=crop", title: "Fitness Brand Reel" },
];

const marqueeItemsCol3 = [
  { type: "image", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop", title: "Sneaker Ad Creative" },
  { type: "image", url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop", title: "Headphone Product Video" },
  { type: "image", url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop", title: "Smartwatch Ad Campaign" },
  { type: "image", url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=500&auto=format&fit=crop", title: "Social Content Reel" },
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
