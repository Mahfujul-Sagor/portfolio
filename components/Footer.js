import { CONNECT_LINKS, FOOTER_PAGES } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-2'>
      <div className='w-full max-w-[1300px] min-h-[380px] flex flex-col items-center justify-between bg-[#1E1D1C] border border-zinc-800/50 mx-auto rounded-t-[2rem] py-16'>
        <h2 className='text-white text-center lg:text-3xl md:text-2xl sm:text-xl'>
        👋 Thanks for stopping by! Here is more of me if you are interested :{")"}
        </h2>
        <div className='w-full flex justify-center items-center'>
          <div className='flex justify-between items-center w-[70%]'>
            <div className='flex flex-col gap-2'>
              <p className='text-[#747265] uppercase text-sm'>Pages</p>
              {FOOTER_PAGES.map((link, index) => (
                <Link href={link.href} key={index} className='text-[#7F8188] text-[18px] capitalize font-bold'>{link.label}</Link>
              ))}
            </div>
            <div className='flex flex-col gap-2'>
              <p className='uppercase text-[#747265] text-sm'>Let&apos;s Connect</p>
              {CONNECT_LINKS.map((link, index) => (
                <a href={link.href} target='_blank' key={index} className='text-[#7F8188] text-[18px] capitalize font-bold'>{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer