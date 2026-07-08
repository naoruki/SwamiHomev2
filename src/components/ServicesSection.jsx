import {
  HouseLineIcon,
  SunIcon,
  HouseIcon,
  PersonIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import "../styles/Services.css";

const services = [
  {
    title: "Residential Services",
    description: [
      "Residential Care",
      "Dementia Residence",
    ],
    icon: <HouseLineIcon size={44} weight="duotone" />,
    link: "/residential-services",
  },
  {
    title: "Day Care Services",
    description: [
      "Dementia Day Care Centre",
      "Day Rehabilitation Centre",
    ],
    icon: <SunIcon size={44} weight="duotone" />,
    link: "/daycare-services",
  },
  {
    title: "Home-Based Services",
    description: [
      "Home Medical & Home Nursing Services",
      "Home Help Services",
    ],
    icon: <HouseIcon size={44} weight="duotone" />,
    link: "/home-based-services",
  },
  {
    title: "Therapy Services",
    description: [
      "Occupational Therapy",
      "Physiotherapy",
    ],
    icon: <PersonIcon size={44} weight="duotone" />,
    link: "/therapy",
  },
];

const Services = () => {
  return (
    <section className="services-section py-5">
      <div className="container-fluid px-5">
        <div className="text-center mb-5">
          <h1 className="service-heading">Our Services</h1>
          <p className="text-muted">
            Comprehensive care and support tailored to every stage of life.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
          {services.map((service, index) => (
            <div className="col" key={index}>
              <div className="card service-card h-100">
                <div className="card-body">

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <h4 className="service-title">
                    {service.title}
                  </h4>

                  <ul className="service-description">
                    {service.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <Link to={service.link} className="service-more">
                    Find out more
                    <ArrowRightIcon
                      size={16}
                      weight="bold"
                      className="ms-2"
                    />
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;