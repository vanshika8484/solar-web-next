"use client";
import React from "react";

const FullScreenVideo = ({ mode = "cover" }) => {
  return (
    <div className="w-full h-[260px] md:h-screen xl:h-screen 2xl:h-screen lg:h-screen relative overflow-hidden bg-black">
      <video
        className={`absolute top-0 left-0 w-full h-full 
          ${mode === "cover" ? "object-cover" : "object-contain"} 
          md:object-cover`}
        src="/Images/F.webm"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/Images/SL.webp"
      />
    </div>
  );
};

export default FullScreenVideo;
