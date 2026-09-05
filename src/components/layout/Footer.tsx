import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-16 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center">
              <img
                src="/Logo_Adfrenzy_dark.png"
                alt="Adfrenzy Media logo"
                className="logo-dark-theme w-[140px] sm:w-[170px] h-auto object-contain"
              />
              <img
                src="/Logo_Adfrenzy_light.png"
                alt="Adfrenzy Media logo"
                className="logo-light-theme w-[140px] sm:w-[170px] h-auto object-contain"
              />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Full-funnel growth partner for D2C brands.
            </p>
            <div className="pt-2 text-xs text-neutral-400 font-mono space-y-1">
              <div>[Address], Meerut, Uttar Pradesh</div>
              <div>E: [email]</div>
              <div>P: [phone]</div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#services" className="hover:text-white transition-colors">Performance Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Creative & UGC</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Website Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">CRO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SEO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Growth Consultation</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Results</a></li>
              <li><a href="#book-a-call" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Adfrenzy Media. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
