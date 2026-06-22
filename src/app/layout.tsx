import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { siteConfig } from "@/lib/constants";

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
    <html lang="ru">
      <body>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
