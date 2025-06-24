<<<<<<< HEAD
import SystemRequirements from "../components/system-requirements/system-requirements";

export default function BlogPage() {
  return (
    <main className="relative">
      <SystemRequirements />
    </main>
=======
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
>>>>>>> 172508f2771d06c463b20fdeb3333c28ef9549fe
  );
}
