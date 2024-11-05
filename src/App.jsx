import React, { useState } from "react";
import "./App.css";

function App() {
  const [select, setSelect] = useState("home");

  return (
    <div
      style={{ boxShadow: "4px 4px 40px #000 inset" }}
      className="h-screen  w-screen bg-white overflow-hidden"
    >
      {/* nav bar */}

      <div className="flex justify-between w-full max-h-32">
        {/* errorbin logo */}
        <div className="">
          <img
            src="../public/Logo 1.png"
            alt="Logo"
            className="ml-4 mt-14 max-w-52"
          />
        </div>
        {/* navitem */}
        <div className="  ml-24 flex">
          <nav>
            <div className=" h-8 w-8 rounded-full absolute -top-2 border border-black ml-[28rem]  "></div>
            <ul className="flex gap-12 font-medium pt-4 ">
              <li
                onClick={() => setSelect("home")}
                className="relative flex flex-col items-center pt-14 cursor-pointer"
              >
                {select === "home" && (
                  <div className="before-after-select h-2 w-10 absolute -top-2"></div>
                )}
                <a href="#home">HOME</a>
              </li>
              <li
                onClick={() => setSelect("website")}
                className="relative flex flex-col items-center pt-14 cursor-pointer"
              >
                {select === "website" && (
                  <div className="before-after-select h-2 w-10 absolute -top-2"></div>
                )}
                <a href="#website">Website</a>
              </li>
              <li
                onClick={() => setSelect("application")}
                className="relative flex flex-col items-center pt-14 cursor-pointer"
              >
                {select === "application" && (
                  <div className="before-after-select h-2 w-10 absolute -top-2"></div>
                )}
                <a href="#application">Application</a>
              </li>
              <li
                onClick={() => setSelect("digital-marketing")}
                className="relative flex flex-col items-center pt-14 cursor-pointer"
              >
                {select === "digital-marketing" && (
                  <div className="before-after-select h-2 w-10 absolute -top-2"></div>
                )}
                <a href="#digital-marketing" className="min-w-36">
                  Digital Marketing
                </a>
              </li>
              <li
                onClick={() => setSelect("logos")}
                className="relative flex flex-col items-center pt-14 cursor-pointer"
              >
                {select === "logos" && (
                  <div className="before-after-select h-2 w-10 absolute -top-2"></div>
                )}
                <a href="#logos">Logos</a>
              </li>
              <li
                onClick={() => setSelect("posters")}
                className="relative flex flex-col items-center pt-14 cursor-pointer"
              >
                {select === "posters" && (
                  <div className="before-after-select h-2 w-10 absolute -top-2"></div>
                )}
                <a href="#posters">Posters</a>
              </li>
            </ul>
          </nav>
          {/* x-icon */}
          <div className="hide-x bg-white h-20 w-20 mt-11 ml-6"></div>
        </div>
        {/* right side ligi */}
        <div className="  ">
          <img src="../public/Vector.png" alt="" className="pt-20 mr-60 " />
        </div>
      </div>

      {/* body */}

      <div className="flex justify-center">
        {/* welcome box */}
        <div className=" flex flex-col absolute left-40 top-64 gap-10 ">
          <h1 className="text-[60px] font-light">WELCOME TO</h1>
          <h1 className="text-[80px] font-bold leading-tight">
            THE FUTURE <br /> BUSINESS
          </h1>
          <ul className="expand-ul text-sm space-y-1 ml-7">
            <li>
              Experience the enchanting blend of ancient history <br /> and
              modern allure in Istanbul and Cappadocia
            </li>
            <li>
              Experience the enchanting blend of ancient history <br /> and
              modern allure
            </li>
            <li>
              Experience the enchanting blend of ancient history <br /> and
              modern allure in Istanbul and Cappadocia
            </li>
          </ul>
        </div>
        {/* center box */}
        <div className="center-div  w-[40rem] h-[40rem] mt-[6rem] ">
          <img
            className="h-[490px] w-[490px]"
            src="../public/black-dots-10708375 1.png"
            alt=""
          />
        </div>
        {/* bottom box */}
        <div className="bottom-wrap flex flex-row absolute gap-14 mt-[43rem] -ml-[60rem]">
          {/* star and contact */}
          <div className="space-y-4 pt-3">
            <div className="flex gap-10 justify-center">
              <img src="../public/Star 1.png" alt="" />
              <img src="../public/Star 1.png" alt="" />
            </div>
            <div className="flex justify-center items-center bg-black  w-48 h-16">
              <h1 className="font-bold text-2xl text-white">CONTACT US</h1>
            </div>
          </div>
          {/* bottom discription */}
          <div className="flex items-center w-[500px] h-[140px] rounded-lg bg-[rgb(239,232,232,0.8)]  ">
            <p className="pl-3">
              Experience the enchanting blend of ancient history and modern
              allure in Istanbul and Cappadocia. Experience the enchanting blend
              of ancient history and modern allure in Istanbul and Cappadocia..
              Experience the enchanting blend of ancient history and modern
              allure in Istanbul and Cappadocia.
            </p>
          </div>
        </div>
        {/* right side */}
        <div className="triangle absolute  text-[24px] space-y-96 mt-[110px] ml-[40rem]">
          <div className=" space-y-10 ">
            <h1>15+ services</h1>
            <h1 className="pl-24">Website</h1>
          </div>
          <div className=" space-y-10">
            <h1 className="pl-24">Mobile App</h1>
            <h1>Digital marketing</h1>
          </div>
          <img className="absolute top-[260px] left-10" src="../public/Polygon 1.svg" alt="" />
          <img className="absolute -top-28 left-40 h-10 rotate-45" src="../public/Polygon 1.svg" alt="" />
        </div>
        {/* dark mode */}
        <div className="dark-round absolute flex flex-col items-center text-[20px] space-y-2 ml-[86rem] mt-72">
          <h1>Switch To</h1>
          <img src="../public/the-dark-removebg-preview 1.svg" alt="" />
          <h1>World</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
