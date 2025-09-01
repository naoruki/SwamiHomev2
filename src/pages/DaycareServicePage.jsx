import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import DaycareService from "../components/DayCareService.jsx";

const DayCareServicePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for DOM to render
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 100; // Adjust this value as needed
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 0);
    }
  }, [hash]);

  return (
    <Container>
      <DaycareService />
    </Container>
  );
};

export default DayCareServicePage;