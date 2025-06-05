
import VisionSection from './components/VisionSection/VisionSection';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Hello Tailwind! And goodmorning Vietnam!
      </h1>

      {/* Your VisionSection */}
      <VisionSection />
    </div>
  );
}
