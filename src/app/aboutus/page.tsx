
<<<<<<< HEAD
import AboutSection from '../components/AboutSection/AboutSection';
import CreditsAboutUs from '../components/CreditsAboutUs';
export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          Welcome to our About Us page. Here you'll find information about our mission, team, and story.
        </p>
      </section>
      <AboutSection />
      <CreditsAboutUs />
    </main>
=======
import TrailerSection from '../components/010-TrailerSection';
import AboutSection from '../components/AboutSection/AboutSection';
import CreditsAboutUs from "../components/CreditsAboutUs";
import PlaytestingSection from '../components/PlaytestingSection/PlaytestingSection';

export default function AboutUsPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <TrailerSection />
        <AboutSection />
        <CreditsAboutUs />
        <PlaytestingSection />
      </main>
    </>

>>>>>>> 172508f2771d06c463b20fdeb3333c28ef9549fe
  );
}
