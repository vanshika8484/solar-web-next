import React from "react";
import { motion  } from "@/app/utils/motion";
import Image from "next/image";

// All images
const images = [
  "/Images/W1.webp",
  "/Images/W2.webp",
  "/Images/W3.webp",
  "/Images/W4.webp",
  "/Images/W5.webp",
  "/Images/W6.webp",
  "/Images/W7.webp",
  "/Images/W8.webp",
  "/Images/W9.webp",
  "/Images/W10.webp",
  "/Images/W11.webp",
  "/Images/W12.webp",
  "/Images/W13.webp",
  "/Images/W14.webp",
  "/Images/W15.webp",
  "/Images/W16.webp",
  "/Images/W17.webp",
  "/Images/W18.webp",
  "/Images/W19.webp",
  "/Images/W20.webp",
  "/Images/W21.webp",
  "/Images/W22.webp",
  "/Images/W23.webp",
  "/Images/W24.webp",
  "/Images/W25.webp",
  "/Images/W26.webp",
  "/Images/W27.webp",
  "/Images/W28.webp",
  "/Images/W29.webp",
  "/Images/W30.webp",
  "/Images/W31.webp",
  "/Images/W32.webp",
];

// Split images into 3 sets
const col1Images = images.slice(0, 11);
const col2Images = images.slice(11, 22);
const col3Images = images.slice(22, 32);

// Single column with infinite scroll
const Column = ({ images, direction = "down", speed = 20 }) => {
  return (
    <motion.div
      className="flex flex-col gap-3"
      animate={{
        y: direction === "down" ? ["-50%", "0%"] : ["0%", "-50%"],
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: speed,
      }}
    >
      {[...images, ...images].map((src, i) => (
        <div
          key={i}
          className="
            w-[140px] h-[80px]        /* mobile */
            sm:w-[160px] sm:h-[90px]  /* small screens */
            md:w-[200px] md:h-[100px] /* tablets */
            lg:w-[220px] lg:h-[110px] /* desktops */
            bg-gray-800 rounded-lg overflow-hidden shadow-md
          "
          style={{
            transform: "rotateX(8deg) rotateY(-8deg) skewX(-4deg)",
          }}
        >
          <Image
            src={src}
            fill
            alt={`Image ${i + 1}`}
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default function InfiniteTiltSlider() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white px-4">
      {/* Responsive Box */}
      <div
        className="bg-neutral-900 rounded-xl shadow-xl p-4 overflow-hidden border border-gray-700 
                      w-full max-w-[820px] h-[70vh] sm:h-[650px]"
      >
        {/* Grid: 2 cols on mobile → 3 cols on large */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
          <Column images={col1Images} direction="down" speed={150} />
          <Column images={col2Images} direction="up" speed={150} />
          <Column images={col3Images} direction="down" speed={150} />
        </div>
      </div>
    </div>
  );
}
