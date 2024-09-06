"use client";

import { useState } from "react";

export default function Button({ setIsOpen, isOpen }) {
  const genericHamburgerLine = `h-[3px] w-6 my-[2px] rounded-full bg-gray-300 transition-all ease-in-out duration-300`;

  return (
    <div className="drawer-content relative z-[100000]">
      <label
        htmlFor="my-drawer"
        className="relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col h-9 w-12 py-[3px] rounded  justify-center items-center group cursor-pointer">
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "rotate-45 translate-y-[8px] opacity-100" : "opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-[8px] opacity-100"
                : "opacity-100"
            }`}
          />
        </div>
      </label>
    </div>
  );
}
