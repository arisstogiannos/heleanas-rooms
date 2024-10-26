
import RoomPage from "@/components/apartments/RoomPage";

import { React,  } from "react";



const Room2 = () => {
  const num = [4,2,1]
  const text1=" The studio is located in the centre of Kassiopi, on the first floor, right adove our shop (Utopia boutique). It has a shared patio if you want to enjoy the sun or have breakfast. You can use the BBQ if you are in the mood to organise your own meal. The location of the studio is perfect if you want to live your travel experience like a local!"
  const text2=" The studio has a private bathroom and its own front door. In the studio you will find 2 single beds that they are designed to fit perfectly together, so you have the option to use them as double bed. The fridge and the kitchen equipment allows you to prepare breakfast or cold dishes during the day."
  
  const rooms = [
    {
      src: "/apartments/room2/room2-2.webp",
      w: 720 * 0.5,
      h: 960 * 0.5,
      m: "230m",
    },
    {
      src: "/apartments/room2/room2-4.webp",
      w: 720 * 0.5,
      h: 540 * 0.5,
      m: "230m",
    },
    {
      src: "/apartments/room2/room2-3.webp",
      w: 1200 * 0.5,
      h: 900 * 0.5,
      m: "230m",
    },
    {
      src: "/apartments/room2/room2-1.webp",
      w: 720,
      h: 540,
      m: "230m",
    },
    {
      src: "/apartments/room2/room2-5.webp",
      w: 360,
      h: 480,
      m: "230m",
    },
    {
      src: "/apartments/room2/room2-6.webp",
      w: 360 * 1.5,
      h: 270 * 1.5,
      m: "230m",
    },
    {
      src: "/apartments/room2/room2-7.webp",
      w: 360,
      h: 480,
      m: "230m",
    },
    {
      src: "/apartments/room2/room2-8.webp",
      w: 1200 * 0.5,
      h: 900 * 0.5,
      m: "230m",
    },
    {
      src: "/apartments/room2/room2-9.webp",
      w: 360,
      h: 480,
      m: "230m",
    },
    {
      src: "/apartments/room2/room2-10.webp",
      w: 1200 * 0.3,
      h: 1600 * 0.3,
      m: "230m",
    },
  ];

  
  return (
    <RoomPage title={'room 2'} text1={text1} text2={text2} num={num} photos={rooms} color={"#735238"} />
  );
};

export default Room2;