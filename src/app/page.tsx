import H2Title from "./components/H2Title/H2Title";
import HeroSection from "./components/HeroSection";
import PlayButton from "./components/PlayButton/PlayButton";
import SupporterPack from "./components/SupporterPack";
import Button from "./components/testfolder/Button";


export default function Home() {
  return (
    <>
    
     <HeroSection /> 
      <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
        <PlayButton />
        <h1 className="text-4xl font-bold text-blue-600">
          Hello Tailwind! And goodmorning Vietnam!
        </h1>
        <H2Title text="Test title" size="72px"/>
        <Button />
      </div>

      <SupporterPack />
    </>
  );
}
