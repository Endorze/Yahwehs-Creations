import H2Title from "../H2Title/H2Title";
import H3Title from "../H3Title/H3Title";
import Image from "next/image";

import OfficialMediaCard from "../OfficialMediaCard";

const OfficialMediaSection = () => {
  return (
    <div className="bg-[url('/images/sectionbackgrounds/officialmedia.png')] bg-cover bg-center bg-no-repeat">

        <div className="md:py-20 md:px-40 py-4 px-4 uppercase ">
          <div className="mb-10">
          <H2Title text="Official Media " size="48px" />
          <H3Title text="YAHWEH REPRESENTS " size="24px" />
          </div>
          <div className="grid grid-cols-1   gap-4 justify-center items-center md:grid-cols-3  sm:grid-cols-2">
          <OfficialMediaCard image="/images/sectionbackgrounds/whisperscathedral.png"/>
           <OfficialMediaCard image="/images/values/values.png"/>
           <OfficialMediaCard />
           <OfficialMediaCard image="/images/monsters/angel.png"/>

           <OfficialMediaCard image="/images/monsters/snails.png"/>
           <OfficialMediaCard image="/images/values/goals.png"/>
           <OfficialMediaCard image="/images/newsarticle/angel.png"/>
           <OfficialMediaCard image="/images/values/vision.png"/>

           <OfficialMediaCard image="/images/sectionbackgrounds/pocelainlarva.png"/>
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
      </div>

  );
};

export default OfficialMediaSection;
