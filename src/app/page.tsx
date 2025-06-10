import SupporterPack from "./components/ 006-Supporterpack";
import Herosection from "./components/Herosection";
import OurCreations from "./components/OurCreations/OurCreations";

export default function Home() {
  return (
    <div >
      <Herosection />
      <SupporterPack/>
      <OurCreations />
    </div>
  );
}
