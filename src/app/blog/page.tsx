import RecentNews from "../components/017-RecentNews";
import FAQSection from "../components/FAQSection/FAQSection";
import SystemRequirements from "../components/system-requirements/system-requirements";

export default function BlogPage() {
  return (
    <main className="relative">
      <RecentNews/>
      <FAQSection />
      <SystemRequirements />
    </main>
  );
}
