import CustomCarousel from "./VisionMissionCards"; // adjust path if needed
import { HandHeartIcon,TargetIcon,ShootingStarIcon,StarIcon} from "@phosphor-icons/react";


const slides = [
  {
    icon: <HandHeartIcon  size={40} weight="fill" />,
    heading: "Our Vision",
    text: "“A centre for Excellence in Human Values and a role model for elder care”",

  },
  {
    icon: <TargetIcon  size={40} weight="fill" />,
    heading: "Our Mission",
    text: "“Providing holistic quality care for the elderly, needy and staff by consciously transforming into more humane individuals. Together we dedicate ourselves to selfless service with selfless love.”",

  },
  {
    icon: <ShootingStarIcon  size={40} weight="fill" />,
    heading: "Our Core Values",
    text: "Some representative placeholder content for the third slide.",

  },
    {
    icon: <StarIcon  size={40} weight="fill" />,
    heading: "Our Motto",
    text: "Love All Serve All",

  },
];

const VisionSection = () => {
  return <CustomCarousel slides={slides} />;
};

export default VisionSection;
