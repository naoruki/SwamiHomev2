import Activities from "../components/ActivitiesSection.jsx";
import horse1 from "../assets/horse/1.jpg";
import sportsImg from "../assets/horse/2.jpg";
import outreachImg from "../assets/horse/3.jpg";

const activitiesData = [
  {
    image: horse1,
    title: "Mama Shop",
    description:
      "Residents enjoyed a fun day shopping for essentials and treats at the monthly mama shop.",
  },
  {
    image: sportsImg,
    title: "Sports Day Celebration",
    description:
      "A day full of fun, laughter, and friendly competition among residents and staff.",
  },
  {
    image: outreachImg,
    title: "Community Outreach",
    description:
      "Volunteers visited local neighborhoods to share kindness and support.",
  },
];

function ActivitiesPage() {
  return (
    <Activities sectionTitle="Our Activities" items={activitiesData} />
  );
}

export default ActivitiesPage;
