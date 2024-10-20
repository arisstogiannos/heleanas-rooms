"use client";
import { Nunito } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const nunito = Nunito({
  subsets:["latin"],
  weight:["300","400","500"]

})

const Guide = () => {
  const [count,setCount] = useState(1);
  const places = [
    {
      src: "/places/mpataria.jpg",
      t: "Mpataria Beach",
      d: "One of the most beautiful beaches in northern Corfu located just 400 meters away from Helena’s rooms",
      m:"230m"
    },
    {
      src: "/places/kalamionas-beach.jpg",
      t: "Kalamionas Beach",
      d: "A serene spot for sunbathing and enjoying the clear waters of Corfu",
      m:"230m"
    },
    {
      src: "/places/kassiopi.jpg",
      t: "Kassiopi",
      d: "A charming village with picturesque views and historical sites in Corfu",
      m:"230m"
    },
    {
      src: "/places/mpataria.jpg",
      t: "Mpataria Beach",
      d: "One of the most beautiful beaches in northern Corfu located just 400 meters away from Helena’s rooms",
      m:"230m"
    },
    {
      src: "/places/kalamionas-beach.jpg",
      t: "Kalamionas Beach",
      d: "A serene spot for sunbathing and enjoying the clear waters of Corfu",
      m:"230m"
    },
    {
      src: "/places/kassiopi.jpg",
      t: "Kassiopi",
      d: "A charming village with picturesque views and historical sites in Corfu",
      m:"230m"
    },
  ];

  

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
        ].forEach((method) => {
          this[method] = this[method].bind(this);
        });
      }

      calculate() {
        if(window.innerWidth>1024){

          this.wrapWidth = this.items[0].clientWidth * this.items.length * 1.4;
        }else{
          this.wrapWidth = this.items[0].clientWidth * this.items.length * 3;
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
        this.progress += (this.startX - x) * 2.5;
        this.startX = x;
        this.move();
      }

      handleTouchEnd() {
        this.dragging = false;
      }

      move() {
        this.progress = clamp(this.progress, 0, this.maxScroll);
        setCount(Math.floor((this.progress/(this.items[0].clientWidth))+1))
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

    const scroll = new DragScroll({
      el: ".slider",
      wrap: ".slider-wrapper",
      item: ".slider-item",
    });

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("resize", scroll.calculate);
      window.removeEventListener("wheel", scroll.handleWheel);
      window.removeEventListener("touchmove", scroll.handleTouchMove);
      window.removeEventListener("touchend", scroll.handleTouchEnd);
      window.removeEventListener("mousedown", scroll.handleTouchStart);
      window.removeEventListener("mousemove", scroll.handleTouchMove);
      window.removeEventListener("mouseup", scroll.handleTouchEnd);
    };
  }, []);

  return (
    
    <section  className="w-full  flex flex-col overflow-hidden  bg-[#303030]">
      <div className="w-full ml-10 xl:ml-20 mt-10 slider ">
        <div className=" flex gap-28 mt-20 slider-wrapper cursor-none">
          {places.map((p, i) => (
            <div
              key={i}
              className="w-[350px] h-[245px] xl:w-[700px] xl:h-[490px] select-none pointer-events-none relative slider-item"
            >
              <Image
                src={p.src}
                alt="places"
                width={700}
                height={500}
                className="object-cover w-full h-full"
              />
              <div className="w-full h-full absolute left-0 top-0 bg-black/20"></div>
              <div className="my-2 text-white text-xl xl:text-4xl font-medium flex justify-between items-center">

              <h3 className=" capitalize">
                {p.t}
              </h3>
              <p>{p.m}</p>
              </div>
              <p style={nunito.style} className="first-letter:uppercase xl:text-xl xl:w-3/4 text-white font-normal">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none w-full flex justify-between border-t-white border-t-2 mt-48 capitalize items-center py-10 px-20">
        <h2 className="text-5xl xl:text-8xl text-white text-nowrap">places to go</h2>
        <div className="hidden md:block">
          <p className="text-white text-8xl">{count}/6</p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
