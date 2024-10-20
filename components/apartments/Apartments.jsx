"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parisienne } from "next/font/google";
import Intro from "./Intro";
import Rooms from "./Rooms";


const paris = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
});

const Apartments = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const containerR = containerRef.current;
    const colorChanger = document.querySelector('.colorChanger');

    if (colorChanger) {
    //   gsap.set(container, {
    //     backgroundColor: "#000000",
    //   });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerR,
        //   pin: true,
          scrub: true,
          once:false,
          start:"top bottom",
          end: "top+=400px bottom ",
          markers: false, // Show markers for debugging
          toggleActions:"play reverse play reverse"
        },
      });
   

      tl.fromTo(colorChanger,{
        duration: 1,
        backgroundColor: "#dbdde0",
        ease: "none",
      }, {
        duration: 1,
        backgroundColor: "#918671",
        ease: "none",
      })

      
    }

    
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-[400vh] relative   "
    >
      <div className="h-screen w-full sticky top-0 flex flex-col text-white ">
      <Intro containerRef={containerRef}/>
      <Rooms scrollContainer={containerRef}/>
      </div>
    </section>
  );
};

export default Apartments;
