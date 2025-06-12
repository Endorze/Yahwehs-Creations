import H2Title from "../H2Title/H2Title"

const AlexTestSystemRequirements = () => {
    return (
        <div className="hidden lg:flex bg-black flex flex-col justify-center items-center pt-12 pb-24">
            <div className="mb-12">
            <H2Title text="SYSTEM REQUIREMENTS" size="72px" />
            <p>Made by Alex, not meant to be code reviewed</p>
            </div>
            <div>
                <img src={"/images/systemreq.png"} className="w-full max-w-screen-lg h-auto px-4 z1" />
            </div>
        </div>
    )
}

export default AlexTestSystemRequirements;