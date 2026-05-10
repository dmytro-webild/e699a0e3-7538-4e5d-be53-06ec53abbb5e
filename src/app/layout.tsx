import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Apex Consulting | Global Tax & Audit Advisory',
  description: 'Leading global consulting firm providing premium tax, audit, real estate, and financial advisory services for modern enterprises.',
  keywords: ["Consulting, Tax Advisory, Audit, Financial Advisory, Strategic Consulting"],
  openGraph: {
    "title": "Apex Consulting",
    "description": "Professional consulting excellence.",
    "siteName": "Apex Consulting",
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image"
  },
};


const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
