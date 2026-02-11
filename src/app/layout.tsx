import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ZenClean — Specialist Medical & Dental Cleaning | Greater Manchester",
    template: "%s | ZenClean",
  },
  description:
    "Greater Manchester's specialist cleaning company for dental practices, GP surgeries, and medical clinics. CQC compliant, HTM 01-05 certified, transparent pricing.",
  keywords: [
    "medical cleaning Manchester",
    "dental clinic cleaning",
    "healthcare cleaning Greater Manchester",
    "CQC compliant cleaning",
    "HTM 01-05 cleaning",
    "GP surgery cleaning",
    "surgical cleaning Manchester",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://zenclean.co.uk",
    siteName: "ZenClean",
    title: "ZenClean — Specialist Medical & Dental Cleaning | Greater Manchester",
    description:
      "CQC compliant specialist cleaning for dental practices, GP surgeries, and medical clinics across Greater Manchester.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://zenclean.co.uk"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ZenClean",
              description:
                "Specialist medical and dental clinic cleaning services in Greater Manchester",
              url: "https://zenclean.co.uk",
              telephone: "+44-161-000-0000",
              email: "hello@zenclean.co.uk",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Manchester",
                addressRegion: "Greater Manchester",
                addressCountry: "GB",
              },
              areaServed: {
                "@type": "Place",
                name: "Greater Manchester",
              },
              priceRange: "££",
              serviceType: [
                "Medical Cleaning",
                "Dental Surgery Cleaning",
                "GP Surgery Cleaning",
                "Surgical Clinic Cleaning",
              ],
            }),
          }}
        />
      </head>
      <body className="font-body bg-white text-gray-800 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Sticky mobile CTA */}
        <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-teal-700 border-t border-teal-600 px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
          <div className="text-white text-sm font-medium leading-tight">
            Free cleaning audit<br />
            <span className="text-teal-200 text-xs">No obligation • 24hr response</span>
          </div>
          <a href="/contact" className="shrink-0 bg-white text-teal-800 font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-teal-50 transition-colors">
            Get Quote →
          </a>
        </div>
        {/* Spacer for sticky CTA on mobile */}
        <div className="h-16 sm:hidden" />
      </body>
    </html>
  );
}
