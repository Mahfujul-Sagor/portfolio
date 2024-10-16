import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const WorkCard = ({
  width,
  title,
  description,
  image,
  githubLink,
  liveLink,
  mockup,
}) => {
  return (
    <div className={`w-[${width}px] sticky top-0 rounded-[4rem] bg-[#1E1D1C] border border-zinc-800 text-white`}>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <div>
          <p>{type}</p>
          <p>{description}</p>
          <Link href={githubLink}> Github</Link>
          <Link href={liveLink}>Visit</Link>
        </div>
        <div>
          <Image src={mockup} alt='mockup' height={400} width={400} className=''/>
        </div>
      </div>
    </div>
  )
}

export default WorkCard;