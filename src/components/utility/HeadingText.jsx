import React from "react";

const HeadingText = ({ title }) => {
  return (
    <>
      <h1 className="text-[22px] md:text-start text-center font-bold text-gray-600 uppercase">
        {" "}
        {title}
      </h1>
      <div class="w-[120px] h-[4px] BgDarkBlue mx-auto md:mx-0 mt-1"></div>
    </>
  );
};

export default HeadingText;
