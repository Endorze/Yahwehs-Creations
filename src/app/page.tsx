
import Herosection from "./components/Herosection";
import H2Title from "./components/H2Title/H2Title";
import H3Title from "./components/H3Title/H3Title";
import SupporterPack from "./components/ 006-Supporterpack";
import PlaytestingSection from "./components/PlaytestingSection/PlaytestingSection";
import BlogHeroSection from "./components/BlogHeroSection/BlogHeroSection";
import FAQSection from "./components/FAQSection/FAQSection";
import PlayButton from "./components/PlayButton/PlayButton";


export default function Home() {
  return (
    <>
     <HeroSection /> 
      <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">

      <div className="flex flex-col">
      <BlogHeroSection />
      </div>
      <PlaytestingSection />
      <FAQSection />
      <SupporterPack />

      <div className="flex flex-col min-h-screen items-center justify-center">
        <PlayButton />
        <h1 className="text-4xl font-bold text-blue-600">
          Hello Yahweh's Creations fans
        </h1>
        <H2Title text="Test title" size="72px"/>
        <H3Title text="Test title" size="32px"/>  
      </div>
      </div>
    </>
  );
}