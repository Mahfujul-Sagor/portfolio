"use client";
import { HERO } from '@/constants';
import Link from 'next/link';
import React from 'react'

const Hero = () => {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior:"smooth",
      });
    }
  };
  return (
    <section className='w-full flex justify-center items-center mt-40'>
      <div className='w-full max-w-[1200px] h-[909px] lg:px-20 md:px-14 px-8 lg:py-32 py-24 rounded-[6rem] bg-gradient-to-b from-[#1E1D1C] to-[#101010] flex flex-col items-center lg:gap-16 md:gap-14 sm:gap-12 gap-10'>
        <div className='text-center'>
          <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl py-1 font-medium bg-clip-text text-transparent bg-gradient-to-b from-white to-[#7F8188]'>{HERO.name}</h1>
          <h2 className='lg:text-3xl md:text-2xl text-[#7F8188]'>{HERO.description}</h2>
        </div>
        <div className='flex md:gap-6 sm:gap-4 gap-3'>
          <Link href='#work' onClick={(e)=> handleLinkClick(e, '#work')} className='lg:text-base text-sm w-[152px] flex justify-center items-center h-[56px] max-[425px]:w-[120px] max-[425px]:h-[46px] bg-zinc-800/40 font-medium rounded-full text-[#adb0b9]' >My work</Link>
          <Link href='/about' className='lg:text-base text-sm w-[152px] flex justify-center items-center h-[56px] max-[425px]:w-[120px] max-[425px]:h-[46px] rounded-full font-medium text-[#adb0b9] border border-zinc-700/50' >About me</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;