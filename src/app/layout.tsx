import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "KAYON - Nowoczesne systemy pomiarowe | Liczniki ciepła i wody",
  description: "Nowoczesne systemy pomiarowe KAYON - liczniki ciepła i wody z zdalnym odczytem. Spełniamy standardy EED 2023/1791. Oszczędność, automatyzacja i pełna kontrola.",
  keywords: ["systemy pomiarowe", "liczniki ciepła", "liczniki wody", "zdalny odczyt", "KAYON", "EED 2023/1791", "oszczędność energii"],
  authors: [{ name: "KAYON" }],
  creator: "KAYON",
  publisher: "KAYON",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://kayon.pl",
    title: "KAYON - Nowoczesne systemy pomiarowe",
    description: "Nowoczesne systemy pomiarowe - liczniki ciepła i wody z zdalnym odczytem. Spełniamy standardy EED 2023/1791.",
    siteName: "KAYON",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAYON - Nowoczesne systemy pomiarowe",
    description: "Nowoczesne systemy pomiarowe - liczniki ciepła i wody z zdalnym odczytem.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
