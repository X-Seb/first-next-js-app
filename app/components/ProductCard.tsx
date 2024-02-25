
import React from "react";
import Btn_AddToCart from "./btn_AddToCart";

interface Props {
  name: string;
  description: string;
}

function ProductCard() {
  return (
    <div>
      <h2>Name of product goes here</h2>
      <p>Item description</p>
      <Btn_AddToCart />
    </div>
  );
}

export default ProductCard;
