import RecentNews from "../components/017-RecentNews";
import SystemRequirements from "../components/021-systemRequirements";
import MeetTheCreatures from "../components/MeetTheCreatures";
import BlogHeroSection from "../components/BlogHeroSection/BlogHeroSection";
import FAQSection from "../components/FAQSection/FAQSection";
import LatestNews from "../components/LatestNews";
import MeetTheCreatures from "../components/MeetTheCreatures";
import SystemRequirements from "../components/system-requirements/system-requirements";

import OfficialMediaSection from "../components/OfficialMediaSection/OfficialMediaSection";

export default function BlogPage() {
  return (
    <section >
     <MeetTheCreatures />
     <RecentNews/>
  <OfficialMediaSection/>
    </section>
  
  
    <>
    <main className="relative">
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