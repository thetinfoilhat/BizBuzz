"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Import all logos
const logoPath = "/school_logos/[Home] School Logos/";
const logoFiles = [
  "Cass.png", 
  "Neuqua Valley.png", 
  "Avery Coonley.png", 
  "Granger.png", 
  "Kennedy.png", 
  "Twin Groves.png", 
  "Springbrook.png", 
  "erasebg-transformed (23) (1).png", 
  "Jefferson.png", 
  "Homer.png", 
  "Waubonsie Valley.png",
  "Margaret Mead.png",
  "Crone.png",
  "Bednarcik.png",
  "Lincoln.png",
  "Still.png",
  "Naperville Central.png",
  "Calvary.png",
  "Scullen.png",
  "Heritage Grove.png",
  "Beebe.png",
  "Gregory.png",
  "Summit Hill.png",
  "Madison.png",
  "Lake Zurich North.png",
  "Naperville North.png"
];

const LogoScroller = () => {
  // Create a quadruple set of logos to ensure seamless scrolling
  const quadLogos = [...logoFiles, ...logoFiles, ...logoFiles, ...logoFiles];
  
  return (
    <section className="w-full overflow-hidden py-20 bg-white">
      {/* Top row - scrolling left */}
      <div className="relative mb-6 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -50 * (logoFiles.length * 2)]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            }
          }}
          style={{ width: "fit-content" }}
        >
          {quadLogos.map((logo, index) => (
            <div key={`top-${index}`} className="inline-block w-40 h-20 mx-4">
              <div className="relative w-full h-full">
                <Image
                  src={`${logoPath}${logo}`}
                  alt={`School logo ${index % logoFiles.length + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom row - scrolling right */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [-50 * (logoFiles.length * 2), 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            }
          }}
          style={{ width: "fit-content" }}
        >
          {quadLogos.map((logo, index) => (
            <div key={`bottom-${index}`} className="inline-block w-40 h-20 mx-4">
              <div className="relative w-full h-full">
                <Image
                  src={`${logoPath}${logo}`}
                  alt={`School logo ${index % logoFiles.length + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoScroller; 