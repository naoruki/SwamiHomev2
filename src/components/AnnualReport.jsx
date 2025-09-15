import image4 from "../assets/2025.png";
import image5 from "../assets/2024.png";
import image6 from "../assets/2023.jpg";
import image7 from "../assets/2022.jpg";
import report2024 from "../assets/Annual report 2023-2024.pdf";
import report2023 from "../assets/Annual Report 2022 - 2023.pdf";
import report2022 from "../assets/Annual Report 2021-2022.pdf";

const AnnualReport = () => (
  <>
    <div className="box mb-3">
      <div className="d-flex justify-content-center text-center flex-wrap">
        <div className="p-2">
          <a href={report2024} download>
            <img src={image5} alt="annual report 2024" style={{ width: "300px" }} />
          </a>
        </div>
        <div className="p-2">
          <a href={report2023} download>
            <img src={image6} alt="annual report 2023" style={{ width: "300px" }} />
          </a>
        </div>
        <div className="p-2">
          <a href={report2022} download>
            <img src={image7} alt="annual report 2022" style={{ width: "300px" }} />
          </a>
        </div>
      </div>
    </div>
  </>
);

export default AnnualReport;
