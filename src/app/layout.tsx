import { Footer, Header } from "@shared/components/common";
import { ScrollToTop } from "@shared/components/ui";
import "@shared/styles/globals.css";
import { cn } from "@shared/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import fhellipyImage from "public/fhellipy.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fhellipy Conceição",
  description: "Documentando minha jornada como desenvolvedor Web Fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href={fhellipyImage.src} type="image/png" />
      </head>
      <body className={cn("bg-background", inter.className)}>
        <Header />
        {children}
        <Footer />

        <ScrollToTop />
      </body>
    </html>
  );
}
