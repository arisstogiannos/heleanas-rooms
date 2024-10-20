"use client";
import Image from "next/image";
import { React, useEffect } from "react";

const Gallery = () => {

    const places = [
        {
          src: "/apartments/room1/room1-2.webp",
          w: 360,
          h: 480,
          m: "230m",
        },
        {
          src: "/apartments/room1/room1-3.webp",
          w: 360 * 1.5,
          h: 270 * 1.5,
          m: "230m",
        },
        {
          src: "/apartments/room1/room1-4.jpg",
          w: 288 * 1.5,
          h: 384 * 1.5,
          m: "230m",
        },
        {
          src: "/apartments/room1/room1-1.webp",
          w: 400,
          h: 300,
          m: "230m",
        },
        {
          src: "/apartments/room1/room1-5.webp",
          w: 360 ,
          h: 480  ,
          m: "230m",
        },
        {
          src: "/apartments/room1/room1-6.webp",
          w: 360 ,
          h: 480  ,
          m: "230m",
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
            this.wrapWidth=48;
            for(let i =0;i<this.items.length;i++){
    
              this.wrapWidth += (this.items[i].clientWidth+112);
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
            this.x = lerp(this.x, this.progress, 0.05);
            this.playrate = this.x / this.maxScroll;
    
            this.wrap.style.transform = `translateX(${-this.x}px)`;
    
            const speed = Math.abs(this.x - this.oldX);
            this.oldX = this.x;
    
            this.scale = lerp(this.scale, 1 - Math.min(speed * 0.05, 0.3), 0.05);
            console.log(this.scale)
            this.items.forEach((item) => {
              item.style.transform = `scale(${this.scale})`;
            });
            setTimeout(() => {
              requestAnimationFrame(this.raf);
            }, 1000 / 120);
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
    <div className="w-full bg-mBrown mt-40 slider overflow-hidden py-20 relative">
        <h3 className="text-black text-9xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
          gallery
        </h3>
        <div className="w-[200vw] flex items-center gap-28 mt-20 slider-wrapper cursor-none ">
          {places.map((p, i) => (
            <div
              key={i}
              style={{ width: `${p.w}px`, height: `${p.h}px` }}
              className="select-none pointer-events-none relative slider-item first-of-type:ml-20 last-of-type:mr-20"
            >
              <Image src={p.src} width={p.w} height={p.h} className=" " />
              <div className="w-full h-full absolute left-0 top-0 bg-black/20"></div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Gallery