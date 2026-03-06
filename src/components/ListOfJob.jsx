import { useState, useEffect, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";

const API_URL = import.meta.env.VITE_API_URL;

function CustomAccordion() {
  const [jobs, setJobs] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const contentRefs = useRef({}); // store refs per job id

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${API_URL}/jobs`);
        const data = await res.json();

        // normalize description to array
        const normalized = (data || []).map((job) => ({
          ...job,
          description: Array.isArray(job.description)
            ? job.description
            : job.description
            ? [job.description]
            : [],
        }));

        setJobs(normalized);

        // ✅ auto-expand the first enabled job
        const firstEnabled = normalized.find((j) => j.enabled);
        if (firstEnabled) setActiveId(firstEnabled._id);
      } catch (err) {
        console.error("❌ Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  // ✅ only one open at a time
  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  const enabledJobs = jobs.filter((job) => job.enabled);

  return (
    // ✅ ADDED: id for jump link target + scrollMarginTop for fixed navbar offset
    <div
      id="job-listing"
      className="accordion-container mb-5 mt-5"
      style={{ scrollMarginTop: "90px" }}
    >
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
              aria-expanded={activeId === job._id}
              aria-controls={`panel-${job._id}`}
            >
              <span>{job.title}</span>
              <BsChevronDown
                className={`arrow-icon ${activeId === job._id ? "rotate" : ""}`}
              />
            </button>

            {/* wrapper animates to content height */}
            <div
              id={`panel-${job._id}`}
              className="accordion-body-wrapper"
              style={{
                maxHeight:
                  activeId === job._id
                    ? `${contentRefs.current[job._id]?.scrollHeight || 0}px`
                    : 0,
              }}
            >
              <div
                className="accordion-body"
                ref={(el) => {
                  contentRefs.current[job._id] = el;
                }}
              >
                {job.description?.length > 0 && (
                  <>
                    <p className="mb-1">
                      <strong>Job Description</strong>
                    </p>
                    <ul className="mb-3">
                      {job.description.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  </>
                )}

                {job.requirements?.length > 0 && (
                  <>
                    <p className="mb-1">
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
