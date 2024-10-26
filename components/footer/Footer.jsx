import Image from 'next/image'
import React from 'react'

const Footer = () => {
    const navlinks = [
        {title:'home',href:"/"},
        {title:'about',href:"/"},
        {title:'rooms',href:"/rooms"},
        {title:'guide',href:"/"},
      ]
      const sociallinks = [
        {title:'instagram',href:"/"},
        {title:'facebook',href:"/"},
        {title:'airbnb',href:"/rooms"},
        {title:'booking',href:"/"},
        {title:'tripadvisor',href:"/"},
      ]
  return (
    <footer className=' bg-mBrown w-full text-white max-lg:hidden'>
        <div className='myContainer flex flex-col overflow-hidden'>
            <div className='flex justify-between items-center mt-20  '>
                <div><p className='text-2xl border-b-2'>info@heleans-rooms.gr</p></div>
                <div>
                    <h3 className='capitalize text-4xl'>sitemap</h3>
                    <ul className='flex flex-col gap-2 items-end capitalize mt-4 text-2xl'>

                    {navlinks.map((l,i)=>(
                        <li key={i} className='text-white/60 hover:text-white transition-colors'><a href={l.href}>{l.title}</a></li>
                    ))}
                    </ul>
                </div>
            </div>
            <div className='w-full border-t-2 border-b-2 border-white py-10 mt-20 flex justify-between items-center'>
                <p className='capitalize text-5xl text-nowrap xl:text-8xl text-white'>a place to remember</p>
                <div className='relative overflow-hidden rounded-[37px] max-xl:w-1/2'>
                <Image alt='sea' src={'/footerimg.png'} width={642} height={110}/>
                <div className='absolute top-0 left-0 w-full h-full bg-black/40 '></div>
                    </div>
            </div>
            <div className='py-10 flex justify-between items-center'>
                <p className='capitalize text-4xl'>Heleana's rooms</p>
                <ul className='flex gap-7 text-xl xl:text-2xl capitalize'>
                    {sociallinks.map((l,i)=>(
                        <li key={i}><a className='text-white/60 hover:text-white transition-colors' href={l.href}>{l.title}</a></li>
                    ))}
                </ul>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer