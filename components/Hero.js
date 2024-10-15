import { HERO } from '@/constants';
import React from 'react'

const Hero = () => {
  return (
    <section id='home' className='w-full flex justify-center items-center mt-40'>
      <div className='w-full max-w-[1200px] h-[909px] px-20 py-32 bg-[#1E1D1C] rounded-[6rem] bg-gradient-to-b from-[#1E1D1C] to-[#101010] flex justify-center'>
        <div className='text-center'>
          <h1 className='text-6xl py-1 font-medium bg-clip-text text-transparent bg-gradient-to-b from-white to-[#7F8188]'>{HERO.name}</h1>
          <h2 className='text-3xl text-[#7F8188]'>{HERO.description}</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero;