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

function FeatureSection({ name, subtitle, description, image, reverse = false,}: FeatureSectionProps) {
  return (
    <div className="relative my-16">
      <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center`}>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      <div className="w-full md:w-1/2 px-6 md:px-36 mt-8 md:mt-0 text-center md:text-left">
          <H2Title text={name} size="32px" />
          <div className="mt-2">
            <H3Title text={subtitle} size="24px" />
          </div>
          <p className="mt-4 text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;