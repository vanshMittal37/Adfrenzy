export function ComparisonTable() {
  const comparisonRows = [
    { feature: "Ads, creative and site under one roof", adfrenzy: "Yes", agency: "No", freelancer: "No" },
    { feature: "Owns the growth number, not the channel", adfrenzy: "Yes", agency: "Partial", freelancer: "No" },
    { feature: "Creative volume every week", adfrenzy: "Yes", agency: "Partial", freelancer: "No" },
    { feature: "CRO and website build", adfrenzy: "Yes", agency: "No", freelancer: "Rarely" },
    { feature: "SEO and organic", adfrenzy: "Yes", agency: "No", freelancer: "Rarely" },
    { feature: "Senior attention on your account", adfrenzy: "Yes", agency: "Rarely", freelancer: "Yes" },
    { feature: "Works like part of your team", adfrenzy: "Yes", agency: "Partial", freelancer: "Partial" },
  ];

  const supportingCards = [
    {
      num: "01",
      title: "One Team",
      desc: "Media, creative, landers and search under one roof, aligned to one P&L."
    },
    {
      num: "02",
      title: "Creative Engine",
      desc: "Weekly hook, video and static iterations based on live account signals."
    },
    {
      num: "03",
      title: "Clean Funnels",
      desc: "We fix site drop-offs before scaling ad spend."
    },
    {
      num: "04",
      title: "Senior Attention",
      desc: "Calls end with decisions. Senior lead on every account."
    }
  ];

  return (
    <section className="py-24 bg-background border-b border-border-subtle" id="comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            WHY ADFRENZY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            How we compare to typical options
          </h2>
        </div>

        {/* Comparison Table Container */}
        <div className="glass-card overflow-x-auto rounded-2xl border border-border-subtle mb-6 bg-surface shadow-xl">
          <table className="w-full text-left text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-border-subtle bg-surface-secondary/70">
                <th className="py-5 px-6 font-extrabold text-text-primary">What you get</th>
                <th className="py-5 px-6 font-extrabold text-accent bg-accent/10">Adfrenzy Media</th>
                <th className="py-5 px-6 font-semibold text-text-secondary">Typical Agency</th>
                <th className="py-5 px-6 font-semibold text-text-secondary">In-House / Freelancers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface-secondary/30 transition-colors">
                  <td className="py-4 px-6 font-medium text-text-primary">{row.feature}</td>
                  <td className="py-4 px-6 font-bold text-accent bg-accent/5">{row.adfrenzy}</td>
                  <td className="py-4 px-6 text-text-secondary">{row.agency}</td>
                  <td className="py-4 px-6 text-text-secondary">{row.freelancer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mb-16 font-mono text-xs sm:text-sm text-text-secondary">
          Seven boxes. We&apos;re built to tick all seven.
        </div>

        {/* 4 Supporting Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportingCards.map((card, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-border-subtle space-y-3"
            >
              <h4 className="text-lg font-bold text-text-primary font-mono text-accent">
                {card.title}
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
