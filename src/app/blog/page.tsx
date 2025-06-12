<<<<<<< HEAD
import RecentNews from "../components/017-RecentNews";
import BlogHeroSection from "../components/BlogHeroSection/BlogHeroSection";
import FAQSection from "../components/FAQSection/FAQSection";
import SystemRequirements from "../components/system-requirements/system-requirements";

import OfficialMediaSection from "../components/OfficialMediaSection/OfficialMediaSection";

export default function BlogPage() {
  return (
    <>
    <main className="relative">
      <BlogHeroSection />
      <RecentNews/>
      <FAQSection />
      <OfficialMediaSection/>
      <SystemRequirements />
    </main>

    </>
=======
import SystemRequirements from "../components/021-systemRequirements";

export default function BlogPage() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-4">Blog Page</h1>
      <p className="text-lg text-gray-700">
        Welcome to our Blog page. Here you'll find information about our mission, team, and story.
      </p>
      <SystemRequirements />
    </section>
>>>>>>> 021-Feature/systemRequirements
  );
}
