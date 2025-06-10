import H2Title from "../H2Title/H2Title";
import H3Title from "../H3Title/H3Title";

const BlogHeroSection = () => {
    return (
        <section className="relative">
            <div className="hidden lg:flex bg-[url('/images/sectionbackgrounds/whisperscathedral.png')] bg-cover bg-center w-full text-center text-white justify-center relative pt-36 pb-36">
                <div className="flex flex-col gap-6">
                    <H2Title text="WHISPERS FROM THE CATHEDRAL" size="48px"/>
                    <H3Title text="Latest news straight from YAHWEH'S Cathedral" size="24px"/>
                </div>
            </div>

            {/*Mobil sektion */}
            <div className="flex bg-[url('/images/sectionbackgrounds/whisperscathedral.png')] bg-cover bg-center w-full text-center text-white justify-center relative pt-36 pb-36 px-6 lg:hidden">
                <div className="flex flex-col gap-6">
                    <H2Title text="WHISPERS FROM THE CATHEDRAL" size="32px"/>
                    <H3Title text="Latest news straight from YAHWEH'S Cathedral" size="24px"/>
                </div>
            </div>
            <img src={"/images/effects/gradientline.png"} className='absolute bottom-[0] left-1/2 -translate-x-1/2' />
        </section>
    )
}

export default BlogHeroSection;