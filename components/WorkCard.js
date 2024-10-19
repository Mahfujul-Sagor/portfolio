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
  mockup,
}) => {
  return (
    <div
      className={`card ${position} text-white border border-zinc-800/50 w-full rounded-[4rem] min-h-[80vh] p-8 text-center`}
      style={{
        maxWidth: width,
        top: top ? top : "",
        backgroundColor: backgroundColor,
      }}
    >
      <div className="flex flex-col gap-4">
        <p>{description}</p>
        <a
          href={githubLink}
          target="_blank"
          className="text-[#7F8188] text-[18px] capitalize font-bold hover:text-white max-sm:text-sm"
        >
          Github
        </a>
        <a
          href={liveLink}
          target="_blank"
          className="text-[#7F8188] text-[18px] capitalize font-bold hover:text-white max-sm:text-sm"
        >
          Visit
        </a>
      </div>
      <div className="relative flex justify-center items-center">
        <Image
          src={image}
          alt=""
          width={280}
          height={1080}
          className="rounded-[3rem] absolute -z-10"
        />
        <Image
          src={mockup}
          alt=""
          className=""
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
};

export default WorkCard;
