"use client";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { motion } from "@/app/utils/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BecomeOurIndividualPartner = () => {
  return (
    <div className="bg-[#f8f7f0] text-gray-800">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
        >
          Become Our Individual Partner
        </motion.h1>

        {/* Sub Heading (as requested) */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800"
        >
          Earn with Divy Power. <span className=" text-green-800">No Investment Required.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-5 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Turn your network into income while contributing to India’s clean energy mission.
        </motion.p>

        {/* Small highlight strip */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-6 h-1 w-24 origin-left rounded-full bg-green-700"
        />
      </section>

      {/* How It Works */}
      <section className="bg-[#f8f7f0]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl md:text-3xl font-bold mb-4 text-black"
          >
            How It Works
          </motion.h2>
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="list-disc list-inside space-y-2 text-gray-700"
          >
            <li>Share solar leads with us.</li>
            <li>We handle consultation, installation, and service.</li>
            <li>You earn an attractive commission for every successful sale.</li>
          </motion.ul>
        </div>
      </section>

      {/* Work Models */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl md:text-3xl font-bold mb-6 text-black"
        >
          Work Models Available
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Commission Basis",
              desc: "Earn per closed sale you refer.",
            },
            {
              title: "Sublet Basis",
              desc: "Have projects executed under your own branding with our support.",
            },
            {
              title: "Vendor Installation",
              desc: "Work with us as an on-call installer for projects in your area.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f8f7f0] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-black"
          >
            Benefits for You
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Zero Investment – Start immediately, no inventory needed.</li>
              <li>Unlimited Earnings – The more leads you share, the more you earn.</li>
              <li>Flexible Work – Choose your own hours, no fixed targets.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Marketing Support – Product info, pitch decks, and guidance.</li>
              <li>Brand Leverage – Build trust with Divy Power’s reputation.</li>
              <li>Dedicated Assistance – Get help from our partner success team.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl md:text-3xl font-bold mb-4 text-black"
        >
          Who Can Join
        </motion.h2>
        <motion.ul
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="list-disc list-inside space-y-2 text-gray-700"
        >
          <li>Freelancers & entrepreneurs</li>
          <li>Students</li>
          <li>Corporate employees</li>
          <li>Influencers & environmental advocates</li>
        </motion.ul>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <a href="https://forms.gle/qkyuDXiMSBF4Y9gq5
">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition"
        >
          Start Earning as a Partner
        </motion.button>
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default BecomeOurIndividualPartner;
