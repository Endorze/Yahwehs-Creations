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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,27,27,1)_0%,rgba(74,55,40,0.7)_59%,rgba(230,165,76,0.1)_100%)] z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center px-6 md:px-16 z-20">
        <div className="max-w-xl">
          <h2 className="text-[48px] font-germania text-[#e6a54c] uppercase mb-6 tracking-wide">
            Our Creations
          </h2>
          <p className="text-[16px] text-[#808080] mb-8 leading-relaxed max-w-md">
            Are you interested in reading more about our creatures? See the sketches and read about the thought process of our professional designers.
          </p>

          {/* Button */}
          <Link href="/blog#monsters" scroll={true}>
            <div className="relative inline-block group cursor-pointer transition duration-300 hover:brightness-110 hover:drop-shadow-[0_0_10px_#e6a54c]">
              <Image
                src="/images/orangebutton.png"
                alt="Meet the Creatures Button"
                width={200}
                height={50}
              />
              <span className="absolute inset-0 flex items-center justify-center text-black font-bold text-[16px]">
                MEET THE CREATURES
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
