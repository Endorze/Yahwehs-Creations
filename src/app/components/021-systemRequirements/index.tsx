import Image from "next/image";

export default function SystemRequirements() {
  return (
    <section className="relative w-full min-h-[1150px] bg-black text-white">
      <h1
        className="absolute top-0 left-30 sm:top-8 sm:left-48 text-[32px] sm:text-[48px] leading-[40px] sm:leading-[56px] font-[Germania_One] z-10"
        style={{ fontWeight: 400 }}
      >
        SYSTEM REQUIREMENTS
      </h1>

      <div className="absolute top-[160px] left-[5%] w-[90%] max-w-[1122px] h-[60vh] sm:top-[216px] sm:left-[187px] sm:w-[1122px] sm:h-[748px]">
        <Image
          src="/images/image5.png"
          alt="System Requirements Image"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute w-[80%] max-w-[633px] h-[34px] left-1/2 -translate-x-1/2 bottom-8 sm:top-[1020px] sm:left-1/2 sm:-translate-x-1/2">
        <Image
          src="/images/effects/gradientline.png"
          alt="Gradient Line"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}