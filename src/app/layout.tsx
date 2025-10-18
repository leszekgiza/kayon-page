import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import JsonLd from "./schema";
import LanguageProvider from "@/components/LanguageProvider";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kayon-page-9ggodaet3-leszekgs-projects.vercel.app"),
  title: "KAYON - Nowoczesne systemy pomiarowe | Liczniki ciepła i wody",
  description: "Nowoczesne systemy pomiarowe KAYON - liczniki ciepła i wody z zdalnym odczytem. Spełniamy standardy EED 2023/1791. Oszczędność, automatyzacja i pełna kontrola.",
  authors: [{ name: "KAYON" }],
  creator: "KAYON",
  publisher: "KAYON",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://kayon-page-9ggodaet3-leszekgs-projects.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://kayon-page-9ggodaet3-leszekgs-projects.vercel.app",
    title: "KAYON - Nowoczesne systemy pomiarowe",
    description: "Nowoczesne systemy pomiarowe - liczniki ciepła i wody z zdalnym odczytem. Spełniamy standardy EED 2023/1791. Oszczędność, automatyzacja i pełna kontrola.",
    siteName: "KAYON",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "KAYON - Nowoczesne systemy pomiarowe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KAYON - Nowoczesne systemy pomiarowe",
    description: "Nowoczesne systemy pomiarowe - liczniki ciepła i wody z zdalnym odczytem. Spełniamy standardy EED 2023/1791.",
    images: ["/og-image.svg"],
  },
  verification: {
    google: "google-site-verification-code", // TODO: Dodaj kod weryfikacji Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <JsonLd />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
