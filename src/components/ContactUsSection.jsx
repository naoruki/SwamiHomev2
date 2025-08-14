import Mymap from "./Map.jsx";
import ContactForm from "./ContactForm.jsx"
const ContactUsSection = () => (
  <div className="my-5">
    <div className="row">
      <div className="col-12 col-md-6">
        <h3>Locate Us</h3>
        <Mymap />
      </div>
      <div className="col-12 col-md-6 py-5">
        <h4>Drop Us An Message</h4>
        <ContactForm/>
      </div>
    </div>
  </div>
);

export default ContactUsSection;
