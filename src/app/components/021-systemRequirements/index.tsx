import Image from "next/image";

export default function SystemRequirements() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-[32px] sm:text-[48px] font-[Germania_One] mb-8" style={{ fontWeight: 400 }}>
          SYSTEM REQUIREMENTS
        </h1>

        <div className="w-[90vw] max-w-[1122px] h-[60vh] sm:h-[748px] relative">
          <Image
            src="/images/image5.png"
            alt="System Requirements Image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative w-[80%] max-w-[633px] h-[34px] mt-16">
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
