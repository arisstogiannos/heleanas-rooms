"use client";
import { Nunito } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import {motion, useInView} from 'framer-motion'

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const Guide = () => {
  // const inview
  const ref = useRef(null);
  const inview = useInView(ref,{amount:0.3,once:false})
  const [count, setCount] = useState(1);
  const places = [
    {
      src: "/places/mpataria.jpg",
      t: "Mpataria Beach",
      d: "One of the most beautiful beaches in northern Corfu located just 400 meters away from Helena’s rooms",
      m: "230m",
    },
    {
      src: "/places/kalamionas-beach.jpg",
      t: "Kalamionas Beach",
      d: "A serene spot for sunbathing and enjoying the clear waters of Corfu",
      m: "230m",
    },
    {
      src: "/places/kassiopi.jpg",
      t: "Kassiopi",
      d: "A charming village with picturesque views and historical sites in Corfu",
      m: "230m",
    },
    {
      src: "/places/mpataria.jpg",
      t: "Mpataria Beach",
      d: "One of the most beautiful beaches in northern Corfu located just 400 meters away from Helena’s rooms",
      m: "230m",
    },
    {
      src: "/places/kalamionas-beach.jpg",
      t: "Kalamionas Beach",
      d: "A serene spot for sunbathing and enjoying the clear waters of Corfu",
      m: "230m",
    },
    {
      src: "/places/kassiopi.jpg",
      t: "Kassiopi",
      d: "A charming village with picturesque views and historical sites in Corfu",
      m: "230m",
    },
    // Duplicates removed for clarity
  ];

  const dragScrollRef = useRef(null); // Use a ref to keep track of the DragScroll instance

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
        this.bindings();
        this.calculate();
        this.events();
        this.raf();
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
          "moveNext",
          "movePrev",
        ].forEach((method) => {
          this[method] = this[method].bind(this);
        });
      }

      calculate() {
        this.progress=0;
        if (window.innerWidth > 1024) {
          this.wrapWidth = this.items[0].clientWidth * this.items.length * 2.5;
        } else {
          this.wrapWidth = (350+100) * this.items.length ;
        }
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
        if (window.innerWidth > 1024) {
          this.progress += (this.startX - x) * 2.5;
        } else {
          this.progress += (this.startX - x) * 5.5;
        }
        this.startX = x;
        this.move();
      }

      handleTouchEnd() {
        this.dragging = false;
      }

      move() {
       
          this.progress = clamp(this.progress, 0, this.maxScroll);
       
          
        
        setCount(Math.floor(this.progress / (this.items[0].clientWidth+100)) + 1);
      }

      moveNext() {
        setCount((prevCount) => {
          if (prevCount < places.length) {
            this.progress += ((this.items[0].clientWidth+112)/2);
            console.log(this.items[0].clientWidth) // Move right by one item
            this.move(); // Update the view
            return prevCount + 1; // Increment count
          }
          return prevCount; // Return the same value if at the maximum
        });
      }
      
      movePrev() {
        setCount((prevCount) => {
          if (prevCount > 1) {
            this.progress -= ((this.items[0].clientWidth+112)/2); // Move left by one item
            this.move(); // Update the view
            return prevCount - 1; // Decrement count
          }
          return prevCount; // Return the same value if at the minimum
        });
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

      raf() {
        const fps = 120;
        this.x = lerp(this.x, this.progress, 0.05);
        this.playrate = this.x / this.maxScroll;

        this.wrap.style.transform = `translateX(${-this.x}px)`;

        const speed = Math.abs(this.x - this.oldX);
        this.oldX = this.x;

        this.scale = lerp(this.scale, 1 - Math.min(speed * 0.012, 0.2), 0.05);

        this.items.forEach((item) => {
          item.style.transform = `scale(${this.scale})`;
        });

        requestAnimationFrame(this.raf);
      }
    }

    dragScrollRef.current = new DragScroll({
      el: ".slider",
      wrap: ".slider-wrapper",
      item: ".slider-item",
    });

    // Clean up event listeners on component unmount
    return () => {
      const dragScroll = dragScrollRef.current; // Access the current instance
      window.removeEventListener("resize", dragScroll.calculate);
      window.removeEventListener("wheel", dragScroll.handleWheel);
      window.removeEventListener("touchmove", dragScroll.handleTouchMove);
      window.removeEventListener("touchend", dragScroll.handleTouchEnd);
      window.removeEventListener("mousedown", dragScroll.handleTouchStart);
      window.removeEventListener("mousemove", dragScroll.handleTouchMove);
      window.removeEventListener("mouseup", dragScroll.handleTouchEnd);
    };
  }, []);

  return (
    <section
    ref={ref}
      id="guide"
      className="w-full flex flex-col slider cursor-none sliderCursor max-lg:h-screen overflow-hidden bg-[#1c5169]"
    >
      <div className="w-full ml-5 xl:ml-20 mt-0  ">
        <div className="flex gap-28 xl:gap-48 mt-20 slider-wrapper ">
          {places.map((p, i) => (
            <motion.div
            initial={{clipPath: "inset(0 100% 0 0)",}}
            animate={inview?{
              clipPath: "inset(0 0 0 0)"
            }:{clipPath: "inset(0 100% 0 0)",}}
            transition={{duration:1,delay:i*0.3}}
            viewport={{amount:0.2,once:false}}
              key={i}
              className="w-[350px] h-fit xl:w-[700px] xl:h-fit select-none pointer-events-none relative slider-item"
            >
              <Image
                src={p.src}
                alt="places"
                width={700}
                height={500}
                className="object-cover w-[350px] h-[245px] xl:w-[700px] xl:h-[490px] "
              />
              <div className="w-[350px] h-[245px] xl:w-[700px] xl:h-[490px]  absolute left-0 top-0 bg-black/20"></div>
              <div className="my-2 text-white text-xl xl:text-4xl font-medium flex justify-between items-center">
                <h3 className="capitalize">{p.t}</h3>
                <p>{p.m}</p>
              </div>
              <p
                style={nunito.style}
                className="first-letter:uppercase xl:text-xl xl:w-3/4 text-white font-normal"
              >
                {p.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center w-full gap-8 mt-auto lg:hidden">
        <Image
          onClick={() => dragScrollRef.current.movePrev()}
          src={"/places/arrow.svg"}
          width={100}
          height={100}
        />
        <p className="text-white text-5xl leading-none">{count}/6</p>
        <Image
          onClick={() => dragScrollRef.current.moveNext()}
          src={"/places/arrowR.svg"}
          width={100}
          height={100}
        />
      </div>
      <div className="pointer-events-none w-full flex justify-between border-t-white border-t-2 mt-20 xl:mt-32 capitalize items-center py-10 xl:px-20">
        <h2 className="text-5xl xl:text-8xl mx-auto lg:mx-0 text-white text-nowrap">
          places to go
        </h2>
        <div className="hidden md:block">
          <p className="text-white text-8xl">{count}/6</p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
