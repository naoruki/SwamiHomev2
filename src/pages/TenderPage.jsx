import { Container, Table } from "react-bootstrap";

const TenderNotices = () => {
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

        {/* Tender Table */}
        <Table bordered responsive className="text-center align-middle">
          <thead className="table-light">
            <tr>
              <th>Tender/RfQ Calling Date</th>
              <th>Tender/RfQ Closing Date</th>
              <th>Project Titles</th>
              <th>Downloads</th>
            </tr>
          </thead>

          <tbody>
            {/* Tender row */}
            <tr>
              <td>5 Jan 2026</td>
              <td>16 Jan 2026</td>
              <td className="text-start">
                PROPOSED REPLACEMENT OF EXISTING MV SYSTEM AND IMPROVEMENT OF
                MECHANICAL VENTILATION SYSTEM AT THE EXISTING MAIN BUILDING
              </td>
              <td>
                <a
                  href="/downloads/TenderNotice (Final)-SwamiMVTender.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TenderNotices;
