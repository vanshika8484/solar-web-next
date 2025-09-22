import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa"; // Play / Pause icons

const reelsData = [
  {
    role: "Employees Are Our Partners",
    image:"/Images/a1.PNG",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670833/Our_Employees_Are_Our_Partner_easwe4.mp4",
  },
  {
    role: "25 Years into Energy",
    image:"/Images/a2.PNG",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670833/25_years_into_energry_xsxymp.mp4",
  },
  {
    role: "Company is a Group Company",
    image:"/Images/a1.PNG",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670830/Our_Company_Is_A_Group_Company_klspkt.mp4",
  },
  {
    role: "I Am A Worker Not Owner",
    image:"/Images/a1.PNG",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670831/I_Am_A_Worker_Not_A_Owner_rcslnv.mp4",
  },
  {
    role: "Mission & Vision",
    image:"/Images/a2.PNG",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670833/Mission_And_Vision_xcrjkt.mp4",
  },
  {
    role: "We Believe in Solution",
    image:"/Images/a1.PNG",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670833/We_Believe_In_Solution_Based_Approach_tinnqb.mp4",
  },
];


const HoverVideoCard2 = () => {
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
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-12 w-full">
      <div className="max-w-[100%] mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-green-800 mb-8 ">
          Our Founder Philosophy
        </h2>

        {/* Mobile: Grid 3 cols, Desktop: Centered row */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:flex md:justify-center gap-4">
          {reelsData.map((reel, index) => (
            <div
              key={index}
              className="bg-[#787878] shadow-md p-2 rounded-lg hover:shadow-lg transition-all w-full sm:w-full md:w-[170px] flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <div className="relative w-full h-full bg-gray-200">
                  <img
                    src={reel.image}
                    alt={reel.role}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                      playingIndex === index ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={reel.reel}
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

              {/* Text under video */}
              <p className="mt-2 text-[10px] sm:text-xs text-gray-100 text-center font-medium">
                {reel.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoverVideoCard2;
