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

        <div className="ml-4">
          <Link
            href="https://store.steampowered.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 px-6 py-4 rounded-md text-2xl font-semibold hover:bg-[#e6a54c] hover:text-black transition"
          >
            <div className="relative w-[94px] h-[94px] flex-shrink-0">
              <Image
                src="/images/whitesteam.png"
                alt="Steam"
                fill
                className="object-contain"
                priority
              />
            </div>
            
          </Link>
        </div>

        <div className="h-20" />
      </div>
    </div>
  );
};

export default HeroSection;
