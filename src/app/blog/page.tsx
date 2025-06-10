import RecentNews from "../components/017-RecentNews";
import BlogHeroSection from "../components/BlogHeroSection/BlogHeroSection";
import FAQSection from "../components/FAQSection/FAQSection";
import SystemRequirements from "../components/system-requirements/system-requirements";

export default function BlogPage() {
  return (
    <main className="relative">
      <BlogHeroSection />
      <RecentNews/>
      <FAQSection />
      <SystemRequirements />
    </main>
  );
}
