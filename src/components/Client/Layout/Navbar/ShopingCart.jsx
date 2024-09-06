"use client";
import React, { useState } from "react";
import cartimage from "@/assets/ecommerce/Gallery-2.jpg";
import Image from "next/image";
import Link from "next/link";

export const ShopingCart = () => {
  // ------------------ Quintity Number -----------
  const [allItem, setAllItem] = useState([
    {
      id: 1,
      name: "STRUCTURAL H19",
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      name: "STRUCTURAL H20",
      price: 21,
      quantity: 1,
    },
    {
      id: 3,
      name: "STRUCTURAL H10",
      price: 33,
      quantity: 1,
    },
  ]);
  // Initial quantity set to 1

  const increment = (index) => {
    setAllItem((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: item.quantity < 10 ? item.quantity + 1 : item.quantity,
            }
          : item
      )
    );
  };

  const decrement = (index) => {
    setAllItem((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <div>
      <div className="shopingCart relative">
        {/* --------------progressbar- -------- */}
        <div className=" rounded-lg  block p-x-4">
          <h1 className=" font-bold text-gray-200 text-center text-[20px]">
            Shopping Cart (3)
          </h1>
          <p className="text-[11px] text-gray-200  text-center tracking-widest pt-1">
            Only $64.00 away from Free Shipping
          </p>
          <div className="w-[60%] mx-auto h-4  bg-gray-400 rounded-full mt-2">
            <div className="w-3/4 h-full text-center flex items-center justify-center text-xs text-white bg-[#EF4444] rounded-full">
              75%
            </div>
          </div>
        </div>
        {/* ---------------- all cart --------- */}
        <div className="all-cart-list mt-6 flex flex-col gap-y-8">
          {allItem?.map((item, index) => (
            <div
              key={index}
              className="flex w-[100%] gap-x-5 items-center px-2  p-2 border-b-[1px] "
            >
              <div className="w-[110px] h-[60px] flex items-center ">
                <Image
                  width={0}
                  height={0}
                  className="object-fill w-full h-full"
                  src={cartimage}
                  alt=""
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <div className="flex w-[100%] justify-between">
                  <div>
                    <p className="text-[12px] text-gray-200 font-semibold">
                      {item.name}
                    </p>
                    <div className="flex gap-x-3">
                      <p className="text-gray-200 font-semibold tracking-widest text-[11px]">
                        {"size : M"}
                      </p>

                      <p className="text-gray-200 font-semibold tracking-widest text-[11px]">
                        {"color : blue"}
                      </p>
                    </div>
                  </div>
                  <div className="flex"></div>
                  <span className="flex justify-end ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-ml-1  h-5 w-5 text-gray-200 hover:text-red-500"
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
                  </span>
                </div>
                <div className="flex justify-between items-start gap-2 mt-2">
                  <div className="flex h-[10px] w-[80px] justify-evenly items-center ">
                    <button
                      onClick={() => decrement(index)}
                      className="px-1  text-[14px] font-bold  bg-red-500 text-gray-200 border-r-[1px] border-gray-400"
                    >
                      -
                    </button>
                    <span className="px-1 py-2 text-[12px] font-semibold text-gray-200">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increment(index)}
                      className="px-1  text-[14px] font-bold  bg-gray-300 text-gray-700 border-r-[1px] border-gray-400"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-200 font-bold tracking-widest text-[14px]">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tatal flex gap-2 mt-8 justify-between ">
          <h1 className="text-[18px] uppercase font-extrabold text-gray-200">
            SUBTOTAL:
          </h1>
          <h1 className="text-[20px] uppercase font-extrabold text-[#f5f5f5] border-b-[1px]">
            {" $"}
            {allItem.reduce(
              (acc, item) => acc + item?.price * item.quantity,
              0
            )}
          </h1>
        </div>
        <p className="text-[12px] pt-2  font-semibold text-[#8a8a8a] tracking-widest">
          Tax included and shipping <br /> calculated at checkout
        </p>

        <div className="flex flex-wrap   gap-2 justify-start items-center mt-[16px]">
          {" "}
          <button className="border-[1px] bg-[#e6ce92] hover:bg-transparent hover:text-white border-gray-400 text-[13px] font-medium text-gray-700 px-[15px] py-[12px] p-1 rounded-[10px]">
            CHECK OUT
          </button>
          <Link href={"/"}>
            {" "}
            <button className="border-[1px] hover:bg-transparent bg-[#e6ce92] text-black border-gray-400  text-[13px] font-medium px-[15px] py-[12px] p-1 rounded-[10px]">
              BUY WITH SHOP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
