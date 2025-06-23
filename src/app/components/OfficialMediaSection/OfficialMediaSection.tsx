import H2Title from "../H2Title/H2Title";
import H3Title from "../H3Title/H3Title";
import Image from "next/image";

import OfficialMediaCard from "../OfficialMediaCard";
import Container from "../Container/container";

const OfficialMediaSection = () => {
  return (
    <div className="bg-[url('/images/sectionbackgrounds/officialmedia.png')] bg-cover bg-center bg-no-repeat">
      <Container>

        <div className="md:py-4 px-4 uppercase ">
          <div className="mb-10">
          <H2Title text="Official Media " size="48px" />
          <H3Title text="OK'RHAM REPRESENTS " size="24px" />
          </div>
          <div className="grid grid-cols-1   gap-4 justify-center items-center md:grid-cols-3  sm:grid-cols-2">
          <OfficialMediaCard image="/images/sectionbackgrounds/whisperscathedral.png"/>
           <OfficialMediaCard image="/art/torch.png"/>
           <OfficialMediaCard image="/art/puzzle.png"/>
           <OfficialMediaCard image="/art/glasspanes.png"/>

           <OfficialMediaCard image="/art/entrance.png"/>
           <OfficialMediaCard image="/art/hallway.png"/>
           <OfficialMediaCard image="/images/newsarticle/angel.png"/>
           <OfficialMediaCard image="/art/cathedral.png"/>

           <OfficialMediaCard image="/art/candles.png"/>
          </div>
        </div>

        <div className="flex justify-center mt-auto">
          <Image
            src="/images/effects/gradientline.png"
            alt="gradientline"
            width={500}
            height={500}
          />
        </div>
      </Container>
      </div>

  );
};

export default OfficialMediaSection;
