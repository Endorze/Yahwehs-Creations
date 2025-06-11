import Image from "next/image";

export default function SystemRequirements() {
  return (
    <section className="hidden sm:flex flex-col items-center bg-black text-white min-h-[900px] pt-20 px-4">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-[Germania_One] mb-12"
        style={{ fontWeight: 400 }}
      > 
        SYSTEM REQUIREMENTS
      </h1>

      <div className="relative" style={{ width: 700, height: 420 }}>
        <Image
          src="/images/image5.png"
          alt="System Requirements Image"
          width={700}
          height={420}
          className="object-contain"
          priority
        />
      </div>

      <div className="relative mt-16" style={{ width: 350, height: 20 }}>
        <Image
          src="/images/effects/gradientline.png"
          alt="Gradient Line"
          width={350}
          height={20}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
