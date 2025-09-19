"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Home.css";
import Dashboard from "./Dashboard";
import { useState } from "react";

import SolarProduct from "./SolarProduct";
import SolarCostCalculator from "./SolarCostCalculator";
import FaqSection from "./FaqSection";
import SolarPortfolio from "./SolarPortfolio";

import ContactForm from "./ContactForm";
import Footer from "./Footer";

import ChatbotToggle from "./ChatbotToggle";
import SolarSolutions from "./SolarSolutions";

import ChatUI1 from "./ChatUI1";

import PageOne from "./PageOne";
import Conversation from "./Conversation";
import HomeStart2 from "./HomeStart2";
import HoverVideoCard1 from "./HoverVideoCard1";
import FiguringOut1 from "./FiguringOut1";
import ExactMatchPage1 from "./ExactMatchPage1";
import FullScreenVideo from "./FullScreenVideo";
import RatingWorks from "./RatingWorks";

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "What is Solar Energy?",
      content:
        "Solar energy is the energy derived from the sun’s radiation. It is a clean, renewable source of energy that can be harnessed using solar panels to generate electricity or heat.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "How Do Solar Panels Work?",
      content:
        "Solar panels convert sunlight directly into electricity using photovoltaic cells. When sunlight hits these cells, it creates an electric current that can be used to power homes and businesses.",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Benefits of Solar Energy",
      content:
        "Solar energy reduces electricity bills, lowers carbon footprint, and requires minimal maintenance. It’s sustainable and helps in energy independence.",
      img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for children elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Button hover animation
  const buttonHover = {
    scale: 1.05,

    transition: { duration: 0.3 },
  };

  return (
    <div className=" relative  max-w-full  mx-auto">
      <ChatbotToggle />
      <div>
        <section className="About">
          <FullScreenVideo />
          <HomeStart2 />
        </section>
      </div>

      <section>
        <Conversation />
      </section>

      <section
          className="mt-20 px-4 sm:px-6 lg:px-12 relative"
          style={{ transform: "translateY(-450px)" }}
        >
          <SolarCostCalculator />
          <div className="flex justify-center mt-10">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                Adhik jaankari ke liye click krein
              </button>
            </Link>
          </div>
        </section>

         

      <section className="About">
        <SolarSolutions />
      </section>
      <section className=" mt-20 About1">
        <ContactForm />
      </section>

      <section className="About ">
        <PageOne />
      </section>
      <section className="About">
        <ChatUI1 />
      </section>
      <section className="bg-green-800  About  -mt-0 md:-mt-0 lg:-mt-0 xl:-mt-0 2xl:-mt-[10px]">
        <SolarProduct />
      </section>

      <section className=" mt-10 animate-float">
        <Image
          src="/Images/DivyRedesign.webp"
          alt="Divy Redesign"
          width={1500}
          height={1000}
          className="mx-auto"
        />
      </section>
      <section className=" mt-36 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20  About1">
        <FiguringOut1 />
      </section>
      <section className=" mt-16 About1">
        <ExactMatchPage1 />
      </section>
      <section className=" -mt-96">
        <RatingWorks />
      </section>

      <section className="bg-[#f8f7f0] About1 mt-96 md:mt-96 lg:mt-96 xl:mt-96 2xl:mt-[430px]">
        <SolarPortfolio />
        <HoverVideoCard1 />

        <section className="About1 mt-20 2xl:mt-60">
          <FaqSection />
        </section>

        <section className=" About -mt-11">
          <Footer />
        </section>
      </section>
    </div>
  );
}

export default Home;