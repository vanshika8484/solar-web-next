"use client";
import { useState } from "react";
import Footer from "./Footer";
import { motion  } from "@/app/utils/motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Loader";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(name, email, phoneNo, message);
      const { data } = await axios.post(
        "https://solar-6.onrender.com/api/contact",
        { name, email, phoneNo, message }
      );
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.5, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-h-screen bg-gradient-to-br from-green-50 to-white py-20 min-h-screen ">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-7xl mx-auto GetFontSol">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 mt-5">
          Get in <span className="text-green-800">Touch</span>
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10 sm:mr-0 sm:ml-0 md:mr-0 md:ml-0 lg:mr-28 lg:ml-28 xl:mr-28 xl:ml-28 2xl:mr-28 2xl:ml-28"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Info */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 text-gray-700">
              <div></div>
              <div>
                <h4 className="font-bold text-gray-900"> Email</h4>
                <p>
                  customersupport1@divypower.com
                  <br />
                  Info@divypower.com
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Phone</h4>
                <p>
                  +91 9310259325
                  <br />
                  Open 24 Hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                required
                value={phoneNo}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <textarea
                placeholder="Your Message"
                required
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>

              <motion.button
                type="submit"
                className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 flex justify-center items-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 8px rgba(34,197,94, 0.8)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {loading ? <Loader /> : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          className="mt-16 ml-0 mr-0 lg:mr-28 lg:ml-28 xl:mr-28 xl:ml-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <iframe
            title="map"
            className="w-full h-96 rounded-2xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.4200211741384!2d77.42795185827646!3d28.681681412447353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf0a53d63b979%3A0xcbe79e39d43f8339!2s53%2C%20Ramte%20Ram%20Rd%2C%20Ekta%20Vihar%2C%20Arjun%20Nagar%2C%20Nai%20Basti%20Dundahera%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201001!5e0!3m2!1sen!2sin!4v1656154860112!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>

      <section className="mt-[150px] mb-[-50px]">
        {" "}
        <Footer />
      </section>
    </div>
  );
}

export default Contact;
