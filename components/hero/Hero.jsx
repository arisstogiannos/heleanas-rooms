import React from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const Hero = () => {
  return (
    <section className="myContainer h-[80vh]  md:h-[85vh] rounded-3xl overflow-hidden relative ">
      <video
      key={"main-bg-video.mp4"}
        src="/main-bg-video.mp4"
        className="object-cover h-full w-full absolute top-0 left-0  "
        autoPlay
        muted
        alt="sea video"
        loop
        preload="auto"
      ></video>
      <div className="h-full w-full absolute top-0 left-0 bg-black/60 "></div>
      <div className="absolute top-0 left-0 flex flex-col justify-between h-full">
        <div className=" flex w-full mt-20 2xl:mt-16 3xl:mt-20 ">
          <div className="w-1/3 flex flex-col justify-between  pt-5 pb-4 lg:pt-12 lg:pb-10 2xl:pt-8 2xl:pb-6 3xl:pt-12 3xl:pb-10">
            <hr className="border-t-4 border-t-mwhite rounded-tr-full rounded-br-full " />
            <hr className="border-t-4 border-t-mwhite rounded-tr-full rounded-br-full " />
          </div>
          <div className=" flex flex-col gap-4 text-4xl md:text-6xl lg:text-8xl 2xl:text-6xl 3xl:text-8xl text-white capitalize text-nowrap px-5 xl:px-10">
            <h2 className="text-white">welcome to</h2>
            <h2 className="ml-14 3xl:ml-28">your holiday</h2>
            <h2 className="">destination</h2>
          </div>
          <div className="w-1/3 flex flex-col justify-between 2xl:-translate-x-20 3xl:-translate-x-28 lg:pt-8 lg:pb-6 3xl:pt-12 3xl:pb-10">
            <hr className="border-t-4 w-[190%] border-t-mwhite rounded-tl-full rounded-bl-full hidden xl:inline-block" />
            <hr className="border-t-4 w-[190%] mt-20 md:mt-28 lg:mt-36 xl:mt-0 border-t-mwhite rounded-tl-full rounded-bl-full" />
          </div>
        </div>
        <div>
          
        <p
          style={nunito.style}
          className=" md:text-2xl  md:w-2/3 2xl:text-lg 3xl:text-xl font-normal  text-white 2xl:w-1/3 px-8 2xl:px-0 text-center mx-auto  md:mt-[270px] lg:mt-32 xl:mt-60 2xl:mt-0  3xl:mt-32 "
        >
          Nestled above our family shop, our renovated apartments offer a perfect mix of tradition and comfort. With a welcoming terrace and just a short walk to Corfu’s sandy shores, you'll enjoy a relaxing escape{" "}
        </p>
        <div className="text-mwhite absolute top-[85%] lg:top-[87%]  xl:top-[85%] 2xl:top-[98%] -translate-y-full w-full flex justify-between capitalize px-5 text-sm md:text-lg xl:text-2xl">
          <p>Kassiopi</p>
          <p>Corfu, Greece</p>
        </div>

        <div className="mx-auto font-light mt-20 lg:mt-10 xl:mt-32 2xl:mt-5 w-[250px] h-[90px] md:w-[300px] md:h-[82px] relative cursor-pointer ">
          <svg
            width="200"
            height="172"
            viewBox="0 0 343 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-1/2 -translate-x-1/2 md:hidden"
          >
            <path
              d="M32.6775 31.5715C40.2334 12.5141 58.6568 0 79.1574 0H259.159C278.717 0 296.48 11.404 304.621 29.1875L337.582 101.188C352.743 134.305 328.543 172 292.12 172H50.6107C15.3023 172 -8.88292 136.394 4.1307 103.571L32.6775 31.5715Z"
              fill="#DBDDE0"
            />
          </svg>
          <svg
            width="300"
            height="172"
            viewBox="0 0 343 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 max-md:hidden 2xl:scale-90 3xl:scale-100"
          >
            <path
              d="M32.6775 31.5715C40.2334 12.5141 58.6568 0 79.1574 0H259.159C278.717 0 296.48 11.404 304.621 29.1875L337.582 101.188C352.743 134.305 328.543 172 292.12 172H50.6107C15.3023 172 -8.88292 136.394 4.1307 103.571L32.6775 31.5715Z"
              fill="#DBDDE0"
            />
          </svg>
          <span className="text-black absolute top-2/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg 2xl:text-xl 3xl:text-2xl  uppercase font-bold">
            explore
          </span>
          <svg
            className="absolute animate-mBounce-long top-[90%] md:top-[95%] xl:top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 "
            width="25"
            height="14"
            viewBox="0 0 30 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5858 16.4143C14.3668 17.1954 15.6332 17.1954 16.4142 16.4143L29.1421 3.68639C29.9232 2.90534 29.9232 1.63901 29.1421 0.857965C28.3611 0.0769157 27.0948 0.0769157 26.3137 0.857965L15 12.1717L3.68629 0.857965C2.90524 0.0769157 1.63891 0.0769157 0.857864 0.857965C0.0768156 1.63901 0.0768156 2.90534 0.857864 3.68639L13.5858 16.4143ZM13 15V15.0001H17V15H13Z"
              fill="black"
            />
          </svg>
        </div>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
