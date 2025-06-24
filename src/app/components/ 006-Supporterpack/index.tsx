"use client";
import { useState } from "react";
import { supportPackInfo, SupporterPackProp2 } from "../../../data/NewsItem";
import H2Title from "../H2Title/H2Title";

type SupporterPackProp = {
    image: string
    text: string
}

const YahwehInfor: SupporterPackProp2 = supportPackInfo

const SupporterPack = () => {
    const [active, setActive] = useState<"overview" | "feature">("overview");

    const PackInformation = ({ image, text }: SupporterPackProp) => {
        return (
            <div>
                <img src={`/images/${image}`} alt={text}/>
            </div>
        )
    }

    return (
        <div className="w-full flex flex-col items-end bg-[url('/images/sectionbackgrounds/catacombs.png')] bg-cover bg-center">
            <div className="sm:w-1/2 flex flex-col justify-center items-center bg-black text-base m-[30px] p-[20px] sm:m-0 sm:p-0 lg:m-0">

                <div className="p-12 lg:p-24">
                <PackInformation image="supporterpack.png" text="Yawhweh support Image"/>
                </div>

                <div className="relative flex items-center justify-center">
                    <PackInformation image="effects/shadow.png" text="Shadow Image" />

                    <div className="absolute z-10 flex flex-row gap-8 sm:p-4 p-0 text-white">
                        <button
                            className={`cursor-pointer hover:text-amber-800 ${active === "overview" ? "text-[#e6a54c] font-bold" : ""}`}
                            onClick={() => setActive("overview")}>
                            Overview
                        </button>
                        <button
                            className={`cursor-pointer hover:text-amber-800 ${active === "feature" ? "text-[#e6a54c] font-bold" : ""}`}
                            onClick={() => setActive("feature")}>
                            Feature
                        </button>
                    </div>
                </div>
                <div className="md:py-4 md:px-12 md:pb-12">
                    <div className="text-white sm:p-5 align-left">
                        <h1 className="pt-5 pb-5 font-bold">
                            {active === "overview"
                                ? "THE BISHOP OF OK'RHAM DEMANDS A SACRIFICE"
                                : "ENTER THE CATACOMBS OF FAITH AND FIRE"}
                        </h1>

                        <div className="text-[#808080]">
                            <div className="pb-5"><H2Title text={active === "overview"
                                ? "'Drink from this Chalice and you shall obtain Godhood'"
                                : "'Wield the Word. Cleanse the Unworthy. Become Divine.'"} size="24px" /></div>
                        
                            {YahwehInfor.filter(item => item[active]).map((item, index) => (
                                <div key={index} className="mb-4 leading-relaxed">
                                    {item[active]}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex items-center justify-center w-full -mt-10 p-[3px]">
                <img src="/images/effects/gradientline.png" alt="Gradient Line" />
            </div>
        </div>
    );
}

export default SupporterPack