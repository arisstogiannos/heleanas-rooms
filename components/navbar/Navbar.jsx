"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const cont = document.querySelector(".scroller");

    isOpen && cont != null
      ? cont.classList.add("overflow-hidden")
      : cont &&
        cont.classList.contains("overflow-hidden") &&
        cont.classList.remove("overflow-hidden");
  }, [isOpen]);
  const navlinks = [
    { title: "home", href: "/" },
    { title: "about", href: "/#about" },
    { title: "rooms", href: "/rooms" },
    { title: "guide", href: "/#guide" },
  ];
  const sociallinks = [
    { title: "instagram", href: "https://www.instagram.com/helenas_rooms/" },
    { title: "facebook", href: "https://www.facebook.com/Helenasrooms/" },
    { title: "airbnb", href: "https://www.airbnb.gr/users/show/1721132" },
    { title: "booking", href: "https://www.booking.com/hotel/gr/helena-39-s-rooms.html?aid=318615&label=New_English_EN_GR_26745747865-cgHJznX2Y6eGVkzaC%2AB6owS637942138514%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-195219801865%3Alp9061579%3Ali%3Adec%3Adm%3Aag26745747865%3Acmp394169905&sid=a8d48116767371049b86f6347e60f62d&dest_id=-819264;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1730043583;srpvid=63656e1c577300b9;type=total;ucfs=1&" },
    { title: "tripadvisor", href: "https://www.tripadvisor.com/Hotel_Review-g676294-d19578908-Reviews-Helena_s_Rooms-Kassiopi_Corfu_Ionian_Islands.html" },
  ];
  return (
    <nav className="flex justify-between items-center myContainer py-8 ">
      <p className="capitalize text-xl font-medium sm:text-xl lg:text-3xl z-[1000]">
        Heleana's rooms
      </p>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-9 h-4 sm:w-10 sm:h-5 lg:w-12 lg:h-6 relative group cursor-pointer z-[1000]"
      >
        <span
          className={`absolute right-0 top-0 block w-3/4 h-[2px] lg:h-[3px] bg-black rounded-full transition-transform translate-y-0 origin-left duration-300 ease-in-out  ${
            isOpen ? "rotate-45 -translate-y-[1px]  " : ""
          }`}
        ></span>
        <span
          className={`absolute left-0 top-1/2 block w-3/4 h-[2px] lg:h-[3px] bg-black rounded-full transition-transform -translate-y-1/2 origin-left duration-300 ease-in-out  ${
            isOpen ? "scale-0 " : ""
          }`}
        ></span>
        <span
          className={`absolute right-0 top-full block w-3/4 h-[2px] lg:h-[3px] bg-black rounded-full  transition-transform -translate-y-full origin-left duration-300 ease-in-out  ${
            isOpen ? "-rotate-45 translate-y-[1px]  " : ""
          }`}
        ></span>
      </div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: { duration: 0.4, ease: "circOut" } }
            : {
                opacity: 0,
                transition: { duration: 0.4, ease: "circOut", delay: 0.3 },
              }
        }
        initial={{ opacity: 0 }}
        className={`w-screen ${
          !isOpen ? "pointer-events-none" : "pointer-events-auto"
        } px-6 xl:px-16 2xl:px-12 3xl:px-24 h-[100svh] xl:h-screen flex flex-col xl:flex-row  bg-mwhite fixed top-0 left-0 z-[900]  `}
      >
        <ul className="text-7xl lg:text-9xl 2xl:text-8xl 3xl:text-9xl text-black flex flex-col gap-5 mt-auto xl:pb-10 capitalize">
          {navlinks.map((link, i) => {
            return (
              <motion.span key={i} className="group overflow-hidden ">
                <motion.li
                  className="origin-left "
                  onClick={()=>{setIsOpen(false)}}
                  animate={
                    isOpen
                      ? {
                          rotateZ: 0,
                          y: 0,
                          transition: {
                            delay: 0.4 + i * 0.05,
                            duration: 0.8,
                            ease: "circOut",
                          },
                        }
                      : {
                          rotateZ: "30deg",
                          y: 180,
                          transition: {
                            delay: i * 0.05,
                            duration: 0.3,
                            ease: "circIn",
                          },
                        }
                  }
                >
                  <Link className="relative" href={link.href} >
                    <motion.span  className="absolute top-1/2 left-0 translate-y-full -z-40 bg-mBrown  w-full scale-x-0 h-2 group-hover:scale-x-100 origin-left transition-transform duration-700"></motion.span>
                    {link.title}
                  </Link>
                </motion.li>
              </motion.span>
            );
          })}
        </ul>
        <ul className="text-xl lg:text-4xl xl:text-3xl  3xl:text-2xl text-black/60  max-xl:flex-wrap flex font-medium  gap-x-8 gap-y-4 mt-24 xl:mt-auto 2xl:ml-auto pb-5 lg:pb-10  capitalize">
          {sociallinks.map((link, i) => {
            return (
              <motion.span key={i} className="overflow-hidden ">
                <motion.li
                  className="origin-left hover:text-black transition-colors duration-500"
                  animate={
                    isOpen
                      ? {
                          rotateZ: 0,
                          y: 0,
                          transition: {
                            delay: 0.4 + i * 0.05,
                            duration: 0.8,
                            ease: "circOut",
                          },
                        }
                      : {
                          rotateZ: "30deg",
                          y: 180,
                          transition: {
                            delay: i * 0.05,
                            duration: 0.3,
                            ease: "circIn",
                          },
                        }
                  }
                >
                  <motion.a href={link.href}>{link.title}</motion.a>
                </motion.li>
              </motion.span>
            );
          })}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
