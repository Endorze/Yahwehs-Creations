"use client";
import { useState } from "react";

type SupporterPackProp = {
    image: string
    text: string
}

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
            <div className="w-full flex flex-col items-end bg-[url('/images/sectionbackgrounds/catacombs.png')] bg-cover bg-center">
                <div className="max-w-lg flex flex-col bg-black text-base m-0">
                    <PackInformation image="yahwehsupport_with_orange_glow.png" text="Yawhweh support Image" />

                    <div className="relative flex items-center justify-center">
                        <PackInformation image="effects/shadow.png" text="Shadow Image" />

                        <div className="absolute z-10 flex flex-row gap-8 p-4 text-white">
                            <button
                                className={`${active === "overview" ? "text-[#e6a54c] font-bold" : ""}`}
                                onClick={() => setActive("overview")}>
                                Overview
                            </button>
                            <button
                                className={`${active === "feature" ? "text-[#e6a54c] font-bold" : ""}`}
                                onClick={() => setActive("feature")}>
                                Feature
                            </button>
                        </div>
                    </div>

                    <div className="text-white p-16">


                        {active === "overview" && (
                            <div>
                                <h1>THE BISHOP OF YAHWEH DEMANDS A SACRIFICE</h1>
                                <h3>“Drink from this Chalice and you shall obtain Godhood”</h3>

                                <span>
                                    Support Yahweh's Creations on Kickstarter to bring a unique, handcrafted game to life—
                                    filled with passion, creativity, and heart. Your backing directly helps improve visuals,
                                    sound, and storytelling, all crafted by a dedicated indie team. As a supporter, you'll
                                    receive exclusive rewards, early access, and a chance to be part of the game's legacy.
                                    Help us turn vision into reality!
                                </span>
                            </div>
                        )}

                        {active === "feature" && (
                            <div>
                                <h1>ENTER THE CATACOMBS OF FAITH AND FIRE</h1>
                                <h3>“Wield the Word. Cleanse the Unworthy. Become Divine.”</h3>

                                <span>
                                    In *Yahweh's Creations*, every corridor echoes with forgotten prayers, every enemy is
                                    a symbol of a twisted past, and every choice you make carves deeper into fate's flesh.
                                    As the **Bishop of Yahweh**, you wield divine relics and forbidden knowledge to purge the
                                    catacombs of false gods and ancient sins. The game features:
                                    <br /><br />
                                    <strong>Handcrafted Environments</strong> — Explore cursed catacombs, sanctified ruins, and corrupted altars, built with intricate detail.<br />
                                    <strong>Dynamic Combat</strong> — Master divine weapons, time-bending blessings, and eldritch powers.<br />
                                    <strong>Deep Lore</strong> — Uncover scriptures, relics, and heretical texts revealing the tragic history of Yahweh's fall.<br />
                                    <strong>Unique Art & Sound</strong> — A haunting visual palette and original soundtrack to immerse you in sacred dread.<br />
                                    <strong>Exclusive Supporter Content</strong> — Gain access to rare relics, behind-the-scenes lore, and a personal mark etched into the game world.
                                    <br /><br />
                                    This is more than a game—it's a divine trial. Will you rise... or be forsaken?
                                </span>
                            </div>
                        )}
                    </div>

                </div>
                <div className="flex items-center justify-center w-full">
                    <img src="/images/effects/gradientline.png" alt="helo" />
                </div>
            </div>

        </>
    );
}



export default SupporterPack