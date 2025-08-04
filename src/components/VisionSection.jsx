import CustomCarousel from "./VisionMissionCarousel"; // adjust path if needed
import { HandHeartIcon,TargetIcon,ShootingStarIcon,StarIcon} from "@phosphor-icons/react";


const slides = [
  {
    icon: <HandHeartIcon  size={40} weight="fill" />,
    heading: "Our Vision",
    text: "Some representative placeholder content for the first slide.",

  },
  {
    icon: <TargetIcon  size={40} weight="fill" />,
    heading: "Our Mission",
    text: "Some representative placeholder content for the second slide.",

  },
  {
    icon: <ShootingStarIcon  size={40} weight="fill" />,
    heading: "Our Core Values",
    text: "Some representative placeholder content for the third slide.",

  },
    {
    icon: <StarIcon  size={40} weight="fill" />,
    heading: "Our Motto",
    text: "Some representative placeholder content for the third slide.",

  },
];

const VisionSection = () => {
  return <CustomCarousel slides={slides} />;
};

export default VisionSection;
