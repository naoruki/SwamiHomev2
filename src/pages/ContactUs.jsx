import React, { useState } from "react";
import ContactUsHero from "../components/ContactUsHero";
import { Container } from "react-bootstrap";

const ContactUs = () => {
    return (
        <Container>
            <ContactUsHero />
            {/* Add other ContactUs page content here */}
        </Container>
    );
}

export default ContactUs;