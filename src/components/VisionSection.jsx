import CustomCarousel from "./VisionMissionCards"; // adjust path if needed
import { HandHeartIcon,TargetIcon,ShootingStarIcon,StarIcon} from "@phosphor-icons/react";


const slides = [
  {
    icon: <HandHeartIcon  size={40} weight="fill" />,
    heading: "Our Vision",
    text: "“A world-class organization for eldercare and the needy.”",

  },
  {
    icon: <TargetIcon  size={40} weight="fill" />,
    heading: "Our Mission",
    text: "“To provide holistic quality care with love and dedication for the elderly and needy driven by teamwork and professionalism”",

  },
  {
    icon: <ShootingStarIcon  size={40} weight="fill" />,
    heading: "Our Core Values",
    text: "“Truth, Right Conduct, Peace, Love, Non-Violence”",
  },
    {
    icon: <StarIcon  size={40} weight="fill" />,
    heading: "Our Motto",
    text: "Love all, serve all. Help Ever, Hurt Never.”",

  },
];

const VisionSection = () => {
  return <CustomCarousel slides={slides} />;
};

export default VisionSection;
