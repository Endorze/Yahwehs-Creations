import SupporterPack from "./components/ 006-Supporterpack";
import LatestNews from "./components/LatestNews/index"
import HeroSection from "./components/Herosection";
import OurCreations from "./components/OurCreations/OurCreations";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center">
        <HeroSection />
        <LatestNews />
        <SupporterPack />
        <OurCreations />
      </div>
    </>
  );
}
