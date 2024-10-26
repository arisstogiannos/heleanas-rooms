"use client";
import { useInView } from "framer-motion";
import Image from "next/image";
import { React, useEffect, useLayoutEffect, useRef, useState } from "react";

const Gallery = ({rooms,color}) => {
  const galleryRef = useRef(null);
  const inviewGallery = useInView(galleryRef, { amount: 0.2, once: false });
  const [count, setCount] = useState(1);
  const scrollRef = useRef(null); // Use a ref to keep track of the DragScroll instance
  const [screenSize, setScreenSize] = useState(1);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateScreenSize = () => {
        setScreenSize(window.innerWidth < 768 ? 0.7 : 1);
      };

      updateScreenSize(); // Set initial value
      window.addEventListener('resize', updateScreenSize); // Update value on window resize

      return () => window.removeEventListener('resize', updateScreenSize); // Cleanup on component unmount
    }
  }, []);
  
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateScreenSize = () => {
        setScreenSize(window.innerWidth < 768 ? 0.7 : 1);
        if(scrollRef.current){

          scrollRef.current.calculate()
        }
      };

      updateScreenSize(); // Set initial value
      window.addEventListener('resize', updateScreenSize); // Update value on window resize

      return () => window.removeEventListener('resize', updateScreenSize); // Cleanup on component unmount
    }
  }, [scrollRef.current]);
  
  
  

  useEffect(() => {
   

    const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
    const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

    class DragScroll {
      constructor(obj) {
        this.el = document.querySelector(obj.el);
        this.wrap = document.querySelector(obj.wrap);
        this.items = document.querySelectorAll(obj.item);
        this.progress = 0;
        this.speed = 0;
        this.oldX = 0;
        this.x = 0;
        this.scale = 1;
        this.dragging = false;
        this.rafId = null;
        this.bindings();
        // this.calculate();
        this.events();
        this.startRaf();
        console.log(this.wrap.style.width)
      }

      bindings() {
        [
          "events",
          "calculate",
          "raf",
          "handleWheel",
          "move",
          "handleTouchStart",
          "handleTouchMove",
          "handleTouchEnd",
          "startRaf",
          "stopRaf",
        ].forEach((method) => {
          this[method] = this[method].bind(this);
        });
      }

      calculate() {
        this.wrapWidth = 48;
        for (let i = 0; i < this.items.length; i++) {
          const itemWidth = parseFloat(this.items[i].style.width); // Convert the width from string to number
    if (!isNaN(itemWidth)) {
      this.wrapWidth += (itemWidth*screenSize + (screenSize===1?240:80)); // Add the width of each item and the gap/margin between items
      console.log(`Item ${i} width:`, itemWidth);
    }
        }
        console.log(this.wrapWidth)
        this.wrap.style.width = `${this.wrapWidth}px`;
        this.maxScroll = this.wrapWidth - this.el.clientWidth;
      }

      handleWheel(e) {
        this.progress += e.deltaY;
        this.move();
      }

      handleTouchStart(e) {
        this.dragging = true;
        this.startX = e.clientX || e.touches[0].clientX;
      }

      handleTouchMove(e) {
        if (!this.dragging) return;
        const x = e.clientX || e.touches[0].clientX;
        this.progress += (this.startX - x) * 2.5;
        this.startX = x;
        this.move();
      }

      handleTouchEnd() {
        this.dragging = false;
      }

      move() {
        this.progress = clamp(this.progress, 0, this.maxScroll);
        setCount(Math.floor((this.progress / (this.wrapWidth/this.items.length)) + 1));
        // setCount((prev)=>{
        //   let sum=0
        //   for(let i =0;i<prev;i++){
        //     sum+=(this.items[i].clientWidth+112)
        //   }
        //   if(this.progress>sum){
        //     return prev
        //   }
        // });
      }

      moveNext(count) {
        if (count < rooms.length) {
        count===1?this.progress += (((this.items[count-1].clientWidth) +160+60)):this.progress += (((this.items[count-1].clientWidth) +160));
        console.log(count-1) // Move right by one item
        this.move(); // Update the view
        }
       
      }
      
      movePrev(count) {
        if (count-1 < rooms.length) {
          this.progress -= (((this.items[count-1].clientWidth) +56));
          console.log(count-1) // Move right by one item
          this.move(); // Update the view
          }
      }

      events() {
        this.el.addEventListener("resize", this.calculate);
        this.el.addEventListener("wheel", this.handleWheel);
        this.el.addEventListener("touchstart", this.handleTouchStart);
        this.el.addEventListener("touchmove", this.handleTouchMove);
        this.el.addEventListener("touchend", this.handleTouchEnd);
        this.el.addEventListener("mousedown", this.handleTouchStart);
        this.el.addEventListener("mousemove", this.handleTouchMove);
        this.el.addEventListener("mouseup", this.handleTouchEnd);
        document.body.addEventListener("mouseleave", this.handleTouchEnd);
      }

      removeEvents() {
        this.el.removeEventListener("resize", this.calculate);
        this.el.removeEventListener("wheel", this.handleWheel);
        this.el.removeEventListener("touchstart", this.handleTouchStart);
        this.el.removeEventListener("touchmove", this.handleTouchMove);
        this.el.removeEventListener("touchend", this.handleTouchEnd);
        this.el.removeEventListener("mousedown", this.handleTouchStart);
        this.el.removeEventListener("mousemove", this.handleTouchMove);
        this.el.removeEventListener("mouseup", this.handleTouchEnd);
        document.body.removeEventListener("mouseleave", this.handleTouchEnd);
        this.stopRaf();
      }

      raf() {
        this.x = lerp(this.x, this.progress, 0.05);
        this.playrate = this.x / this.maxScroll;

        this.wrap.style.transform = `translateX(${-this.x}px)`;

        const speed = Math.abs(this.x - this.oldX);
        this.oldX = this.x;
        // console.log(1)
        this.scale = lerp(this.scale, 1 - Math.min(speed * 0.05, 0.3), 0.05);
        this.items.forEach((item) => {
          item.style.transform = `scale(${this.scale})`;
        });

        this.rafId = requestAnimationFrame(this.raf);
      }

      startRaf() {
        if (!this.rafId) {
          this.rafId = requestAnimationFrame(this.raf);
        }
      }

      stopRaf() {
        if (this.rafId) {
          cancelAnimationFrame(this.rafId);
          this.rafId = null;
        }
      }
    }

   
    
    scrollRef.current = new DragScroll({
        el: ".sliderGallery",
        wrap: ".slider-wrapperGallery",
        item: ".slider-itemGallery",
      });
      
    
    

    return () => {
      const scroll = scrollRef.current
      if (scroll) {
        scroll.removeEvents();
      }
    };
  }, []);

  return (
    <div
      ref={galleryRef}
      style={{backgroundColor:color}}
      className="    mt-20 2xl:mt-40 sliderGallery cursor-none overflow-hidden flex flex-col justify-center lg:justify-center  h-[80vh] md:h-[50vh] lg:h-screen relative sliderCursor"
    >
      <h3 className="text-black text-9xl hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
        gallery
      </h3>
      <div className=" flex items-center gap-20 md:gap-60  lg:mt-0 slider-wrapperGallery  z-10  ">
        {rooms.map((p, i) => (
          <div
            key={i}
            style={{ width: `${p.w*screenSize}px`, height: `${p.h*screenSize}px` }}
            className="select-none pointer-events-none relative slider-itemGallery first-of-type:ml-20 last-of-type:mr-20 "
          >
            <Image src={p.src} width={p.w} height={p.h} alt={`Place ${i+ 1}`} className=" object-contain" />
            <div className="w-full h-full absolute left-0 top-0 bg-black/20"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16 items-center w-full gap-8  lg:hidden">
        {/* <Image
          onClick={() => scrollRef.current.movePrev(count)}
          src={"/places/arrow.svg"}
          width={100}
          alt="arrowL"
          height={100}
        />
        <p className="text-white text-5xl leading-none">{count}/{rooms.length}</p>
        <Image
          onClick={() => scrollRef.current.moveNext(count)}
          src={"/places/arrowR.svg"}
          width={100}
          alt="arrowR"
          height={100}
        /> */}
         <div className="flex items-center justify-center opacity-60">
          <svg
            width="15"
            height="18"
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
          <span className="px-6 text-mwhite text-xl font-medium uppercase">drag</span>
          <svg
            width="15"
            height="18"
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
      </div>
      <h3 className="text-mwhite  text-8xl xsm:text-[100px] font-medium rotate-90 origin-bottom-left absolute  -top-20 left-0  text-left mt-auto mb-8 block lg:hidden uppercase">
        gallery
      </h3>
    </div>
  );
};

export default Gallery;
