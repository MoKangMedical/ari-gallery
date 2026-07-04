import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aria Gallery — Aria画展",
  description:
    "Welcome to Aria's art exhibition. Explore a curated collection of paintings that capture light, nature, memory, and the poetry of everyday moments.",
  keywords: ["Aria", "Aria画展", "画展", "艺术", "油画", "gallery", "art", "painting"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <MusicPlayer />
      </body>
    </html>
  );
}
