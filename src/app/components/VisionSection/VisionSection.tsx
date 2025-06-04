import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Goals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer faucibus ex eget elit.",
    image: "/images/values/goals.png",
    href: "/blog/goals",
  },
  {
    title: "Vision",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer faucibus ex eget elit.",
    image: "/images/values/vision.png",
    href: "/blog/vision",
  },
  {
    title: "Values",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer faucibus ex eget elit.",
    image: "/images/values/values.png",
    href: "/blog/values",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3 text-center">
        {sections.map(({ title, description, image, href }) => (
          <div key={title} className="flex flex-col items-center">
            {/* Section Image */}
            <Image
              src={image}
              alt={title}
              width={100}
              height={100}
              className="mb-4 object-contain"
            />

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#f3b03f] mb-2">{title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-4 px-2">{description}</p>

            {/* Custom Button */}
            <Link href={href}>
              <a className="relative w-40 h-10 mt-2 group">
                <Image
                  src="/images/orangebutton.png"
                  alt="Read More"
                  layout="fill"
                  objectFit="contain"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm group-hover:scale-105 transition">
                  READ MORE
                </span>
              </a>
            </Link>

            {/* Gradient Line */}
            <div className="w-full mt-4">
              <Image
                src="/images/effects/gradientline.png"
                alt="Gradient Line"
                width={160}
                height={8}
                className="mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
