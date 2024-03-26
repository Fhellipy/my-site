import { ScrollToTop } from "@shared/components/ui";
import "@shared/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fhellipy - Portfolio",
  description: "Documentando minha jornada como desenvolvedor fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon?<generated>" type="image/png" />
      </head>
      <body className={inter.className}>
        {children}

        <ScrollToTop />
      </body>
    </html>
  );
}
