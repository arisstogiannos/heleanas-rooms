"use client";
import React, { useEffect, useRef,  } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const RevealingText = ({text,delayR,k}) => {

    gsap.registerPlugin(ScrollTrigger);
    const textref =useRef(null)
    useEffect(()=>{
        const textR = textref.current;
        const t = gsap.timeline({
            scrollTrigger: {
              trigger: textR,
            //   pin: true,
              start:"top bottom",
              end:"top+=600px bottom",
              markers: false, // Show markers for debugging
              toggleActions: "play reverse play reverse"
            },
          });
          t.fromTo(
            `.words${k}`,
            {
                duration:0,
              y: 40,
              opacity: 0,
            //   stagger: delayR,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.6, // Adjust the duration for each word's entrance
              ease: "circ.out",
              delay: delayR, // Adjust the delay between each word's appearance
            }
          );
        },[])
  return (
    <span
    ref={textref}
            className="     leading-normal   h-fit relative   "
          >
            {text.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className={
                    " mr-1  relative overflow-hidden inline-flex"
                  }
                >
                  <span
                    className={`words${k}`}
                    key={index}
                  >
                    {word}
                  </span>
                </span>
              );
            })}
          </span>
  )
}

export default RevealingText