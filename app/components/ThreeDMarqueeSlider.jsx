"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ThreeDMarquee = ({ images }) => {
  return (
    <div className="relative flex h-full w-full overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{
          x: [0, -50],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {[...images, ...images].map((image, idx) => (
          <motion.div
            key={idx}
            className="relative h-[200px] w-[300px] flex-shrink-0 overflow-hidden rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={image}
              alt={`Image ${idx}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default function ThreeDMarqueeSlider() {
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
  ];

  return (
    <div>
      <ThreeDMarquee images={images} />
    </div>
  );
}
