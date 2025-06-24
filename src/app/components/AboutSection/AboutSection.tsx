 import Image from "next/image";
import Link from "next/link";
import Container from "../Container/container";

const sections = [
  {
    title: "Goals",
    description:
      "Our primary goal is to create a game that resonates with a mature audience — players who crave something deeper, darker, and more challenging than what mainstream titles often deliver. We’re building an experience that weaves first-person exploration, puzzle mechanics, and psychological dread into a seamless whole. If you’re drawn to slow-burn horror, cryptic symbols, and the thrill of decoding a world that refuses to explain itself — this descent is meant for you.",
    image: "/images/values/goals.png",
    href: "/blog#faq",
  },
  {
    title: "Vision",
    description:
      "We believe games can be more than entertainment — they can be places of tension, beauty, and reflection. OK'RHAMS Cathedral is built to unsettle, to mesmerize, and to linger. Our vision is to craft a world where the sacred becomes strange, and every shadow might conceal something divine... or something else entirely. We don’t hold your hand. We dim the lights — and ask you to walk forward.",
    image: "/images/values/vision.png",
    href: "/blog#faq",
  },
  {
    title: "Values",
    description:
      "We know that Ok'Rhams Cathedral touches on heavy, sometimes disturbing themes — faith, guilt, death, judgment. That’s intentional. But it’s never for shock value. It’s because we believe games can challenge, provoke, and ask uncomfortable questions. That said: If the tone, the themes, or the atmosphere don’t resonate with you — we completely understand.This game isn’t for everyone. It wasn’t meant to be. But for those it is meant for — it will speak deeply.",
    image: "/images/values/values.png",
    href: "/blog#faq",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 text-white relative">
      <Container>

        <div className="w-full max-w-screen-xl mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {sections.map(({ title, description, image, href }) => (
            <div
              key={title}
              className="flex flex-col items-center w-full max-w-[300px] mx-auto"
            >
              <Image
                src={image}
                alt={title}
                width={80}
                height={80}
                className="mb-4 object-contain sm:w-[100px] sm:h-[100px]"
              />

              <h3
                className="text-2xl font-bold text-[#f3b03f] mb-2"
                style={{ fontFamily: "'Germania One', cursive" }}
              >
                {title}
              </h3>

              <p
                className="text-sm mb-4 px-4 w-full"
                style={{
                  fontFamily: "'Germania One', cursive",
                  color: "#808080",
                  lineHeight: "1.25rem",
                  height: "5rem",
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {description}
              </p>

              <Link href={href} className="relative w-32 sm:w-40 h-10 mt-2 group inline-block"
              >
                <Image
                  src="/images/orangebutton.png"
                  alt="Read More"
                  fill
                  sizes="160px"
                  className="object-contain"
                />
                <span
                  className="absolute inset-0 flex items-center justify-center text-white text-sm group-hover:scale-105 transition"
                  style={{ fontFamily: "'Germania One', cursive" }}
                >
                  READ MORE
                </span>
                
              </Link>
            </div>
          ))}
        </div>

        {/* Gradient Line at Bottom */}
      </Container>
         <img src={"/images/effects/gradientline.png"} className="absolute bottom-0 left-1/2 -translate-x-1/2" />
    </section>
  );
}

 