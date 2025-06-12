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

const FeatureSection: React.FC<FeatureSectionProps> = ({name,subtitle,description,image,reverse = false,}) => {
  return (
    <div className="relative my-16">
      {/* Main content */}
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

        {/* <div className="w-full md:w-1/2 text-center md:text-left px-6 mt-8 md:mt-0 md:ms-25"> */}
        <div className="w-full md:w-1/2 px-6 mt-8 md:mt-0 text-center md:text-left md:ms-25">

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
};

export default FeatureSection;
