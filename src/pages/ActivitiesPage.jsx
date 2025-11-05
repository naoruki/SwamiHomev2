import Activities from "../components/ActivitiesSection.jsx";
import horse1 from "../assets/commcare.png";

const activitiesData = [
  {
    image: horse1,
    title: "Celebrating Community Care 2025",
    description:
      "Celebrating the spirit of community care and support. Look out for this corner for updates.",
  },

];

function ActivitiesPage() {
  return (
    <Activities sectionTitle="Our Activities" items={activitiesData} />
  );
}

export default ActivitiesPage;
