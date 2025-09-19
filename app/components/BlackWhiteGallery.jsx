import React from "react";
import { motion  } from "@/app/utils/motion";
import Image from 'next/image';


// Put them into an array
const allImages = [
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

// Generate photo objects automatically
const photos = allImages.map((img, i) => ({
  src: img,
  alt: `Black and white photo number ${i + 1}`, // you can customize alt texts later
  width: 400,
  height: 300,
}));

export default function BlackWhiteGallery() {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen p-4">
      <motion.div
        className="flex space-x-4 max-w-full overflow-x-auto no-scrollbar"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        drag="x"
        dragConstraints={{ left: -300, right: 0 }}
        dragElastic={0.2}
      >
        {photos.map(({ src, alt, width, height }, index) => (
          <motion.img
            key={index}
            src={src}
            alt={alt}
            className="flex-shrink-0 object-cover rounded-xl shadow-md"
            style={{ width: width + "px", height: height + "px" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
