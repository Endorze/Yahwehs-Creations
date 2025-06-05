'use client';
import React from 'react';
import { heroDescription } from '@/app/news';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen max-w-[1440px] mx-auto overflow-hidden bg-[#504848] px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-start">
      
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/images/sectionbackgrounds/nicolas-mendoza-catthedral.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left px-4 mt-6 max-w-[720px]">
        <img
          src="/images/yahwehhero.png"
          alt="Yahweh Hero"
          className="mx-auto sm:mx-0 w-[180px] sm:w-[250px] md:w-[320px] lg:w-[409px]"
        />

        <p
          className="mt-[-30px] text-white font-Germania_One text-[18px] sm:text-[20px] md:text-[20px] lg:text-[24px] leading-tight"
          style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}
        >
          {heroDescription}
        </p>

        <div className="w-full flex justify-center sm:justify-start mt-4">
          <a
            href="https://yourgame.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[140px] h-[50px] flex items-center justify-center hover:scale-105 transition-transform z-20"
          >
            <img
              src="/images/playfreebtn.png"
              alt="Play Free Button"
              className="w-full h-auto"
            />
            <img
              src="/images/image.png"
              alt="Download Icon"
              className="absolute w-[24px] h-[24px] right-3"
            />
          </a>
        </div>
      </div>

      <div
        className="absolute z-20 top-[510px] left-1/2 transform -translate-x-1/2 w-full max-w-[900px] min-w-[300px] h-[116px] flex flex-row items-center justify-between gap-4 px-4 sm:px-16 py-4 sm:py-0"
        style={{
          backgroundImage: "url('/images/effects/shadow.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="ml-2 flex-shrink-0">
          <img
            src="/images/whitesteam.png"
            alt="Steam"
            className="w-[200px] sm:w-[160px] h-auto"
          />
        </div>

        <div className="flex-1 flex justify-end text-right">
          <p
            className="text-white font-Germania_One text-sm sm:text-base leading-snug"
            style={{
              textShadow: '0px 4px 4px rgba(0,0,0,0.2)',
              maxWidth: '300px',
            }}
          >
            Can you solve the mystery behind <br /> Yahweh’s Creations?
          </p>
        </div>
      </div>
    </section>
  );
}
