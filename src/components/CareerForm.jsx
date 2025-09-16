import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    position: "",
    message: "",
    file: null,
  });

  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleCaptchaChange = (token) => setCaptchaToken(token);
  const handleCaptchaExpired = () => setCaptchaToken(null);

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const recipient = import.meta.env.VITE_FORMSUBMIT_EMAIL_CAREER;
  const homeUrl = `${window.location.origin}/`;

  const handleBeforeSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      Swal.fire({
        icon: "warning",
        title: "reCAPTCHA Required",
        text: "Please verify that you're not a robot before submitting.",
      });
      return;
    }

    Swal.fire({
      title: "Confirm Submission",
      text: "Are you sure you want to send your application?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, send it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Submitted!",
          text: "Your application has been sent successfully.",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          e.target.submit(); // Submit the form
        });
      }
    });
  };

  return (
    <form
      action={`https://formsubmit.co/${encodeURIComponent(recipient)}`}
      method="POST"
      onSubmit={handleBeforeSubmit}
      acceptCharset="UTF-8"
      encType="multipart/form-data"
    >
      {/* Hidden FormSubmit settings */}
      <input type="hidden" name="_subject" value="New Career Form Submission" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={homeUrl} />
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

      {/* Form Fields */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="position"
          placeholder="Interested Position"
          value={formData.position}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          name="message"
          rows="3"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">Upload your resume (PDF or Word)</label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          name="file"
          accept=".pdf, .doc, .docx"
          onChange={handleChange}
          required
        />
      </div>

      {/* reCAPTCHA */}
      <div className="mb-3">
        <ReCAPTCHA
          sitekey={siteKey}
          onChange={handleCaptchaChange}
          onExpired={handleCaptchaExpired}
        />
      </div>

      <div className="mb-3">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!captchaToken || !siteKey || !recipient}
        >
          Submit
        </button>
      </div>

      {/* Optional warnings */}
      {!recipient && (
        <p className="text-danger">
          Missing <code>VITE_FORMSUBMIT_EMAIL</code> in your .env file.
        </p>
      )}
      {!siteKey && (
        <p className="text-danger">
          Missing <code>VITE_RECAPTCHA_SITE_KEY</code> in your .env file.
        </p>
      )}
    </form>
  );
}

export default CareerForm;