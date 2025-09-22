"use client";
import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const safetyVideos = [
  {
    name: "Lal Singh - Safety & Security",
    image:"/Images/c1.PNG",
    video:
      "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671269/Lal_Singh_Safety_And_Security_At_Divy_dqe8mr.mp4",
  },
  {
    name: "Lal Singh - Team Safety",
    image:"/Images/c1.PNG",
    video:
      "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671269/Lal_Singh_Safety_And_Security_At_Divy_dqe8mr.mp4",
  },
  {
    name: "Kaushlesh Singh - Precautions",
    image:"/Images/c2.PNG",
    video:
      "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671270/Kaushlesh_Singh_Safety_Precautions_At_Divy_dyhkar.mp4",
  },
  {
    name: "Kaushlesh - Employee Safety",
    image:"/Images/c3.PNG",
    video:
      "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671270/Kaushlesh_Employee_Safety_At_Divy_kagr69.mp4",
  },
  {
    name: "Rajeev Arora - Safety & Benefits",
    image:"/Images/c4.PNG",
    video:
      "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671269/Rajeev_Arora_Safety_And_Benefit_At_Divy_fi6p6g.mp4",
  },
  {
    name: "Asha - Employee Safety",
    image:"/Images/c5.PNG",
    video:
      "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671270/Asha_Employee_Safety_vigazb.mp4",
  },
  {
    name: "Riddhi - Team Safety",
    image:"/Images/c6.PNG",
    video:
      "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671269/Riddhi_Team_Safety_f12krk.mp4",
  },
];

const SafetySecurityReels = () => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlayPause = (index) => {
    const video = videoRefs.current[index];
    
    // Pause all other videos
    videoRefs.current.forEach((v, i) => {
      if (i !== index && v && !v.paused) {
        v.pause();
      }
    });

    if (video.paused) {
      video.play().catch(error => {
        console.error("Error playing video:", error);
      });
    } else {
      video.pause();
    }
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-12 w-full">
      <div className="max-w-[100%] mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Safety and Security at DIVY
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:flex md:justify-center gap-4">
          {safetyVideos.map((item, index) => (
            <div
              key={index}
              className="bg-[#787878] shadow-md p-2 rounded-lg hover:shadow-lg transition-all w-full sm:w-full md:w-[125px] flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-lg">
                <div className="relative w-full aspect-[9/16] bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                      playingIndex === index ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={item.video}
                    className="absolute inset-0 w-full h-full object-cover"
                    playsInline
                    preload="metadata"
                    onPlay={() => setPlayingIndex(index)}
                    onPause={() => {
                      if (playingIndex === index) {
                        setPlayingIndex(null);
                      }
                    }}
                  />
                </div>
                <button
                  onClick={() => handlePlayPause(index)}
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#787878] text-white p-2 rounded-full hover:bg-[#787878] transition"
                >
                  {playingIndex === index ? (
                    <FaPause size={12} />
                  ) : (
                    <FaPlay size={12} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySecurityReels;
