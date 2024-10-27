'use client'
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

export default function SmoothContainer({
    children,
  }) {

    const p = usePathname();
    useEffect(() => {
      let locomotiveScroll
    if(window.innerWidth>1400){

      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
         locomotiveScroll = new LocomotiveScroll({
          smooth: true,
          lenisOptions:{smoothWheel:true,duration:2,wheelMultiplier:0.8,smoothTouch:false,},
          
        });
        // setLoco(locomotiveScroll);
      })();
    }else{
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
         locomotiveScroll = new LocomotiveScroll({
          smooth:false,
          lenisOptions:{smoothWheel:false,smoothTouch:false,},
          
        });
        // setLoco(locomotiveScroll);
      })();
    }
    return ()=> {
      if (locomotiveScroll) locomotiveScroll.destroy();
  }
    }
    , [p]);
    useEffect(()=>{
      if(p.endsWith('rooms')){
  
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

