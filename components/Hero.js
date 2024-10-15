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
      <div className='w-full max-w-[1200px] h-[909px] px-20 py-32 rounded-[6rem] bg-gradient-to-b from-[#1E1D1C] to-[#101010] flex flex-col items-center gap-16'>
        <div className='text-center'>
          <h1 className='text-6xl py-1 font-medium bg-clip-text text-transparent bg-gradient-to-b from-white to-[#7F8188]'>{HERO.name}</h1>
          <h2 className='text-3xl text-[#7F8188]'>{HERO.description}</h2>
        </div>
        <div className='flex gap-6'>
          <Link href='#work' onClick={(e)=> handleLinkClick(e, '#work')} className='px-10 py-4 bg-zinc-800/40 font-medium rounded-full text-[#adb0b9]' >My work</Link>
          <Link href='/about' className='px-10 py-4 rounded-full font-medium text-[#adb0b9] border border-zinc-700/50' >About me</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;