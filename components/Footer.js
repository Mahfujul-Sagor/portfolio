import { CONNECT_LINKS, FOOTER_PAGES } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-2'>
      <div className='w-full max-w-[1300px] min-h-[380px] bg-[#1E1D1C] border border-zinc-800/50 mx-auto rounded-t-[2rem] pt-16'>
        <h2 className='text-white text-center lg:text-3xl md:text-2xl sm:text-xl'>
        👋 Thanks for stopping by! Here is more of me if you are interested :{")"}
        </h2>
        <div className='w-full flex justify-center items-center'>
          <div className='w-full grid grid-cols-2'>
            <div>
              <p className='text-[#747265] capitalize'>Pages</p>
              {FOOTER_PAGES.map((link, index) => (
                <Link href={link.href} key={index} className='text-[#7F8188] capitalize'>{link.label}</Link>
              ))}
            </div>
            <div className='flex flex-col gap-2'>
              <p className='capitalize text-[#747265]'>Let&apos;s Connect</p>
              {CONNECT_LINKS.map((link, index) => (
                <a href={link.href} target='_blank' key={index} className='text-[#7F8188] capitalize'>{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer