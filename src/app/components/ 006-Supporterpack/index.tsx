"use client";
import { useState } from "react";
import { Germania_One } from "next/font/google";

type SupporterPackProp = {
    image: string
    text: string
}

const GermaniaFont = Germania_One({
    subsets: ['latin'],
    weight: "400",
    display: 'swap',
});

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
               <div className="sm:w-1/2 flex flex-col bg-black text-base m-[30px] p-[20px] sm:m-0 sm:p-0 lg:m-0">

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

                    <div className="text-white sm:p-5 sm:text-center">
                        {active === "overview" && (
                            <div>
                                <h1 className="pt-5 pb-5 font-bold">THE BISHOP OF YAHWEH DEMANDS A SACRIFICE</h1>

                                <div className="text-[#808080]">
                                    <h3 className="pb-5">“Drink from this Chalice and you shall obtain Godhood”</h3>

                                    <span>
                                        <span>
                                            Support Yahweh's Creations on Kickstarter to bring a unique, handcrafted game to life—
                                            filled with passion, creativity, and heart. Your backing directly helps improve visuals,
                                            sound, and storytelling, all crafted by a dedicated indie team. As a supporter, you'll
                                            receive exclusive rewards, early access, and a chance to be part of the game's legacy.
                                            Help us turn vision into reality!
                                            <br /><br />
                                            This isn't just a game—it's a spiritual journey forged in pixel and prayer. With your support, we can expand the game's universe, add new playable relics, deepen the branching narrative paths, and enhance accessibility for all players.
                                            <br /><br />
                                            Every pledge, no matter the size, brings us one step closer to delivering an unforgettable experience. As a backer, your name may be etched into the in-game scriptures, your choices immortalized in lore. Become a part of something eternal—where your faith fuels creation itself.
                                        </span>

                                    </span>
                                </div>
                            </div>
                        )}

                        {active === "feature" && (
                            <div>
                                <h1 className="pt-5 pb-5 font-bold">ENTER THE CATACOMBS OF FAITH AND FIRE</h1>

                                <div className="text-[#808080]">
                                    <h3 className="pb-5">“Wield the Word. Cleanse the Unworthy. Become Divine.”</h3>
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