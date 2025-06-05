import H2Title from "../H2Title/H2Title"
import H3Title from "../H3Title/H3Title"

const FAQSection = () => {
    return (
        <section>
            <div className="hidden lg:block p-40 relative">
                <H2Title text="FREQUENTLY ASKED QUESTIONS" size="48px" />
                <div className="flex flex-row gap-12">
                    <div className="flex-1">
                        <H3Title text="THE VISION" size="32px" />
                        <p style={{ color: "#808080" }}>
                            We believe games can be more than entertainment — they can be places of tension, beauty, and reflection.Yahweh’s Cathedral is built to unsettle, to mesmerize, and to linger. Our vision is to craft a world where the sacred becomes strange, and every shadow might conceal something divine... or something else entirely.
                            We don’t hold your hand. We dim the lights — and ask you to walk forward.
                        </p>
                    </div>
                    <div className="flex-1">
                        <H3Title text="THE GOALS" size="32px" />
                        <p style={{ color: "#808080" }}>
                            Our primary goal is to create a game that resonates with a mature audience — players who crave something deeper, darker, and more challenging than what mainstream titles often deliver.
                            We’re building an experience that weaves first-person exploration, puzzle mechanics, and psychological dread into a seamless whole. If you’re drawn to slow-burn horror, cryptic symbols, and the thrill of decoding a world that refuses to explain itself — this descent is meant for you.
                        </p>
                        <div className="pt-12">
                            <H3Title text="IS THE GAME FREE?" size="32px" />
                            <p style={{ color: "#808080" }}>
                                The game is free during Beta stage, this will most likely be changed once we release the game, so become a playtester for free today!
                            </p>
                            {/**Måste lägga in knapp här när vi har den i main*/}
                        </div>
                    </div>
                    <div className="flex-1">
                        <H3Title text="THE VISION" size="32px" />
                        <p style={{ color: "#808080" }}>
                            We know that Yahweh’s Cathedral touches on heavy, sometimes disturbing themes — faith, guilt, death, judgment. That’s intentional.
                            But it’s never for shock value. It’s because we believe games can challenge, provoke, and ask uncomfortable questions.
                            That said: If the tone, the themes, or the atmosphere don’t resonate with you — we completely understand.This game isn’t for everyone. It wasn’t meant to be. But for those it is meant for — it will speak deeply.
                        </p>
                    </div>
                </div>
                <img src={"/images/effects/gradientline.png"} className="absolute bottom-0 left-1/2 -translate-x-1/2" />
            </div>

            {/*Mobil sektion */}

            <div className="flex flex-col p-6 relative justify-center items-center lg:hidden">
                <div className="flex flex-col gap-12 max-w-[400] pb-12">
                <H2Title text="FREQUENTLY ASKED QUESTIONS" size="32px" />
                    <div>
                        <H3Title text="THE VISION" size="24px" />
                        <p style={{ color: "#808080", fontSize: "16px" }}>
                            We believe games can be more than entertainment — they can be places of tension, beauty, and reflection.Yahweh’s Cathedral is built to unsettle, to mesmerize, and to linger. Our vision is to craft a world where the sacred becomes strange, and every shadow might conceal something divine... or something else entirely.
                            We don’t hold your hand. We dim the lights — and ask you to walk forward.
                        </p>
                    </div>
                    
                    <div>
                        <H3Title text="THE VISION" size="24px" />
                        <p style={{ color: "#808080", fontSize: "16px" }}>
                            We know that Yahweh’s Cathedral touches on heavy, sometimes disturbing themes — faith, guilt, death, judgment. That’s intentional.
                            But it’s never for shock value. It’s because we believe games can challenge, provoke, and ask uncomfortable questions.
                            That said: If the tone, the themes, or the atmosphere don’t resonate with you — we completely understand.This game isn’t for everyone. It wasn’t meant to be. But for those it is meant for — it will speak deeply.
                        </p>
                    </div>

                    <div>
                        <H3Title text="THE GOALS" size="24px" />
                        <p style={{ color: "#808080", fontSize: "16px"}}>
                            Our primary goal is to create a game that resonates with a mature audience — players who crave something deeper, darker, and more challenging than what mainstream titles often deliver.
                            We’re building an experience that weaves first-person exploration, puzzle mechanics, and psychological dread into a seamless whole. If you’re drawn to slow-burn horror, cryptic symbols, and the thrill of decoding a world that refuses to explain itself — this descent is meant for you.
                        </p>
                        <div className="pt-12">
                            <H3Title text="IS THE GAME FREE?" size="24px" />
                            <p style={{ color: "#808080", fontSize: "16px" }}>
                                The game is free during Beta stage, this will most likely be changed once we release the game, so become a playtester for free today!
                            </p>
                            {/**Måste lägga in knapp här när vi har den i main*/}
                        </div>
                    </div>
                </div>
                <img src={"/images/effects/gradientline.png"} className="absolute bottom-0 left-1/2 -translate-x-1/2" />
            </div>
        </section>
    )
}

export default FAQSection