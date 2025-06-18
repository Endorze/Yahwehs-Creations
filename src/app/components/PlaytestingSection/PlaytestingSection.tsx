import H2Title from "../H2Title/H2Title";
import H3Title from "../H3Title/H3Title";
import PlayButton from "../PlayButton/PlayButton";

const PlaytestingSection = () => {
    return (
        <section>
            <div className="hidden lg:flex bg-[url('/images/playtesting/cathedralgameplay.png')] bg-cover bg-center w-full text-white justify-center relative pt-12 pb-24">
                <div className="flex flex-row items-start z-1 gap-24 max-w-[1200px] w-full">
                    <div className="flex flex-1 flex-col gap-3">
                        <div>
                            <H2Title text="Playtesting" size="96px" />
                        </div>
                        <div>
                            <H3Title text="NOW IN ALPHA" size="48px" />
                        </div>
                        <div>
                            <p style={{ fontSize: "24px" }}>Early descent into Yahweh's Cathedral has begun...</p>
                        </div>
                        <div className="max-w-[500px]">
                            <p style={{ color: "#808080", fontSize: "16px" }}>We’re currently looking for fearless souls to help test the game. Your feedback shapes the world — and perhaps your survival in it.</p>
                        </div>
                        <PlayButton />
                        <div className="max-w-[400px]">
                            <p style={{ fontSize: "24px" }}>"That cathedral... it watches you. Even in the loading screen." - Playtester</p>
                        </div>
                    </div>
                    <div className="w-[400]">
                        <img src={"images/playtesting/image.png"} className="h-auto flex justify-end" />
                        <div className="flex justify-between pt-4">
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
                <img src={"/images/effects/gradientline.png"} className="absolute bottom-0" />
            </div>

            {/*MOBIL SEKTION*/}

            <div className="flex bg-[url('/images/playtesting/cathedralgameplay.png')] bg-cover bg-center w-full text-white justify-center relative p-8 lg:hidden">
                <div className="absolute inset-0 bg-black opacity-50 pointer-events-none z-0"></div>
                <div className="flex flex-col items-center z-1 gap-24 relative z-2">
                    <div className="flex flex-1 flex-col gap-2">
                        <div>
                            <h1 style={{fontSize: "72px"}}>Playtesting</h1>
                        </div>
                        <div>
                            <H3Title text="NOW IN ALPHA" size="48px" />
                        </div>
                        <div>
                            <p style={{ fontSize: "24px" }}>Early descent into Yahweh's Cathedral has begun...</p>
                        </div>
                        <div className="max-w-[500px]">
                            <p style={{ color: "#808080", fontSize: "16px" }}>We're currently looking for fearless souls to help test the game. Your feedback shapes the world — and perhaps your survival in it.</p>
                        </div>
                        <div className="pt-4 pb-4">
                            <PlayButton />
                        </div>
                        <div className="max-w-[400px]">
                            <p style={{ fontSize: "16px" }}>"That cathedral... it watches you. Even in the loading screen." - Playtester</p>
                        </div>
                        <div className="max-w-[400]">
                            <div className="flex justify-between pt-4 items-center">
                                <div className="w-50">
                                    <p style={{ fontSize: "12px" }}>Play our game, it's free... for now</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <img src={"/images/effects/gradientline.png"} className="absolute bottom-0" />
            </div>
        </section>
    )
}

export default PlaytestingSection;