"use client";
import ItemDetailsCart from "@/components/Client/itemDetailsCart/ItemDetailsCart";
// pages/index.js
import cartimage from "@/assets/categorys/blazer.jpeg";

import { useState } from "react";
import Link from "next/link";

import { CategorySliderItem } from "@/components/Client/itemDetailsCart/CategoryItemSlider/CategorySliderItem";
import ShareSocalIcon from "@/components/Client/itemDetailsCart/ShareSocalMedia/ShareSocalIcon";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [liveColor, setLiveColor] = useState("");
  const [activeBlueBtn, setActiveBlueBtn] = useState(null);
  const activeClickBtn = (index) => {
    setActiveBlueBtn(index === activeBlueBtn ? null : index);
  };

  const isCustomImage = (image) => {
    return image.url !== undefined;
  };

  const allCartItem = [
    {
      id: 1,
      ProductName: "Product 2",
      Price: 900,
      ProductImage: { url: cartimage.src, altText: "Product 2 Image" },
      ProductCetagory: "Material",
      buttonline1: ["2-7/8", "4", "5", "6", "8", "10"],
      buttonline2: ["S", "M", "L", "XL", "XXL"],
      buttonline3: [
        "#FF0000", // Red
        "#0000FF", // Blue
        "#000000", // Black

        "#00FF00", // Green
        "#87CEEB", // Sky (Sky Blue)
      ],
    },
  ];

  //   ------------- active button color set ------------
  const [activeBtns, setActiveBtns] = useState({ 0: 0 });
  const [activeBtns2, setActiveBtns2] = useState({ 0: 0 });
  const [activeBtns3, setActiveBtns3] = useState({ 0: 0 });

  const handleButtonClick = (itemIndex, btnIndex) => {
    setActiveBtns((prevActiveBtns) => ({
      ...prevActiveBtns,
      [itemIndex]: prevActiveBtns[itemIndex] === btnIndex ? null : btnIndex,
    }));
  };

  const handleButtonClick2 = (itemIndex, btnIndex) => {
    setActiveBtns2((prevActiveBtns) => ({
      ...prevActiveBtns,
      [itemIndex]: prevActiveBtns[itemIndex] === btnIndex ? null : btnIndex,
    }));
  };

  const handleButtonClick3 = (itemIndex, btnIndex) => {
    setActiveBtns3((prevActiveBtns) => ({
      ...prevActiveBtns,
      [itemIndex]: prevActiveBtns[itemIndex] === btnIndex ? null : btnIndex,
    }));
  };

  // ------------------ Quantity Number -----------
  const [quantity, setQuantity] = useState(1); // Initial quantity set to 1

  const totalPrice = quantity * 900;

  const increment = () => {
    if (quantity >= 3) {
      return alert("You Get Max Quantity is 3");
    }
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Ensures quantity doesn't go below 1
  };

  // -------- socal media ---------
  const url = "https://example.com";
  const title = "Check out this amazing site!";
  const description = "This site offers fantastic products and services.";
  return (
    <div className="mx-2">
      <div className="bg-white maxWidth mx-auto overflow-hidden ">
        <div className="">
          <div className="grid  justify-center md:grid-cols-2 gap-x-10 gap-y-5 mt-5 ">
            <div className="">
              <ItemDetailsCart />
            </div>

            <div className="w-[100%] md:ps-5">
              {/* ---------------- product details ------------ */}
              <div className="product-calculation ">
                <div className="flex flex-col justify-start">
                  <h1 className="font-bold text-gray-900 uppercase text-[20px] md:text-[28px] ">
                    Product Details
                  </h1>
                  <div class="w-[120px] h-[4px] BgDarkBlue"></div>
                  <p className="text-[18px] text-gray-700 md:text-[22px] pt-3">
                    The STARBORN® Structural F23
                  </p>
                </div>

                <div className="flex flex-col justify-start items-start gap-2">
                  <p className="pt-2 font-[600] text-[12px] text-gray-600 uppercase">
                    Category :{" "}
                    <span className="textDarkBlue text-[14px] underline">
                      {" "}
                      T-Shirt
                    </span>
                  </p>

                  <div className="product-price pt-1 mb-3 flex flex-row md:flex-row font-title md:items-center gap-2">
                    <span className="font-[600] text-[14px] text-gray-600 uppercase">
                      Price :
                    </span>{" "}
                    <span className="font-bold text-[#003366]">
                      ৳ {allCartItem[0]?.Price}
                    </span>
                    <div className="flex  items-center gap-2">
                      <del className=" text-sm font-normal text-slate-400">
                        ৳ 1090
                      </del>
                      <span className=" rounded text-white bg-red-500 px-1 ml-1 text-[12px]">
                        17% OFF
                      </span>
                    </div>
                  </div>

                  {/* <p className=" text-[12px] font-[600] text-gray-800 uppercase">
                    product Id : XF23CL0400
                  </p> */}
                  {/* ----------------------Dynamic Size color -------------- */}
                  <div className="flex flex-col justify-start items-start gap-2 mt-2">
                    <p className="font-[600] text-[12px] text-gray-600 uppercase">
                      Size Quantity
                    </p>
                    <div className="flex flex-wrap gap-2 justify-start items-center">
                      {allCartItem[0]?.buttonline2.map((btnText, btnIndex) => (
                        <button
                          key={btnIndex}
                          onClick={() => handleButtonClick2(0, btnIndex)}
                          className={`border-[1px] border-gray-600 text-[12px] font-medium  px-[12px] py-[8px] p-1  ${
                            activeBtns2[0] === btnIndex
                              ? "BgDarkBlue text-white"
                              : ""
                          }`}
                        >
                          {btnText}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* ----------------------- Dynamicaly change color --------------- */}
                  <div className="flex flex-col justify-start items-start gap-2 mt-3">
                    <p className=" font-[600] text-[12px] flex items-center gap-2 text-gray-600 uppercase">
                      Color:{" "}
                      {liveColor ? (
                        <span
                          className=" p-2 border-[1px] border-gray-700"
                          style={{
                            backgroundColor: liveColor,
                          }}
                        ></span>
                      ) : (
                        <span className="underline text-[11px] ps-1 text-gray-700">
                          {" "}
                          Choose Color
                        </span>
                      )}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2 justify-start items-center md:pe-10">
                      {allCartItem[0]?.buttonline3.map((btnText, btnIndex) => (
                        <>
                          <button
                            key={btnIndex}
                            onClick={() => setLiveColor(btnText)} // Use onClick to update liveColor
                            style={{ backgroundColor: btnText }} // Set the button's background color dynamically
                            className={`border-[3px] border-gray-600 text-[12px] font-medium p-[12px] rounded-full ${
                              activeBtns3[0] === btnIndex
                                ? "border-[#d40303] text-white"
                                : ""
                            }`}
                          >
                            {/* Button text or content goes here */}
                          </button>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[100%]  relative">
                    <div className="flex flex-col justify-start items-start gap-2 mt-3 ">
                      <p className="font-[600] text-[12px] text-gray-600 uppercase">
                        Quantity
                      </p>
                      <div className="mt-1 flex items-center border-[1px] border-gray-400  rounded-md">
                        <button
                          onClick={decrement}
                          className="px-2 py-1 text-[17px] font-bold text-gray-700 border-r-[1px] border-gray-400"
                        >
                          -
                        </button>
                        <span className="px-6 py-2 textDarkBlue text-[14px] font-semibold">
                          {quantity}
                        </span>
                        <button
                          onClick={increment}
                          className="px-2 py-1 text-[16px] font-bold border-l-[1px] border-gray-400 text-gray-700 "
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className=" absolute bottom-0 right-0">
                      <ShareSocalIcon
                        url={url}
                        title={title}
                        description={description}
                      />
                    </div>
                  </div>
                  <div className="flex w-[100%] h-[1px] bg-gray-600"></div>

                  <div className="md:flex w-[100%] flex-wrap md:justify-between">
                    <div className="flex gap-5 justify-start items-start  mt-5">
                      <p className=" text-[18px] text-gray-800  uppercase">
                        Subtotal :
                      </p>
                      <p className=" text-[20px] font-bold text-gray-900 uppercase">
                        ৳ {totalPrice.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2  mt-[17px]">
                      {" "}
                      <Link href={"/"}>
                        {" "}
                        <button className="border-[1px]  BgDarkBlue text-white duration-300 hover:text-black border-gray-400 hover:bg-transparent text-[13px] font-medium px-[15px] py-[10px] p-1 ">
                          Proceed to Pay
                        </button>
                      </Link>
                      <button
                        onClick={() => activeClickBtn(0)}
                        className="border-[1px]  hover:bg-[#003366] hover:text-white duration-300 text-black border-gray-400 text-[13px] font-medium  px-[15px] py-[10px] p-1 "
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------- Category Item ------------ */}
      <div className="d">
        <CategorySliderItem />
      </div>
    </div>
  );
}
