import React from "react";

export default function Cards() {
  return (
    <>
      <div className="w-full h-screen flex flex-col lg:flex-row items-center px-6 sm:px-12 lg:px-32 gap-5">
        <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh]">
          <div className="relative w-full h-full rounded-xl bg-[#004D43] flex justify-center items-center">
            <img
              className="w-[20vw] sm:w-[15vw] lg:w-[10vw]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <button className="absolute left-6 sm:left-10 bottom-6 sm:bottom-10 px-3 py-1 border-2 rounded-full">
              &copy; ochi
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-5 w-full lg:w-1/2 h-[40vh] sm:h-[50vh]">
          <div className="relative flex items-center justify-center w-full sm:w-1/2 lg:w-full h-full rounded-xl bg-[#1f3835] p-4">
            <img
              className="w-[20vw] sm:w-[15vw] lg:w-[10vw]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <button className="absolute left-6 sm:left-10 bottom-6 sm:bottom-10 px-3 py-1 border-2 rounded-full">
              &copy; ochi
            </button>
          </div>
          <div className="relative flex items-center justify-center w-full sm:w-1/2 lg:w-full h-full rounded-xl bg-[#1f3835] p-4">
            <img
              className="w-[20vw] sm:w-[15vw] lg:w-[10vw]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <button className="absolute left-6 sm:left-10 bottom-6 sm:bottom-10 px-3 py-1 border-2 rounded-full">
              &copy; ochi
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
