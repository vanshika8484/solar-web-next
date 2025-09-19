"use client"
import React from "react";
import Footer from "./Footer";
import { motion  } from "@/app/utils/motion";
import Link from "next/link";
import Image from "next/image";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

function Product() {
  const solarData = [
    {
      title: "SOLAR PANEL",
      description:
        "Our solar panels efficiently convert sunlight into electricity, ensuring long-lasting performance and reduced environmental impact for homes, businesses, and industries.",
      image: "/Images/SolarP.webp",
      href: "/products/Solar-pannel",
    },
    {
      title: "SOLAR PUMP",
      description:
        "Divy Power’s solar pumps offer an efficient, eco-friendly solution for water needs in remote and rural areas—ideal for irrigation, water supply, and livestock, with low maintenance and long-lasting performance.",
      image: "/Images/LL5.webp",
      href: "/products/Solar-Pump",
    },
    {
      title: "MICRO INVERTER",
      description:
        "Our compact, reliable micro inverters optimize solar performance by converting energy per panel, ensuring maximum output even with shading—ideal for homes and businesses seeking top solar returns.",
      image: "/Images/Micro.webp",
      href: "/products/Micro-Inverter",
    },
  ];

  const saftyData = [
    {
      title: "Earthing",
      description:
        "Divy Power provides high-quality earthing solutions to protect against shocks, fires, and equipment damage—ensuring safety for homes, businesses, and industrial setups.",
      image:  "https://divyby.redspace.in/assets/images/updated-images/img%20earthing.png",
      href: "/products/Earthing",
    },
    {
      title: "Lightning Arrestor (LA)",
      description:
        "Our lightning arrestors provide strong protection by safely redirecting lightning strikes, ensuring your electrical systems and infrastructure stay secure from unpredictable hazards.",
      image: "/Images/LA.webp",
      href: "/products/LA",
    },
  ];

  const Genset = [
    {
      title: "Diesel/Petrol Genset",
      description:
        "Our diesel and petrol gensets provide reliable, high-performance power for homes, businesses, and remote sites—built for durability, efficiency, and dependable backup in any situation.",
      image: "/Images/Genset.webp",
      href: "/products/Diesel",
    },
  ];

  const gasificationData = [
    { title: "Green Hydrogen", description: "Coming Soon", image: "/Images/LL3.webp" },
    {
      title: "CBG (Compressed Biogas)",
      description: "Coming Soon",
      image: "/Images/LL1.webp"
    },
    { title: "Bio Diesel", description: "Coming Soon", image: "/Images/LL2.webp" },
    { title: "EV Charging", description: "Coming Soon", image: "/Images/Ev.webp" },
    { title: "Home Automation", description: "Coming Soon", image: "/Images/LL4.webp" },
  ];

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div>
          <section className="max-h-screen relative py-20 text-center bg-gradient-to-br from-white to-gray-100 GetFontSol max-w-7xl">
            {/* Heading */}
            <div className="relative z-10">
              <motion.h1
                className="text-5xl font-bold text-black -mb-8 -mt-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our <span className="text-green-800">Products</span>
              </motion.h1>
            </div>

            {/* Solar Solutions */}
            <motion.section
              className="py-20 px-6 bg-gradient-to-br from-white to-gray-100"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {/* Section Heading */}
              <motion.div
                className="max-w-7xl mx-auto text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl text-green-800 font-bold">
                  Solar Solutions
                </h2>
              </motion.div>

              {/* Card Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {solarData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-black rounded-2xl overflow-hidden shadow-md hover:shadow-2xl flex flex-col"
                    variants={cardVariants}
                  >
                    {/* Image wrapper with fixed aspect ratio */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-6 flex justify-center">
                        <Link
                          href={item.href}
                          className="flex items-center justify-center gap-2 bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-700 transition"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            {/* Safety Solutions */}
            <motion.section
              className="bg-[#000000] rounded-sm py-20 text-white"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div
                className="max-w-7xl mx-auto text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl text-green-700 font-bold">
                  Safety Solutions
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {saftyData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white text-black rounded-2xl overflow-hidden shadow-md flex flex-col"
                    variants={cardVariants}
                  >
                    <div className="relative h-60 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-6 flex justify-center">
                        <Link
                          href={item.href}
                          className="flex items-center justify-center gap-2 bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-700 transition"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Genset Solutions */}
            <motion.section
              className="bg-white py-20 px-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div
                className="max-w-7xl mx-auto text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl text-black font-bold">
                  Genset Solutions
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                {Genset.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white text-black rounded-2xl overflow-hidden shadow-md hover:shadow-2xl flex flex-col relative"
                    variants={cardVariants}
                  >
                    <div className="relative h-60 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-900">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-6 flex justify-center">
                        <Link
                          href={item.href}
                          className="flex items-center justify-center gap-2 bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-700 transition"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Gasification Section */}
            <motion.section
              className="py-20 px-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div
                className="max-w-7xl mx-auto text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-red-600 text-5xl font-bold">COMING SOON</h2>
                <h2 className="text-4xl mt-10 text-green-800 font-bold">
                  Gasification
                </h2>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
                {gasificationData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white text-black rounded-2xl overflow-hidden shadow-md hover:shadow-2xl flex flex-col"
                    variants={cardVariants}
                  >
                    {/* Image Section */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>

                    {/* Text Section */}
                    <div className="p-6 flex-1 flex flex-col justify-between text-center">
                      <h3 className="text-base sm:text-lg font-bold mb-2 break-anywhere line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </section>
        </div>
      </div>

      <section className="mt-[2900px]">
        <Footer />
      </section>
    </div>
  );
}

export default Product;
