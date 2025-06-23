'use client';

import Button from "../Button";
import H2Title from "../H2Title/H2Title";

export default function OurCreations() {
  return (
    <div className="relative">
      <section className="hidden lg:flex relative h-screen w-full overflow-hidden bg-[url('/images/sectionbackgrounds/pocelainlarva.png')] bg-cover bg-center bg-no-repeat px-38 items-center">
        <div className="max-w-[1200px] w-full mx-auto">
          <H2Title text="OUR CREATIONS" size="72px" />
          <p className="max-w-[450px]" style={{ color: "#808080", fontSize: "24px" }}>Are you interested in reading more about our creatures?
            See the sketches and read about the thought process of
            our professional designers
          </p>
          <div className="pt-6">
            <Button text="MEET THE CREATURES" href="/blog#creatures" />
          </div>

        </div>
      </section>

      {/**Här sätter jag mobil responsivitet */}

      <section className="flex relative h-[400px] w-full overflow-hidden bg-[url('/images/sectionbackgrounds/pocelainlarva.png')] bg-cover bg-right bg-no-repeat items-center px-6 lg:hidden">
        <div className="max-w-[500px]">
          <H2Title text="OUR CREATIONS" size="52px" />
          <p style={{ color: "#808080", fontSize: "16px" }}>Are you interested in reading more about our creatures?
            See the sketches and read about the thought process of
            our professional designers
          </p>
          <div className="pt-6">
            <Button text="MEET THE CREATURES" href="/blog#creatures" />
          </div>
        </div>
      </section>
      <img src={"/images/effects/gradientline.png"} className="absolute bottom-0 left-1/2 -translate-x-1/2" />
    </div>

  );
}