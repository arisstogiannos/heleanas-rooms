'use client'
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

export default function SmoothContainer({
    children,
  }) {

    const p = usePathname();
    useEffect(() => {

    if(window.innerWidth>1280){

      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({
          smooth: true,
          lenisOptions:{smoothWheel:true,duration:2,wheelMultiplier:0.8,smoothTouch:false,},
          
        });
        // setLoco(locomotiveScroll);
      })();
    }else{
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({
          smooth:false,
          lenisOptions:{smoothWheel:false,smoothTouch:false,},
          
        });
        // setLoco(locomotiveScroll);
      })();
    }
    }
    , []);
    useEffect(()=>{
      if(p.includes('rooms')){
  
        document.body.style.backgroundColor='#918671'
      }else{
        
        document.body.style.backgroundColor='#DBDDE0'
        // document.body.classList.remove('bg-mWhite')
      }

    },[p])
  return (
    <div className='     scroller h-[100svh]'>{children}</div>
  )
}

