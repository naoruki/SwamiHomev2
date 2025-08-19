import { useState } from "react";

function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    position: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="highlight">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
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
          />
        </div>

        {/* File Upload moved below message */}
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Upload PDF or Word
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            name="file"
            accept=".pdf, .doc, .docx"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default CareerForm;
