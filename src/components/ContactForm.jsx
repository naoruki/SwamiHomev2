import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null);
  const formRef = useRef(null);

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const recipient =
    import.meta.env.VITE_FORMSUBMIT_EMAIL || "YOUR_EMAIL@example.com";
  const homeUrl = `${window.location.origin}/`;

  const hasSpecialChars = (text) => /[^a-zA-Z0-9 @.,?!'"()-]/.test(text);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (hasSpecialChars(value)) {
      setErrors((prev) => ({
        ...prev,
        [name]: "Special characters are not allowed.",
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCaptchaChange = (token) => setCaptchaToken(token);
  const handleCaptchaExpired = () => setCaptchaToken(null);

  const handleBeforeSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      Swal.fire({
        icon: "warning",
        title: "reCAPTCHA Required",
        text: "Please complete the reCAPTCHA before submitting.",
      });
      return;
    }

    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Please fix the errors in the form before submitting.",
      });
      return;
    }

    const result = await Swal.fire({
      title: "Confirm Submission",
      text: "Are you sure you want to send this message?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, send it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for reaching out. We’ll get back to you soon.",
        timer: 3000,
        showConfirmButton: false,
      }).then(() => {
        formRef.current.submit();
      });
    }
  };

  return (
    <form
      ref={formRef}
      action={`https://formsubmit.co/${encodeURIComponent(recipient)}`}
      method="POST"
      onSubmit={handleBeforeSubmit}
      acceptCharset="UTF-8"
    >
      <input type="hidden" name="_subject" value="New Contact Form Submission" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={homeUrl} />
      <input
        type="text"
        name="_honey"
        style={{ display: "none" }}
        tabIndex="-1"
        autoComplete="off"
      />

      {/* Name */}
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
        {errors.name && <p className="text-danger">{errors.name}</p>}
      </div>

      {/* Email */}
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
        {errors.email && <p className="text-danger">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div className="mb-3">
        <label className="form-label">Subject</label>
        <select
          className="form-control"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          style={{ appearance: "auto" }}
        >
          <option value="">Select Subject</option>
          <option value="Donation">Donation</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Others">General</option>
        </select>
        {errors.subject && <p className="text-danger">{errors.subject}</p>}
      </div>

      {/* Message */}
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
        {errors.message && <p className="text-danger">{errors.message}</p>}
      </div>

      {/* reCAPTCHA */}
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

      {/* Optional Hints */}
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
