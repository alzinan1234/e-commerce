"use client";
import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "@/assets/Navbar/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import ToggleButton from "./ToggleButton";
import Drawer from "./Drawer";
import MenuCart from "./MenuCart";
import { RxCross2 } from "react-icons/rx";

import { ShopingCart } from "./ShopingCart";
import { Profile } from "./Profile";

export const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [openSearchingbtn, setSearchingbtn] = useState(false);
  const [openDrawerbtn, setDrawerbtn] = useState(false);
  const [openDrawerbtnData, setDrawerbtnData] = useState("");

  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll event to toggle fixed positioning
  const handleScroll = () => {
    if (window.scrollY >= 1) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    setIsClient(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle search input field visibility
  const toggleSearchBtn = () => {
    setSearchingbtn((prev) => !prev);
  };

  const toggleDrawerBtn = (data) => {
    setDrawerbtnData(data);
    setDrawerbtn((prev) => !prev);
  };

  return (
    <>
      {/* ---------- top white navbar ------- */}
      <div className="bg-white  text-gray-600 text-center">
        <p className="text-[14px] py-1">One Lifestyle For Everyone</p>
      </div>
      {/* ------------- navbar all element ----- */}
      <div
        className={`${
          isFixed ? "fixed" : ""
        } navbar-container bg-[#242833] relative `}
      >
        <div className="flex  mx-auto items-center justify-around maxWidth md:justify-evenly  ">
          {/* --------- small device toggle button -------- */}
          <div className="menu-bar navbarRS:hidden block  w-1/3 mx-auto  ">
            <ToggleButton setIsOpen={setIsOpen} isOpen={isOpen} />
            <Drawer isFixed={isFixed} isOpen={isOpen} setIsOpen={setIsOpen}>
              <MenuCart isClient={isClient} setIsOpen={setIsOpen} />
            </Drawer>
          </div>

          {/* ------------- navbar logo----------- */}
          <div className=" flex w-1/3 mx-auto justify-center md:justify-start items-center py-[10px] navbarRS:px-2 z-[10000000] relative ">
            <Link href={"/"} className=" ">
              <div
                className={`${
                  isFixed
                    ? "] w-[125px] h-[30px] md:w-[200px] md:h-[36px] lg:w-[140px] lg:h-[35px]"
                    : " w-[125px] h-[30px] md:w-[200px] md:h-[36px] lg:w-[160px] lg:h-[40px]   "
                } flex justify-center items-center duration-500 ease-linear`}
              >
                <Image
                  src={logo}
                  className={`object-fill w-[100%]`}
                  alt="Logo name"
                />
              </div>
            </Link>
          </div>

          {/* --------  Menu link all ------------- */}
          <div className="all-menus-link navbarRS:flex w-1/3 mx-auto justify-center ">
            <NavigationMenuDemo />
          </div>

          {/* --------------  right Icon menus ----------- */}
          <div
            className="relative z-[100000] flex justify-end navbarRS:pe-5 mx-auto 
             items-center w-1/3"
          >
            <ul className="all-link-container items-center flex">
              {/* ---------------searching icon------------- */}
              {!openSearchingbtn && (
                <li
                  onClick={toggleSearchBtn}
                  className=" duration-300 cursor-pointer mx-[5px] navbarRS:mx-[7px] block"
                >
                  <Link
                    className="navar-text flex flex-col  justify-center items-center text-white uppercase Navbar-font"
                    href={""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      color="#fff"
                      fill="none"
                    >
                      <path
                        d="M17.5 17.5L22 22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              )}
              {/* ---------- cart icon --------- */}
              <li
                onClick={() => toggleDrawerBtn("cart")}
                className=" duration-300 cursor-pointer mx-[5px] navbarRS:mx-[7px]"
              >
                <Link
                  className="navar-text relative  flex flex-col "
                  href={"/"}
                >
                  <div className="t-0 absolute left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      3
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    color="#fff"
                    fill="none"
                  >
                    <path
                      d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="10.5"
                      cy="20.5"
                      r="1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="17.5"
                      cy="20.5"
                      r="1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </Link>
              </li>
              {/* ---------------- users profile ---------- */}
              <li className=" duration-300 cursor-pointer mx-[5px] navbarRS:mx-[7px]">
                <Profile />
              </li>
            </ul>
          </div>
        </div>

        {/* -------------------- drawer searching input field ------------- */}
        <div
          className={`bluecolor flex justify-center mx-3 navbarRS:mx-0 items-center transition-height duration-300 ease-in-out ${
            openSearchingbtn ? "h-[100px]" : "h-0"
          }`}
        >
          <div className="max-w-[600px] mx-auto flex items-center gap-y-2 ">
            <input
              className="py-2 px-4 w-full navbarRS:w-[450px] text-[#fff] border-2 bg-transparent focus:border-b-2 focus:border-gray-300 outline-none"
              type="search"
              placeholder="search"
            />
            <h2
              onClick={() => setSearchingbtn(false)}
              className=" cursor-pointer relative h-[40px]"
            >
              <RxCross2 className="hover:font-extrabold text-white hover:text-[1.5rem] h-[100%] ms-1 absolute top-[0%] text-xl" />
            </h2>
          </div>
        </div>

        {/* ---------------- Drawer cart list Open Container  -------- */}
        <div
          className={`fixed bg-[#242833] drawer-Cart right-0 z-[10]  transition-all duration-700 ease-in-out ${
            openDrawerbtn
              ? "h-[100vh] w-[450px] opacity-100 "
              : "h-0 w-0 opacity-0 "
          }`}
        >
          <div className="relative mx-auto top-5 md:px-12 px-5 ">
            <div className=" w-[100%] cursor-pointer  flex justify-between  ">
              <div className="w-1/2"></div>

              <div className="w-1/2 flex justify-end  items-center">
                <svg
                  width={"80"}
                  height={"80"}
                  onClick={toggleDrawerBtn}
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            {openDrawerbtnData === "cart" && <ShopingCart />}
          </div>
        </div>
      </div>
    </>
  );
};
