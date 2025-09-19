"use client";
import React from "react";
import Image from "next/image";

const solarImages = [
  "/Images/T1.webp",
  "/Images/T2.webp",
  "/Images/T3.webp",
  "/Images/T4.webp",
  "/Images/T5.webp",
  "/Images/T6.webp",
  "/Images/T7.webp",
  "/Images/T8.webp",
  "/Images/T9.webp",
  "/Images/T10.webp",
  "/Images/T11.webp",
  "/Images/T12.webp",
  "/Images/T13.webp",
  "/Images/T14.webp",
  "/Images/T15.webp",
  "/Images/T16.webp",
  "/Images/T17.webp",
  "/Images/T18.webp",
];

const MasonryGallery = () => {
  return (
    <section className="bg-[#f8f7f0] py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">
          Solar Gallery
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {solarImages.map((img, index) => (
           <div key={index} className="mb-4 break-inside-avoid">
             <Image
               src={img}
               alt={`Solar Panel ${index + 1}`}
               width={400}
               height={300}
               className="w-full h-auto rounded-2xl border-4 border-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
               priority={index < 3} // Load first 3 images with priority
             />
           </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGallery;
