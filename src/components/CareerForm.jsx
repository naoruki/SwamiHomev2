import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (token) => setCaptchaToken(token);
  const handleCaptchaExpired = () => setCaptchaToken(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setCaptchaToken(null);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    }
  };

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  return (
    <form onSubmit={handleSubmit} acceptCharset="UTF-8">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          maxLength={100}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={200}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Subject</label>
        <input
          type="text"
          className="form-control"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          maxLength={150}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          className="form-control"
          name="message"
          rows="3"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={5000}
        />
      </div>

      <div className="mb-3">
        <ReCAPTCHA
          sitekey={siteKey}
          onChange={handleCaptchaChange}
          onExpired={handleCaptchaExpired}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={!captchaToken || !siteKey}
      >
        Submit
      </button>

      {!siteKey && (
        <p className="mt-2 text-danger">
          Missing <code>VITE_RECAPTCHA_SITE_KEY</code> in your .env file.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
