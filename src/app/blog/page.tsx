import BlogHeroSection from "../components/BlogHeroSection/BlogHeroSection";
import FAQSection from "../components/FAQSection/FAQSection";
import SystemRequirements from "../components/021-systemRequirements";
import OfficialMediaSection from "../components/OfficialMediaSection/OfficialMediaSection";
import AlexTestSystemRequirements from "../components/021-AlexTestSystemRequirements";

export default function BlogPage() {
  return (
    <>
    <main className="relative">
      <BlogHeroSection />
      <FAQSection />
      <OfficialMediaSection/>
      <SystemRequirements />
      <AlexTestSystemRequirements />
    </main>

    </>
  );
}
