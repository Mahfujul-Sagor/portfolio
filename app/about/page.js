import { ABOUT_HEADER } from "@/constants";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full mt-40">
      <div className="text-center">
        <h1 className="lg:text-7xl sm:text-5xl text-[32px] py-1 font-medium bg-clip-text text-transparent bg-gradient-to-b from-white to-[#7F8188]">
          {ABOUT_HEADER.name}
        </h1>
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-[#7F8188]">
          {ABOUT_HEADER.description}
        </h2>
      </div>
      <div>

      </div>
    </div>
  );
};

export default About;
