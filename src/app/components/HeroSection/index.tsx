"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/images/sectionbackgrounds/nicolas-mendoza-catthedral.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      <div className="relative z-10 text-white text-center max-w-4xl mx-auto">
        <Image
          src="/images/yahwehhero.png"
          alt="Yahweh’s Creations Logo"
          width={600}
          height={200}
          className="mx-auto mb-8"
          priority
        />

        <p className="text-white text-[16px] md:text-[18px] leading-relaxed mb-10">
          A brutal dark fantasy FPS where you, fueled by vengeance and divine purpose,
          storm a cursed cathedral to stop a mad Archbishop from ascending to godhood.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://itch.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/playfreebtn.png"
              alt="Play Free"
              width={220}
              height={64}
              className="hover:opacity-90 transition"
            />
          </a>

          <Link
            href="https://store.steampowered.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#e6a54c] px-6 py-3 rounded-md text-[16px] font-semibold hover:bg-[#e6a54c] hover:text-black transition"
          >
            <Image
              src="/whitesteam.png"
              alt="Steam"
              width={24}
              height={24}
            />
            Steam
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
