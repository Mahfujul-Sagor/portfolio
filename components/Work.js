import React from 'react'
import WorkCard from './WorkCard';
import { project1, project2, project3, project4 } from '@/constants';

const Work = () => {
  return (
    <section id="work" className="w-full flex flex-col items-center gap-40 absolute lg:top-[60%] top-[50%] px-4">
      <WorkCard width={1200} top={84} position="sticky" title={project1.title} backgroundColor="#1E1D1C" description={project1.description} image={project1.image}/>
      <WorkCard width={1220} top={124} position="sticky" title={project2.title} backgroundColor="#1E1D1C" description={project2.description} image={project2.image}/>
      <WorkCard width={1240} top={164} position="sticky" title={project3.title} backgroundColor="#1E1D1C" description={project3.description} image={project3.image}/>
      <WorkCard width={1260} top={204} position="sticky" title={project4.title} backgroundColor="#1E1D1C" description={project4.description} image={project4.image}/>
    </section>
  )
}

export default Work;