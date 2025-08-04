const Services = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Services</h1>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h4>Residential Services</h4>
          <ul>
            <li>Residential Care</li>
            <li>Dementia Residence</li>
          </ul>
        </div>

        <div className="col-md-6 mb-4">
          <h4>Day Care Services</h4>
          <ul>
            <li>Dementia Day Care Centre</li>
            <li>Day Rehabilitation Centre</li>
          </ul>
        </div>

        <div className="col-md-6 mb-4">
          <h4>Home-Based Services</h4>
          <ul>
            <li>Home Medical & Home Nursing Services</li>
            <li>Home Help Services</li>
          </ul>
        </div>

        <div className="col-md-6 mb-4">
          <h4>Integrated Services</h4>
          <ul>
            <li>Integrated Home & Day Care Center (IHDC)</li>
          </ul>
        </div>

        <div className="col-md-6 mb-4">
          <h4>Therapy Services</h4>
          <ul>
            <li>Occupational Therapy</li>
            <li>Physiotherapy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
