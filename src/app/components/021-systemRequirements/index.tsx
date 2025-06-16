import Image from "next/image";

export default function SystemRequirements() {
  return (
    <section className="hidden sm:flex flex-col items-center justify-center bg-black text-white min-h-screen py-12 px-4 relative">
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
        <img src={"/images/effects/gradientline.png"} className='absolute bottom-[0] left-1/2 -translate-x-1/2' />
      </div>
    </section>
  );
}
