import MeetTheCreatures from "../components/MeetTheCreatures";
import RecentNews from "../components/017-RecentNews";
import BlogHeroSection from "../components/BlogHeroSection/BlogHeroSection";
import FAQSection from "../components/FAQSection/FAQSection";
import SystemRequirements from "../components/021-systemRequirements";
import OfficialMediaSection from "../components/OfficialMediaSection/OfficialMediaSection";

export default function BlogPage() {
  return (
    <>
    <main className="relative">
      <BlogHeroSection />
      <FAQSection />
      <RecentNews />
      <OfficialMediaSection/>
      <SystemRequirements />
       <MeetTheCreatures />
      
    </main>

    </>




    
  
  );
}