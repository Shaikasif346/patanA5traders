import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { company } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.patana5traders.com"),
  title: {
    default: "PatanA5Traders | Import & Export Company in India",
    template: "%s | PatanA5Traders"
  },
  description: company.description,
  keywords: [
    "PatanA5Traders",
    "India import export company",
    "rice exporter India",
    "spices exporter India",
    "fresh fruits exporter",
    "vegetables export",
    "international logistics"
  ],
  authors: [{ name: company.name }],
  openGraph: {
    title: "PatanA5Traders - Connecting India to Global Markets",
    description: company.description,
    url: "https://www.patana5traders.com",
    siteName: company.name,
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PatanA5Traders",
    description: company.description
  },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    google: "AI6_OV-rM48HPsWkQuhrPnPT5FqLzETAwbnNQnMspHI"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b2447"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
