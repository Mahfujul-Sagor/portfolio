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
  position,
}) => {
  return (
    <div
      className={`card ${position} flex justify-center items-center text-white border border-zinc-800/50 w-full rounded-[4rem] min-h-[80vh] p-8 text-center`}
      style={{
        maxWidth: width,
        top: top ? top : "",
        backgroundColor: backgroundColor,
      }}
    >
      <div className="flex flex-col justify-between items-center flex-1">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex flex-col gap-8">
          <p className="text-4xl font-bold">{description}</p>
          <div className="flex justify-center items-center gap-6">
            <a
              href={githubLink}
              target="_blank"
              className="text-base px-12 py-5 max-[425px]:w-full flex justify-center items-center bg-zinc-800/40 hover:bg-zinc-800/50 font-medium rounded-full text-[#adb0b9]"
            >
              Github
            </a>
            <a
              href={liveLink}
              target="_blank"
              className="text-base px-12 flex justify-center items-center py-5 max-[425px]:w-full rounded-full font-medium text-[#adb0b9] border border-zinc-700/50 hover:bg-zinc-800/20"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-1">
        <Image
          src={image}
          alt=""
          width={400}
          height={1080}
          className=""
        />
      </div>
    </div>
  );
};

export default WorkCard;
