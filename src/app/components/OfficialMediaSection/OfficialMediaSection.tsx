import H2Title from "../H2Title/H2Title";
import H3Title from "../H3Title/H3Title";

import OfficialMediaCard from "../OfficialMediaCard";

const OfficialMediaSection = () => {
  return (
    <div className="bg-[url('/images/sectionbackgrounds/officialmedia.png')] bg-cover bg-center bg-no-repeat">

        <div className="md:py-20 md:px-40 py-4 px-4 uppercase ">
          <div className="mb-10">
          <H2Title text="Official Media " size="48px" />
          <H3Title text="YAHWEH REPRESENTS " size="24px" />
          </div>
          <div className="grid grid-cols-3 gap-4 justify-center items-center">
           <OfficialMediaCard/>
           <OfficialMediaCard/>
           <OfficialMediaCard/>
           <OfficialMediaCard/>
           <OfficialMediaCard/>
           <OfficialMediaCard/>
           <OfficialMediaCard/>
           <OfficialMediaCard/>
           <OfficialMediaCard/>
          </div>
        </div>

        <div></div>
      </div>

  );
};

export default OfficialMediaSection;
