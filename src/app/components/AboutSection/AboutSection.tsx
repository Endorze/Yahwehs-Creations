 import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Goals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    image: "/images/values/goals.png",
    href: "/blog/goals",
  },
  {
    title: "Vision",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    image: "/images/values/vision.png",
    href: "/blog/vision",
  },
  {
    title: "Values",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    image: "/images/values/values.png",
    href: "/blog/values",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 text-white relative">
   <div className="w-full max-w-screen-xl mx-auto grid gap-12 md:grid-cols-3 text-center px-7">

        {sections.map(({ title, description, image, href }) => (
          <div
            key={title}
            className="flex flex-col items-center w-full max-w-[300px] mx-auto"
             

            
          >
            <Image
              src={image}
              alt={title}
              width={100}
              height={100}
              className="mb-4 object-contain"
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
                height: "5rem", // 4 lines × 1.25rem
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {description}
            </p>

            <Link
              href={href}
              className="relative w-40 h-10 mt-2 group inline-block"
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

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center px-4 sm:px-0">
  <Image
    src="/images/effects/gradientline.png"
    alt="Gradient Line"
    width={320}
    height={6}
    className="h-auto w-full max-w-[365px] sm:max-w-[600px] md:max-w-[700px]"
    />
    </div>
    </section>
  );
}
