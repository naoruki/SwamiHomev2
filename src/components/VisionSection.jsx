import CustomCarousel from "./VisionMissionCarousel"; // adjust path if needed


const slides = [
  {
    icon: "test",
    heading: " Mission",
    text: "Some representative placeholder content for the first slide.",

  },
  {
    icon: "Test",
    heading: "Another example headline.",
    text: "Some representative placeholder content for the second slide.",

  },
  {
    icon: "test",
    heading: "One more for good measure.",
    text: "Some representative placeholder content for the third slide.",

  },
];

const VisionSection = () => {
  return <CustomCarousel slides={slides} />;
};

export default VisionSection;
