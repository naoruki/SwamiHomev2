import { useState } from "react";

const jobList = [
  {
    id: 1,
    title: "Healthcare Assistant",
    description: "Assist elderly residents with daily activities and personal care.",
    specification:"test test",
  },
  {
    id: 2,
    title: "Admin Executive",
    description: "Manage documentation, scheduling, and support operations.",
    specification:"test test",
  },
  {
    id: 3,
    title: "Facility Manager",
    description: "Oversee maintenance, safety, and logistics of the care home.",
    specification:"test test",
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
            className={`accordion-header ${activeId === job.id ? "active" : ""}`}
            onClick={() => toggle(job.id)}
          >
            {job.title}
          </button>
          <div className={`accordion-body-wrapper ${activeId === job.id ? "open" : ""}`}>
            <div className="accordion-body">
               <p>Job Description</p>
              <p>{job.description}</p>
              <p>Job Specification</p>
              <p>{job.specification}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomAccordion;
