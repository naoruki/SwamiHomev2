import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const AnnualReport = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch(`${API_URL}/reports`);
        const data = await res.json();
        // sort newest year first and keep only 3
        const sorted = [...data].sort((a, b) => b.year - a.year).slice(0, 3);
        setReports(sorted);
      } catch (err) {
        console.error("❌ Error fetching reports:", err);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="box mb-3">
      <div className="d-flex justify-content-center text-center flex-wrap">
        {reports.map((report) => (
          <div key={report._id} className="p-2">
            <a href={`${API_URL}${report.pdfUrl}`} download>
              <img
                src={`${API_URL}${report.thumbnailUrl}`}
                alt={`annual report ${report.year}`}
                style={{ width: "300px" }}
              />
            </a>
            <p className="mt-2 fw-bold">Annual Report {report.year}</p>
          </div>
        ))}

        {reports.length === 0 && (
          <p className="text-muted">No annual reports available</p>
        )}
      </div>
    </div>
  );
};

export default AnnualReport;
