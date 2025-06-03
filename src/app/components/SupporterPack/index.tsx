"use client";
import { useState } from "react";

type SupporterPackProp = {
    image: string
    text: string
}

const SupporterPack = () => {
  const [active, setActive] = useState<"overview" | "feature">("overview");

  const PackInformation = ({image, text}: SupporterPackProp) => {
    return (
      <div>
      <img src={`/images/${image}`} alt={text} />
      </div>
    )
}

  return (
      <>
    <div className="w-full flex flex-col items-end bg-[url('/images/sectionbackgrounds/catacombs.png')] bg-cover bg-center">
      <div className="max-w-lg flex flex-col bg-black text-base m-0">
        <PackInformation image="yahwehsupport_with_orange_glow.png" text="Yawhweh support Image" />

        <div className="relative flex items-center justify-center">
          <PackInformation image="effects/shadow.png" text="Shadow Image" />

          <div className="absolute z-10 flex flex-row gap-8 p-4 text-white">
            <button
              className={`${ active === "overview" ? "text-[#e6a54c] font-bold" : ""}`}
              onClick={() => setActive("overview")}>
              Overview
            </button>
            <button
              className={`${ active === "feature" ? "text-[#e6a54c] font-bold" : ""}`}
              onClick={() => setActive("feature")}>
              Feature
            </button>
          </div>
        </div>

        <div className="text-white p-16">
          <h1>THE BISHOP OF YAHWEH DEMANDS A SACRIFICE</h1>
          <h3>“Drink from this Chalice and you shall obtain Godhood”</h3>

          {active === "overview" && (
            <span>
              Support Yahweh's Creations on Kickstarter to bring a unique, handcrafted game to life—
              filled with passion, creativity, and heart. Your backing directly helps improve visuals,
              sound, and storytelling, all crafted by a dedicated indie team. As a supporter, you'll
              receive exclusive rewards, early access, and a chance to be part of the game's legacy.
              Help us turn vision into reality!
            </span>
          )}

          {active === "feature" && (
            <span>
              Yahweh's Creations on Kickstarter to bring a unique, handcrafted game to life—
              filled with passion, creativity, and heart. Your backing directly helps improve visuals,
              sound, and storytelling, all crafted by a dedicated indie team. As a supporter, you'll
              receive exclusive rewards, early access, and a chance to be part of the game's legacy.
              Help us turn vision into reality!
            </span>
          )}
        </div>
                  
      </div>
      <div className="flex items-center justify-center w-full">
      <img src="/images/effects/gradientline.png" alt="helo"/>
      </div>
    </div>
  
  </>
  );
}



export default SupporterPack