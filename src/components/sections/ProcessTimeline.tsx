export function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "Understand your business, customers, unit economics, and growth bottlenecks."
    },
    {
      num: "02",
      title: "STRATEGISE",
      desc: "Build the 90-day growth roadmap and decide what creative & media levers matter most."
    },
    {
      num: "03",
      title: "CREATE",
      desc: "Develop high-velocity video ads, UGC, landing pages, and email lifecycle flows."
    },
    {
      num: "04",
      title: "LAUNCH",
      desc: "Put the work into market fast and collect real-world attribution performance data."
    },
    {
      num: "05",
      title: "LEARN",
      desc: "Analyse customer signal from noise to identify winning hooks and landers."
    },
    {
      num: "06",
      title: "SCALE",
      desc: "Double down on verified winners and continuously compound P&L revenue."
    }
  ];

  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/10" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            HOW WE WORK
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From strategy to execution —{" "}
            <span className="font-serif-italic font-normal italic text-slate-200">
              without unnecessary layers
            </span>
            .
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            No middle managers. No 40-page decks that sit on a shelf. Just senior operators executing around the numbers that move your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card p-8 relative flex flex-col justify-between group hover:border-[#FFE500]/50"
            >
              <div>
                <span className="font-mono text-3xl font-bold text-[#FFE500] mb-4 block">
                  {step.num}
                </span>
                <h3 className="text-xl font-extrabold text-white mb-2 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
                <div className="h-full bg-[#FFE500] w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
