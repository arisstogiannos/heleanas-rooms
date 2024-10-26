"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Nunito } from "next/font/google";
import {AnimatePresence, motion} from 'framer-motion'

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function Cursor() {
  const cursor = useRef(null);
  const [inSlider, setInSlider] = useState(false);
  const [inRoom, setInRoom] = useState(false);

  useEffect(() => {
    const array = document.getElementsByClassName("sliderCursor");
    const slider = document.querySelector(".slider");
    const room = document.querySelector(".room");
    if(room){

      room.addEventListener("mouseenter", ()=>(setInRoom(true)));
      room.addEventListener("mouseleave", ()=>(setInRoom(false)));
    }
    console.log(array.length)


    const handleEnter = (event) => {
      // Your event handling logic goes here
      setInSlider(true);
    };
    const handleLeave = (event) => {
      // Your event handling logic goes here
      setInSlider(false);
    };

    for (let i = 0; i < array.length; i++) {
      array.item(i).addEventListener("mouseenter", handleEnter);
      array.item(i).addEventListener("mouseleave", handleLeave);
    }
    // slider.addEventListener("mouseenter", handleEnter);
    // slider.addEventListener("mouseleave", handleLeave);
    // slider.addEventListener("click",()=>(slider.style.transform = `scale(0.5)`))

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      for (let i = 0; i < array.length; i++) {
        array.item(i).removeEventListener("mouseenter", handleEnter);
        array.item(i).removeEventListener("mouseleave", handleLeave);
      }
      if(room){

        room.removeEventListener("mouseenter", ()=>(setInRoom(true)));
        room.removeEventListener("mouseleave", ()=>(setInRoom(false)));
      }
    };
  }, []);

  useEffect(() => {
    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.4,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.4,
      ease: "power3 ",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      moveCursorX(clientX);
      moveCursorY(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursor}
      style={nunito.style}
      className={` ${
        inSlider ? "size-20 cursor-none bg-mwhite border-0 " : ""
      } ${
        inRoom ? " w-32 h-32  border-2 -translate-y-2/3   " : ""
      }${
        (!inRoom)&&(!inSlider) ? "size-7 " : ""
      }  text-base text-white font-semibold text-center uppercase xl:flex justify-center items-center  fixed hidden  border border-[#000] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2 z-[900] filter transition-[height,width]  duration-1000 ease-in-out `}
    >
      <AnimatePresence mode="wait">
      {inRoom&&<motion.span key={1} animate={{clipPath: "inset(0 0 0 0)" ,transition:{duration:1}}} exit={{clipPath:"inset(0 50% 0 50%)",transition:{duration:1}}} className="capitalize text-[#000] text-xl font-semibold text-nowrap px-4 py-2 transition duration-1000 ease-in-out ">Take a look</motion.span>}
      </AnimatePresence>
    

      {inSlider && (
        <div className="flex items-center justify-center">
          <svg
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-180 scale-150"
          >
            <path
              d="M10.0001 6L0.0001 0.226497V11.7735L10.0001 6Z"
              fill="#dbdde0"
            />
          </svg>
          <span className="px-6 text-black">drag</span>
          <svg
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-150"
          >
            <path
              d="M10.0001 6L0.0001 0.226497V11.7735L10.0001 6Z"
              fill="#dbdde0"
            />
          </svg>
        </div>
      )}{" "}
    </div>
  );
}
