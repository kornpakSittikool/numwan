import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Noto_Serif_Thai } from "next/font/google";
import type { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const bodyFont = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
  fallback: ["Segoe UI", "Helvetica Neue", "sans-serif"],
});

const displayFont = Noto_Serif_Thai({
  subsets: ["latin", "thai"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-display",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
