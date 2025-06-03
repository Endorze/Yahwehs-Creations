import Image from 'next/image';
import img from "../../../../public/images/social/social_icons_orange.png"
import letters from "../../../../public/images/social/letters-removebg-preview.png"

const Footer = () => {
    return (
        //Should put these colors in config file to avoid having to inline style, but until we got structure i use inline styling here.
        <footer className="bg-color text-white px-6" style={{backgroundColor: "#1B1B1B"}}>
            <Image src={letters} alt='image of letters'/>
            <div className="flex justify-between gap-8">
                <div>
                    <h2>JOIN THE COMMUNITY</h2>
                    <p>We've got an incredible community spread all over the world, so why not join us! Join the discussion on Discord, show us your fan art, chat with us on Twitter and sign up for the official newsletter!</p>
                    <Image src={img} alt='social icons'/>
                </div>
                <div>
                    <h3>LOCATION</h3>
                    <p>Hammarby Fabriksväg 61</p>
                    <p>120 30 Stockholm</p>
                    <h4>SERVICES</h4>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Blog</p>
                </div>
                <div>
                    <h3>CONTACT US</h3>
                    <p>08-33 60 16</p>
                    <p>info@futuregames.se</p>
                    <h4>Media Webdevelopers</h4>
                    <p>Alexander Hallgren</p>
                    <p>Alexander Hallgren</p>
                    <p>Alexander Hallgren</p>
                    <p>Alexander Hallgren</p>
                    <p>Alexander Hallgren</p>
                    <p>Alexander Hallgren</p>
                    <p>Alexander Hallgren</p>
                </div>
            </div>
            <p>&copy; COPYRIGHT &copy; 2025 GAME MATRIX STUDIOS, ALL RIGHTS RESERVED</p>
        </footer>
    )
}

export default Footer;