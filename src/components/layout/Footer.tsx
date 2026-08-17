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
                src="/Logo_SparkMedia_dark.png"
                alt="SparkMedia logo"
                className="logo-dark-theme w-[140px] sm:w-[170px] h-auto object-contain"
              />
              <img
                src="/Logo_SparkMedia_light.png"
                alt="SparkMedia logo"
                className="logo-light-theme w-[140px] sm:w-[170px] h-auto object-contain"
              />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              An integrated growth and creative agency helping ambitious brands turn attention into measurable, compounding business growth.
            </p>
            <div className="pt-2 text-xs text-neutral-500 font-mono">
              LOCATION: Pune, Maharashtra · EMAIL: Sparkmedia.bs@gmail.com
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">Growth Process</Link></li>
              <li><Link href="/results" className="hover:text-white transition-colors">Results</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link href="/services/performance-marketing" className="hover:text-white transition-colors">Performance Marketing</Link></li>
              <li><Link href="/services/creative" className="hover:text-white transition-colors">Performance Creative</Link></li>
              <li><Link href="/services/cro" className="hover:text-white transition-colors">CRO & Landers</Link></li>
              <li><Link href="/services/web-design" className="hover:text-white transition-colors">Web Design & Dev</Link></li>
              <li><Link href="/services/strategy" className="hover:text-white transition-colors">Growth Strategy</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="mailto:Sparkmedia.bs@gmail.com" className="hover:text-white transition-colors">Sparkmedia.bs@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 SparkMedia. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">Terms & Conditions</Link>
            <Link href="/cookie-policy" className="hover:text-neutral-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
