import SupporterPack from "./components/ 006-Supporterpack";
import Herosection from "./components/Herosection";
import OurCreations from "./components/OurCreations/OurCreations";
import LatestNews from "./components/LatestNews/index"

export default function Home() {
  return (
    <>
      <Herosection />
      <SupporterPack />
      <OurCreations />
      <LatestNews />
    </>
  );

}
