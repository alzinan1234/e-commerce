"use client";
import React from "react";
import ItemDetailsCartSlider from "./ItemDetailsCartSlider";
import { useState } from "react";
const ItemDetailsCart = () => {
  const [activeAnswer, setActiveAnswer] = useState(0);

  // Function to toggle answer visibility
  const toggleAnswer = (index) => {
    setActiveAnswer((prev) => (prev === index ? null : index));
  };

  const faqData = [
    {
      question: "Product Quantity",
      answer:
        "We offer shared hosting, VPS hosting, dedicated server hosting, and cloud hosting plans.",
    },
  ];

  return (
    <div>
      <div className=" ">
        <ItemDetailsCartSlider />
      </div>

      <div className="mt-10 hidden md:block">
        <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-[#0A071B]/10">
              <button
                className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
                onClick={() => toggleAnswer(index)}
              >
                <span>{item.question}</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className={`mt-1.5 md:mt-0 flex-shrink-0 h-7 w-7 text-[#5B5675] transition-transform ${
                    activeAnswer === index ? "rotate-180" : ""
                  }`}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </button>
              <div
                className={`answer pt-0 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium ${
                  activeAnswer === index ? "block" : "hidden"
                }`}
              >
                <li>Stylish summer dresses crafted from lightweight</li>
                <li>Elegant evening gowns</li>
                <li>Casual sundresses in vibrant colors</li>
                <li>Chic midi dresses that blend comfort and style</li>
                <li>Bohemian-inspired maxi dresses</li>
                <li>Fitted bodycon dresses that accentuate curves</li>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsCart;
