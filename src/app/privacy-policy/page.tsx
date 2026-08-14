export const metadata = {
  title: "Privacy Policy — SparkMedia.ad",
  description: "Privacy policy and data protection practices at SparkMedia.ad."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-neutral-300">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
        <p className="text-xs font-mono text-neutral-400">LAST UPDATED: 2026</p>
        <div className="space-y-4 text-sm leading-relaxed border-t border-white/10 pt-6">
          <p>
            SparkMedia.ad ("we", "our", or "us") values your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website (sparkmedia.ad) or interact with our services.
          </p>
          <h3 className="text-lg font-bold text-white pt-2">1. Information We Collect</h3>
          <p>
            We collect information provided directly by you when filling out lead intake forms, booking strategy calls via Calendly, or contacting us via email. This includes your name, work email, phone number, company website, and marketing budget preferences.
          </p>
          <h3 className="text-lg font-bold text-white pt-2">2. How We Use Information</h3>
          <p>
            We use your information strictly to provide growth strategy consultations, respond to inquiries, process booking schedules, and deliver performance marketing insights. We do not sell your personal data to third parties.
          </p>
          <h3 className="text-lg font-bold text-white pt-2">3. Cookies & Analytics</h3>
          <p>
            We utilize standard web analytics (Google Analytics, Meta Pixel) to track site interaction and optimize user experience. You can modify your browser settings to disable cookies if desired.
          </p>
          <h3 className="text-lg font-bold text-white pt-2">4. Contact Us</h3>
          <p>
            For questions regarding this privacy policy, please contact us at <a href="mailto:Sparkmedia.bs@gmail.com" className="text-[#FFE500] underline">Sparkmedia.bs@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
