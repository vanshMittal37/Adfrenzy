import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DayScheduleModal } from "@/components/dayschedule/DayScheduleModal";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adfrenzymedia.com"),

  title: {
    default: "Adfrenzy Media | Full-Funnel Growth Partner for D2C Brands",
    template: "%s | Adfrenzy Media",
  },

  description:
    "Performance marketing, creative, websites and SEO for D2C brands. 100+ brands, ₹2.4 Cr+ ad spend managed, 8.6x average ROAS.",

  authors: [{ name: "Adfrenzy Media" }],
  creator: "Adfrenzy Media",
  publisher: "Adfrenzy Media",

  alternates: {
    canonical: "https://www.adfrenzymedia.com/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.adfrenzymedia.com/",
    siteName: "Adfrenzy Media",
    title: "Adfrenzy Media | Full-Funnel Growth Partner for D2C Brands",
    description:
      "Performance marketing, creative, websites and SEO for D2C brands.",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Adfrenzy Media",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Adfrenzy Media | Full-Funnel Growth Partner for D2C Brands",
    description:
      "Performance marketing, creative, websites and SEO for D2C brands.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.adfrenzymedia.com/#organization",
  name: "Adfrenzy Media",
  alternateName: ["Ad Frenzy Media", "Ad Frenzy"],
  url: "https://www.adfrenzymedia.com/",
  logo: "https://www.adfrenzymedia.com/Logo_Adfrenzy_dark.png",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.adfrenzymedia.com/#website",
  name: "Adfrenzy Media",
  url: "https://www.adfrenzymedia.com/",
  publisher: {
    "@id": "https://www.adfrenzymedia.com/#organization",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased font-sans-primary selection:bg-[#FFE500] selection:text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        <Script
          src="https://cdn.jsdelivr.net/npm/dayschedule-widget@latest/dist/dayschedule-widget.min.js"
          strategy="lazyOnload"
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <DayScheduleModal />
        <MetaPixel />
      </body>
    </html>
  );
}
