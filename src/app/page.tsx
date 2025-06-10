import SupporterPack from "./components/ 006-Supporterpack";
import BlogHeroSection from "./components/BlogHeroSection/BlogHeroSection";
import FAQSection from "./components/FAQSection/FAQSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <SupporterPack/>
      <BlogHeroSection />
      <FAQSection />
    </div>
  );
}