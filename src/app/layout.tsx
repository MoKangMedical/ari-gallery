import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aria Gallery — 艾瑞画展",
  description:
    "Aria Gallery presents a curated collection of sketch watercolor paintings exploring light, nature, texture, and the quiet poetry of everyday moments. A visual journey by Aria.",
  keywords: [
    "Aria Gallery", "art gallery", "painting", "sketch watercolor",
    "contemporary art", "Aria画展", "素描淡彩", "画展", "艺术",
  ],
  openGraph: {
    title: "Aria Gallery — 艾瑞画展",
    description:
      "A curated collection of paintings exploring light, nature, and the poetry of everyday moments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
