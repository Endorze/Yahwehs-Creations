'use client';

import Image from "next/image";
import Link from "next/link";

export default function OurCreations() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1B1B1B]">
      {/* Background Image */}
      <Image
        src="/images/sectionbackgrounds/pocelainlarva.png"
        alt="Creature with Candle"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1B1B1B,_#4A3728,_#E6A54C1A)] z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-16 z-20">
        <div className="max-w-xl text-left">
          <h2 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-germania text-[#E6A54C] uppercase mb-4 sm:mb-6 tracking-wide">
            Our Creations
          </h2>
          <p className="text-[16px] sm:text-[24px] text-[#CCCCCC] mb-6 sm:mb-8 leading-relaxed max-w-md">
            Are you interested in reading more about our creatures? See the sketches and read about the thought process of our professional designers.
          </p>

          {/* Button */}
          <Link href="/blog#monsters" scroll={true}>
            <div className="relative inline-block group cursor-pointer transition duration-300 hover:brightness-110 hover:drop-shadow-[0_0_10px_#E6A54C]">
              <Image
                src="/images/orangebutton.png"
                alt="Meet the Creatures Button"
                width={200}
                height={50}
              />
              <span className="absolute inset-0 flex items-center justify-center text-black font-bold text-[16px] sm:text-[24px]">
                MEET THE CREATURES
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Gradient Line Image */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <Image
          src="/images/effects/gradientline.png"
          alt="Gradient Line"
          width={1920}
          height={2}
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}
