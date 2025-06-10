import SupporterPack from "./components/ 006-Supporterpack";
import BlogHeroSection from "./components/BlogHeroSection/BlogHeroSection";
import Herosection from "./components/Herosection";

export default function Home() {
  return (
    <div >
      <Herosection />
      <SupporterPack/>
      <BlogHeroSection />
    </div>
  );
}