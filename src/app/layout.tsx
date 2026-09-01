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
  weight: ["400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adfrenzymedia.com"),

  title: {
    default: "Adfrenzy Media | Full-Funnel Growth Partner for D2C Brands",
    template: "%s | Adfrenzy Media",
  },

  description:
    "Performance marketing, creative, websites and SEO for D2C brands. 100+ brands, ₹2.4 Cr+ ad spend managed, 8.6x average ROAS.",

  keywords: [
    "Adfrenzy Media",
    "full funnel growth partner",
    "performance marketing agency",
    "D2C growth partner",
    "performance creative agency",
    "Meta ads agency",
    "Google ads agency",
    "UGC ads",
    "CRO agency",
    "landing page optimization",
    "Shopify marketing agency",
    "e-commerce growth agency",
    "SEO agency for D2C",
  ],

  authors: [{ name: "Adfrenzy Media" }],
  creator: "Adfrenzy Media",
  publisher: "Adfrenzy Media",

  alternates: {
    canonical: "https://adfrenzymedia.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://adfrenzymedia.com",
    siteName: "Adfrenzy Media",
    title: "Adfrenzy Media | Full-Funnel Growth Partner for D2C Brands",
    description:
      "Performance marketing, creative, websites and SEO for D2C brands. 100+ brands, ₹2.4 Cr+ ad spend managed, 8.6x average ROAS.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adfrenzy Media — Full-Funnel Growth Partner for D2C Brands",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Adfrenzy Media | Full-Funnel Growth Partner for D2C Brands",
    description:
      "Performance marketing, creative, websites and SEO for D2C brands. 100+ brands, ₹2.4 Cr+ ad spend managed, 8.6x average ROAS.",
    images: ["/og-image.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://adfrenzymedia.com/#organization",
  name: "Adfrenzy Media",
  url: "https://adfrenzymedia.com/",
  logo: "https://adfrenzymedia.com/icon.png",
  email: "[email]",
  description:
    "Performance marketing, creative, websites and SEO for D2C brands. 100+ brands, ₹2.4 Cr+ ad spend managed, 8.6x average ROAS.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Meerut",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://adfrenzymedia.com/#website",
  name: "Adfrenzy Media",
  url: "https://adfrenzymedia.com/",
  publisher: {
    "@id": "https://adfrenzymedia.com/#organization",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://adfrenzymedia.com/#localbusiness",
  name: "Adfrenzy Media",
  url: "https://adfrenzymedia.com/",
  logo: "https://adfrenzymedia.com/icon.png",
  image: "https://adfrenzymedia.com/og-image.jpg",
  email: "[email]",
  description:
    "Performance marketing, creative, websites and SEO for D2C brands. 100+ brands, ₹2.4 Cr+ ad spend managed, 8.6x average ROAS.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[Address]",
    addressLocality: "Meerut",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} scroll-smooth`} data-scroll-behavior="smooth">
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/dayschedule-widget@latest/dist/dayschedule-widget.min.js"
          strategy="beforeInteractive"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/dayschedule-widget@latest/dist/dayschedule-popup.css"
          rel="stylesheet"
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
