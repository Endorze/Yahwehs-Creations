import RecentNews from "../components/017-RecentNews";
import MeetTheCreatures from "../components/MeetTheCreatures";
import BlogHeroSection from "../components/BlogHeroSection/BlogHeroSection";
import FAQSection from "../components/FAQSection/FAQSection";
import SystemRequirements from "../components/system-requirements/system-requirements";

import OfficialMediaSection from "../components/OfficialMediaSection/OfficialMediaSection";
import AlexTestSystemRequirements from "../components/021-AlexTestSystemRequirements";

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
      <RecentNews/>
      <FAQSection />
      <OfficialMediaSection/>
      <SystemRequirements />
      <AlexTestSystemRequirements />
    </main>

    </>
  );
}
