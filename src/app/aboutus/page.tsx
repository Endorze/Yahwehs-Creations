
import AboutSection from '../components/AboutSection/AboutSection';
import CreditsAboutUs from '../components/CreditsAboutUs';
import PlaytestingSection from '../components/PlaytestingSection/PlaytestingSection';
export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
      </section>
      <AboutSection />
      <CreditsAboutUs />
      <PlaytestingSection />
    </main>
  );
}
