"use client";
import { useState } from "react";
import { Germania_One } from "next/font/google";
import { supportPackInfo } from "../../../data/news";

type SupporterPackProp = {
    image: string
    text: string
}

const GermaniaFont = Germania_One({
    subsets: ['latin'],
    weight: "400",
    display: 'swap',
});

const YahwehInfor = supportPackInfo

const SupporterPack = () => {
    const [active, setActive] = useState<"overview" | "feature">("overview");

    const PackInformation = ({ image, text }: SupporterPackProp) => {
        return (
            <div>
                <img src={`/images/${image}`} alt={text} />
            </div>
        )
    }

    return (
        <>
            <div className={`w-full flex flex-col items-end bg-[url('/images/sectionbackgrounds/catacombs.png')] bg-cover bg-center ${GermaniaFont.className}`}>
                <div className="sm:w-1/2 flex flex-col justify-center items-center bg-black text-base m-[30px] p-[20px] sm:m-0 sm:p-0 lg:m-0">

                    <PackInformation image="yahwehsupport_with_orange_glow.png" text="Yawhweh support Image" />

                    <div className="relative flex items-center justify-center">
                        <PackInformation image="effects/shadow.png" text="Shadow Image" />

                        <div className="absolute z-10 flex flex-row gap-8 sm:p-4 p-0 text-white">
                            <button
                                className={`hover:text-amber-800 ${active === "overview" ? "text-[#e6a54c] font-bold" : ""}`}
                                onClick={() => setActive("overview")}>
                                Overview
                            </button>
                            <button
                                className={`hover:text-amber-800 ${active === "feature" ? "text-[#e6a54c] font-bold" : ""}`}
                                onClick={() => setActive("feature")}>
                                Feature
                            </button>
                        </div>
                    </div>

                    <div className="text-white sm:p-5 align-left">
                        {active === "overview" ? (
                            <>
                                <h1 className="pt-5 pb-5 font-bold">THE BISHOP OF YAHWEH DEMANDS A SACRIFICE</h1>

                                <div className="text-[#808080]">
                                    <h3 className="pb-5">“Drink from this Chalice and you shall obtain Godhood”</h3>

                                    {YahwehInfor.map((item, index) => <div key={index}>{item.overview}</div>)}

                                </div>
                            </>

                        ) :
                            <>
                                <h1 className="pt-5 pb-5 font-bold">ENTER THE CATACOMBS OF FAITH AND FIRE</h1>

                                <div className="text-[#808080]">
                                    <h3 className="pb-5">“Wield the Word. Cleanse the Unworthy. Become Divine.”</h3>

                                    {YahwehInfor.map((item, index) => <div key={index}>{item.feature}</div>)}

                                </div>
                            </>
                        }
                    </div>

                </div>
                <div className="flex items-center justify-center w-full -mt-10 p-[3px]">
                    <img src="/images/effects/gradientline.png" alt="Gradient Line" />
                </div>

            </div>

        </>
    );
}



export default SupporterPack