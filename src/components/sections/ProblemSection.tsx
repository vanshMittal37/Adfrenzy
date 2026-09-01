import { RefreshCw, TrendingDown, EyeOff, Search } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      num: "01",
      title: "Creative goes stale before it gets replaced",
      desc: "Your winner carried the account for six weeks. Then it died. And the next batch is still \"in edit.\" CPMs don't wait for your production calendar.",
      icon: RefreshCw
    },
    {
      num: "02",
      title: "Every extra rupee costs more than the last",
      desc: "Spend goes up. Revenue doesn't follow. Nobody is watching contribution margin, so the scale looks like growth right up to the day it isn't.",
      icon: TrendingDown
    },
    {
      num: "03",
      title: "You pay for traffic your website then loses",
      desc: "Slow mobile store. Confusing PDP. A checkout that asks for too much. You bought the click. The site gave it away.",
      icon: EyeOff
    },
    {
      num: "04",
      title: "You're invisible where people search",
      desc: "People see the ad, then Google your brand. What they find is a thin site and no reviews. That gap costs you more sales than any bidding mistake.",
      icon: Search
    }
  ];

  return (
    <section className="py-28 bg-background border-b border-border-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-accent/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full font-bold">
            THE REAL PROBLEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
            Growth doesn't break in the ad account. It breaks between the{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              pieces
            </span>
            .
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Media blames creative. Creative blames the site. The site was built by someone who left last year. Nobody owns the number at the end. So you keep paying more for the same customer.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="relative bg-[var(--card-bg)] border border-[var(--card-border)] shadow-[var(--card-shadow)] p-6 sm:p-8 rounded-[20px] flex flex-col justify-between group problem-card overflow-hidden"
              >
                <div className="absolute -right-20 -top-20 w-44 h-44 bg-accent/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl sm:text-3xl font-extrabold text-accent tracking-tighter">
                      {prob.num}
                    </span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--card-icon-bg)] text-[var(--card-icon-color)] flex items-center justify-center border border-[var(--card-border)] group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-3 tracking-wide group-hover:text-accent transition-colors duration-300 leading-snug">
                    {prob.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
