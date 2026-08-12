"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function LeadQualificationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    revenue: "Under ₹10L",
    spend: "Under ₹50K",
    helpWith: [] as string[],
    challenge: ""
  });

  const handleHelpToggle = (val: string) => {
    setFormData((prev) => {
      const exists = prev.helpWith.includes(val);
      return {
        ...prev,
        helpWith: exists
          ? prev.helpWith.filter((item) => item !== val)
          : [...prev.helpWith, val]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-calendly"));
    }
  };

  return (
    <div className="glass-card p-6 sm:p-8 max-w-2xl mx-auto border-accent/20 shadow-xl rounded-2xl text-text-primary transition-all duration-300">
      {submitted ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
          <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
          <h3 className="text-xl font-bold text-text-primary">Details Received</h3>
          <p className="text-xs sm:text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
            Opening your calendar booking schedule now...
          </p>
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("open-calendly"));
              }
            }}
            className="btn-yellow px-5 py-2 text-xs font-extrabold mt-3 rounded-full"
          >
            Open Booking Calendar
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="text-center space-y-1.5 mb-6">
            <h3 className="text-xl font-bold text-text-primary">Strategy Call Intake</h3>
            <p className="text-[10px] font-mono text-text-secondary tracking-wider uppercase">
              Help us understand your brand to maximize our strategy session
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-extrabold text-text-secondary uppercase mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-surface-secondary border border-border-subtle rounded-xl px-3.5 py-2 text-xs sm:text-sm text-text-primary focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold text-text-secondary uppercase mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@company.com"
                className="w-full bg-surface-secondary border border-border-subtle rounded-xl px-3.5 py-2 text-xs sm:text-sm text-text-primary focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-extrabold text-text-secondary uppercase mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Brand Co."
                className="w-full bg-surface-secondary border border-border-subtle rounded-xl px-3.5 py-2 text-xs sm:text-sm text-text-primary focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold text-text-secondary uppercase mb-1">
                Website / Store URL *
              </label>
              <input
                type="text"
                required
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="www.brand.com"
                className="w-full bg-surface-secondary border border-border-subtle rounded-xl px-3.5 py-2 text-xs sm:text-sm text-text-primary focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-extrabold text-text-secondary uppercase mb-1">
                Monthly Revenue
              </label>
              <select
                value={formData.revenue}
                onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                className="w-full bg-surface-secondary border border-border-subtle rounded-xl px-3.5 py-2 text-xs sm:text-sm text-text-primary focus:border-accent focus:outline-none"
              >
                <option value="Under ₹10L">Under ₹10L</option>
                <option value="₹10L–₹50L">₹10L – ₹50L</option>
                <option value="₹50L–₹1Cr">₹50L – ₹1Cr</option>
                <option value="₹1Cr+">₹1Cr+</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-extrabold text-text-secondary uppercase mb-1">
                Monthly Ad Spend
              </label>
              <select
                value={formData.spend}
                onChange={(e) => setFormData({ ...formData, spend: e.target.value })}
                className="w-full bg-surface-secondary border border-border-subtle rounded-xl px-3.5 py-2 text-xs sm:text-sm text-text-primary focus:border-accent focus:outline-none"
              >
                <option value="Under ₹50K">Under ₹50K</option>
                <option value="₹50K–₹2L">₹50K – ₹2L</option>
                <option value="₹2L–₹5L">₹2L – ₹5L</option>
                <option value="₹5L+">₹5L+</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-extrabold text-text-secondary uppercase mb-2">
              What do you need help with?
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                "Performance Marketing",
                "Creative",
                "Social Media",
                "CRO",
                "Website",
                "Email/SMS",
                "Full Growth"
              ].map((opt) => {
                const isSelected = formData.helpWith.includes(opt);
                return (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => handleHelpToggle(opt)}
                    className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold transition-all border cursor-pointer ${
                      isSelected
                        ? "bg-accent text-background border-accent"
                        : "bg-surface-secondary text-text-secondary border-border-subtle hover:border-accent/40"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-extrabold text-text-secondary uppercase mb-1">
              Biggest Marketing Challenge
            </label>
            <textarea
              rows={3}
              value={formData.challenge}
              onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
              placeholder="Tell us what is currently blocking your growth..."
              className="w-full bg-surface-secondary border border-border-subtle rounded-xl px-3.5 py-2 text-xs sm:text-sm text-text-primary focus:border-accent focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full btn-yellow py-3 text-xs sm:text-sm font-extrabold inline-flex items-center justify-center gap-2 cursor-pointer rounded-full"
          >
            <span>Continue to Booking Schedule</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </button>
        </form>
      )}
    </div>
  );
}
