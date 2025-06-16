import Container from "../Container/container";
import CrewCard from "../CrewCard";
import Image from "next/image";

const CreditsAboutUs = () => {
  return (
    <div className="bg-[url('/images/sectionbackgrounds/whitecloth.png')] bg-cover bg-center bg-no-repeat">
      <Container>

        <div className="min-h-[50vh] bg-black/20 flex flex-col w-full h-full">
          <div className="text-white md:py-20 py-4 px-4 font-extrabold">
            <div>
              <h2 className="  mb-3 md:mb-5 text-3xl md:text-5xl sm:text-4xl">
                YAHWEH&apos;S CREATIONS CREW
              </h2>
              <p className="max-w-[38rem] text-sm sm:text-sm">
                &quot;We are a team of passionate developers, artists, and
                storytellers creating atmospheric, immersive games with a touch of
                the divine and the macabre.&quot;
              </p>
            </div>
            <div className="mt-5 md:mt-13">
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <CrewCard title="Artists">
                  <h3>Elmina Lindfors Wegler</h3>
                  <h3>Mimi-Lee Eriksson</h3>
                </CrewCard>
                <CrewCard title="Designers">
                  <h3>John Geir Andersson</h3>
                  <h3>Federcio Garcia</h3>
                  <h3>Daniel Atterby Pontus Björkande</h3>
                </CrewCard>
                <CrewCard title="Programmers">
                  <h3>Orkun Arslantürk</h3>
                  <h3>Milo Zander Frenell</h3>
                  <h3>Linus Jernström</h3>
                  <h3>Luva Teike</h3>
                  <h3>Yasmin Adas</h3>
                </CrewCard>
              </div>
              <div className="flex flex-col md:flex-row gap-4 justify-between ">
                <div>
                  <CrewCard title="Animation and VFX">
                    <h3>Justin Lustig - Animator</h3>
                    <h3>Patric Svedberg - Animation/VFX BACKUP</h3>
                    <h3>Rebecka Timper - Art Director and VFX Artist</h3>
                  </CrewCard>
                  <CrewCard title="Management">
                    <h3>Fredrik Buckard - Game Producer</h3>
                    <h3>Gabriel Isabar - Release Manager</h3>
                    <h3>Jakob Gabriel - Release Manager</h3>
                    <h3>Anna Andrén - Project Manager & Scrum Master</h3>
                  </CrewCard>
                </div>
                <div className="flex   md:items-center md:justify-center">
                  <Image
                    src="/images/recropgothic.png"
                    alt="whitecloth"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-auto">
            <Image
              src="/images/effects/gradientline.png"
              alt="whitecloth"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreditsAboutUs;
