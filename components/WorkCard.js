import Image from "next/image";
import React from "react";

const WorkCard = ({
  description,
  title,
  image,
  liveLink,
  githubLink,
  width,
  top,
  backgroundColor,
  label,
  icon,
}) => {
  return (
    <div
      className={`card md:sticky relative text-white border flex flex-col justify-between items-center border-zinc-800/80 w-full rounded-[4rem] min-h-[80vh] sm:px-8 lg:px-20 sm:py-8 p-6 text-center`}
      style={{
        maxWidth: width,
        top: top ? top : "",
        backgroundColor: backgroundColor,
      }}
    >
      <div className="w-full text-start my-4 flex items-center">
        <Image src={icon} alt="" width={100} height={100}/>
        <p className="text-3xl font-bold">{title}</p>
      </div>
      <div className="flex max-md:flex-col-reverse justify-between items-center gap-16 lg:gap-5 w-full flex-1">
        <div className="flex flex-col justify-center items-start gap-10 flex-1">
          <div className="space-y-4">
            <p className="text-[#7F8188] text-xl font-bold text-start">
              {label}
            </p>
            <p className="sm:text-4xl text-3xl font-bold text-start">
              {description}
            </p>
          </div>
          <div className="flex max-sm:flex-col md:justify-start items-center gap-4 w-full justify-center">
            <a
              href={githubLink}
              target="_blank"
              className="max-md:w-full py-5 px-16  bg-zinc-800/40 hover:bg-zinc-800/50 font-medium rounded-full text-[#adb0b9]"
            >
              Github
            </a>
            <a
              href={liveLink}
              target="_blank"
              className="max-md:w-full py-5 px-16  rounded-full font-medium text-[#adb0b9] border border-zinc-700/50 hover:bg-zinc-800/20"
            >
              Visit
            </a>
          </div>
        </div>
        <div className="flex-1 w-full flex justify-center items-center">
          <Image src={image} alt="" width={340} height={800} className="" />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
