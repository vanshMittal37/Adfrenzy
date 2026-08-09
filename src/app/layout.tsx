import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalendlyModal } from "@/components/calendly/CalendlyModal";

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
  title: "SparkMedia.ad — Creative & Performance Marketing Agency",
  description: "SparkMedia.ad combines strategy, performance marketing, creative production, CRO, and retention into one growth system built to help ambitious brands scale.",
  openGraph: {
    title: "SparkMedia.ad — Creative × Performance × Growth",
    description: "Integrated growth agency for ambitious brands.",
    url: "https://sparkmedia.ad",
    siteName: "SparkMedia.ad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkMedia.ad — Integrated Growth Agency",
    description: "Creative + Performance + Conversion = Growth",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <body className="bg-[#0A0A0A] text-white antialiased font-sans-primary selection:bg-[#FFE500] selection:text-black">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CalendlyModal />
      </body>
    </html>
  );
}
