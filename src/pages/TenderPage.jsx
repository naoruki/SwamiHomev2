import { Container, Table } from "react-bootstrap";

const TenderNotices = () => {
  return (
    <>
      <Container>
        <div className="header-hero">
          <h1>Tender</h1>
        </div>
      </Container>

      <Container className="box mb-3">
        <h4>
          <strong>Notices & Announcements</strong>
        </h4>
        <h6>
          <strong>Tender/Request For Quotation (RfQ) Notice</strong>
        </h6>

        <p>
          We are constantly seeking tenders and/or Request For Quotation (RfQ),
          based on the needs of our resident, clients and many departments.
        </p>

        <p>
          If you are offering goods or a service that meets our requirements,
          you are invited to submit a tender and/or quotation to become our
          partner, supplier, contractor or agent for a relevant project.
        </p>

        <p>
          Our Open Tender and/or Request For Quotation (RfQ) notices are
          available in the below table.
        </p>

        <Table bordered responsive className="text-center">
          <thead className="table-light">
            <tr>
              <th>Tender/Request For Quotation (RfQ) Calling Date</th>
              <th>Tender/Request For Quotation (RfQ) Closing Date</th>
              <th>Project Titles</th>
              <th>Downloads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" className="fst-italic text-muted">
                There is currently no Open Tender/Request for Quotation
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TenderNotices;
