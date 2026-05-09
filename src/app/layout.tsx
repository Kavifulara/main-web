import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { Noto_Sans_Devanagari } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const noto = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
});

export const metadata: Metadata = {
  title: "BAKFiG - Elegance • Style • Fashion",
  description: "Your premium destination for men's, women's, and kids' fashion. Discover elegance and style at BAKFiG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>
) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505] text-gray-200`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
