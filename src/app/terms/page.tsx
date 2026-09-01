export const metadata = {
  title: "Terms & Conditions — Adfrenzy Media",
  description: "Terms and conditions of service for Adfrenzy Media."
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-neutral-300">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Terms & Conditions</h1>
        <p className="text-xs font-mono text-neutral-400">LAST UPDATED: 2026</p>
        <div className="space-y-4 text-sm leading-relaxed border-t border-white/10 pt-6">
          <p>
            Welcome to Adfrenzy Media. By accessing or using our website and scheduling strategy sessions, you agree to comply with and be bound by these Terms & Conditions.
          </p>
          <h3 className="text-lg font-bold text-white pt-2">1. Strategy Call & Consultations</h3>
          <p>
            Strategy sessions provided by Adfrenzy Media are advisory in nature. Any 90-day growth blueprints or metrics forecasts are estimates based on initial audit data.
          </p>
          <h3 className="text-lg font-bold text-white pt-2">2. Intellectual Property</h3>
          <p>
            All website design, copy, graphics, code, and branding assets belong exclusively to Adfrenzy Media.
          </p>
          <h3 className="text-lg font-bold text-white pt-2">3. Limitation of Liability</h3>
          <p>
            Adfrenzy Media shall not be liable for indirect or consequential damages arising out of site usage or campaign reliance without an executed master services agreement (MSA).
          </p>
        </div>
      </div>
    </div>
  );
}
