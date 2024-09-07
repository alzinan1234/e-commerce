"use client";
import Image from "next/image";
import { useState } from "react";
import "./Cart.css";
import Link from "next/link";

const Cart = ({ allItems }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cart, setCart] = useState([]); // Cart state to track added items
  const [activeBlueBtns, setActiveBlueBtns] = useState({}); // Track active buttons for each item

  const addToCart = (item) => {
    // Check if item is already in the cart
    const itemExists = cart.find((cartItem) => cartItem.id === item.id);

    if (!itemExists) {
      setCart((prevCart) => [...prevCart, item]); // Add only if it doesn't exist
    }
  };

  const activeClickBtn = (index, item) => {
    addToCart(item); // Add item to cart

    setActiveBlueBtns((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state for this item
    }));
  };

  function isCustomImage(image) {
    return image && image.url !== undefined;
  }

  return (
    <>
      {allItems?.map((item, index) => (
        <div key={index} className="m-1">
          <div
            className="text-center relative mx-auto scale-105  border-gray-500 overflow-hidden p-2"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`cart-image h-[300px]  relative  w-[100%] overflow-hidden 
                ${activeBlueBtns[index] ? "image-clip-cutting" : ""}
              `}
            >
              {isCustomImage(item.ProductImage) ? (
                <Image
                  className=" h-[100%] image-zoom transition-transform duration-500 ease-in-out cursor-pointer"
                  style={{
                    transform:
                      hoveredIndex === index ? "scale(1.04)" : "scale(1)",
                  }}
                  src={
                    hoveredIndex === index
                      ? item?.image[0]?.url
                      : item?.image[1]?.url
                  }
                  alt=""
                />
              ) : (
                <Image
                  className="cart-image h-[100%] image-zoom transition-transform duration-500 ease-in-out cursor-pointer"
                  style={{
                    transform:
                      hoveredIndex === index ? "scale(1.04)" : "scale(1)",
                  }}
                  src={hoveredIndex === index ? item?.image[0] : item?.image[1]}
                  alt=""
                />
              )}
            </div>
            {/* -------------- product add to cart --------- */}
            <div className="py-1">
              <h2 className="cart-title text-[14px] text-slate-700 font-bold font-body text-start overflow-text">
                Project X Paris Joggers
              </h2>
              <div className="product-price pt-1 mb-3 flex flex-row md:flex-row font-title md:items-center gap-2">
                <span className="font-semibold">Tk.900</span>
                <div className="flex  items-center gap-2">
                  <del className="old-price text-sm font-normal text-slate-400">
                    Tk.1090
                  </del>
                  <span className="discount-badge rounded text-white bg-red-500 px-1 ml-1 text-[12px]">
                    17% OFF
                  </span>
                </div>
              </div>
              <div className="product-actions flex justify-between items-center gap-1 sm:gap-2">
                <button
                  onClick={() => activeClickBtn(index, item)}
                  aria-label="Add To Cart"
                  className={`action-btn p-1 lg:px-2 text-sm lg:text-lg rounded 
                     ${
                       activeBlueBtns[index]
                         ? "bg-[#003366] text-white border-transparent"
                         : "bg-transparent text-black border-[1px] border-black"
                     }
                    `}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="active:scale-90"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    ></path>
                  </svg>
                </button>

                <button
                  className="action-btn p-1 text-sm lg:text-[17px] lg:px-4 py-[5px] w-full rounded
               duration-300  hover:bg-[#003366] hover:text-white hover:border-transparent bg-transparent text-black border-[1px] border-black"
                >
                  <Link
                    className="w-[100%] h-[100%] relative z-[1000] flex justify-center items-center"
                    href={`/items/details/2`}
                  >
                    Buy Now{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="hidden @[150px]:inline-block"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
