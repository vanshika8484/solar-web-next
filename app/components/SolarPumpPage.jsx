"use client"
import React from "react";
import Link from "next/link";
import { motion  } from "@/app/utils/motion";
import Footer from "./Footer";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const SolarPumpPage = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-800 font-sans py-20">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center py-10"
        >
          <h1 className="text-5xl font-bold -mt-20 -mb-6">Solar Solutions</h1>
        </motion.header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-16">
          <div className="md:col-span-2 space-y-6">
            <motion.img
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              src="/Images/IMG-20250805-WA0071(1).webp"
              alt="Solar Panel Installation"
              className="w-full h-auto rounded shadow"
            />

            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <h2 className="text-2xl font-semibold mb-4">SOLAR PUMP</h2>
              <p className="text-gray-500">
                Divy Power’s solar pumps offer a reliable and sustainable
                solution for water pumping needs in remote areas, farms, and
                rural locations. Engineered for efficiency, these pumps operate
                entirely on solar energy, eliminating dependency on conventional
                power sources. This makes them an excellent choice for
                communities and agricultural setups seeking eco-friendly water
                solutions while reducing operational costs.
              </p>
              <p className="mt-4 text-gray-500">
                Designed to support irrigation, water supply systems, and
                livestock management, Divy Power’s solar pumps provide
                consistent and effective water distribution. Whether irrigating
                fields, filling reservoirs, or supplying drinking water to
                livestock, these pumps ensure uninterrupted performance. Their
                ability to function in off-grid locations makes them
                indispensable for farmers and rural enterprises seeking
                independent water management solutions.
              </p>
            </motion.section>
            <div className="flex items-start gap-6">
              <motion.img
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                src="/Images/PHOTO-2025-08-18-12-28-23.webp"
                className="w-[380px] h-[270px] rounded shadow"
              />

              <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <p className="  text-gray-500">
                  One of the standout advantages of these solar pumps is their
                  minimal maintenance requirement. Built with durable components
                  and advanced technology, they demand little upkeep, making
                  them a hassle-free investment. With a long operational
                  lifespan, they remain highly effective even under demanding
                  weather conditions, ensuring a reliable water supply without
                  frequent servicing or costly repairs.
                </p>
              </motion.section>
            </div>
            <p className="mt-4 text-gray-500">
              Divy Power has designed its solar pumps to withstand extreme
              environments, from scorching summers to cold winters. Their rugged
              construction ensures optimal functionality, even in challenging
              landscapes, offering users peace of mind and consistent
              performance. By harnessing clean energy, these pumps contribute to
              environmental sustainability while delivering practical solutions
              for agricultural and rural water needs.
            </p>
          </div>

          <aside className="space-y-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-white p-6 rounded shadow"
            >
              <input
                type="text"
                placeholder="Enter Keyword"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-white p-6 rounded-2xl shadow-md space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-2">
                Our Products
              </h3>
              {[
                "Solar-pannel",
                "Micro-Inverter",
                "Earthing",
                "LA",

                "Diesel/Petrol Genset",
              ].map((product, i) => (
                <Link
                  href={product}
                  key={i}
                  className="block w-full px-4 py-2 rounded-lg text-green-700 hover:text-white hover:bg-green-600 transition-all duration-200 font-medium"
                >
                  {product.replace("-", " ")} &rarr;
                </Link>
              ))}
            </motion.div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SolarPumpPage;
