import Image from "next/image";
import React from "react";

const WorkCard = ({description, title, image, width, top, backgroundColor, position}) => {
  return (
    <div 
      className={`${position} text-white border border-zinc-800/50 w-full rounded-[4rem] min-h-[80vh] p-8 text-center`}
      style={{
        maxWidth: width,
        top: top ? top : '',
        backgroundColor: backgroundColor,
      }}
      >
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        {image}
      </div>
    </div>
  );
};

export default WorkCard;
