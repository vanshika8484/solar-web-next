import { motion  } from "@/app/utils/motion";
import Image from "next/image";

const images = [
  {
    src: "/Images/e1.webp",
    alt: "People walking near solar panels and wind turbine",
  },
  {
    src: "/Images/e2.webp",
    alt: "Engineer with clipboard near solar panels",
  },
  {
    src: "/Images/e3.webp",
    alt: "Close-up of solar panels with wind turbine",
  },
  {
    src: "/Images/e4.webp",
    alt: "Person looking at solar panels and wind turbine",
  },
  {
    src: "/Images/e5.webp",
    alt: "Person looking at solar panels and wind turbine",
  },
  {
    src: "/Images/e6.webp",
    alt: "Person looking at solar panels and wind turbine",
  },
  {
    src: "/Images/e7.webp",
    alt: "Person looking at solar panels and wind turbine",
  },
  {
    src: "/Images/e8.webp",
    alt: "Person looking at solar panels and wind turbine",
  },
];

const Gallery = () => {
  return (
    <main className="p-4 md:p-6 max-w-7xl mx-auto md:px-12 lg:px-20 xl:px-32">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Removed .concat(images) to avoid duplication */}
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden group"
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="w-full h-auto rounded-xl object-cover"
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
