import OfficialMediaSection from "../components/OfficialMediaSection/OfficialMediaSection";

export default function BlogPage() {
  return (
    <>
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-4">Blog Page</h1>
      <p className="text-lg text-gray-700">
        Welcome to our Blog page. Here you'll find information about our mission, team, and story.
      </p>
    </section>
    <OfficialMediaSection/>
    </>
  );
}
