import React from "react";

export default function About() {
  return (
    <>
      <div className="px-10 w-full py-10 bg-[#CDEA68] rounded-tl-xl rounded-tr-xl">
        <h2 className="text-[4vw] font-bold mb-6">About Us</h2>
        <p className="text-[2vw] tracking-tight mb-8">
          We are a creative agency specializing in eye-opening presentations and
          innovative design solutions. With years of experience and a passion
          for excellence, we help businesses communicate their ideas effectively
          and leave lasting impressions.
        </p>
        <div className="w-full p-10 flex flex-row border-t-[2px] mt-10 border-[#a1b562]">
          <div className="w-1/2">
            <h1 className="text-[3vw] mb-4">Our Approach:</h1>
            <ul className="list-disc list-inside text-[1.5vw] mb-6">
              <li>Client-focused strategy</li>
              <li>Innovative design thinking</li>
              <li>Data-driven insights</li>
              <li>Collaborative process</li>
            </ul>
            <button className="px-10 py-6 mt-8 flex items-center gap-6 uppercase bg-zinc-900 rounded-full text-white hover:bg-zinc-700 transition-colors">
              Read More
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
          <div className="w-1/2 h-[60vh] flex items-center justify-center rounded-xl bg-emerald-400 overflow-hidden">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt="Ochi Design Logo"
              className="object-cover w-[15vw] hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
}
