import H2Title from "./components/H2Title/H2Title";
import H3Title from "./components/H3Title/H3Title";
import SupporterPack from "./components/ 006-Supporterpack";
import PlaytestingSection from "./components/PlaytestingSection/PlaytestingSection";
import BlogHeroSection from "./components/BlogHeroSection/BlogHeroSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
      <BlogHeroSection />
      </div>
      <PlaytestingSection />
      <SupporterPack />
    </>
  );
}
