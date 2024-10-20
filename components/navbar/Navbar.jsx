"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    { title: "about", href: "/" },
    { title: "rooms", href: "/rooms" },
    { title: "guide", href: "/" },
  ];
  const sociallinks = [
    { title: "instagram", href: "/" },
    { title: "facebook", href: "/" },
    { title: "airbnb", href: "/rooms" },
    { title: "booking", href: "/" },
    { title: "tripadvisor", href: "/" },
  ];
  return (
    <nav className="flex justify-between items-center myContainer py-8 ">
      <p className="capitalize text-lg sm:text-xl lg:text-3xl z-[1000]">
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
        } px-6 xl:px-24 h-screen flex flex-col xl:flex-row  bg-mwhite fixed top-0 left-0 z-[900]  `}
      >
        <ul className="text-7xl xl:text-9xl text-black flex flex-col gap-5 mt-auto xl:pb-10 capitalize">
          {navlinks.map((link, i) => {
            return (
              <motion.span key={i} className="group overflow-hidden ">
                <motion.li
                  className="origin-left "
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
                  <motion.a className="relative" href={link.href}>
                    <motion.span className="absolute top-1/2 left-0 translate-y-full -z-40 bg-mBrown  w-full scale-x-0 h-2 group-hover:scale-x-100 origin-left transition-transform duration-700"></motion.span>
                    {link.title}
                  </motion.a>
                </motion.li>
              </motion.span>
            );
          })}
        </ul>
        <ul className="text-2xl text-black/60  max-xl:flex-wrap flex font-medium  gap-x-8 gap-y-4 mt-24 xl:mt-auto ml-auto pb-10 capitalize">
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
