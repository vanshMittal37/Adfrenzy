import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-16 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center" aria-label="Adfrenzy Media Homepage">
              <img
                src="/Logo_Adfrenzy_dark.png"
                alt="Adfrenzy Media logo"
                width={170}
                height={42}
                className="logo-dark-theme w-[140px] sm:w-[170px] h-auto object-contain"
              />
              <img
                src="/Logo_Adfrenzy_light.png"
                alt="Adfrenzy Media logo"
                width={170}
                height={42}
                className="logo-light-theme w-[140px] sm:w-[170px] h-auto object-contain"
              />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Full-funnel growth partner for D2C brands.
            </p>
            <div className="pt-2 text-xs text-neutral-400 font-mono space-y-1.5">
              <div>cyber city phase 2 , Gurugram</div>
              <div>
                <a
                  href="mailto:hello.adfrenzymedia@gmail.com"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-neutral-400"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <span>hello.adfrenzymedia@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link href="/services/performance-marketing" className="hover:text-white transition-colors">Performance Marketing</Link></li>
              <li><Link href="/services/creative" className="hover:text-white transition-colors">Creative & UGC</Link></li>
              <li><Link href="/services/web-design" className="hover:text-white transition-colors">Website Design</Link></li>
              <li><Link href="/services/cro" className="hover:text-white transition-colors">CRO & Landers</Link></li>
              <li><Link href="/services/seo" className="hover:text-white transition-colors">SEO & Organic</Link></li>
              <li><Link href="/services/strategy" className="hover:text-white transition-colors">Growth Consultation</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link href="/work" className="hover:text-white transition-colors">Work & Case Studies</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights & Guides</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="/results" className="hover:text-white transition-colors">Proven Results</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a
                  href="https://www.instagram.com/adfrenzymedia?igsi=OWRpdHFwOXZpdGs1&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/ad-frenzy-media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello.adfrenzymedia@gmail.com"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <span>Email Us</span>
                </a>
              </li>
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
