import type { Metadata } from "next";
import "./globals.css";
import { exo2, inter } from "@/lib/fonts";
import { business } from "@/lib/business";
import Header from "@/components/Header";
import StickyCallBar from "@/components/StickyCallBar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | Auto Repair & Performance Shop, Dallas GA`,
    template: `%s | ${business.name}`,
  },
  description:
    "Street. Track. Show. The Illest Garage in Dallas, GA handles general repair on European, domestic, and Japanese vehicles, plus performance tuning.",
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${exo2.variable} ${inter.variable}`}>
      <body className="bg-bg text-text antialiased">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        {children}
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
