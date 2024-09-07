import React from "react";
import ItemDetailsCartSlider from "./ItemDetailsCartSlider";

const ItemDetailsCart = () => {
  return (
    <div>
      <div className="border-l-2 border-r-2 border-gray-600 ">
        <ItemDetailsCartSlider />
      </div>

      <p className="text-[16px] text-justify py-10 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam velit,
        dolor exercitationem assumenda saepe doloremque voluptate doloribus
        neque obcaecati, illum ducimus laboriosam, laborum optio porro facilis.
        Magnam et culpa tenetur. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ullam laborum sed autem maxime itaque, veniam ipsa
        ducimus. Dolores, laboriosam pariatur.
      </p>
    </div>
  );
};

export default ItemDetailsCart;
