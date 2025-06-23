import Image from 'next/image';
import H2Title from '../H2Title/H2Title';
import H3Title from '../H3Title/H3Title';

interface FeatureSectionProps {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  reverse?: boolean;
}

function FeatureSection({ name, subtitle, description, image, reverse = false }: FeatureSectionProps) {
  return (
    <div className="relative my-16">
      <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center`}>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-64 sm:w-80 md:w-[400px]">
            <Image
              src={image}
              alt={name}
              width={400}
              height={400}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 px-6 sm:px-10 md:px-20 lg:px-36 mt-8 md:mt-0 text-center md:text-left">
          <H2Title text={name} size="32px" />
          <div className="mt-2">
            <H3Title text={subtitle} size="24px" />
          </div>
          <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
