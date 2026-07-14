import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import { getSiteSettings } from "@/lib/strapi-services";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        className="bg-water-900"
        style={{ fontFamily: "var(--font-inter)" }}
        suppressHydrationWarning
      >
        <LenisProvider>
          <Navbar settings={settings} />
          <main className="flex-grow bg-water-900">
            {children}
          </main>
          <Footer settings={settings} />
        </LenisProvider>
      </body>
    </html>
  );
}
