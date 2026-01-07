import { useEffect, useState } from "react";
import { Container, Table, Spinner, Alert } from "react-bootstrap";

const API_URL = import.meta.env.VITE_API_URL;

const TenderNotices = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const fetchTenders = async () => {
    try {
      setLoading(true);
      setErrMsg("");

      const res = await fetch(`${API_URL}/tenders`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to fetch tenders.");
      }

      setTenders(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("❌ Failed to fetch tenders:", err);
      setErrMsg(err.message || "Failed to fetch tenders.");
      setTenders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTenders();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return "—";
    return d.toLocaleDateString("en-SG", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const resolveDownloadUrl = (downloadUrl) => {
    if (!downloadUrl) return "";
    if (downloadUrl.startsWith("http://") || downloadUrl.startsWith("https://")) {
      return downloadUrl;
    }
    // e.g. "/uploads/tenders/file.pdf" served by Express
    return `${API_URL}${downloadUrl}`;
  };

  // ✅ ONLY SHOW OPEN TENDERS (closed will be hidden)
  const openTenders = tenders.filter(
    (t) => (t.status || "Open").toLowerCase() === "open"
  );

  // ---------------- LOADING ----------------
  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="secondary" />
      </Container>
    );
  }

  return (
    <>
      {/* Header */}
      <Container>
        <div className="header-hero">
          <h1>Tender</h1>
        </div>
      </Container>

      {/* Content */}
      <Container className="box mb-3">
        {/* Error message */}
        {errMsg && (
          <Alert variant="danger" className="my-3">
            {errMsg}
          </Alert>
        )}

        {/* ✅ Show intro text ONLY when there are OPEN tenders */}
        {openTenders.length > 0 && (
          <>
            <h4>
              <strong>Notices & Announcements</strong>
            </h4>

            <h6>
              <strong>Tender/Request For Quotation (RfQ) Notice</strong>
            </h6>

            <p>
              We are constantly seeking tenders and/or Request For Quotation (RfQ),
              based on the needs of our residents, clients and departments.
            </p>

            <p>
              If you are offering goods or services that meet our requirements, you
              are invited to submit a tender and/or quotation to become our partner,
              supplier, contractor or agent for a relevant project.
            </p>

            <p>
              Our Open Tender and/or Request For Quotation (RfQ) notices are listed
              in the table below.
            </p>
          </>
        )}

        {/* Tender Table (always shown) */}
        <Table bordered responsive className="text-center align-middle">
          <thead className="table-light">
            <tr>
              <th style={{ minWidth: 170 }}>Tender/RfQ Calling Date</th>
              <th style={{ minWidth: 170 }}>Tender/RfQ Closing Date</th>
              <th>Project Titles</th>
              <th style={{ width: 140 }}>Downloads</th>
            </tr>
          </thead>

          <tbody>
            {openTenders.length > 0 ? (
              openTenders.map((t) => (
                <tr key={t._id}>
                  <td>{formatDate(t.callingDate)}</td>
                  <td>{formatDate(t.closingDate)}</td>
                  <td className="text-start">{t.projectTitle || "—"}</td>
                  <td>
                    {t.downloadUrl ? (
                      <a
                        href={resolveDownloadUrl(t.downloadUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download PDF
                      </a>
                    ) : (
                      <span className="text-muted">—</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center text-muted py-4">
                  No tender notices available at the moment.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TenderNotices;
