
import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div), // only import `motion.div`
  { ssr: false }
);
// import D1 from "../Images/d1.webp";
// import D2 from "../Images/d2.webp";
// import D3 from "../Images/d3.webp";
// import D4 from "../Images/d4.webp";

// import D5 from "../Images/d5.webp";
// import D6 from "../Images/d6.webp";

const images = [
  "/Images/d1.webp",
  "/Images/d2.webp",
  "/Images/d3.webp",
  "/Images/d4.webp",
  "/Images/d5.webp",
  "/Images/d6.webp",
];

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (i) => {
    if (sliderRef.current) {
      const childWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({
        left: i * childWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    const newIndex = (index + 1) % images.length;
    setIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (index - 1 + images.length) % images.length;
    setIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Auto scroll every 6 seconds
  useEffect(() => {
    const autoScroll = setInterval(handleNext, 6000);
    return () => clearInterval(autoScroll);
  }, [index]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg mt-10">
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex transition-transform duration-500 ease-in-out overflow-hidden scroll-smooth"
        ref={sliderRef}
      >
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Slide ${i}`}
            width={1280}
            height={720}
            className="w-full flex-shrink-0 object-cover h-64 sm:h-80 md:h-96"
            priority={i === 0}
          />
        ))}
      </MotionDiv>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ImageSlider;
