import ContactUsHero from "../components/ContactUsHero";
import ContactUsSection from "../components/ContactUsSection";
import { Container } from "react-bootstrap";

const ContactUs = () => {
  return (
    <>
      <ContactUsHero />
      <Container>
        <ContactUsSection />
      </Container>
    </>
  );
};

export default ContactUs;
