import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IM_Fell_English_SC, Germania_One } from "next/font/google";
import "./globals.css";
import HeroSection from "./components/HeroSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const imFell = IM_Fell_English_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-imfell",
});

const germania = Germania_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-germania",
});

export const metadata: Metadata = {
  title: "Yahweh’s Creations",
  description: "Dark fantasy FPS experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${imFell.variable} ${germania.variable}`}
    >
      <body className="bg-[#1B1B1B] text-white">
        {children}
        <HeroSection />
      </body>
    </html>
  );
}
