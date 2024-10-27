"use client";
import Amentites from "@/components/apartments/Amentites";
import Gallery from "@/components/apartments/Gallery";
import { Nunito } from "next/font/google";
import Image from "next/image";
import { React, useEffect } from "react";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

const RoomPage = ({title,text1,text2, num,photos,color}) => {
  return (
    <section className="h-fit">
      <div className="flex flex-col gap-10 xl:gap-20 mt-5 xl:mt-20 myContainer ">
        <div className="flex justify-between">
          <h2 className="capitalize text-6xl 3xl:text-9xl">{title}</h2>
          <div className=" gap-16 xl:gap-28 items-center hidden lg:flex">
            <div className="flex gap-8 text-3xl items-center  font-medium text-[#000000] 3xl:scale-125">
              <span className="flex gap-4 items-center">
                {num.at(0)}{" "}
                <svg
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 12.3887C15.141 12.3887 16.7147 11.7361 17.8751 10.5744C19.0354 9.41278 19.6873 7.83722 19.6873 6.19437C19.6873 4.55152 19.0354 2.97596 17.8751 1.81429C16.7147 0.652619 15.141 0 13.5 0C11.859 0 10.2853 0.652619 9.12492 1.81429C7.96458 2.97596 7.3127 4.55152 7.3127 6.19437C7.3127 7.83722 7.96458 9.41278 9.12492 10.5744C10.2853 11.7361 11.859 12.3887 13.5 12.3887ZM13.5 15.1103C5.27359 15.1103 0 19.6551 0 21.868V26H27V21.868C27 19.1919 22.0075 15.1103 13.5 15.1103Z"
                    fill="#000000"
                  />
                </svg>
              </span>
              <span className="flex gap-4 items-center">
                {num.at(1)}{" "}
                <svg
                  width="33"
                  height="26"
                  viewBox="0 0 33 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.8476 10.9459V5.38038C30.8476 2.41362 28.434 0 25.4672 0H7.53258C4.56582 0 2.1522 2.41362 2.1522 5.38038V10.9459C0.899694 11.3901 0 12.5862 0 13.9891C0 14.8004 0 19.7824 0 20.4455C0 21.0398 0.481783 21.5216 1.0761 21.5216H2.1522V24.7499C2.1522 25.3441 2.63399 25.826 3.2283 25.826H7.53264C8.12689 25.826 8.60874 25.3442 8.60874 24.7499V21.5216H24.3913V24.7499C24.3913 25.3441 24.873 25.826 25.4674 25.826H29.7717C30.3659 25.826 30.8478 25.3442 30.8478 24.7499V21.5216H31.9239C32.5182 21.5216 33 21.0398 33 20.4455C33 19.8337 33 14.8729 33 13.9891C32.9997 12.5862 32.1 11.3901 30.8476 10.9459ZM4.30434 5.38038C4.30434 3.60032 5.75253 2.15214 7.53258 2.15214H25.4672C27.2472 2.15214 28.6954 3.60032 28.6954 5.38038V10.7608H26.5433V9.68465C26.5433 7.9046 25.0951 6.45641 23.315 6.45641H18.652C17.8258 6.45641 17.0714 6.76875 16.4999 7.28102C15.9282 6.76875 15.174 6.45641 14.3477 6.45641H9.68472C7.90466 6.45641 6.45648 7.9046 6.45648 9.68465V10.7608H4.30434V5.38038ZM24.3911 9.68471V10.7608H17.576V9.68471C17.576 9.09136 18.0587 8.60861 18.6521 8.60861H23.3151C23.9084 8.60861 24.3911 9.09136 24.3911 9.68471ZM15.4238 9.68471V10.7608H8.60861V9.68471C8.60861 9.09136 9.09136 8.60861 9.68472 8.60861H14.3477C14.9411 8.60861 15.4238 9.09136 15.4238 9.68471ZM6.45648 23.6738H4.30434V21.5216H6.45648V23.6738ZM28.6954 23.6738H26.5433V21.5216H28.6954V23.6738ZM30.8476 19.3694C29.9194 19.3694 4.23737 19.3694 2.1522 19.3694V17.2173H30.8476V19.3694ZM30.8476 15.0651H2.15214V13.989C2.15214 13.3956 2.63489 12.9129 3.22824 12.9129C4.05529 12.9129 29.0847 12.9129 29.7715 12.9129C30.3649 12.9129 30.8476 13.3956 30.8476 13.989V15.0651Z"
                    fill="#000000"
                  />
                </svg>
              </span>
              <span className="flex gap-4 items-center">
                {num.at(2)}{" "}
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.20001 23.4122H16.8C21.3289 23.4122 25 19.7411 25 15.2122H0C0 19.7411 3.67107 23.4122 8.20001 23.4122Z"
                    fill="#000000"
                  />
                  <path
                    d="M0.889823 12.4123V9.94743C0.889823 8.5865 1.28749 7.25762 2.0238 6.11621L2.26088 6.2963L2.89528 5.55451L1.62852 4.58496L1.09334 5.40917L1.31875 5.58023C0.466375 6.8767 0.00663116 8.39354 0.00663116 9.94743V12.4123H0V14.0123H25V12.4123H0.889823Z"
                    fill="#000000"
                  />
                  <path
                    d="M12.759 4.73075C12.8231 4.72721 12.8848 4.69909 12.9282 4.65148C12.9708 4.60341 12.9934 4.53935 12.9907 4.47568C12.9868 4.41161 12.9583 4.35028 12.9106 4.30691C12.8629 4.26353 12.7989 4.24129 12.7352 4.24443C12.6712 4.24752 12.609 4.27644 12.5661 4.32451C12.5235 4.37137 12.5004 4.43584 12.5043 4.50026C12.507 4.56393 12.5364 4.62525 12.584 4.66823C12.6313 4.71156 12.6953 4.73424 12.759 4.73075Z"
                    fill="#000000"
                  />
                  <path
                    d="M8.05313 2.76766C8.1172 2.76417 8.17813 2.73486 8.2215 2.68719C8.26488 2.63993 8.28717 2.57586 8.28438 2.51219C8.28128 2.44812 8.25197 2.3864 8.2047 2.34302C8.15664 2.30044 8.09222 2.27701 8.02855 2.28095C7.96448 2.28449 7.90276 2.313 7.85938 2.36062C7.8164 2.40828 7.79337 2.47195 7.79731 2.53637C7.8 2.60044 7.82972 2.66216 7.87698 2.70514C7.9246 2.74777 7.98911 2.77041 8.05313 2.76766Z"
                    fill="#000000"
                  />
                  <path
                    d="M11.4776 4.22168C11.6022 4.27364 11.7451 4.21505 11.7967 4.09086C11.8483 3.96701 11.7901 3.82406 11.6659 3.77211C11.5412 3.72016 11.3987 3.77874 11.3471 3.90334C11.2952 4.02714 11.3534 4.17008 11.4776 4.22168Z"
                    fill="#000000"
                  />
                  <path
                    d="M10.3027 3.7305C10.4265 3.78245 10.5695 3.72387 10.621 3.59887C10.6726 3.47503 10.6144 3.33248 10.4898 3.28093C10.3659 3.22937 10.223 3.28796 10.1714 3.41176C10.1191 3.53555 10.1781 3.67895 10.3027 3.7305Z"
                    fill="#000000"
                  />
                  <path
                    d="M9.12622 3.23959C9.25047 3.29194 9.39342 3.23331 9.44537 3.10911C9.49692 2.98487 9.43834 2.84192 9.31449 2.78957C9.18989 2.73837 9.0473 2.79655 8.9954 2.9208C8.94344 3.04544 9.00282 3.18839 9.12622 3.23959Z"
                    fill="#000000"
                  />
                  <path
                    d="M7.25809 3.24339C7.26163 3.30746 7.29095 3.36839 7.33816 3.41177C7.38583 3.45474 7.44944 3.47778 7.51396 3.47469C7.57843 3.47075 7.63896 3.44183 7.68233 3.39496C7.72571 3.3469 7.74835 3.28248 7.74521 3.21842C7.74211 3.15475 7.7132 3.09302 7.66513 3.05004C7.61747 3.00667 7.5538 2.98363 7.48973 2.98717C7.42531 2.99071 7.36434 3.01998 7.32061 3.06764C7.27803 3.11451 7.255 3.17933 7.25809 3.24339Z"
                    fill="#000000"
                  />
                  <path
                    d="M8.41258 4.10281C8.5266 4.17505 8.67702 4.1411 8.74967 4.02817C8.82196 3.91489 8.78876 3.76412 8.67548 3.69182C8.5622 3.61918 8.41143 3.65239 8.33953 3.76566C8.26644 3.87934 8.30005 4.02971 8.41258 4.10281Z"
                    fill="#000000"
                  />
                  <path
                    d="M10.4216 5.09814C10.3485 5.21222 10.3818 5.36219 10.4954 5.43409C10.6079 5.50713 10.7587 5.47393 10.8318 5.36065C10.9044 5.24657 10.8712 5.0966 10.7575 5.0239C10.6442 4.95166 10.4935 4.98447 10.4216 5.09814Z"
                    fill="#000000"
                  />
                  <path
                    d="M9.38214 4.43192C9.30949 4.5456 9.3431 4.69602 9.45638 4.76867C9.56965 4.84171 9.72043 4.80816 9.79272 4.69448C9.86576 4.5816 9.83216 4.43038 9.71888 4.35893C9.60525 4.28504 9.45523 4.31944 9.38214 4.43192Z"
                    fill="#000000"
                  />
                  <path
                    d="M11.493 5.73177C11.45 5.78023 11.4265 5.8435 11.43 5.90757C11.4328 5.97159 11.4621 6.03296 11.5097 6.07594C11.5578 6.11892 11.6214 6.14235 11.6855 6.13881C11.7496 6.13527 11.8109 6.10675 11.8539 6.05874C11.8973 6.01187 11.9195 5.94746 11.9167 5.88299C11.9133 5.81932 11.8843 5.75834 11.8367 5.71467C11.7898 5.67164 11.7253 5.649 11.6609 5.65214C11.5969 5.65519 11.5359 5.6841 11.493 5.73177Z"
                    fill="#000000"
                  />
                  <path
                    d="M6.23854 4.48109C6.19556 4.52875 6.17293 4.59282 6.17607 4.65684C6.17956 4.7209 6.20808 4.78263 6.25654 4.82521C6.30381 4.86819 6.36788 4.89162 6.43229 4.88813C6.49556 4.88539 6.55729 4.85532 6.60066 4.80841C6.64324 4.76074 6.66588 4.69592 6.66279 4.63265C6.65965 4.56859 6.63033 4.50686 6.58311 4.46388C6.53545 4.42091 6.47143 4.39827 6.40731 4.40141C6.34364 4.4049 6.28157 4.43342 6.23854 4.48109Z"
                    fill="#000000"
                  />
                  <path
                    d="M7.34993 5.84431C7.45658 5.76184 7.47533 5.60798 7.39291 5.50248C7.31054 5.39583 7.15778 5.37668 7.05113 5.4591C6.94448 5.54152 6.92614 5.69428 7.00815 5.80133C7.09017 5.90763 7.24329 5.92672 7.34993 5.84431Z"
                    fill="#000000"
                  />
                  <path
                    d="M8.13514 6.85082C8.24178 6.7676 8.26093 6.61524 8.17891 6.50939C8.0953 6.40274 7.94298 6.38285 7.83668 6.46601C7.73004 6.54882 7.71094 6.70194 7.79331 6.80744C7.87617 6.91374 8.02929 6.93363 8.13514 6.85082Z"
                    fill="#000000"
                  />
                  <path
                    d="M8.6179 7.47235C8.51165 7.55556 8.49176 7.70828 8.57493 7.81457C8.65739 7.92122 8.81006 7.94032 8.9167 7.85755C9.02335 7.77548 9.0421 7.62197 8.95968 7.51612C8.87692 7.40982 8.7242 7.39033 8.6179 7.47235Z"
                    fill="#000000"
                  />
                  <path
                    d="M9.53656 8.42906C9.47209 8.43175 9.41076 8.46107 9.36778 8.50914C9.32441 8.556 9.30217 8.62087 9.30491 8.68414C9.3084 8.74781 9.33732 8.81028 9.38573 8.85251C9.4326 8.89629 9.49592 8.91892 9.56039 8.91538C9.62481 8.91224 9.68613 8.88332 9.72911 8.83531C9.77209 8.78809 9.79512 8.72402 9.79163 8.66031C9.78849 8.59664 9.75917 8.53416 9.71156 8.49119C9.66384 8.44821 9.60057 8.42557 9.53656 8.42906Z"
                    fill="#000000"
                  />
                  <path
                    d="M7.20569 3.92578C7.20255 3.86166 7.17408 3.79999 7.12597 3.75661C7.07831 3.71363 7.01389 3.69099 6.95022 3.69414C6.88655 3.69723 6.82483 3.72694 6.78145 3.77421C6.73847 3.82227 6.71623 3.88594 6.71898 3.94996C6.72287 4.01403 6.75138 4.07535 6.79945 4.11833C6.84631 4.16171 6.91083 4.18394 6.97525 4.18125C7.03927 4.17771 7.10024 4.14919 7.14322 4.10153C7.18615 4.05312 7.20918 3.9895 7.20569 3.92578Z"
                    fill="#000000"
                  />
                  <path
                    d="M8.61391 5.43723C8.52366 5.53685 8.53109 5.69076 8.63031 5.78141C8.73033 5.8716 8.88384 5.86497 8.97443 5.7646C9.06508 5.66538 9.058 5.51142 8.95803 5.42083C8.85846 5.32984 8.70415 5.33806 8.61391 5.43723Z"
                    fill="#000000"
                  />
                  <path
                    d="M9.52839 6.26837C9.43775 6.36799 9.44483 6.5227 9.54479 6.61294C9.64441 6.70314 9.79872 6.69576 9.88857 6.59649C9.97996 6.49687 9.97218 6.34296 9.87216 6.25197C9.7726 6.16138 9.61864 6.1692 9.52839 6.26837Z"
                    fill="#000000"
                  />
                  <path
                    d="M8.05706 4.93321C8.1473 4.83284 8.14022 4.67933 8.04065 4.58908C7.94103 4.49844 7.78672 4.50662 7.69568 4.60509C7.60549 4.7051 7.61332 4.85902 7.71288 4.95001C7.81245 5.0402 7.96641 5.03242 8.05706 4.93321Z"
                    fill="#000000"
                  />
                  <path
                    d="M10.6108 7.02073C10.5463 7.02462 10.4854 7.05274 10.4424 7.1008C10.3986 7.14807 10.3764 7.21214 10.3791 7.27655C10.3827 7.34022 10.4111 7.40195 10.4592 7.44458C10.5064 7.4883 10.5705 7.51099 10.635 7.50785C10.699 7.50436 10.7603 7.47539 10.8033 7.42698C10.8463 7.38011 10.8693 7.31604 10.8659 7.25197C10.8631 7.18756 10.8338 7.12623 10.7861 7.0836C10.7389 7.04067 10.6748 7.01799 10.6108 7.02073Z"
                    fill="#000000"
                  />
                  <path
                    d="M4.55588 3.57082L4.82422 3.75829L6.76052 1.22703L5.67694 0.262665L5.51211 0.13767C5.36992 0.0282804 5.18908 -0.0181876 5.01253 0.00644246C4.83439 0.0310725 4.67424 0.125953 4.5676 0.269346C4.5676 0.269346 4.05041 0.816193 3.83124 1.12048C1.95192 3.72319 1.82812 4.27357 1.82812 4.27357L3.12539 5.26576L4.55588 3.57082Z"
                    fill="#000000"
                  />
                  <path
                    d="M5.34255 4.11729C5.48978 4.21885 5.68976 4.1864 5.79766 4.0458L7.28239 2.10441C7.38864 1.9653 7.37029 1.76766 7.23866 1.6505L7.02806 1.46338L5.11719 3.96069L5.34255 4.11729Z"
                    fill="#000000"
                  />
                  <path
                    d="M3.47188 23.2597C2.84765 23.2597 2.33984 23.7675 2.33984 24.3917C2.33984 25.0194 2.84765 25.5276 3.47188 25.5276C4.09571 25.5276 4.57968 25.1917 4.8039 24.4675C4.87579 24.2436 4.97192 23.7878 5.03594 23.3476C4.62775 23.2034 4.23167 23.0276 3.85584 22.8315C3.75976 23.1597 3.58396 23.2597 3.47188 23.2597Z"
                    fill="#000000"
                  />
                  <path
                    d="M21.5211 23.2597C21.409 23.2597 21.2329 23.1597 21.1371 22.8315C20.7609 23.0276 20.3649 23.2034 19.957 23.3476C20.025 23.7878 20.1211 24.2436 20.1891 24.4675C20.4129 25.1917 20.8969 25.5276 21.5211 25.5276C22.1489 25.5276 22.6571 25.0194 22.6571 24.3917C22.6571 23.7675 22.1489 23.2597 21.5211 23.2597Z"
                    fill="#000000"
                  />
                </svg>
              </span>
            </div>
            <div style={{color:color,borderBottomColor:color}} className="text-4xl xl:text-5xl cursor-pointer  border-b-4 border-b-[#2A769A] py-3  capitalize flex items-center gap-16 w-fit h-fit">
              book now{" "}
              <svg
                className="mt-3 mr-2"
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.2148 1.78223C28.2148 0.9538 27.5433 0.282227 26.7148 0.282226L13.2148 0.282227C12.3864 0.282227 11.7148 0.953799 11.7148 1.78223C11.7148 2.61065 12.3864 3.28223 13.2148 3.28223L25.2148 3.28223L25.2148 15.2822C25.2148 16.1107 25.8864 16.7822 26.7148 16.7822C27.5433 16.7822 28.2148 16.1107 28.2148 15.2822L28.2148 1.78223ZM2.7755 27.8429L27.7755 2.84289L25.6542 0.721567L0.654184 25.7216L2.7755 27.8429Z"
                  fill={color}
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 lg:flex-row justify-between">
          <p
            style={nunito.style}
            className="text-base lg:text-xl xl:text-2xl w-full lg:w-[600px]  "
          >
            {text1}
          </p>
          <p
            style={nunito.style}
            className="text-base lg:text-xl xl:text-2xl w-full lg:w-[600px]  "
          >
            {text2}
          </p>
        </div>
        <div className="  flex flex-col md:justify-between md:flex-row lg:hidden">
          <div className="flex gap-8 text-3xl items-center  font-medium text-black 3xl:scale-125">
            <span className="flex gap-4 items-center">
              2{" "}
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 12.3887C15.141 12.3887 16.7147 11.7361 17.8751 10.5744C19.0354 9.41278 19.6873 7.83722 19.6873 6.19437C19.6873 4.55152 19.0354 2.97596 17.8751 1.81429C16.7147 0.652619 15.141 0 13.5 0C11.859 0 10.2853 0.652619 9.12492 1.81429C7.96458 2.97596 7.3127 4.55152 7.3127 6.19437C7.3127 7.83722 7.96458 9.41278 9.12492 10.5744C10.2853 11.7361 11.859 12.3887 13.5 12.3887ZM13.5 15.1103C5.27359 15.1103 0 19.6551 0 21.868V26H27V21.868C27 19.1919 22.0075 15.1103 13.5 15.1103Z"
                  fill="#000"
                />
              </svg>
            </span>
            <span className="flex gap-4 items-center">
              2{" "}
              <svg
                width="33"
                height="26"
                viewBox="0 0 33 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.8476 10.9459V5.38038C30.8476 2.41362 28.434 0 25.4672 0H7.53258C4.56582 0 2.1522 2.41362 2.1522 5.38038V10.9459C0.899694 11.3901 0 12.5862 0 13.9891C0 14.8004 0 19.7824 0 20.4455C0 21.0398 0.481783 21.5216 1.0761 21.5216H2.1522V24.7499C2.1522 25.3441 2.63399 25.826 3.2283 25.826H7.53264C8.12689 25.826 8.60874 25.3442 8.60874 24.7499V21.5216H24.3913V24.7499C24.3913 25.3441 24.873 25.826 25.4674 25.826H29.7717C30.3659 25.826 30.8478 25.3442 30.8478 24.7499V21.5216H31.9239C32.5182 21.5216 33 21.0398 33 20.4455C33 19.8337 33 14.8729 33 13.9891C32.9997 12.5862 32.1 11.3901 30.8476 10.9459ZM4.30434 5.38038C4.30434 3.60032 5.75253 2.15214 7.53258 2.15214H25.4672C27.2472 2.15214 28.6954 3.60032 28.6954 5.38038V10.7608H26.5433V9.68465C26.5433 7.9046 25.0951 6.45641 23.315 6.45641H18.652C17.8258 6.45641 17.0714 6.76875 16.4999 7.28102C15.9282 6.76875 15.174 6.45641 14.3477 6.45641H9.68472C7.90466 6.45641 6.45648 7.9046 6.45648 9.68465V10.7608H4.30434V5.38038ZM24.3911 9.68471V10.7608H17.576V9.68471C17.576 9.09136 18.0587 8.60861 18.6521 8.60861H23.3151C23.9084 8.60861 24.3911 9.09136 24.3911 9.68471ZM15.4238 9.68471V10.7608H8.60861V9.68471C8.60861 9.09136 9.09136 8.60861 9.68472 8.60861H14.3477C14.9411 8.60861 15.4238 9.09136 15.4238 9.68471ZM6.45648 23.6738H4.30434V21.5216H6.45648V23.6738ZM28.6954 23.6738H26.5433V21.5216H28.6954V23.6738ZM30.8476 19.3694C29.9194 19.3694 4.23737 19.3694 2.1522 19.3694V17.2173H30.8476V19.3694ZM30.8476 15.0651H2.15214V13.989C2.15214 13.3956 2.63489 12.9129 3.22824 12.9129C4.05529 12.9129 29.0847 12.9129 29.7715 12.9129C30.3649 12.9129 30.8476 13.3956 30.8476 13.989V15.0651Z"
                  fill="#000"
                />
              </svg>
            </span>
            <span className="flex gap-4 items-center">
              2{" "}
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.20001 23.4122H16.8C21.3289 23.4122 25 19.7411 25 15.2122H0C0 19.7411 3.67107 23.4122 8.20001 23.4122Z"
                  fill="#000"
                />
                <path
                  d="M0.889823 12.4123V9.94743C0.889823 8.5865 1.28749 7.25762 2.0238 6.11621L2.26088 6.2963L2.89528 5.55451L1.62852 4.58496L1.09334 5.40917L1.31875 5.58023C0.466375 6.8767 0.00663116 8.39354 0.00663116 9.94743V12.4123H0V14.0123H25V12.4123H0.889823Z"
                  fill="#000"
                />
                <path
                  d="M12.759 4.73075C12.8231 4.72721 12.8848 4.69909 12.9282 4.65148C12.9708 4.60341 12.9934 4.53935 12.9907 4.47568C12.9868 4.41161 12.9583 4.35028 12.9106 4.30691C12.8629 4.26353 12.7989 4.24129 12.7352 4.24443C12.6712 4.24752 12.609 4.27644 12.5661 4.32451C12.5235 4.37137 12.5004 4.43584 12.5043 4.50026C12.507 4.56393 12.5364 4.62525 12.584 4.66823C12.6313 4.71156 12.6953 4.73424 12.759 4.73075Z"
                  fill="#000"
                />
                <path
                  d="M8.05313 2.76766C8.1172 2.76417 8.17813 2.73486 8.2215 2.68719C8.26488 2.63993 8.28717 2.57586 8.28438 2.51219C8.28128 2.44812 8.25197 2.3864 8.2047 2.34302C8.15664 2.30044 8.09222 2.27701 8.02855 2.28095C7.96448 2.28449 7.90276 2.313 7.85938 2.36062C7.8164 2.40828 7.79337 2.47195 7.79731 2.53637C7.8 2.60044 7.82972 2.66216 7.87698 2.70514C7.9246 2.74777 7.98911 2.77041 8.05313 2.76766Z"
                  fill="#000"
                />
                <path
                  d="M11.4776 4.22168C11.6022 4.27364 11.7451 4.21505 11.7967 4.09086C11.8483 3.96701 11.7901 3.82406 11.6659 3.77211C11.5412 3.72016 11.3987 3.77874 11.3471 3.90334C11.2952 4.02714 11.3534 4.17008 11.4776 4.22168Z"
                  fill="#000"
                />
                <path
                  d="M10.3027 3.7305C10.4265 3.78245 10.5695 3.72387 10.621 3.59887C10.6726 3.47503 10.6144 3.33248 10.4898 3.28093C10.3659 3.22937 10.223 3.28796 10.1714 3.41176C10.1191 3.53555 10.1781 3.67895 10.3027 3.7305Z"
                  fill="#000"
                />
                <path
                  d="M9.12622 3.23959C9.25047 3.29194 9.39342 3.23331 9.44537 3.10911C9.49692 2.98487 9.43834 2.84192 9.31449 2.78957C9.18989 2.73837 9.0473 2.79655 8.9954 2.9208C8.94344 3.04544 9.00282 3.18839 9.12622 3.23959Z"
                  fill="#918671"
                />
                <path
                  d="M7.25809 3.24339C7.26163 3.30746 7.29095 3.36839 7.33816 3.41177C7.38583 3.45474 7.44944 3.47778 7.51396 3.47469C7.57843 3.47075 7.63896 3.44183 7.68233 3.39496C7.72571 3.3469 7.74835 3.28248 7.74521 3.21842C7.74211 3.15475 7.7132 3.09302 7.66513 3.05004C7.61747 3.00667 7.5538 2.98363 7.48973 2.98717C7.42531 2.99071 7.36434 3.01998 7.32061 3.06764C7.27803 3.11451 7.255 3.17933 7.25809 3.24339Z"
                  fill="#918671"
                />
                <path
                  d="M8.41258 4.10281C8.5266 4.17505 8.67702 4.1411 8.74967 4.02817C8.82196 3.91489 8.78876 3.76412 8.67548 3.69182C8.5622 3.61918 8.41143 3.65239 8.33953 3.76566C8.26644 3.87934 8.30005 4.02971 8.41258 4.10281Z"
                  fill="#918671"
                />
                <path
                  d="M10.4216 5.09814C10.3485 5.21222 10.3818 5.36219 10.4954 5.43409C10.6079 5.50713 10.7587 5.47393 10.8318 5.36065C10.9044 5.24657 10.8712 5.0966 10.7575 5.0239C10.6442 4.95166 10.4935 4.98447 10.4216 5.09814Z"
                  fill="#918671"
                />
                <path
                  d="M9.38214 4.43192C9.30949 4.5456 9.3431 4.69602 9.45638 4.76867C9.56965 4.84171 9.72043 4.80816 9.79272 4.69448C9.86576 4.5816 9.83216 4.43038 9.71888 4.35893C9.60525 4.28504 9.45523 4.31944 9.38214 4.43192Z"
                  fill="#918671"
                />
                <path
                  d="M11.493 5.73177C11.45 5.78023 11.4265 5.8435 11.43 5.90757C11.4328 5.97159 11.4621 6.03296 11.5097 6.07594C11.5578 6.11892 11.6214 6.14235 11.6855 6.13881C11.7496 6.13527 11.8109 6.10675 11.8539 6.05874C11.8973 6.01187 11.9195 5.94746 11.9167 5.88299C11.9133 5.81932 11.8843 5.75834 11.8367 5.71467C11.7898 5.67164 11.7253 5.649 11.6609 5.65214C11.5969 5.65519 11.5359 5.6841 11.493 5.73177Z"
                  fill="#918671"
                />
                <path
                  d="M6.23854 4.48109C6.19556 4.52875 6.17293 4.59282 6.17607 4.65684C6.17956 4.7209 6.20808 4.78263 6.25654 4.82521C6.30381 4.86819 6.36788 4.89162 6.43229 4.88813C6.49556 4.88539 6.55729 4.85532 6.60066 4.80841C6.64324 4.76074 6.66588 4.69592 6.66279 4.63265C6.65965 4.56859 6.63033 4.50686 6.58311 4.46388C6.53545 4.42091 6.47143 4.39827 6.40731 4.40141C6.34364 4.4049 6.28157 4.43342 6.23854 4.48109Z"
                  fill="#918671"
                />
                <path
                  d="M7.34993 5.84431C7.45658 5.76184 7.47533 5.60798 7.39291 5.50248C7.31054 5.39583 7.15778 5.37668 7.05113 5.4591C6.94448 5.54152 6.92614 5.69428 7.00815 5.80133C7.09017 5.90763 7.24329 5.92672 7.34993 5.84431Z"
                  fill="#918671"
                />
                <path
                  d="M8.13514 6.85082C8.24178 6.7676 8.26093 6.61524 8.17891 6.50939C8.0953 6.40274 7.94298 6.38285 7.83668 6.46601C7.73004 6.54882 7.71094 6.70194 7.79331 6.80744C7.87617 6.91374 8.02929 6.93363 8.13514 6.85082Z"
                  fill="#918671"
                />
                <path
                  d="M8.6179 7.47235C8.51165 7.55556 8.49176 7.70828 8.57493 7.81457C8.65739 7.92122 8.81006 7.94032 8.9167 7.85755C9.02335 7.77548 9.0421 7.62197 8.95968 7.51612C8.87692 7.40982 8.7242 7.39033 8.6179 7.47235Z"
                  fill="#918671"
                />
                <path
                  d="M9.53656 8.42906C9.47209 8.43175 9.41076 8.46107 9.36778 8.50914C9.32441 8.556 9.30217 8.62087 9.30491 8.68414C9.3084 8.74781 9.33732 8.81028 9.38573 8.85251C9.4326 8.89629 9.49592 8.91892 9.56039 8.91538C9.62481 8.91224 9.68613 8.88332 9.72911 8.83531C9.77209 8.78809 9.79512 8.72402 9.79163 8.66031C9.78849 8.59664 9.75917 8.53416 9.71156 8.49119C9.66384 8.44821 9.60057 8.42557 9.53656 8.42906Z"
                  fill="#918671"
                />
                <path
                  d="M7.20569 3.92578C7.20255 3.86166 7.17408 3.79999 7.12597 3.75661C7.07831 3.71363 7.01389 3.69099 6.95022 3.69414C6.88655 3.69723 6.82483 3.72694 6.78145 3.77421C6.73847 3.82227 6.71623 3.88594 6.71898 3.94996C6.72287 4.01403 6.75138 4.07535 6.79945 4.11833C6.84631 4.16171 6.91083 4.18394 6.97525 4.18125C7.03927 4.17771 7.10024 4.14919 7.14322 4.10153C7.18615 4.05312 7.20918 3.9895 7.20569 3.92578Z"
                  fill="#918671"
                />
                <path
                  d="M8.61391 5.43723C8.52366 5.53685 8.53109 5.69076 8.63031 5.78141C8.73033 5.8716 8.88384 5.86497 8.97443 5.7646C9.06508 5.66538 9.058 5.51142 8.95803 5.42083C8.85846 5.32984 8.70415 5.33806 8.61391 5.43723Z"
                  fill="#918671"
                />
                <path
                  d="M9.52839 6.26837C9.43775 6.36799 9.44483 6.5227 9.54479 6.61294C9.64441 6.70314 9.79872 6.69576 9.88857 6.59649C9.97996 6.49687 9.97218 6.34296 9.87216 6.25197C9.7726 6.16138 9.61864 6.1692 9.52839 6.26837Z"
                  fill="#918671"
                />
                <path
                  d="M8.05706 4.93321C8.1473 4.83284 8.14022 4.67933 8.04065 4.58908C7.94103 4.49844 7.78672 4.50662 7.69568 4.60509C7.60549 4.7051 7.61332 4.85902 7.71288 4.95001C7.81245 5.0402 7.96641 5.03242 8.05706 4.93321Z"
                  fill="#918671"
                />
                <path
                  d="M10.6108 7.02073C10.5463 7.02462 10.4854 7.05274 10.4424 7.1008C10.3986 7.14807 10.3764 7.21214 10.3791 7.27655C10.3827 7.34022 10.4111 7.40195 10.4592 7.44458C10.5064 7.4883 10.5705 7.51099 10.635 7.50785C10.699 7.50436 10.7603 7.47539 10.8033 7.42698C10.8463 7.38011 10.8693 7.31604 10.8659 7.25197C10.8631 7.18756 10.8338 7.12623 10.7861 7.0836C10.7389 7.04067 10.6748 7.01799 10.6108 7.02073Z"
                  fill="#918671"
                />
                <path
                  d="M4.55588 3.57082L4.82422 3.75829L6.76052 1.22703L5.67694 0.262665L5.51211 0.13767C5.36992 0.0282804 5.18908 -0.0181876 5.01253 0.00644246C4.83439 0.0310725 4.67424 0.125953 4.5676 0.269346C4.5676 0.269346 4.05041 0.816193 3.83124 1.12048C1.95192 3.72319 1.82812 4.27357 1.82812 4.27357L3.12539 5.26576L4.55588 3.57082Z"
                  fill="#918671"
                />
                <path
                  d="M5.34255 4.11729C5.48978 4.21885 5.68976 4.1864 5.79766 4.0458L7.28239 2.10441C7.38864 1.9653 7.37029 1.76766 7.23866 1.6505L7.02806 1.46338L5.11719 3.96069L5.34255 4.11729Z"
                  fill="#918671"
                />
                <path
                  d="M3.47188 23.2597C2.84765 23.2597 2.33984 23.7675 2.33984 24.3917C2.33984 25.0194 2.84765 25.5276 3.47188 25.5276C4.09571 25.5276 4.57968 25.1917 4.8039 24.4675C4.87579 24.2436 4.97192 23.7878 5.03594 23.3476C4.62775 23.2034 4.23167 23.0276 3.85584 22.8315C3.75976 23.1597 3.58396 23.2597 3.47188 23.2597Z"
                  fill="#918671"
                />
                <path
                  d="M21.5211 23.2597C21.409 23.2597 21.2329 23.1597 21.1371 22.8315C20.7609 23.0276 20.3649 23.2034 19.957 23.3476C20.025 23.7878 20.1211 24.2436 20.1891 24.4675C20.4129 25.1917 20.8969 25.5276 21.5211 25.5276C22.1489 25.5276 22.6571 25.0194 22.6571 24.3917C22.6571 23.7675 22.1489 23.2597 21.5211 23.2597Z"
                  fill="#918671"
                />
              </svg>
            </span>
          </div>
          <div style={{color:color,borderBottomColor:color}} className="text-4xl w-full md:w-1/3 mt-3 cursor-pointer  border-b-4  py-3  capitalize flex items-center justify-between px-2  h-fit">
            book now{" "}
            <svg
              className="mt-3 mr-2"
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.2148 1.78223C28.2148 0.9538 27.5433 0.282227 26.7148 0.282226L13.2148 0.282227C12.3864 0.282227 11.7148 0.953799 11.7148 1.78223C11.7148 2.61065 12.3864 3.28223 13.2148 3.28223L25.2148 3.28223L25.2148 15.2822C25.2148 16.1107 25.8864 16.7822 26.7148 16.7822C27.5433 16.7822 28.2148 16.1107 28.2148 15.2822L28.2148 1.78223ZM2.7755 27.8429L27.7755 2.84289L25.6542 0.721567L0.654184 25.7216L2.7755 27.8429Z"
                fill={color}
              />
            </svg>
          </div>
        </div>
      </div>
      <Gallery rooms={photos} color={color} />
      <Amentites  />
    </section>
  )
}

export default RoomPage