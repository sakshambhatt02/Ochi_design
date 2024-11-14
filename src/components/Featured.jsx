import { motion, useAnimation } from "framer-motion";
import React from "react";

export default function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <>
      <div className="w-full py-8 sm:py-10">
        <div className="w-full px-6 sm:px-10 border-b-[1px] border-zinc-700 pb-6 sm:pb-10">
          <h1 className="text-[8vw] sm:text-[5vw] md:text-[4vw] tracking-tight">
            Featured Products
          </h1>
        </div>
        <div className="px-6 sm:px-12 lg:px-20 mt-8 sm:mt-10">
          <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10">
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-[70vh]"
            >
              <div className="w-full h-full rounded-xl bg-green-500 overflow-hidden">
                <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none tracking-tight z-[9] text-[12vw] sm:text-[8vw] md:text-[5vw]">
                  {"FYDE".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[0]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.1,
                      }}
                      key={index}
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <img
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-[70vh]"
            >
              <div className="w-full h-full rounded-xl overflow-hidden">
                <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] leading-none tracking-tight z-[9] text-[12vw] sm:text-[8vw] md:text-[5vw]">
                  {"VISE".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.1,
                      }}
                      key={index}
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <img
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
