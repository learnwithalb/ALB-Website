import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/shared/LenisProvider";
import { BookingProvider } from "@/components/shared/BookingContext";
import { BookingModal } from "@/components/shared/BookingModal";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Academy of Languages & Beyond | ALB",
    template: "%s | ALB",
  },
  description:
    "ALB is India's premier language & soft skills academy — helping ambitious learners go global through French, German, Spanish, IELTS coaching, and Beyond programmes.",
  keywords: ["French course India", "IELTS coaching", "soft skills", "language academy", "German course"],
  openGraph: {
    siteName: "Academy of Languages & Beyond",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${cormorant.variable}`}>
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
