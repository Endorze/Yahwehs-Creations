'use client';
import React from 'react';
import { heroDescription } from '@/app/news';

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto overflow-hidden mt-10 bg-[#504848] min-h-[834px] px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-start">
      
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/images/sectionbackgrounds/nicolas-mendoza-catthedral.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-10">
        <img
          src="/images/yahwehhero.png"
          alt="Yahweh Hero"
          className="w-[180px] sm:w-[250px] md:w-[320px] lg:w-[409px]"
        />

        <p
          className="mt-3 text-white font-Germania_One text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-tight max-w-[720px]"
          style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}
        >
          {heroDescription}
        </p>

        <a
          href="https://yourgame.itch.io"
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-4 w-[140px] h-[50px] flex items-center justify-center hover:scale-105 transition-transform z-20"
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

      <div
        className="absolute z-20 top-[570px] left-1/2 transform -translate-x-1/2 w-full max-w-[900px] h-auto flex flex-col sm:flex-row items-center sm:justify-between px-4 sm:px-16 py-4 sm:py-0"
        style={{
          backgroundImage: "url('/images/effects/shadow.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="mb-2 sm:mb-0 sm:ml-6">
          <img
            src="/images/whitesteam.png"
            alt="Steam"
            className="w-[100px] sm:w-[120px] h-auto"
          />
        </div>

        <div className="sm:flex-1 flex justify-center sm:justify-end sm:pr-4 text-center sm:text-right">
          <p
            className="text-white font-Germania_One"
            style={{
              fontSize: '18px',
              lineHeight: '60px',
              textShadow: '0px 4px 4px rgba(0,0,0,0.8)',
              maxWidth: '420px',
            }}
          >
            Can you solve the mystery behind <br /> Yahweh’s Creations?
          </p>
        </div>
      </div>
    </section>
  );
}
