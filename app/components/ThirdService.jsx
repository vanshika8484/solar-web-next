"use client";
import React from "react";
import Link from "next/link";
import { motion  } from "@/app/utils/motion";
import Footer from "./Footer";

const services = [
  {
    label: "Installation & Commissioning",
    path: "/services/firstservice",
    // icon: <FaTools className="text-green-700 text-3xl" />,
  },
  {
    label: "Engineering, Procurement, and Construction",
    path: "/services/secondservice",
    // icon: <FaTools className="text-green-700 text-3xl" />,
  },
  {
    label: "Annual Maintenance Contracts (AMC)",
    path: "/services/fourthservice",
    // icon: <FaRecycle className="text-green-700 text-3xl" />,
  },
  {
    label: "Health Check ups",
    path: "/services/fifthservice",
    // icon: <FaSun className="text-green-700 text-3xl" />,
  },
];

const ThirdService = () => {
  return (
    <div className="bg-gray-100 text-white min-h-screen GetfontHome mb-2">
      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          {" "}
          Our Services
        </h2>
      </section>

      {/* Main Content */}
      <main className="bg-white text-white rounded-xl shadow-lg max-w-4xl mx-auto p-8 mb-16">
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src="https://divyby.redspace.in/assets/images/updated-images/img%203%20service.png"
          alt="Installation"
          className="rounded-xl mb-6 w-full max-h-[400px] object-cover"
        />

        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Operations & Maintenance
        </h2>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          Divy Power provides comprehensive maintenance and performance
          monitoring for your solar and power systems. Our O&M services are
          designed to detect issues early, prevent breakdowns, and ensure that
          your system runs safely, efficiently, and at peak output, year after
          year.
        </p>

        <ul className="list-disc pl-6 text-sm mb-4 text-gray-700 marker:text-blue-900">
          <li>Regular Inspections & Preventive Maintenance</li>
          <li> Real-Time Performance Monitoring</li>
          <li> Fast Issue Detection & Resolution</li>
          <li>Long-Term System Reliability & Output</li>
        </ul>

        <p className="text-sm text-gray-700 mb-4">
          Our proactive approach helps identify potential faults before they
          become costly problems. With real-time monitoring and analytics, we
          maximize uptime and extend the life of your system.
        </p>

        <h3 className="text-lg font-semibold text-blue-900 ">
          Our Simple Four Steps
        </h3>
        <p className="text-sm text-gray-700">
          From cleaning solar modules to replacing worn components, we ensure
          your system operates at peak efficiency year-round—with minimal
          disruptions and consistent energy output.
        </p>
      </main>
      <section className="max-w-7xl mx-auto px-6 pb-12">
        {/* <h2 className="text-3xl font-bold text-center text-white mb-10">🔧 Our Services</h2> */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="font-semibold text-lg mt-4 mb-2 text-blue-900">
                {service.label}
              </h3>
              <Link
                href={service.path}
                className="mt-auto text-blue-900 font-medium hover:underline"
              >
                Explore →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default ThirdService;
