import H2Title from "../H2Title/H2Title";
import H3Title from "../H3Title/H3Title";
import PlayButton from "../PlayButton/PlayButton";

const PlaytestingSection = () => {
    return (
        <div className="flex bg-[url('/images/playtesting/cathedralgameplay.png')] bg-cover bg-center h-128 w-full text-white justify-center">
            <div className="flex flex-row items-center">
                <div className="flex-1">
                    <H2Title text="Playtesting" size="96px"/>
                    <H3Title text="NOW IN ALPHA" size="48px" />
                    <p>Early descent into Yahweh's Cathedral has begun...</p>
                    <p>We’re currently looking for fearless souls to help test the game. Your feedback shapes the world — and perhaps your survival in it.</p>
                    <PlayButton />
                </div>
                <div className="flex-1">
                    <img src={"images/playtesting/image.png"} className="h-80"/>
                    <div className="flex">
                        <p>Join our wonderful community on Discord</p>
                        <img src={"images/playtesting/discord.png"} className="block w-20"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaytestingSection;