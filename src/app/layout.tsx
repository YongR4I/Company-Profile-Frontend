import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import LenisProvider from "@/components/layout/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brand. - Company Profile",
  description: "Membangun solusi digital terbaik untuk masa depan bisnis Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <LenisProvider>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
      </LenisProvider>
      </body>
    </html>
  );
}
