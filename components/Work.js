import WorkCard from './WorkCard';
import { project1, project2, project3, project4 } from '@/constants';

const Work = () => {
  return (
    <section id="work" className="card-wrapper w-full flex flex-col items-center gap-40 relative lg:top-[70vh] top-[60vh] px-2">
      <WorkCard width={1200} top={84} position="sticky" title={project1.title} backgroundColor="#1E1D1C" description={project1.description} image={project1.image} mockup={project1.mockup} liveLink={project1.liveLink} githubLink={project1.githubLink}/>
      <WorkCard width={1220} top={124} position="sticky" title={project2.title} backgroundColor="#1E1D1C" description={project2.description} image={project2.image} mockup={project2.mockup} liveLink={project2.liveLink} githubLink={project2.githubLink}/>
      <WorkCard width={1240} top={164} position="sticky" title={project3.title} backgroundColor="#1E1D1C" description={project3.description} image={project3.image} mockup={project3.mockup} liveLink={project3.liveLink} githubLink={project3.githubLink}/>
      <WorkCard width={1260} top={204} position="sticky" title={project4.title} backgroundColor="#1E1D1C" description={project4.description} image={project4.image} mockup={project4.mockup} liveLink={project4.liveLink} githubLink={project4.githubLink}/>
    </section>
  );
};

export default Work;