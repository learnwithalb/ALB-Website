import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/shared/LenisProvider";
import { BookingProvider } from "@/components/shared/BookingContext";
import { BookingModal } from "@/components/shared/BookingModal";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Online foreign language courses with free soft-skills | ALB",
    template: "%s | ALB",
  },
  description:
    "Academy of Languages and Beyond offers online foreign language courses with live classes, regular speaking sessions | Free online soft-skills certification",
  keywords: ["French course India", "IELTS coaching", "soft skills", "language academy", "German course"],
  openGraph: {
    siteName: "Academy of Languages and Beyond",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cormorant.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
        />
      </head>
      <body className="font-sans antialiased">
        <BookingProvider>
          <LenisProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LenisProvider>
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
