import React, { useState, useEffect } from "react";
// import { fetchProductsData } from '../api/products';
import { shoesData } from "../api/products";
import { FaRegHeart } from "react-icons/fa";

function Products() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    setProducts(shoesData);
  }, []);

  return (
    <div className="flex justify-center items-center flex-wrap py-10 px-5 gap-10 bg-white">
      {products.map((product) => (
        <div
          key={product.productId}
          className="h-96 w-80 p-5 flex justify-center items-center flex-col bg-[#F6F6F6] shadow-md rounded-2xl gap-2 hover:shadow-lg"
        >
          <img
            className="w-60 h-64"
            src={product.imageUrl}
            alt="product_Image"
          />
          <div className="flex justify-between items-center w-full">
            <p className="text-slate-900 text-lg">{product.price} INR</p>
            <FaRegHeart className="cursor-pointer" />
          </div>
          <div className="w-full">
            <p className="text-slate-900 text-lg font-medium">
              {product.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
