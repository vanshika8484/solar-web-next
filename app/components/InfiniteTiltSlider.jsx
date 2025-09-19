"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";

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

export default function InfiniteTiltSlider() {
  return (
    <div>
      <div className="mx-auto my-2 max-w-7xl rounded-3xl bg-black p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
        <ThreeDMarquee images={images} />
      </div>
    </div>
  );
}