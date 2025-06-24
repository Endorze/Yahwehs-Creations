import RecentNews from "../components/017-RecentNews";
import SystemRequirements from "../components/021-systemRequirements";
import BlogHeroSection from "../components/BlogHeroSection/BlogHeroSection";
import FAQSection from "../components/FAQSection/FAQSection";
import LatestNews from "../components/LatestNews";
import MeetTheCreatures from "../components/MeetTheCreatures";
import OfficialMediaSection from "../components/OfficialMediaSection/OfficialMediaSection";

export default function BlogPage() {
  return (
    <section>
      <BlogHeroSection />
      <LatestNews />
      <RecentNews />
      <FAQSection />
      <MeetTheCreatures />
      <OfficialMediaSection />
      <SystemRequirements />
    </section>
  );
}

