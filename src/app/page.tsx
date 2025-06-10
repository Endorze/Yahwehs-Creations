import SupporterPack from "./components/ 006-Supporterpack";
import BlogHeroSection from "./components/BlogHeroSection/BlogHeroSection";
import FAQSection from "./components/FAQSection/FAQSection";
import Herosection from "./components/Herosection";

export default function Home() {
  return (
    <div >
      <Herosection />
      <SupporterPack/>
      <BlogHeroSection />
      <FAQSection />
    </div>
  );
}