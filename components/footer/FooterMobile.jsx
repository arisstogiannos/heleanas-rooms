import React from "react";
import Image from "next/image";

const FooterMobile = () => {
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
    <footer className=" bg-mBrown w-full text-white lg:hidden flex flex-col myContainer overflow-hidden">
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
