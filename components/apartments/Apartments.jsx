"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parisienne } from "next/font/google";
import Intro from "./Intro";
import Rooms from "./Rooms";
import LocomotiveScroll from "locomotive-scroll";
import { useInView } from "framer-motion";
import { usePathname } from 'next/navigation'


const paris = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
});

const Apartments = () => {
  const containerRef = useRef(null);
  const insideRef = useRef(null);
  const [curr, setCurr] = useState(-1);
  const currRef = useRef(curr); // Step 1: Create a useRef for `curr`
  const inview = useInView(insideRef,{amount:0.1,once:false})
  const pathname =usePathname()
  useEffect(() => {
    currRef.current = curr; 
  }, [curr]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const containerR = containerRef.current;
    const colorChanger = document.querySelector('.colorChanger');

    if (colorChanger && !pathname.includes('rooms')) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerR,
          scrub: true,
          once: false,
          start: "top-=100px bottom",
          end: "top+=400px bottom",
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });

      tl.fromTo(
        colorChanger,
        {
          duration: 1,
          backgroundColor: "#dbdde0",
          ease: "none",
        },
        {
          duration: 1,
          backgroundColor: "#9d8977",
          ease: "none",
        }
      );
    }
  }, []);

  useEffect(() => {
    class DragScroll {
      constructor(obj) {
        this.el = document.querySelector(obj.el);
        this.progress = 0;
        this.startY = 0;
        this.dragging = false;
        this.bindings();
        this.events();
        this.flag1=true;
        this.flag2=true
      }

      bindings() {
        [
          "events",
          "handleTouchStart",
          "handleTouchMove",
          "handleTouchEnd",
        ].forEach((method) => {
          this[method] = this[method].bind(this);
        });
      }

      handleTouchStart(e) {
        this.dragging = true;
        this.startY = e.clientY || e.touches[0].clientY;
      }

      handleTouchMove(e) {
        if (!this.dragging) return;
        const y = e.clientY || e.touches[0].clientY;
        if (window.innerWidth < 1024) {
          this.progress = this.startY - y;
        }
        if(currRef.current==0 ){
          if(this.progress>0){
            e.preventDefault();
          }

        }else if(currRef.current==4 && pathname.includes('rooms')){
          if(this.progress<0){
            e.preventDefault();
          }
        }else{
          e.preventDefault();
        }
        this.startY = y;
      }

      handleTouchEnd() {
        const loco = new LocomotiveScroll();
        
        if (this.progress > 0) {
          if(currRef.current==0 && this.flag1){
            loco.scrollTo("#containerRooms", { duration: 1.5 })
            this.flag1 = false
          }else if(currRef.current==4){
            if(pathname.includes('rooms')){
             
              this.flag2=true
            }else{

              loco.scrollTo("#guide", { duration: 1.5 })
              this.flag2=true
            }
          } else{
            window.scrollBy(0, window.innerHeight);
            if(currRef.current==3){
              this.flag2=false
            }
          }
          
          
        } else if (this.progress < 0) {
          if(currRef.current==0){
            // window.scrollBy(0, -window.innerHeight);
            this.flag1=true
          }else if(currRef.current==1){
            loco.scrollTo("#containerRooms", { duration: 1.5 })
          }else if(currRef.current>=4 && this.flag2){
            loco.scrollTo("#insideRooms", { duration: 1 ,lock:true,onComplete:()=>(this.flag2=false)})
          }else if(currRef.current>=4 && !this.flag2){
            window.scrollBy(0, -window.innerHeight*2);
          }else{

            window.scrollBy(0, -window.innerHeight);
            
          }
        }
      
        this.dragging = false;
      }

      events() {
        this.el.addEventListener("touchstart", this.handleTouchStart);
        this.el.addEventListener("touchmove", this.handleTouchMove);
        this.el.addEventListener("touchend", this.handleTouchEnd);
      }

      removeEvents() {
        this.el.removeEventListener("touchstart", this.handleTouchStart);
        this.el.removeEventListener("touchmove", this.handleTouchMove);
        this.el.removeEventListener("touchend", this.handleTouchEnd);
      }
    }
    var scrollRooms;
if(inview){
  scrollRooms = new DragScroll({
    el: "#containerRooms",
  });
}

return () => {
  if(scrollRooms){
    scrollRooms.removeEvents();
  }
};
  }, [inview]);

  return (
    <section
      ref={containerRef}
      id="containerRooms"
      className="h-[600vh] lg:h-[400vh] relative "
    >
      <div ref={insideRef} id="insideRooms" className="h-[100vh] w-full sticky top-0 flex flex-col text-white ">
        <Intro containerRef={containerRef} />
        <Rooms scrollContainer={containerRef} setCurr={setCurr} />
      </div>
    </section>
  );
};


export default Apartments;
