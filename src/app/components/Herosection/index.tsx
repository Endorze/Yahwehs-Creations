"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/sectionbackgrounds/nicolas-mendoza-catthedral.jpg"
          alt="Cathedral Background"
          fill
          className="object-cover"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
      </div>

      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 max-w-4xl mx-auto">
        <div className="relative mb-6 w-[500px] h-[180px] ml-4">
          <Image
            src="/images/yahwehhero.png"
            alt="Yahweh's Creations Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="text-white text-base md:text-lg leading-relaxed mb-8 ml-4 max-w-xl">
          A brutal dark fantasy FPS where you, fueled by vengeance and divine purpose,
          storm a cursed cathedral to stop a mad Archbishop from ascending to godhood.
        </p>

        <div className="mb-4 ml-4">
          <a
            href="https://itch.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition"
          >
            <Image
              src="/images/playfreebtn.png"
              alt="Play Free"
              width={220}
              height={64}
              className="object-contain"
            />
          </a>
        </div>

        <div className="relative w-full max-w-[1280px] h-[110px] ml-4">
          <Image
            src="/images/effects/shadow.png"
            alt="Shadow"
            width={1280}
            height={110}
            className="absolute bottom-0 left-0 w-full h-[110px] object-cover"
            priority
          />

          <Link
            href="https://store.steampowered.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-20 transform -translate-y-1/2 w-[94px] h-[94px] flex items-center justify-center rounded-md text-2xl font-semibold hover:bg-[#e6a54c] hover:text-black transition"
          >
            <Image
              src="/images/whitesteam.png"
              alt="Steam"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <p
            className="absolute top-1/2 left-[180px] transform -translate-y-1/2 text-white text-base max-w-lg drop-shadow-md"
            style={{ fontFamily: "'Germania One', cursive" }}
          >
            Can you solve the mystery behind Yahweh's Creations?
          </p>
        </div>

        <div className="h-20" />
      </div>
    </div>
  );
};
 
export default HeroSection;
