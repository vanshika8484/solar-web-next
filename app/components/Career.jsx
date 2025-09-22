"use client";

import { motion } from "framer-motion";
import Footer from "./Footer";
import CareerForm from "./CareerForm";
import WorkCultureReels from "./WorkCultureReels";
import SafetySecurityReels from "./SafetySecurityReels";
import ImageSlider from "./ImageSlider";
import CareersAtDivySolar from "./CareersAtDivySolar";


// Hero text animation
const heroTextVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  float: {
    y: [0, -8, 5, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

// Card animation for benefits
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: {
    scale: 1.05,
    rotateX: 5,
    rotateY: -5,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  pulse: {
    scale: [1, 1.02, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const Career = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 About">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="text-center mb-12"
      >
        <h1
          className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-4"
        >
          Join <span className="text-green-800">with us</span>
        </h1>
        <p
          
          className="max-w-xl mx-auto text-xl text-gray-600"
        >
          We're building the future with talented people like you. Explore our
          open positions below.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CareersAtDivySolar />
      </motion.section>

      <motion.section 
        className="-mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CareerForm />
      </motion.section>

      {/* Internal Team Button */}
      <section className="flex justify-center mt-8">
        <a href="https://so365.in/smartapp_ess">
          <motion.button
            whileHover={{
              scale: 1.05,
              rotate: [0, 2, -2, 0],
              transition: { duration: 0.6 },
            }}
            className="w-[200px] lg:w-[300px] xl:w-[400px] 2xl:w-[500px] text-center bg-gray-900 text-white hover:shadow-xl font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
          >
            <span className="text-xl">Click Here to Access Sampark</span> <br />{" "}
            For Internal Team only
          </motion.button>
        </a>
      </section>

      {/* Benefits Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-br from-green-700 to-green-600 rounded-xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:p-12">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 },
                }}
                className="text-3xl font-extrabold text-white sm:text-4xl"
              >
                Why Join Us?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.2 },
                }}
                className="mt-3 max-w-md mx-auto text-lg text-purple-100"
              >
                We offer competitive benefits and a culture you'll <br/>love.
              </motion.p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Competitive Salary',
                  description: 'We offer competitive compensation packages including bonuses and stock options.',
                  icon: (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  name: 'Flexible Work',
                  description: 'Work remotely or from our modern offices with flexible hours.',
                  icon: (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 16h.01M16 16h.01M20 16h.01M4 20h16a2 2 0 002-2V8a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  name: 'Learning Budget',
                  description: 'Annual stipend for conferences, courses, and books to further your growth.',
                  icon: (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  ),
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20 shadow-lg"
                >
                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0 bg-white/20 p-3 rounded-xl shadow-inner">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        {benefit.name}
                      </h3>
                      <p className="mt-1 text-purple-100">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Reels Sections */}
      <motion.section 
        className="-mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <WorkCultureReels />
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SafetySecurityReels />
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ImageSlider />
      </motion.section>

      <section className="mt-[150px] mb-[-50px]">
      
          <Footer />
      
      </section>
    </div>
  );
};

export default Career;
