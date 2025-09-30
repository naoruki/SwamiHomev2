import { useState } from "react";
import { BsChevronDown } from "react-icons/bs"; // ✅ arrow icon

const jobList = [
  {
    id: 1,
    title: "Healthcare Assistant",
    description: "Assist elderly residents with daily activities and personal care.",
    specification: "test test",
  },
  {
    id: 2,
    title: "Admin Executive",
    description: "Manage documentation, scheduling, and support operations.",
    specification: "test test",
  },
  {
    id: 3,
    title: "Facility Manager",
    description: "Oversee maintenance, safety, and logistics of the care home.",
    specification: "test test",
  },
];

function CustomAccordion() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="accordion-container mb-5 mt-5">
      <h2>Available Positions</h2>
      {jobList.map((job) => (
        <div key={job.id} className="accordion-item">
          <button
            className={`accordion-header d-flex justify-content-between align-items-center ${
              activeId === job.id ? "active" : ""
            }`}
            onClick={() => toggle(job.id)}
          >
            <span>{job.title}</span>
            <BsChevronDown
              className={`arrow-icon ${activeId === job.id ? "rotate" : ""}`}
            />
          </button>
          <div
            className={`accordion-body-wrapper ${
              activeId === job.id ? "open" : ""
            }`}
          >
            <div className="accordion-body">
              <p><strong>Job Description</strong></p>
              <p>{job.description}</p>
              <p><strong>Job Specification</strong></p>
              <p>{job.specification}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomAccordion;
