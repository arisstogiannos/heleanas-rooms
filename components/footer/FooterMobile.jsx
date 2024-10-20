import React from "react";
import Image from "next/image";

const FooterMobile = () => {
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
    <footer className=" bg-mBrown w-full text-white xl:hidden flex flex-col">
      <p className="capitalize text-5xl mx-auto  border-b-2 w-full text-center py-10">
        Heleana's rooms
      </p>
      <ul className="flex flex-col mx-auto items-center gap-4 py-10 text-2xl capitalize border-b-2 w-full">
        {sociallinks.map((l, i) => (
          <li key={i}>
            <a
              className="text-white/60 hover:text-white transition-colors"
              href={l.href}
            >
              {l.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center py-10 border-b-2">
        <h3 className="capitalize text-4xl">sitemap</h3>
        <ul className="flex flex-col gap-2 items-center capitalize mt-4 text-2xl">
          {navlinks.map((l, i) => (
            <li
              key={i}
              className="text-white/60 hover:text-white transition-colors"
            >
              <a href={l.href}>{l.title}</a>
            </li>
          ))}
        </ul>
      </div>

        <div className="w-full relative   py-10  flex justify-between items-center">
          <div className="absolute w-[372px] left-1/2 -translate-x-1/2 overflow-hidden rounded-[28px]">
            <Image alt="sea" src={"/footerimg.png"} width={372} height={43} />
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 "></div>
          </div>
          <p className="capitalize  text-3xl text-white z-10 text-center mx-auto">a place to remember</p>
        </div>
        
    </footer>
  );
};

export default FooterMobile;
