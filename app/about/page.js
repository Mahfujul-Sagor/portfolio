import { ABOUT_HEADER, BACKGROUND, EDUCATION } from "@/constants";
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
      <div className="w-full max-w-[1300px] mx-auto">
        <h3 className="uppercase text-center text-[#7F8188] md:text-3xl text-2xl">
          {BACKGROUND.title}
        </h3>
        <div className="text-[#979797] md:text-xl text-base space-y-4">
          <p>{BACKGROUND.currentPosition}</p>
          <p>{BACKGROUND.childhood}</p>
          <p>{BACKGROUND.college}</p>
          <p>{BACKGROUND.conclusion}</p>
        </div>
      </div>
      <div>
        <div>
          <Image src={EDUCATION.logo} width={120} height={120} alt="MBSTU"/>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
