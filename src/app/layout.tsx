import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DayScheduleModal } from "@/components/dayschedule/DayScheduleModal";
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
  metadataBase: new URL("https://sparkmediabs.com"),

  title: {
    default: "SparkMedia | Performance Marketing & Creative Agency",
    template: "%s | SparkMedia",
  },

  description:
    "SparkMedia is a performance marketing and creative agency helping e-commerce brands grow through paid media, high-converting creative, CRO, and growth strategy.",

  keywords: [
    "performance marketing agency",
    "creative marketing agency",
    "ecommerce marketing agency",
    "performance marketing",
    "Meta ads agency",
    "Google ads agency",
    "TikTok ads agency",
    "performance creative",
    "UGC ads",
    "CRO agency",
    "landing page optimization",
    "Shopify marketing agency",
    "ecommerce growth",
    "paid media agency",
    "digital marketing agency Pune",
    "marketing agency Pune",
    "SparkMedia",
  ],

  authors: [{ name: "SparkMedia" }],
  creator: "SparkMedia",
  publisher: "SparkMedia",

  alternates: {
    canonical: "https://sparkmediabs.com",
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
    url: "https://sparkmediabs.com",
    siteName: "SparkMedia",
    title: "SparkMedia | Performance Marketing & Creative Agency",
    description:
      "Creative, performance marketing, CRO and growth strategy for ambitious e-commerce brands.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SparkMedia — Performance Marketing & Creative Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SparkMedia | Performance Marketing & Creative Agency",
    description:
      "Creative, performance marketing, CRO and growth strategy for ambitious e-commerce brands.",
    images: ["/og-image.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sparkmediabs.com/#organization",
  name: "SparkMedia",
  url: "https://sparkmediabs.com/",
  logo: "https://sparkmediabs.com/icon.png",
  email: "Sparkmedia.bs@gmail.com",
  description:
    "SparkMedia is a creative and performance marketing agency helping ambitious e-commerce brands grow through paid media, creative production, CRO and growth strategy.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sparkmediabs.com/#website",
  name: "SparkMedia",
  url: "https://sparkmediabs.com/",
  publisher: {
    "@id": "https://sparkmediabs.com/#organization",
  },
};
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://sparkmediabs.com/#localbusiness",

  name: "SparkMedia",

  url: "https://sparkmediabs.com/",

  logo: "https://sparkmediabs.com/icon.png",

  image: "https://sparkmediabs.com/og-image.jpg",

  email: "Sparkmedia.bs@gmail.com",

  description:
    "SparkMedia is a creative and performance marketing agency helping ambitious e-commerce brands grow through paid media, creative production, CRO and growth strategy.",

  address: {
    "@type": "PostalAddress",
    streetAddress: "REAL STREET ADDRESS",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "REAL PIN CODE",
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
      </body>
    </html>
  );
}
