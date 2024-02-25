import React from "react";
import Btn_AddToCart from "./btn_AddToCart";

interface Props {
  id: number;
  title: string;
  url: string;
  thumbnailURL: string;
}

const ProductCard = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const images: Props[] = await res.json();
  const selectedImages = images.filter((product) => product.id < 10);

  return (
    <ul>
      {selectedImages.map((product) => (
        <li key={product.id}>
          <p>{product.title}</p>
          <img src={product.url} />
        </li>
      ))}
    </ul>
  );
};

export default ProductCard;
