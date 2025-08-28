import Mymap from "./Map.jsx";
import ContactForm from "./ContactForm.jsx";
const ContactUsSection = () => (
  <div className="my-5">
    <div className="row">
      <div className="col-12 col-md-6">
        <h3>Locate Us</h3>
        <Mymap />
        <div className="mt-3">
          <b>SUNSHINE WELFARE ACTION MISSION (SWAMI Home)</b>
          <p>No.5 Sembawang Walk Singapore 757717</p>
          Tel: 6257 6117
          <br />
          Fax: 6754 8443
          <br />
          Email: enquiry@swami.org.sg
        </div>
      </div>
      <div className="col-12 col-md-6 py-5">
        <h4>Drop Us An Message</h4>
        <ContactForm />
      </div>
    </div>
  </div>
);

export default ContactUsSection;
