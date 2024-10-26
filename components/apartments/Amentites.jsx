import Image from "next/image";
import React from "react";

const Amentites = () => {
  const amenities = [
    {
      title: "bathroom",
      items: [
        ["hot water", "/apartments/amentites/refrigerator.svg"],
        ["towels", "/apartments/amentites/dish.svg"],
        ["shampoo", "/apartments/amentites/dish.svg"],
        ["hair dryer", "/apartments/amentites/coffee-maker.svg"],
      ],
    },
    {
      title: "kitchen",
      items: [
        ["Refrigerator", "/apartments/amentites/refrigerator.svg"],
        ["Dishes and silverware", "/apartments/amentites/dish.svg"],
        ["Coffee maker", "/apartments/amentites/coffee-maker.svg"],
      ],
    },
    {
      title: "bedroom",
      items: [["Bed linens","/apartments/amentites/bed.svg"], ["extra pillows and blankets","/apartments/amentites/pillow.svg"], ["iron","/apartments/amentites/iron.svg"], ["hangers","/apartments/amentites/hanger.svg"]],

    },
    {
      title: "extras",
      items: [
        ["Air conditioning","/apartments/amentites/air-conditioner.svg"],
        ["Heating","/apartments/amentites/heating.svg"],
        ["Fire extinguisher","/apartments/amentites/fire-extinguisher.svg"],
        ["Wifi","/apartments/amentites/wifi.svg"],
        ["Free street parking","/apartments/amentites/parking.svg"],
      ],

    },
  ];
  return (
    <div className="flex flex-col items-center capitalize my-20  myContainer">
      <h3 className="text-6xl xl:text-8xl text-black mb-20">amentites</h3>
      {amenities.map((am, i) => {
        return (
          <div key={i} className="w-full flex flex-col gap-20 my-10">
            <div className="flex items-center w-full justify-between">
            <hr className=" border-t-2 border-t-black w-[40%]" />
              <p className=" text-3xl max-xl:px-5 xl:text-5xl">{am.title}</p>
              <hr className=" border-t-2 border-t-black w-[40%]" />
            </div>
            <div className=" w-full flex justify-center items-center  text-lg xsm:text-xl font-medium">
              <div className="flex max-xl:flex-wrap justify-between lg:justify-center w-3/4 gap-5 md:gap-12 xl:gap-28">
                {am.items.map((item, ind) => (
                  <div key={ind} className="flex flex-col gap-4 items-center justify-center">
                    <Image src={item.at(1)} width={60} height={60} alt={item.at(0)} />
                    <p className=" w-28 xsm:w-32 md:w-auto text-center">{item.at(0)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Amentites;
