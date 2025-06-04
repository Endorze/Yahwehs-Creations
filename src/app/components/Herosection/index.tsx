'use client';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto overflow-hidden mt-20 bg-[#504848] min-h-[834px] px-4 sm:px-6 lg:px-12">
      
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/images/sectionbackgrounds/nicolas-mendoza-catthedral.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      <img
        src="/images/yahwehhero.png"
        alt="Yahweh Hero"
        className="absolute z-10 w-[180px] sm:w-[250px] md:w-[320px] lg:w-[409px] top-[60px] left-[20px] sm:left-[60px] lg:left-[181px]"
      />

      <p
        className="absolute z-8 text-white font-Germania_One text-[16px] sm:text-[10px] md:text-[20px] lg:text-[24px] leading-tight w-[90%] sm:w-[600px] md:w-[700px] lg:w-[772px] top-[340px] sm:top-[360px] lg:top-[380px] left-[20px] sm:left-[80px] lg:left-[225px]"
        style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}
      >
        A brutal dark fantasy FPS where you, fueled by vengeance and divine
        purpose, storm a cursed cathedral to stop a mad Archbishop from
        ascending to godhood. Face twisted zealots, uncover sacred relics, and
        decide: restore your god… or become Him.
      </p>

      <a
        href="https://yourgame.itch.io"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-20"
        style={{ top: '470px', left: '70px', width: '150px', height: '110px' }}
      >
        <div className="relative w-full h-full flex items-center justify-center hover:scale-105 transition-transform">
          <img
            src="/images/playfreebtn.png"
            alt="Play Free Button"
            className="w-full h-auto"
          />
          <img
            src="/images/image.png"
            alt="Play Icon"
            className="absolute w-[40px] h-[40px]"
          />
        </div>
      </a>

      <img
        src="/images/effects/shadow.png"
        alt="Shadow Background"
        className="absolute z-8"
        style={{
          width: '1600px',
          height: '130px',
          top: '640px',
          left: '-110px',
        }}
      />

      <div
        className="absolute z-60 flex items-center justify-between w-full px-12"
        style={{
          top: '650px',
          left: 0,
        }}
      >
        <img
          src="/images/whitesteam.png"
          alt="Steam"
          className="w-[90px] md:w-[200px] h-auto"
        />

        <p
          className="text-white font-Germania_One text-[10px] sm:text-[10px] md:text-[20px] leading-tight text-right"
          style={{
            textShadow: '0px 2px 2px rgba(0,0,0,0.15)',
            width: '250px',
          }}
        >
          Can you solve the mystery behind <br /> Yahweh’s Creations?
        </p>
      </div>
    </section>
  );
}
