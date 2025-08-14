import { Container } from "react-bootstrap";
import ResidentailSerivcesHome from "../components/ResidentialServicesHero";
import ResidentialSerivcesSection from "../components/ResidentialServicesSection";
const ResidentialServicesPage = () => (
    <Container>
        <ResidentailSerivcesHome />
        <ResidentialSerivcesSection/>
        {/* Add more components or content for the residential services page here */}
    </Container>
);

export default ResidentialServicesPage;