import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { fetchProducts } from "../api/products";

function Products() {
  const [products, setProducts] = useState([]);


  const fetchData = async () => {
    try {
      const data = await fetchProducts("allproducts");
      setProducts(data);
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-wrap my-20 py-10 px-5 gap-10">
      {products.map((product) => (
        <div
          key={product.productId}
          className="h-96 w-80 p-5 flex justify-center items-center flex-col bg-[#F6F6F6] shadow-md rounded-2xl gap-2 hover:shadow-xl"
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
