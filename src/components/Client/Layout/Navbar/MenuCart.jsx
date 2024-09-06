import Link from "next/link";
import React from "react";

export default function MenuCart({ setIsOpen, isClient }) {
  return (
    <div className="  rounded-md px-4 mt-20 max-w-sm w-full mx-auto">
      <ul className=" block">
        <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[10px]">
          <Link
            onClick={() => setIsOpen(false)}
            className="navar-text uppercase Navbar-font"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[10px]">
          <Link
            onClick={() => setIsOpen(false)}
            className="navar-text uppercase Navbar-font"
            href="/notices"
          >
            Notices
          </Link>
        </li>
        <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[10px]">
          <Link
            onClick={() => setIsOpen(false)}
            className="navar-text uppercase Navbar-font"
            href="/ourCourses"
          >
            Our Courses
          </Link>
        </li>

        <li className="link-text py-2 px-[3px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer ms-3 me-5">
          <Link
            onClick={() => setIsOpen(false)}
            className="navar-text uppercase Navbar-font"
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="link-text wrapper met-3 ">
          <Link
            onClick={() => setIsOpen(false)}
            Link
            className=" link-text text-center py-[6px] ARCHITECTURAL"
            href="/unitech-architctural"
          >
            <span className="flex items-center justify-center uppercase gap-1 ">
              UNITECH ARCHITECTURAL
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
