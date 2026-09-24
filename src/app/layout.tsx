import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/shared/LenisProvider";
import { BookingProvider } from "@/components/shared/BookingContext";
import { BookingModal } from "@/components/shared/BookingModal";
import { BrochureProvider } from "@/components/shared/BrochureContext";
import { BrochureModal } from "@/components/shared/BrochureModal";
import { EdmingleProvider } from "@/components/EdmingleProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Google Tag Manager container ID.
const GTM_ID = "GTM-MFT5GTLM";

// Primary body font — Inter (variable, all weights), wired to --font-sans.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Online foreign language courses with free soft-skills | ALB",
    template: "%s | ALB",
  },
  description:
    "Academy of Languages and Beyond offers online foreign language courses with live classes, regular speaking sessions | Free online soft-skills certification",
  keywords: ["French course India", "IELTS coaching", "soft skills", "language academy", "German course"],
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Academy of Languages and Beyond",
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* Google Tag Manager — inline in <head> as Google specifies */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Global structured data — Organization + WebSite (E-E-A-T signals) */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {/* Edmingle Login SDK — global iframe + jQuery + signup-sdk.js */}
        <EdmingleProvider />
        <BookingProvider>
          <BrochureProvider>
            <LenisProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </LenisProvider>
            <BookingModal />
            <BrochureModal />
          </BrochureProvider>
        </BookingProvider>
      </body>
    </html>
  );
}
