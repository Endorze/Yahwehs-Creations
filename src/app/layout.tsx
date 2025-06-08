import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IM_Fell_English_SC, Germania_One } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
=======
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

>>>>>>> 9bfa0f49ec9e4b8c4a0ec5388b9e04464c1cdff1

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
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
        <Header />
        {children}
<<<<<<< HEAD
=======

        <HeroSection />
        <Footer />
>>>>>>> 9bfa0f49ec9e4b8c4a0ec5388b9e04464c1cdff1
      </body>
    </html>
  );
}
