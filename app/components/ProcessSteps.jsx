import React from "react";
import { motion  } from "@/app/utils/motion";
import {
  ClipboardDocumentCheckIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    id: "01",
    title: "Register Work",
    Icon: ClipboardDocumentCheckIcon,
  },
  {
    id: "02",
    title: "Inspect Analyze",
    Icon: MagnifyingGlassIcon,
  },
  {
    id: "03",
    title: "Work Processing",
    Icon: Cog6ToothIcon,
  },
  {
    id: "04",
    title: "Handover Clients",
    Icon: InboxIcon,
  },
];

const iconAnimation = {
  animate: { y: [0, -10, 0] },
  transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
};

export default function ProcessSteps() {
  return (
    <div className="bg-white min-h-screen flex flex-col GetFontSol">
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <h1 className="text-center  text-green-800 leading-snug max-w-4xl text-xl sm:text-2xl md:text-3xl font-bold mx-auto ">
          Quality Handyman Solution
        </h1>

        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {steps.map(({ id, title, Icon }, index) => (
            <div
              key={id}
              className="relative bg-white shadow-lg py-12 px-6 sm:px-8 flex flex-col items-center text-center rounded-xl"
            >
              {/* Top Decorative Triangle */}
              <svg
                className="absolute top-0 left-0 right-0 rotate-180"
                fill="none"
                height="40"
                viewBox="0 0 100 40"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 40 L50 0 L100 40 Z" fill="#E4FBE4" />
              </svg>

              {/* Icon with animation */}
              <motion.div
                className="rounded-full bg-green-100 p-6 mb-6 z-10"
                {...iconAnimation}
              >
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-green-800" />
              </motion.div>

              {/* Title */}
              <h2 className="text-base sm:text-lg About1 text-gray-900 leading-tight tracking-wide uppercase">
                {title.split(" ").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h2>

              {/* Step number badge */}
              <div className="absolute -bottom-5 bg-green-100 border-2 border-green-800 text-green-800 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-xs sm:text-sm font-bold shadow">
                {index + 1}
              </div>

              {/* Bottom Triangle */}
              <svg
                className="absolute bottom-0 left-0 right-0 top-3"
                fill="none"
                height="40"
                viewBox="0 0 100 40"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0 L50 40 L100 0 Z" fill="white" />
              </svg>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
