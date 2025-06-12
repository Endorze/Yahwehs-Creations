import SupporterPack from "./components/ 006-Supporterpack";
import Herosection from "./components/Herosection1";
import OurCreations from "./components/OurCreations/OurCreations";
import LatestNews from "./components/LatestNews/index"

export default function Home() {
  return (
    <>
    <div >
      <Herosection />
      <SupporterPack/>
      <OurCreations />
    </div>
    <LatestNews />
 </>
  );

}
  
