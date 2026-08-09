"use client";

export function CalendlyEmbed() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

  return (
    <div className="w-full bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-xl min-h-[650px] flex items-center justify-center">
      {calendlyUrl.includes("YOUR_ACCOUNT") ? (
        <div className="max-w-md p-8 text-center space-y-4">
          <div className="w-16 h-16 bg-[#FFE500]/10 text-[#FFE500] rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
            ⚡
          </div>
          <h3 className="text-2xl font-bold text-white">Select a Strategy Session Time</h3>
          <p className="text-sm text-neutral-400">
            Set your <code className="text-[#FFE500] bg-black/60 px-2 py-0.5 rounded">NEXT_PUBLIC_CALENDLY_URL</code> environment variable to display your live booking schedule here.
          </p>
        </div>
      ) : (
        <iframe
          src={calendlyUrl}
          className="w-full h-[650px] border-0"
          title="Schedule a strategy call inline"
        />
      )}
    </div>
  );
}
