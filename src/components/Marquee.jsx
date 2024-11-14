import { motion } from "framer-motion";
import React from "react";

export default function Marquee() {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed=".3"
        className="w-full py-10 bg-emerald-700 rounded-tl-xl rounded-tr-xl"
      >
        <div className="border-t-2 border-b-2 flex  overflow-hidden whitespace-nowrap">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
            className="text-[15vw] font-medium text-white leading-none pr-10 mb-[1vw]"
          >
            Welcome to our website!
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
            className="text-[15vw] font-medium text-white leading-none mb-[1vw] pr-10"
          >
            Welcome to our website!
          </motion.h1>
        </div>
      </div>
    </>
  );
}
