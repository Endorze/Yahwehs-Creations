import SupporterPack from "./components/ 006-Supporterpack";
import OurCreations from "./components/OurCreations/OurCreations";
import LatestNews from "./components/LatestNews/index"
import Herosection from "./components/Herosection";

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
  
