import React from "react";
import "./Navbar.css";

export default function Drawer({ children, isOpen, setIsOpen, isFixed }) {
  return (
    <main
      className={`
        fixed overflow-hidden z-[-1] bg-transparent  bg-opacity-25 inset-0 transform ease-in-out   ${
          isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0 "
            : " transition-all delay-500 opacity-0 -translate-x-full "
        } 
      } ${isFixed ? "top-[51px]" : "top-[114px]"} `}
    >
      <section
        className={
          " max-w-lg left-0 z-[-1] bg-[#242833] h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? "translate-x-0 " : "-translate-x-full ")
        }
      >
        <article className="relative z-[-1] w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {/* Drawer Content */}
          {children}
        </article>
      </section>

      {/* Background overlay to close drawer */}
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => setIsOpen(false)}
      ></section>
    </main>
  );
}
