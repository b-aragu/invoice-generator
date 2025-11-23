import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";

export const viewport: Viewport = {
  themeColor: "#0A1F44",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title:
    "PrimeCoat Invoice Generator - Professional Painting Services Invoices | Nairobi Kenya",
  description:
    "Generate professional invoices for PrimeCoat Painting Services. Create detailed quotes and invoices for interior painting, exterior painting, waterproofing, and more in Nairobi, Kenya.",
  keywords: [
    "PrimeCoat invoice",
    "painting invoice Kenya",
    "professional invoice generator",
    "Nairobi painting invoice",
    "contractor invoice",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "PrimeCoat Invoice Generator - Professional Painting Invoices Kenya",
    description:
      "Generate professional invoices for PrimeCoat Painting Services in Nairobi, Kenya. Fast, easy, and branded for your painting business.",
    url: process.env.NEXT_PUBLIC_URL,
    type: "website",
    images: "/og-image.jpeg",
    siteName: "PrimeCoat Invoice Generator",
  },
  twitter: {
    card: "summary_large_image",
    site: "@PrimeCoatKE",
    creator: "@PrimeCoatKE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap" rel="stylesheet" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0A1F44" />
        <meta name="msapplication-TileColor" content="#0A1F44" />
        <meta name="theme-color" content="#0A1F44" />
      </head>
      <body className={`${GeistSans.className}`}>{children}</body>
    </html>
  );
}
