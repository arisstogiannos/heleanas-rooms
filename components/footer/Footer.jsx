"use server"
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    const navlinks = [
        { title: "home", href: "/" },
        { title: "about", href: "/#about" },
        { title: "rooms", href: "/rooms" },
        { title: "guide", href: "/#guide" },
      ];
      const sociallinks = [
        { title: "instagram", href: "https://www.instagram.com/helenas_rooms/" },
        { title: "facebook", href: "https://www.facebook.com/Helenasrooms/" },
        { title: "airbnb", href: "https://www.airbnb.gr/users/show/1721132" },
        { title: "booking", href: "https://www.booking.com/hotel/gr/helena-39-s-rooms.html?aid=318615&label=New_English_EN_GR_26745747865-cgHJznX2Y6eGVkzaC%2AB6owS637942138514%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-195219801865%3Alp9061579%3Ali%3Adec%3Adm%3Aag26745747865%3Acmp394169905&sid=a8d48116767371049b86f6347e60f62d&dest_id=-819264;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1730043583;srpvid=63656e1c577300b9;type=total;ucfs=1&" },
        { title: "tripadvisor", href: "https://www.tripadvisor.com/Hotel_Review-g676294-d19578908-Reviews-Helena_s_Rooms-Kassiopi_Corfu_Ionian_Islands.html" },
      ];
  return (
    <footer className=' bg-mBrown w-full text-white max-lg:hidden'>
        <div className='myContainer flex flex-col overflow-hidden'>
            <div className='flex justify-between items-center mt-20  '>
                <div><p className='text-2xl border-b-2'>info@helenas-rooms.gr</p></div>
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
                <p className='capitalize text-5xl text-nowrap 2xl:text-7xl 3xl:text-8xl text-white'>a place to remember</p>
                <div className='relative overflow-hidden rounded-[37px] max-xl:w-1/2'>
                <Image alt='sea' src={'/footerimg.png'} width={642} height={110}/>
                <div className='absolute top-0 left-0 w-full h-full bg-black/40 '></div>
                    </div>
            </div>
            <div className='py-10 flex justify-between items-center'>
                <p className='capitalize text-4xl'>Helena's rooms</p>
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