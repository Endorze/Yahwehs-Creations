import FeatureSection from '../018FeatureSection';
import Image from 'next/image';
import H2Title from '../H2Title/H2Title';
import Container from '../Container/container';

const MeetTheCreatures = () => {
    return (
        <section id="creatures" className="relative bg-black text-white pt-16 pb-32">
            <Container>
                <div className="px-6 sm:px-10 md:px-20 lg:px-36 text-center md:text-left mb-12">
                    <H2Title text="MEET THE CREATURES" size="32px" />
                </div>

                <FeatureSection
                    name="Seraphim"
                    subtitle="DO NOT BE AFRAID"
                    description="Twisted by divine irony, loyal clerics became monstrous angels—flesh torn, minds warped. Corrupted by desire, they now guard the cathedral with arcane might, ensuring none defy the Archbishop or disturb the god they once prayed to—and betrayed."
                    image="/images/monsters/angel.png"
                />

                <FeatureSection
                    name="The Faceless"
                    subtitle="DON’T LOOK AT THE MASK"
                    description="From the damp corridors beneath the cathedral, it crawls — a bloated, boneless thing dragging the weight of forgotten guilt. Its flesh is soft and raw, constantly folding in on itself as if trying to hide from the gaze of God."
                    image="/images/monsters/snails.png"
                    reverse
                />
            </Container>

            {/* Gradient at the bottom */}
            <img
                src="/images/effects/gradientline.png"
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                alt="gradient line"
            />
        </section>
    );
};

export default MeetTheCreatures;
