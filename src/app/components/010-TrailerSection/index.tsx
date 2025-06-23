
import Container from "../Container/container";
import H2Title from "../H2Title/H2Title";
import H3Title from "../H3Title/H3Title";
import PlayButton from "../PlayButton/PlayButton";

const TrailerSection = () => {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex flex-col items-center justify-center px-6 py-16"
            style={{ backgroundImage: "url('/images/sectionbackgrounds/dungeons.png')" }}
        >
            {/* Gradient image at bottom center */}
            <img src={"/images/effects/gradientline.png"} className="absolute bottom-0 left-1/2 -translate-x-1/2" />
            <Container>

                {/* Content */}
                <div className="relative max-w-4xl w-full mx-auto">
                    {/* Top Text */}
                    <div className="text-left">
                        <H2Title text="HOW ARE WE CERTAIN THAT ANGELS MEAN NO HARM" size="25px" />
                        <H3Title text="DELVE DEEP INTO THE CATACOMBS OF YAHWEH'S CATHEDRAL" size="20px" />
                        <p className="text-sm max-w-2xl mt-4 mb-8">
                            "For God so loved the world that he gave his one and only Son, That whoever believes in him shall not perish but have eternal life.
                            For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."
                        </p>
                    </div>

                    {/* Video */}
                    <div className="flex justify-center mb-12">
                        <div className="w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-lg">
                            <video
                                src="/video/trailer.mp4"
                                controls
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>


                    {/* Bottom Text + Play Button */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                        <div className="md:w-2/3 text-left">
                            <H3Title text="A glimpse into the nightmare below" size="20px" />
                            <p className="text-sm mt-2">
                                What starts as a simple break-in spirals into horror as you uncover the truth: this church is no sanctuary — it's a trap.
                                Twisted by dark forces and crawling with danger, survival means delving deeper into its corrupted heart.
                                The trailer offers our first descent.
                            </p>
                        </div>

                        <div className="md:w-1/4 flex justify-start md:justify-end">
                            <PlayButton />

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TrailerSection;

