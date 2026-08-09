export function TrustBar() {
  const platforms = [
    "Meta Ads",
    "Google Ads",
    "Shopify Plus",
    "TikTok Ads",
    "Klaviyo Email",
    "YouTube Ads"
  ];

  return (
    <section className="py-12 bg-[#0D0D0D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
          Built for the platforms that drive modern growth
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className="px-5 py-2.5 rounded-lg bg-[#151515] border border-white/10 text-sm font-semibold text-neutral-200 hover:border-[#FFE500]/50 hover:text-white transition-all cursor-default"
            >
              {platform}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
