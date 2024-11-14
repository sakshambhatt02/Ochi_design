import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function LandingPage() {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.4"
        className="w-full h-screen pt-1"
      >
        <div className="mt-20 sm:mt-32 md:mt-40 px-6 sm:px-8 md:px-10">
          {["We create", "Eye Opening", "Presentations"].map((item, index) => {
            return (
              <div
                key={index}
                className="w-fit flex items-center justify-center leading-[1]"
              >
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw", md: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[25vw] sm:w-[15vw] md:w-[9vw] h-[15vh] sm:h-[12vh] md:h-[9.5vh] bg-emerald-400 rounded-xl flex items-center justify-center"
                  >
                    <img
                      src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                      alt=""
                      className="object-cover"
                    />
                  </motion.div>
                )}
                <p
                  key={index}
                  className="text-[10vw] sm:text-[8vw] md:text-[6vw] uppercase font-semibold flex items-center h-full leading-none"
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div>
        <div className="border-t-[2px] border-zinc-800 mt-10 sm:mt-16 md:mt-20 flex flex-col md:flex-row justify-between items-center px-6 sm:px-8 md:px-10 py-10 sm:py-16 md:py-20 space-y-6 md:space-y-0">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => {
            return (
              <p
                key={index}
                className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-light text-center md:text-left"
              >
                {item}
              </p>
            );
          })}
          <div className="flex flex-col sm:flex-row gap-4 items-center cursor-pointer">
            <div className="text-[3vw] sm:text-[2vw] md:text-[1vw] px-4 py-2 border-[2px] rounded-full text-center sm:text-left">
              Start the Project
            </div>
            <div className="w-12 sm:w-10 h-12 sm:h-10 border-[2px] rounded-full flex justify-center items-center">
              <span className="rotate-45 text-[4vw] sm:text-[2.5vw] md:text-[1.5vw]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
