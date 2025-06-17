import Image from 'next/image';
import img from "../../../../public/images/social/social_icons_orange.png"
import letters from "../../../../public/images/social/letters-removebg-preview.png"
import H2Title from '../H2Title/H2Title';
import H3Title from '../H3Title/H3Title';

const Footer = () => {
    return (
        //Should put these colors in config file to avoid having to inline style, but until we got structure i use inline styling here.
        <footer className="bg-color text-white lg:p-18 lg:pt-32 pt-12 relative" style={{ backgroundColor: "#1B1B1B" }}>
            <div className="hidden lg:flex w-full flex justify-end relative">
                <Image src={letters} alt="image of letters" className='w-80 bottom-150 xl:w-120 absolute bottom-[-20px]' />
            </div>

            <div className="hidden lg:flex justify-between gap-8">
                <div className='w-md'>
                    <div className='w-80'>
                        <H2Title text='JOIN THE COMMUNITY' size='48px' />
                    </div>
                    <p style={{ color: "#808080" }}>We've got an incredible community spread all over the world, so why not join us! Join the discussion on Discord, show us your fan art, chat with us on Twitter and sign up for the official newsletter!</p>
                    <a href='/'><Image src={img} alt='social icons' className='pt-6' /></a>
                </div>
                <div className='w-xs'>
                    <H2Title text='LOCATION' size='32px' />
                    <div className='pb-2'>
                        <p>Hammarby Fabriksväg 61</p>
                        <p>120 30 Stockholm</p>
                    </div>
                    <H3Title text='SERVICES' size='12px' />
                    <div className='pt-2'>
                        <a href='/' className="hover:underline"><p>Home</p></a>
                        <a href='/aboutus' className="hover:underline"><p>About us</p></a>
                        <a href='/blog' className="hover:underline"><p>Blog</p></a>
                    </div>
                </div>
                <div className='w-xs'>
                    <H2Title text='CONTACT US' size='32px' />
                    <div className='pb-2'>
                        <a href="tel:08336016" className="hover:underline"><p>08-33 60 16</p></a>
                        <a href="mailto:info@futuregames.se" className="hover:underline"><p>info@futuregames.se</p></a>
                    </div>
                    <H3Title text='Media Webdevelopers' size='12px' />
                    <div className='pt-2'>
                        <a href='https://www.linkedin.com/in/alexander-hallgren-5a4a501aa/' target="_blank" rel="noopener noreferrer" className='hover:underline'><p>Alexander Hallgren</p></a>
                        <a href='http://linkedin.com/in/andrew-julius-kalumba-82b02b348' target="_blank" rel="noopener noreferrer" className="hover:underline"><p>Andrew Julius Kalumba </p></a>
                        <a href='https://www.linkedin.com/in/mushira-salah-1659612a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer" className="hover:underline"><p>Moshira Abdelwahad</p></a>
                        <a href='https://www.linkedin.com/in/mariym-aqbal-63741636a?original_referer=https%3A%2F%2Fstatics.teams.cdn.office.net%2F' target="_blank" rel="noopener noreferrer" className="hover:underline"><p>Mariym Aqbal</p></a>
                        <a href='https://www.linkedin.com/in/vineetha-veerapu/' target="_blank" rel="noopener noreferrer" className="hover:underline"><p>Vineetha Veerapu</p></a>
                        <a href='https://www.linkedin.com/in/yasmineborghol/' target="_blank" rel="noopener noreferrer" className="hover:underline"><p>Yasmine Borghol</p></a>
                        <a href='https://www.linkedin.com/in/saba-waheed-0bb188367/' target="_blank" rel="noopener noreferrer" className="hover:underline"><p>Saba Waheed</p></a>
                    </div>
                    <div className='pt-2'>
                        <H3Title text='UX DESIGNER' size='12px' />
                        <a href='https://www.linkedin.com/in/alexander-hallgren-5a4a501aa/' className='hover:underline'><p>Alexander Hallgren</p></a>
                    </div>
                </div>
            </div>

            {/*This is where i make a mobile footer to display elements in a different way (this is because the layout needs to be altered in more than flex-column to look similar to the design*/}
            <div className='flex relative flex-col items-center gap-10 overflow-hidden lg:hidden'>
                <div className="max-w-6xl mx-auto px-6">
                    <div className='max-w-md'>
                        <div className='flex'>
                            <Image src={letters} alt="image of letters" className='h-25 w-auto absolute right-0' />
                            <H2Title text='JOIN THE COMMUNITY' size='48px' />
                        </div>
                        <p style={{ color: "#808080" }}>We've got an incredible community spread all over the world, so why not join us! Join the discussion on Discord, show us your fan art, chat with us on Twitter and sign up for the official newsletter!</p>
                        <a href='/'><Image src={img} alt='social icons' className='pt-6 pb-6' /></a>
                    </div>
                    <div className='flex gap-8'>
                        <div className='flex-col'>
                            <div className='pb-2'>
                                <H2Title text='LOCATION' size='32px' />
                                <p>Hammarby Fabriksväg 61</p>
                                <p>120 30 Stockholm</p>
                            </div>
                            <H3Title text='SERVICES' size='12px' />
                            <div className='pt-2'>
                                <a href='/'><p>Home</p></a>
                                <a href='/aboutus'><p>About us</p></a>
                                <a href='/blog'><p>Blog</p></a>
                            </div>
                        </div>

                        <div className='flex-col'>
                            <H2Title text='CONTACT US' size='32px' />
                            <div className='pb-2'>
                                <a href="tel:08336016" className="hover:underline"><p>08-33 60 16</p></a>
                                <a href="mailto:info@futuregames.se" className="hover:underline"><p>info@futuregames.se</p></a>
                            </div>
                            <H3Title text='Media Webdevelopers' size='12px' />
                            <div className='pt-2'>
                                <a href='https://www.linkedin.com/in/alexander-hallgren-5a4a501aa/' target="_blank" rel="noopener noreferrer" className='hover:underline'><p>Alexander Hallgren</p></a>
                                <a href='http://linkedin.com/in/andrew-julius-kalumba-82b02b348' target="_blank" rel="noopener noreferrer" className="hover:underline"><p>Andrew Julius Kalumba </p></a>
                                <a href='https://www.linkedin.com/in/mushira-salah-1659612a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer" className="hover:underline"><p>Moshira Abdelwahad</p></a>
                                <a href='https://www.linkedin.com/in/mariym-aqbal-63741636a?original_referer=https%3A%2F%2Fstatics.teams.cdn.office.net%2F' target="_blank" rel="noopener noreferrer" className="hover:underline"><p>Mariym Aqbal</p></a>
                                <a href='https://www.linkedin.com/in/vineetha-veerapu/' target="_blank" rel="noopener noreferrer" className="hover:underline"><p>Vineetha Veerapu</p></a>
                                <a href='https://www.linkedin.com/in/yasmineborghol/' target="_blank" rel="noopener noreferrer" className="hover:underline"><p>Yasmine Borghol</p></a>
                                <a href='https://www.linkedin.com/in/saba-waheed-0bb188367/' target="_blank" rel="noopener noreferrer" className="hover:underline"><p>Saba Waheed</p></a>
                            </div>
                            <div className='pt-2'>
                                <H3Title text='UX DESIGNER' size='12px' />
                                <a href='https://www.linkedin.com/in/alexander-hallgren-5a4a501aa/' target="_blank" rel="noopener noreferrer" className='hover:underline'><p>Alexander Hallgren</p></a>
                            </div>
                        </div>
                    </div>

                    <p className='pt-20 pb-6' style={{ fontSize: "14px", fontWeight: "normal" }}>&copy; COPYRIGHT &copy; 2025 GAME MATRIX STUDIOS, ALL RIGHTS RESERVED</p>
                </div>
            </div>
            <p className='hidden lg:block pt-10 pb-6 text-sm font-normal' style={{ fontSize: "14px", fontWeight: "normal" }}>&copy; COPYRIGHT &copy; 2025 GAME MATRIX STUDIOS, ALL RIGHTS RESERVED</p>
            <img src={"/images/effects/gradientline.png"} className='absolute bottom-[0] left-1/2 -translate-x-1/2' />
        </footer>
    )
}

export default Footer;