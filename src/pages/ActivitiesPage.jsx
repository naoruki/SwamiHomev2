import Activities from "../components/ActivitiesSection.jsx";
import comcard from "../assets/commcare.png";
import Mamashop1 from "../assets/mamashop2025/IMG_4724-jpg.jpg";
import Mamashop2 from "../assets/mamashop2025/image1.jpg";
import Mamashop3 from "../assets/mamashop2025/image3.jpg";

const activitiesData = [
  {
    image: comcard, // only 1 image (no slider, just static)
    title: "Celebrating Community Care 2025",
    description:
      "Celebrating the spirit of community care and support. Look out for this corner for updates.",
  },
  {
    images: [Mamashop1, Mamashop2, Mamashop3], // slider in modal
    title: "MAMAK Shop",
    description:
      "Swami Home sets up a MAMAK Shop once a month, where residents can purchase food, snacks, and drinks.",
  },
];

function ActivitiesPage() {
  return <Activities sectionTitle="Our Activities" items={activitiesData} />;
}

export default ActivitiesPage;
