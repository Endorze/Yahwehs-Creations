import SupporterPack from "./components/ 006-Supporterpack";
import Herosection from "./components/Herosection";
import OurCreations from "./components/OurCreations/OurCreations";

import H2Title from "./components/H2Title/H2Title";
import H3Title from "./components/H3Title/H3Title";
import PlayButton from "./components/PlayButton/PlayButton";
import LatestNews from "./components/LatestNews/index"

export default function Home() {
  return (
    <div >
      <Herosection />
      <SupporterPack/>
      <OurCreations />
    </div>
    <LatestNews />
 </>
  );

}
