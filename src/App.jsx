import React, { useState } from "react";
import "./App.css";

function App() {
  const [select, setSelect] = useState("home");

  return (
    <div
      style={{ boxShadow: "4px 4px 40px #000 inset" }}
      className="h-screen w-screen bg-white"
    >
      <div className="navbar flex justify-between">
        <div>
          <img src="../public/Logo 1.png" alt="Logo" className="ml-4 mt-16" />
        </div>
        <div className="mr-[40rem]">
          <nav>
            <ul className="flex gap-12 font-medium pt-4 w-full">
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
        </div>
      </div>
    </div>
  );
}

export default App;
