import React, { useState } from "react";
import "./App.css";

function App() {
  const [select, setSelect] = useState("home");

  return (
    <div
      style={{ boxShadow: "4px 4px 40px #000 inset" }}
      className="h-screen  w-screen bg-white"
    >
      {/* nav bar */}

      <div className="flex justify-between w-full max-h-32">
        <div className="">
          <img
            src="../public/Logo 1.png"
            alt="Logo"
            className="ml-4 mt-14 max-w-52"
          />
        </div>
        <div className="  flex">
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
          <div className="hide-x bg-white h-20 w-20 mt-11 ml-6"></div>
        </div>
        <div className="  ">
          <img src="../public/Vector.png" alt="" className="pt-20 mr-60 " />
        </div>
      </div>

      {/* body */}

      <div className="flex justify-center">
        <div className=" flex flex-col absolute left-40 top-64 gap-10 ">
          <h1 className="text-[60px] font-light">WELCOME TO</h1>
          <h1 className="text-[80px] font-bold leading-tight">
            THE FUTURE <br /> BUSINESS
          </h1>
          <ul className="expand-ul space-y-1 ml-7">
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

        <div className="center-div  w-[40rem] h-[40rem] mt-[6rem] ">
          <img
            className="h-[490px] w-[490px]"
            src="../public/black-dots-10708375 1.png"
            alt=""
          />
        </div>

        <div className="absolute mt-[45rem] -ml-[95rem] space-y-4">
          <div className="flex gap-10 justify-center">
            <img src="../public/Star 1.png" alt="" />
            <img src="../public/Star 1.png" alt="" />
          </div>
          <div className="flex justify-center items-center   w-48">
            <h1 className="font-bold text-2xl">CONTACT US</h1>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
