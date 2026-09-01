export const metadata = {
  title: "Cookie Policy — Adfrenzy Media",
  description: "Cookie policy and tracking details for Adfrenzy Media."
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-neutral-300">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Cookie Policy</h1>
        <p className="text-xs font-mono text-neutral-400">LAST UPDATED: 2026</p>
        <div className="space-y-4 text-sm leading-relaxed border-t border-white/10 pt-6">
          <p>
            Adfrenzy Media uses cookies and tracking technologies to optimize site performance, remember user preferences, and measure website traffic analytics.
          </p>
          <h3 className="text-lg font-bold text-white pt-2">Types of Cookies Used</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Essential Cookies:</strong> Necessary for core site navigation and form submission.</li>
            <li><strong>Analytics Cookies:</strong> Help us analyze traffic sources and popular page visits via Google Analytics.</li>
            <li><strong>Marketing Cookies:</strong> Allow us to measure ad campaign performance across platforms like Meta and Google.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
