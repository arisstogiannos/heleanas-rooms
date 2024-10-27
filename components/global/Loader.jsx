'use client'
import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef } from 'react'

const Loader = () => {
const comp = useRef(null)

useLayoutEffect(()=>{
    let ctx = gsap.context(()=>{
        const tl = gsap.timeline()
        tl.fromTo(
            ".wordIntro",
            {
              duration:0,
              y: 60,
              opacity: 0,
            },
            {
              y: 0,
              delay:0.2,
              opacity: 1,
              duration: 0.9, // Adjust the duration for each word's entrance
              ease: "circ.out",
              stagger: 0.1, // Adjust the delay between each word's appearance
            }
          ).to(
            ".wordIntro",
            {
             delay:0.3,
              opacity: 0,
              filter: 'blur(4px)',
              duration: 1.5, // Adjust the duration for each word's entrance
              ease: "circ.out",
              stagger: 0.13, // Adjust the delay between each word's appearance
            }
          ).to(
            comp.current,
            {
                
                 opacity: 0,
                 duration: 0.5, // Adjust the duration for each word's entrance
                 ease: "none",
                 display:'none'
               }
          )
      
        
    },comp)

    return () => ctx.revert()

},[])

    const text1 ='a place to rememeber';
  return (
    <div id='introCont' ref={comp} className='flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-mwhite  z-[1000]'>
         <p
            className=" capitalize text-6xl lg:text-7xl text-black text-center   leading-normal   h-fit relative   "
          >
            {text1.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className={
                    " mr-3  relative overflow-hidden inline-flex"
                  }
                >
                  <span
                    className="wordIntro  "
                    key={index}
                  >
                    {word}
                  </span>
                </span>
              );
            })}
          </p>
    </div>
  )
}

export default Loader