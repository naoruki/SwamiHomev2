import CustomCarousel from "./VisionMissionCards"; // adjust path if needed
import OurMissionCards from "./OurMissionForAboutUs";
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
    text: "“Truth, Right Conduct, Peace, Love, Non-Violence”",
  },
    {
    icon: <StarIcon  size={40} weight="fill" />,
    heading: "Our Motto",
    text: "“Love all, serve all. Help Ever, Hurt Never.”",

  },
];

const VisionAboutUsSection = () => {
  return <OurMissionCards slides={slides} />;
};

export default VisionAboutUsSection;
