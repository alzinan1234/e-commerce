/* eslint-disable react/jsx-key */
import React from "react";
import Link from "next/link";
import Banner from "@/components/Client/Home/Banner/Banner";
import Cart from "@/components/Client/Cart/Cart";
import image from "@/assets/cart/main.webp";
import image2 from "@/assets/cart/main2.webp";
const Home = () => {
  const allItems = [
    {
      title: "Mountain View",
      description:
        "Check out all of these gorgeous mountain trips with beautiful views of the mountains",
      buttonText: "View Trips",
      image: [image, image2],
    },
    {
      title: "To The Beach",
      description: "Plan your next beach trip with these fabulous destinations",
      buttonText: "View Trips",
      image: [image, image2],
    },
    {
      title: "Desert Destinations",
      description: "It’s the desert you’ve always dreamed of",
      buttonText: "Book Now",
      image: [image, image2],
    },
    {
      title: "Explore The Galaxy",
      description:
        "Seriously, straight up, just blast off into outer space today",
      buttonText: "Book Now",
      image: [image, image2],
    },
    {
      title: "Explore The Galaxy",
      description:
        "Seriously, straight up, just blast off into outer space today",
      buttonText: "Book Now",
      image: [image, image2],
    },
    {
      title: "Explore The Galaxy",
      description:
        "Seriously, straight up, just blast off into outer space today",
      buttonText: "Book Now",
      image: [image, image2],
    },
  ];
  return (
    <div className="">
      <Banner />
      <div className="maxWidth mx-auto py-10">
        <div className="sm-card-padding grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 overflow-hidden relative">
          <Cart allItems={allItems} />
        </div>
      </div>
    </div>
  );
};

export default Home;

// <div className="py-4">
//   <h2 className="text-base text-slate-900 font-body text-start overflow-text">
//     Project X Paris Joggers
//   </h2>
//   <div className="product-price mb-3 flex flex-col md:flex-row font-title md:items-center gap-2">
//     <span className="font-semibold">Tk.900</span>
//     <div className="hidden md:flex items-center gap-2">
//       <del className="old-price text-sm font-normal text-slate-400">
//         Tk.1090
//       </del>
//       <span className="discount-badge rounded text-white bg-red-500 px-1 ml-1 !text-[12px]">
//         17% OFF
//       </span>
//     </div>
//   </div>
//   <div className="product-actions flex justify-between items-center gap-1 sm:gap-2">
//     <button
//       onClick={() => activeClickBtn(index)}
//       aria-label="Add To Cart"
//       className="action-btn p-1 lg:px-2 text-sm lg:text-lg rounded"
//       style={{
//         border: "1px solid rgb(0, 0, 0)",
//         backgroundColor: "transparent",
//         color: "rgb(0, 0, 0)",
//       }}
//     >
//       <svg
//         stroke="currentColor"
//         fill="none"
//         strokeWidth="1.5"
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//         className="active:scale-90"
//         height="20"
//         width="20"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
//         ></path>
//       </svg>
//     </button>
//     <button
//       className="action-btn p-1 text-sm lg:text-lg lg:px-4 py-1 w-full rounded"
//       style={{
//         border: "1px solid rgb(0, 0, 0)",
//         backgroundColor: "transparent",
//         color: "rgb(0, 0, 0)",
//       }}
//     >
//       Buy Now{" "}
//       <svg
//         stroke="currentColor"
//         fill="currentColor"
//         strokeWidth="0"
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//         className="hidden @[150px]:inline-block"
//         height="20"
//         width="20"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           fillRule="evenodd"
//           d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
//           clipRule="evenodd"
//         ></path>
//       </svg>
//     </button>
//   </div>
// </div>;
