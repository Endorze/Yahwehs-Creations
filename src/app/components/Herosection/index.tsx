'use client';
import React from 'react';
import { heroDescription } from '../new';
import Container from '../Container/container';

export default function HeroSection() {
  return (
    <section className="h-auto lg:relative w-full bg-[#504848] overflow-hidden flex flex-col">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/sectionbackgrounds/nicolas-mendoza-catthedral.jpg')",
        }}
      />
      <Container>

        <div className="relative flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-16 flex flex-col items-center sm:items-start text-center sm:text-left gap-6 pb-12">
          <img
            src="/images/okrhams.png"
            alt="Yahweh Hero"
            className="w-[180px] sm:w-[250px] md:w-[320px] lg:w-[409px]"
          />

          <p
            className="text-white font-Germania_One text-[18px] sm:text-[20px] lg:text-[24px] leading-tight max-w-[720px] sm:ml-[-10px]"
            style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}
          >
            {heroDescription}
          </p>

          <div className="sm:ml-[-10px]">
            <a
              href="https://futuregames.itch.io/yahwehs-creation"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[180px] h-[60px] flex items-center justify-center sm:justify-start hover:scale-105 transition-transform"
            >
              <img
                src="/images/playfreebtn.png"
                alt="Play Free Button"
                className="w-full h-auto object-contain"
              />

            </a>
          </div>
        </div>

        <div
          className="relative w-full h-[160px] flex items-center justify-between sm:bg-no-repeat bg-cover bg-bottom"
          style={{
            backgroundImage: "url('/images/effects/shadow.png')",
          }}
        >
          <div className="flex-1 flex justify-start pl-10">
            <a
              href="https://futuregames.itch.io/yahwehs-creation">

              <img
                src="/images/okrhamslogo.png"
                alt="Steam Logo"
                className="h-[60px] w-auto object-contain"
              />
            </a>
          </div>

          <div className="flex-1 flex justify-end pr-10">
            <p
              className="text-white font-Germania_One text-[14px] sm:text-[20px] text-right leading-snug"
              style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}
            >
              Can you solve the mystery behind <br /> Ok'Rhams Creations?
            </p>
          </div>
        </div>
      </Container>

       <img src={"/images/effects/gradientline.png"} className="absolute bottom-0 left-1/2 -translate-x-1/2" />

    </section>
  );
}