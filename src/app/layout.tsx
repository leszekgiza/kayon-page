import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAYON - Nowoczesne systemy pomiarowe",
  description: "W świecie, w którym technologia nadaje tempo zmianom, przewagę zyskują ci, którzy dysponują nią wcześniej.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
