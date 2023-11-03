"use client";
import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-[4vw]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-1/2  md:text-left">
          <h1 className="text-3xl font-semibold">Brand Name</h1>
          <p className="text-gray-400 mt-4 w-full md:w-[30vw] text-justify md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            numquam asperiores. Eius.
          </p>
        </div>
        <div className="text-gray-400 w-full md:w-[30vw] flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-white">
              Main Categories
            </h2>
            <a href="">Home</a>
            <a href="">Cart</a>
            <a href="">Man Fashion</a>
            <a href="">Woman Fashion</a>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-white ">
              Customer Services
            </h2>
            <a href="">My Account</a>
            <a href="">Order Tracking</a>
            <a href="">Wishlist</a>
            <a href="">Terms</a>
          </div>
        </div>
        <div className="flex flex-col space-y-2 ">
          <h2 className="text-2xl font-semibold">Contacts</h2>
          <p className="text-gray-400">+12943536</p>
          <p className="text-gray-400">contact@gmail.com</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center w-full">
        <p className={`md:text-2xl text-sm`}>
          {" "}
          &copy; 2023 Brand Name. All rights reserved.
        </p>
        <div className="flex gap-2">
          <Facebook className="text-2xl" />
          <Instagram className="text-2xl" />
          <Twitter className="text-2xl" />
          <Pinterest className="text-2xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
