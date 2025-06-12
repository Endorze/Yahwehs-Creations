import Image from "next/image";

export default function SystemRequirements() {
  return (
    <section className="hidden sm:flex flex-col items-center justify-center bg-black text-white min-h-screen py-12 px-4">
      <div className="flex flex-col items-center w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-germania mb-12 text-center">
          SYSTEM REQUIREMENTS
        </h1>

        <div className="relative w-full aspect-[5/3] max-w-[700px]">
          <Image
            src="/images/image5.png"
            alt="System Requirements"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>

        <div className="relative w-full max-w-[350px] mt-16 h-5">
          <Image
            src="/images/effects/gradientline.png"
            alt="Decorative gradient line"
            fill
            className="object-contain"
            sizes="350px"
          />
        </div>
      </div>
    </section>
  );
}
