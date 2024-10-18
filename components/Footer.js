import { FOOTER_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-2'>
      <div className='w-full max-w-[1300px] min-h-[380px] bg-[#1E1D1C] border border-zinc-800/50 mx-auto rounded-t-[2rem] pt-16'>
        <h2 className='text-white text-center lg:text-3xl md:text-2xl sm:text-xl'>
        👋 Thanks for stopping by! Here is more of me if you are interested :{")"}
        </h2>
        <div>
          <div>
            <p className='text-[#747265]'>Pages</p>
            {FOOTER_LINKS.map((link, index) => (
              <Link href={link.href} key={index} className='text-[#7F8188]'>{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer