import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import WhatsAppButton from "@/components/ui/WhatsApp";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ogottilaw.co.ke"),

  title: {
    default: "L.A. Ogotti & Associates Advocates",
    template: "%s | L.A. Ogotti & Associates Advocates",
  },

  description:
    "L.A. Ogotti & Associates Advocates is a boutique law firm in Diani Beach, Kenya providing professional legal services across real estate, commercial law, employment, succession, litigation and family law.",

  keywords: [
    "L.A. Ogotti & Associates Advocates",
    "law firm Diani Beach",
    "lawyers Diani Beach",
    "advocates Diani Beach",
    "Kenya lawyers",
    "conveyancing Diani",
    "real estate lawyers Diani",
    "commercial lawyers Kenya",
    "property lawyers Kenya",
  ],

  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "L.A. Ogotti & Associates Advocates",
    title: "L.A. Ogotti & Associates Advocates",
    description:
      "Professional legal services for individuals, families, businesses, property developers, investors and organisations in Kenya.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <LocalBusinessSchema />

        <Header />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
