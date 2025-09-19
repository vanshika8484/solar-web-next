import React from "react";
import {
  FaTools,
  FaProjectDiagram,
  FaCog,
  FaRecycle,
  FaSolarPanel,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import "./ServiceCards.css";

const services = [
  {
    icon: <FaTools />,
    title: "Installation & Commissioning (INC)",
    description:
      "Divy Power handles the complete installation and commissioning of solar systems, generators, and other power equipment.",
    path: "/services/firstservice",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Engineering, Procurement, and Construction (EPC)",
    description:
      "They provide turnkey solutions for solar energy projects, including design, procurement of materials, and construction.",
    path: "/services/secondservice",
  },
  {
    icon: <FaCog />,
    title: "Operations & Maintenance (O&M)",
    description:
      "Provides ongoing maintenance to ensure optimal performance of solar panels, generators, and other systems.",
    path: "/services/thirdservice",
  },
  {
    icon: <FaRecycle />,
    title: "Annual Maintenance Contracts (AMC)",
    description:
      "Divy Power provides AMC services for diesel generators, solar systems, and other equipment to ensure long-term reliability.",
    path: "/services/fourthservice",
  },
  {
    icon: <FaSolarPanel />,
    title: "Health Check ups",
    description:
      "We provide complete care for your car, including expert advice, repairs, and preferred maintenance services.",
    path: "/services/fifthservice",
  },
];

const ServiceCards = () => {
  const router = useRouter();

  return (
    <div className="service-container mt-16">
      {services.map((service, index) => (
        <div
          key={index}
          className="cardd"
         onClick={() => router.push(service.path)} 
        >
          {/* Icon and Title */}
          <div className="cardd__front">
            <div className="cardd__icon">{service.icon}</div>
            <p className="cardd__title text-white">{service.title}</p>
          </div>

          {/* Hover Content */}
          <div className="cardd__content">
            <p className="cardd__title">{service.title}</p>
            <p className="cardd__description">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
