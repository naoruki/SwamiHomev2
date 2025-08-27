import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  // Controlled inputs (keeps your original style)
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

  // Prevent submission unless CAPTCHA solved
  const handleBeforeSubmit = (e) => {
    if (!captchaToken) {
      e.preventDefault();
      alert("Please complete the reCAPTCHA.");
    }
  };

  // Config (envs optional)
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const recipient =
    import.meta.env.VITE_FORMSUBMIT_EMAIL || "YOUR_EMAIL@example.com";

  // Absolute URL to your main page (recommended by FormSubmit)
  const homeUrl = `${window.location.origin}/`;

  return (
    <form
      action={`https://formsubmit.co/${encodeURIComponent(recipient)}`}
      method="POST"
      onSubmit={handleBeforeSubmit}
      acceptCharset="UTF-8"
    >
      {/* FormSubmit hidden configs */}
      <input type="hidden" name="_subject" value="New Contact Form Submission" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" /> {/* Using Google reCAPTCHA */}
      <input type="hidden" name="_next" value={homeUrl} />   {/* Redirect to main page */}

      {/* Honeypot (anti-spam) */}
      <input
        type="text"
        name="_honey"
        style={{ display: "none" }}
        tabIndex="-1"
        autoComplete="off"
      />

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

      {/* Google reCAPTCHA (v2 checkbox) */}
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
        disabled={!captchaToken || !siteKey || !recipient}
      >
        Submit
      </button>

      {/* Optional hints if env not set */}
      {!recipient && (
        <p className="mt-2 text-danger">
          Missing <code>VITE_FORMSUBMIT_EMAIL</code> in your .env file.
        </p>
      )}
      {!siteKey && (
        <p className="mt-2 text-danger">
          Missing <code>VITE_RECAPTCHA_SITE_KEY</code> in your .env file.
        </p>
      )}
    </form>
  );
};

export default ContactForm;