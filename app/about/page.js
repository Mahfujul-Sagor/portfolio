import { ABOUT_HEADER, BACKGROUND, CLUBS, EDUCATION, SKILLS, SOFT_SKILLS, TECHNICAL_SKILLS } from "@/constants";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full my-40">
      <div className="text-center">
        <h1 className="lg:text-7xl sm:text-5xl text-[32px] py-1 font-medium bg-clip-text text-transparent bg-gradient-to-b from-white to-[#7F8188]">
          {ABOUT_HEADER.name}
        </h1>
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-[#7F8188]">
          {ABOUT_HEADER.description}
        </h2>
      </div>
      <div className="w-full max-w-[1300px] mx-auto space-y-16 mt-16">
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
      {/* education */}
      <div className="w-full max-w-[1300px] mx-auto space-y-16 mt-16">
        <h3 className="uppercase text-center text-[#7F8188] md:text-3xl text-2xl">{EDUCATION.title}</h3>
        <div className="w-full bg-[#1E1D1C] space-y-8 border border-zinc-800/50 rounded-[1.5rem] sm:py-10 sm:px-16 py-8 px-8">
          <div className="flex gap-8 justify-start items-center">
            <Image src={EDUCATION.logo} width={100} height={100} alt="MBSTU"/>
            <div className="space-y-2">
              <h4 className="text-white font-bold md:text-3xl sm:text-2xl ">{EDUCATION.university}</h4>
              <p className="text-[#7F8188] md:text-xl text-base">{EDUCATION.year}</p>
            </div>
          </div>
          <div>
            <p className="text-[#979797] md:text-xl text-base">{EDUCATION.degree}</p>
          </div>
        </div>
      </div>
      {/* skills */}
      <div className="w-full max-w-[1300px] mx-auto space-y-16 mt-16">
        <h3 className="uppercase text-center text-[#7F8188] md:text-3xl text-2xl">{SKILLS.title}</h3>
        <div className="space-y-4 w-full">
          <div className="flex max-md:flex-col gap-4">
            <div className="w-full bg-[#1E1D1C] space-y-4 border border-zinc-800/50 rounded-[1.5rem] sm:py-10 sm:px-16 py-8 px-8">
              <h4 className="text-white font-bold md:text-3xl sm:text-2xl">{TECHNICAL_SKILLS.title}</h4>
              <p className="text-[#979797] md:text-xl text-base">{TECHNICAL_SKILLS.skills}</p>
            </div>
            <div className="w-full bg-[#1E1D1C] space-y-4 border border-zinc-800/50 rounded-[1.5rem] sm:py-10 sm:px-16 py-8 px-8">
              <h4 className="text-white font-bold md:text-3xl sm:text-2xl">{SOFT_SKILLS.title}</h4>
              <p className="text-[#979797] md:text-xl text-base">{SOFT_SKILLS.skills}</p>
            </div>
          </div>
          <div className="w-full bg-[#1E1D1C] space-y-4 border border-zinc-800/50 rounded-[1.5rem] sm:py-10 sm:px-16 py-8 px-8">
            <h4 className="text-white font-bold md:text-3xl sm:text-2xl">{CLUBS.title}</h4>
            <p className="text-[#979797] md:text-xl text-base">{CLUBS.clubs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
