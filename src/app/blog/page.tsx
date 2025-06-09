import RecentNews from "../components/017-RecentNews";
import SystemRequirements from "../components/system-requirements/system-requirements";

export default function BlogPage() {
  return (
    <main className="relative">
      <SystemRequirements />
      <RecentNews/>
    </main>
  );
}
