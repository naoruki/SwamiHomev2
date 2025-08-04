import { HouseLineIcon, SunIcon, HouseIcon,PersonIcon, ShootingStarIcon  } from "@phosphor-icons/react";

const Services = () => {
  return (
    <div className="container">
      {/* Row 1 */}
      <center><h1>Our Services</h1></center>
      <div className="row mb-3">
        <div className="col-12 col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <HouseLineIcon size={50} color="#E25D9C"/>
              <h2>Residential Services</h2>
              <p>
                Residential Care
                <br />
                Dementia Residence
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <SunIcon size={50} color="#E25D9C"/>
              <h2>Day Care Services</h2>
              <p>
                Dementia Day Care Centre
                <br />
                Day Rehabilitation Centre
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 mb-3">
          <div className="card">
            <div className="card-body">
              <HouseIcon size={50} color="#E25D9C"/>
              <h2>Community Services</h2>
              <p>
                Support Groups
                <br />
                Outreach Programs
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <div className="card">
            <div className="card-body">
                <ShootingStarIcon size={50} color="#E25D9C"/>
              <h2>Integrated Services</h2>
              <p>Integrated Home & Day Care Center (IHDC)</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <div className="card">
            <div className="card-body">
                <PersonIcon size={50} color="#E25D9C"/>
              <h2>Therapy Services</h2>
              <p>
                Occupational Therapy
                <br />
                Physiotherapy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
