import H2Title from "../H2Title/H2Title";
import PlayButton from "../PlayButton/PlayButton";

const PlaytestingSection = () => {
    return (
        <div className="flex bg-[url('/images/playtesting/cathedralgameplay.png')] bg-cover bg-center h-128 w-full">
            <div>
                <H2Title text="Playtesting" size="96px"/>
                <h3 className="text-white">NOW IN ALPHA</h3>
                <h4>Early descent into Yahweh's Cathedral has begun...</h4>
                <p>We’re currently looking for fearless souls to help test the game. Your feedback shapes the world — and perhaps your survival in it.</p>
                <PlayButton />
            </div>
            <div>
                <img src={"images/playtesting/image.png"}/>
                <div className="flex">
                    <p>Join our wonderful community on Discord</p>
                    <img src={"images/playtesting/discord.png"} className="block w-20"/>
                </div>
            </div>
        </div>
    )
}

export default PlaytestingSection;