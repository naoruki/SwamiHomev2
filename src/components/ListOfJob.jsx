import { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

const API_URL = import.meta.env.VITE_API_URL;

function CustomAccordion() {
  const [jobs, setJobs] = useState([]);
  const [activeId, setActiveId] = useState(null);

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${API_URL}/jobs`);
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("❌ Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  const toggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  // ✅ Only include enabled jobs
  const enabledJobs = jobs.filter((job) => job.enabled);

  return (
    <div className="accordion-container mb-5 mt-5">
      <h2>Available Positions</h2>
      {enabledJobs.length === 0 ? (
        <p>No jobs available at the moment.</p>
      ) : (
        enabledJobs.map((job) => (
          <div key={job._id} className="accordion-item">
            <button
              className={`accordion-header d-flex justify-content-between align-items-center ${
                activeId === job._id ? "active" : ""
              }`}
              onClick={() => toggle(job._id)}
            >
              <span>{job.title}</span>
              <BsChevronDown
                className={`arrow-icon ${activeId === job._id ? "rotate" : ""}`}
              />
            </button>
            <div
              className={`accordion-body-wrapper ${
                activeId === job._id ? "open" : ""
              }`}
            >
              <div className="accordion-body">
                <p>
                  <strong>Job Description</strong>
                </p>
                <p>{job.description}</p>

                {job.requirements?.length > 0 && (
                  <>
                    <p>
                      <strong>Requirements</strong>
                    </p>
                    <ul>
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CustomAccordion;
