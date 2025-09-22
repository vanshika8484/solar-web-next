import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa"; // Icons

const reelsData = [
  {
    role: "Solar Specialist",
    image:"/Images/a3.PNG",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670986/Asha_Growth_At_Divy_rm8u7t.mp4",
  },
  {
    role: "Solar Specialist",
    image:"/Images/a4.PNG",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670987/Kaushlesh_Growth_At_Divy_l4rdbm.mp4",
  },
  {
    role: "Solar Specialist",
    image:"/Images/a5.PNG",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670987/Rishika_Growth_At_Divy_xog75t.mp4",
  },
  {
    role: "Solar Specialist",
    image:"/Images/a6.PNG",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670987/Riddhi_Growth_At_Divy_mfjyez.mp4",
  },
  {
    role: "Solar Specialist",
    image:"/Images/a7.PNG",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670987/Kaushlesh_Singh_Growth_At_Divyy_emjd0y.mp4",
  },
  {
    role: "Solar Specialist",
    image:"/Images/a8.PNG",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670988/Shruti_Growth_At_Divy_tfpcmy.mp4",
  },
];


const HoverVideoCard3 = () => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlayPause = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video && !video.paused) {
        video.pause();
      }
    });

    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
      setPlayingIndex(index);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-12 w-full">
      <div className="max-w-[100%] mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-green-800 mb-8">
          Growth At Divy
        </h2>

        {/* Mobile: 3-cols grid | Desktop: Centered row */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:flex md:justify-center gap-4">
          {reelsData.map((reel, index) => (
            <div
              key={index}
              className="bg-[#787878] shadow-md p-2 rounded-lg hover:shadow-lg transition-all w-full sm:w-full md:w-[180px] flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-lg">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={reel.reel}
                  poster={reel.image}
                  className="w-full aspect-[9/16] object-cover"
                  playsInline
                  onLoadStart={() => {
                    // Ensure poster is shown when video starts loading
                    const video = videoRefs.current[index];
                    if (video) video.poster = reel.image;
                  }}
                  onCanPlay={() => {
                    // Hide poster when video is ready to play
                    const video = videoRefs.current[index];
                    if (video) video.poster = '';
                  }}
                />
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

export default HoverVideoCard3;
