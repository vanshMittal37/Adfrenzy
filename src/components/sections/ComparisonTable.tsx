import { Check, X } from "lucide-react";

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
      title: "8.6x average ROAS",
      desc: "Not a best-month screenshot. The average across the accounts we run."
    },
    {
      title: "Full access, always",
      desc: "Your ad account, your pixel, your data. Real-time dashboard, weekly calls, nothing gatekept."
    },
    {
      title: "Senior people on your account",
      desc: "You talk to the person making the decisions, not an account manager relaying them."
    },
    {
      title: "No lock-in",
      desc: "We earn next month with this month's work. The results keep us in the room, not a clause."
    }
  ];

  return (
    <section className="py-24 bg-background border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            WHY ADFRENZY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            A media agency runs your ads. A freelancer runs one channel.{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              We own the outcome
            </span>
            .
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="glass-card overflow-x-auto border border-border-subtle rounded-2xl mb-12">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-border-subtle bg-surface-secondary">
                <th className="p-5 sm:p-6 text-xs sm:text-sm font-bold text-text-primary uppercase tracking-wider w-2/5">
                  Capability / Approach
                </th>
                <th className="p-5 sm:p-6 text-xs sm:text-sm font-extrabold text-accent uppercase tracking-wider bg-accent/10 text-center w-1/5 border-x border-accent/20">
                  Adfrenzy
                </th>
                <th className="p-5 sm:p-6 text-xs sm:text-sm font-semibold text-text-secondary uppercase tracking-wider text-center w-1/5">
                  Media agency
                </th>
                <th className="p-5 sm:p-6 text-xs sm:text-sm font-semibold text-text-secondary uppercase tracking-wider text-center w-1/5">
                  Freelancer
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle text-xs sm:text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-text-primary/[0.02] transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-text-primary">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-center font-bold text-accent bg-accent/5 border-x border-accent/10">
                    {row.adfrenzy}
                  </td>
                  <td className="p-4 sm:p-5 text-center text-text-secondary">
                    {row.agency}
                  </td>
                  <td className="p-4 sm:p-5 text-center text-text-secondary">
                    {row.freelancer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mb-16 font-mono text-xs sm:text-sm text-text-secondary">
          Seven boxes. We're built to tick all seven.
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
