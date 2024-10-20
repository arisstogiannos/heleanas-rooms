'use client'
import React, { useEffect } from 'react'

export default function SmoothContainer({
    children,
  }) {
    useEffect(() => {

    if(window.innerWidth>1024){

      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({
          smooth: true,
          lenisOptions:{smoothWheel:true,duration:2,wheelMultiplier:0.8,smoothTouch:false,},
          
        });
        // setLoco(locomotiveScroll);
      })();
    }
    }
    , []);
  return (
    <div className='scroller  h-[85vh] overflow-hidden'>{children}</div>
  )
}

