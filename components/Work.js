import { PROJECTS } from "@/constants";
import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <section id="work" className="w-full relative z-10">
      <div className="w-full max-w-[1200px] flex justify-center items-center">
        {PROJECTS.map((project, _) => {
          <div key={project.id} className="flex flex-col items-center gap-20">
            <WorkCard width={800} description={project.description} title={project.title} image={project.image} githubLink={project.githubLink} liveLink={project.liveLink} mockup={project.mockup} />
          </div>
        })}
      </div>
    </section>
  );
};

export default Work;
