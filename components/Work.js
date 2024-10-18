import WorkCard from './WorkCard';
import { project1, project2, project3, project4 } from '@/constants';

const Work = () => {
  return (
    <section id="work" className="card-wrapper w-full flex flex-col items-center gap-40 relative lg:top-[70vh] top-[60vh] px-2">
      <WorkCard id={'project1'} width={1200} top={84} position="sticky" title={project1.title} backgroundColor="#1E1D1C" description={project1.description} image={project1.image}/>
      <WorkCard id={'project2'} width={1220} top={124} position="sticky" title={project2.title} backgroundColor="#1E1D1C" description={project2.description} image={project2.image}/>
      <WorkCard id={'project3'} width={1240} top={164} position="sticky" title={project3.title} backgroundColor="#1E1D1C" description={project3.description} image={project3.image}/>
      <WorkCard id={'project4'} width={1260} top={204} position="sticky" title={project4.title} backgroundColor="#1E1D1C" description={project4.description} image={project4.image}/>
    </section>
  )
}

export default Work;