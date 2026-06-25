import type { Metadata } from "next";
import { Inter_Tight, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { siteConfig } from "@/lib/constants";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  display: "swap"
});

const interTight = Inter_Tight({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter-tight",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NORD FORM — Modern Modular Architecture",
    template: "%s | NORD FORM"
  },
  description: siteConfig.description,
  openGraph: {
    title: "NORD FORM",
    description: siteConfig.description,
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${interTight.variable}`}>
      <body>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
