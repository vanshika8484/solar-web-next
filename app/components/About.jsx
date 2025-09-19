"use client";
import React, { Suspense, useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./Home.css";
import ImageWithOverlay from "./ImageWithOverlay";
import ProcessSteps from "./ProcessSteps";
import ExpertTeam from "./ExpertTeam";
import FiguringOut from "./FiguringOut";
import SolarCards from "./SolarCards";
import ContactCards from "./ContactCards";
import Footer from "./Footer";
import CompanySection from "./CompanySection";
import ChatUI4 from "./ChatUI4";
import ScrollStackingCards from "./ScrollStackingCards"; // <-- Imported here
import "./ScrollStackingCards.css"; // <-- Include CSS
import HoverVideoCard2 from "./HoverVideoCard2";
import HoverVideoCard3 from "./HoverVideoCard3";
import HoverVideoCard from "./HoverVideoCard";

// About content
const aboutUsContent = [
  {
    heading: "Not Just Selling Solar We are a Partner in Your Journey",
    subheading:
      "At Divy Power Pvt. Ltd., we don’t just sell solar panels. We listen, understand, and build solutions.",
    points: [
      "Every home, business, or factory has a unique energy we begin by understanding yours",
      "Our approach is not sales-driven, it’s solution-focused.",
      "We help you avoid costly mistakes caused by all solar kits.",
      "We design systems that fit your life, not force you to adapt to them.",
    ],
    img: "https://storage.googleapis.com/a1aa/image/b08acab3-6b8b-47a9-3cc6-092bfccc4ded.jpg",
    alt: "Team discussing solar design solution on paper with panels in background",
  },
  {
    heading: "What If You Delay Solar? The Hidden Cost of Waiting",
    subheading:
      "We believe in honesty – waiting to switch to solar can cost more than you think.",
    points: [
      "Every electricity bill is money lost that could’ve been saved.",
      "Electricity prices are rising, and power cuts are more frequent.",
      "Delaying solar means losing not just money, but energy independence.",
      "Going solar isn’t just smart, it’s urgent and we help you act now.",
    ],
    img: "/Images/Img1.webp",
    alt: "New solar installation image",
  },
  {
    heading: "Powering Every Home from Rooftops to Rural Villages",
    subheading:
      "We deliver energy solutions for everyone, high-rises to rural India",
    points: [
      "No terrain or challenge is too complex we deliver where it’s needed.",
      "Our systems are designed to endure Indian conditions: dust, heat, and rain.",
      "Be it a home, farm, or school our mission is to light it up, cleanly and reliably.",
      "We believe clean energy is a right, not a luxury.",
    ],
    img: "/Images/Img2.webp",
    alt: "Solar panels on rooftops and rural homes",
  },
  {
    heading: "A Legacy You Can Rely On",
    subheading:
      "With over 25 years in the energy sector, trust is not claimed – it’s earned.",
    points: [
      "We’ve grown with the solar industry and bring decades of expertise.",
      "Our systems are known for longevity and reliability.",
      "We focus on doing what’s right, not just what sells.",
      "Our client relationships last because we deliver consistent results.",
    ],
    img: "/Images/Img3.webp",
    alt: "Old and new solar projects representing legacy and evolution",
  },
  {
    heading: "Creating Real Change Through Government Collaborations",
    subheading:
      "We don’t just talk about impact – we create it, in partnership with the Government.",
    points: [
      "As a UPNEDA-approved vendor, we drive solar adoption at scale.",
      "We power not just homes, but hospitals, schools, and public infrastructure.",
      "We empower communities to control their energy future.",
      "We act on our mission to build a better, solar-powered India.",
    ],
    img: "/Images/im1.webp",
    alt: "Government officials and solar technicians inspecting installation",
  },
];

export default function About() {
  return (
    <div className="bg-white text-black flex flex-col items-center mt-0 About">
      {/* Banner */}
      <ImageWithOverlay />

      {/* Chat UI */}
      <section className="mt-8 w-full">
        <ChatUI4 />
      </section>

      {/* Scroll Stacking Cards */}
      <div className="-mt-[450px] 2xl:-mt-[700px] mb-24 w-full">
        <ScrollStackingCards content={aboutUsContent} />
      </div>

      {/* Company Section */}
      <section className="-mt-[290px] w-full">
        <CompanySection />
      </section>

      {/* Videos & Process */}
      <section className="w-full">
        <HoverVideoCard2 />
      </section>

      <section className="w-full">
        <ProcessSteps />
      </section>

      <section className="-mt-16 md:-mt-44 xl:-mt-64 2xl:-mt-96 lg:-mt-72 w-full">
        <HoverVideoCard3 />
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-8 px-4 sm:px-6 lg:px-8 -mt-[10px] About w-full">
        <div className="bg-[#fdf6ee] shadow-xl rounded-none p-5 sm:p-8 md:p-12 w-full">
          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Image
                src="/Images/chacha.webp"
                width={100}
                height={100}
                alt="Chacha"
                className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 object-contain"
              />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-700 leading-snug">
                Why Choose Us <br className="sm:hidden" /> as Your Solar
                Partner?
              </h2>
              <Image
                src="/Images/didi.webp"
                width={100}
                height={100}
                alt="Didi"
                className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 object-contain"
              />
            </div>
          </div>

          <div className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 text-left">
            <p>
              At <strong>Divy Power Pvt. Ltd.,</strong> we don't just install
              solar systems — we build{" "}
              <span className="text-green-600 font-semibold">
                lasting energy partnerships
              </span>
              .
            </p>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>
                  Committed to quality, accountability, and long-term service.
                </strong>
              </li>
              <li>
                <strong>Post-installation support:</strong> Real-time
                maintenance and monitoring.
              </li>
              <li>
                <strong>
                  Top-grade components, certified engineers & govt-approved
                  materials
                </strong>
              </li>
              <li>
                <strong>MNRE-approved & UPNEDA-certified;</strong> officially
                recognized by Govt. of India.
              </li>
              <li>
                <strong>Proven track record</strong> across villages, schools,
                societies, and institutions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Figuring Out */}
      <section className="mt-30 w-full">
        <FiguringOut />
      </section>

      {/* Solar Cards */}
      <section className="mt-16 w-full">
        <SolarCards />
      </section>

      {/* Footer */}
      <section className="mt-5 mb-[-50px] min-w-full lg:min-w-[1300px] xl:min-w-[1450px] 2xl:min-w-[1600px] w-full mb-0 pb-0">
        <Footer />
      </section>
    </div>
  );
}
