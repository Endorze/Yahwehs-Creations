import H2Title from "./components/H2Title/H2Title";
import H3Title from "./components/H3Title/H3Title";
import PlayButton from "./components/PlayButton/PlayButton";
import Button from "./components/testfolder/Button";
import SupporterPack from "./components/ 006-Supporterpack";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <PlayButton />
        <h1 className="text-4xl font-bold text-blue-600">
          Hello Yahweh's Creations fans
        </h1>
        <H2Title text="Test title" size="72px"/>
        <H3Title text="Test title" size="32px"/>
        <Button />
      </div>

      <SupporterPack />
    </>
  );
}
