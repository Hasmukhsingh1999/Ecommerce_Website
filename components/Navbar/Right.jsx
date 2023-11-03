"use client";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import Link from "next/link";

const Right = () => {
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className={``}>
      <div
        className={`flex items-center justify-between sm:justify-center gap-5 sm:gap-4  `}
      >
        <button className="hidden sm:flex">Register</button>
        <button className="hidden sm:flex">Sign up</button>
        <BsFillCartFill size={16} />
        <MenuIcon
          className={`transition-transform transform rotate-0 sm:flex`}
          onClick={toggleHamburger}
        />
      </div>

      <div className={`md:hidden ${hamburger ? "" : "hidden"}`}>
        <CloseIcon
          className={`relative transition-transform transform rotate-0 hover:rotate-45`}
          onClick={toggleHamburger}
        />
        <div
          className={`w-full h-[100vh] bg-zinc-900 left-0 z-10 fixed top-0 px-[6vw] py-[6vw]`}
        >
          <div className={`w-full flex flex-col`}>
            <div className={`flex justify-between items-center`}>
              <h1 className={`font-bold text-2xl text-white`}>Quick Links</h1>
              <CloseIcon className={`text-white`} onClick={toggleHamburger} />
            </div>
            <div
              className={`flex flex-col gap-10 mt-7 text-center h-[80vh] py-[4vw] items-center justify-center relative`}
            >
              <Link href={`/`} className={`text-4xl font-semibold text-white`}>
                Home
              </Link>
              <Link href={""} className={`text-4xl font-semibold text-white`}>
                About
              </Link>
              <Link href={""} className={`text-4xl font-semibold text-white`}>
                Explore
              </Link>
              <Link href={""} className={`text-4xl font-semibold text-white`}>
                Contact
              </Link>
              <div
                className={`flex justify-between w-full p-[4vw] absolute bottom-0`}
              >
                <button
                  className={`bg-slate-400 px-[5vw] py-[3vw] rounded-3xl text-white`}
                >
                  Register
                </button>
                <button
                  className={`bg-slate-400 px-[5vw] rounded-3xl py-[3vw] text-white`}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
