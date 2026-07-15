import "./Services.css";
import {
  FaHospital,
  FaUniversity,
  FaLandmark,
  FaBuilding,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHospital />,
    title: "Hospitals",
    desc: "Reduce patient waiting time with digital queues.",
  },
  {
    icon: <FaBuilding />,
    title: "Banks",
    desc: "Customers can join queues before arriving.",
  },
  {
    icon: <FaLandmark />,
    title: "Government Offices",
    desc: "Make public services faster and organized.",
  },
  {
    icon: <FaUniversity />,
    title: "Colleges",
    desc: "Manage admission, fee and office queues.",
  },
];

function Services() {
  return (
    <section id="services" className="services">

      <div className="section-title">
        <h2>Services We Support</h2>

        <p>
          QueueLess is designed for organizations where people spend
          valuable time waiting in queues.
        </p>
      </div>

      <div className="service-grid">

        {services.map((service) => (

          <div className="service-card" key={service.title}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;