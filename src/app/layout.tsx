import { Footer, Header } from "@shared/components/common";
import { ScrollToTop } from "@shared/components/ui";
import { publicEnv } from "@shared/config";
import "@shared/styles/globals.css";
import { cn } from "@shared/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import fhellipyImage from "public/fhellipy.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fhellipy Conceição",
  description: "Documentando minha jornada como desenvolvedor Web Fullstack",
  metadataBase: new URL(publicEnv.NEXT_PUBLIC_HOST_URL),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: [
      {
        url: new URL("/fhellipy.png", publicEnv.NEXT_PUBLIC_HOST_URL).href,
        width: 1200,
        height: 630,
        alt: "Fhellipy Conceição",
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
