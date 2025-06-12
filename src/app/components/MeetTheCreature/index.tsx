import FeatureSection from '../018-FeatureSection';
import Image from 'next/image';
import H2Title from '../H2Title/H2Title';


const MeetTheCreatures = () => {
  return (
    <section className="relative bg-black text-white pt-16 pb-32">
      <div className=" ms-25 mb-12">
        <H2Title text="Meet the Creatures" size="32px" />
      </div>
      <FeatureSection
        name="Seraphim"
        subtitle="DO NOT BE AFRAID"
        description="An eternally rotating circle of golden rings and watchful eyes, surrounded by six wings as sharp as the silence in cathedral aisles. It hovers without a sound, yet every motion trembles the world around it — as if heaven itself is being restrained."
        image="/images/monsters/angel.png"
      />

      <FeatureSection
        name="The Faceless"
        subtitle="DON’T LOOK AT THE MASK"
        description="From the damp corridors beneath the cathedral, it crawls — a bloated, boneless thing dragging the weight of forgotten guilt. Its flesh is soft and raw, constantly folding in on itself as if trying to hide from the gaze of God."
        image="/images/monsters/snails.png"
        reverse
      />

      {/* Add gradient effect at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <Image
          src="/images/effects/gradientline.png"
          alt="Gradient Line"
          width={800}
          height={100}
        />
      </div>
    </section>
  );
};

export default MeetTheCreatures;
