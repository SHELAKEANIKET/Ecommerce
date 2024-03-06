import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  const cors = "https://cors-anywhere.herokuapp.com/";
  const baseURL = "https://productapi-yashraj.onrender.com/api/";

  const fetchProducts = async (filter) => {
    try {
      const response = await fetch(`${cors}${baseURL}${filter}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts("allproducts");
  },[Link]);

  return (
    <div className="flex flex-col md:flex-row h-full my-20">
      <div className="flex sm:max-h-80 sm:w-[20%]">
        <ul className="flex justify-start flex-col gap-5 px-8 py-3">
          <li className="font-semibold text-xl">
            <button onClick={() => fetchProducts("allproducts")}>
              All Products
            </button>
          </li>
          <li className="font-semibold text-xl">
            <button onClick={() => fetchProducts("tshirt")}>
              Tops & T-Shirts
            </button>
          </li>
          <li className="font-semibold text-xl">
            <button onClick={() => fetchProducts("shoes")}>Shoes</button>
          </li>
          <li className="font-semibold text-xl">
            <button onClick={() => fetchProducts("trousers")}>
              Trousers & Tights
            </button>
          </li>
          <li className="font-semibold text-xl">
            <button onClick={() => fetchProducts("accessories")}>
              Accessories
            </button>
          </li>
        </ul>
      </div>

      <div className="h-[100%] w-[100%]">
        <div className="flex justify-center items-center flex-wrap py-10 gap-10 bg-white">
          {products.map((product, key) => (
            <Fade key={key} cascade>
              <Link
                to={{ pathname: `/product/${key}` }}
                state={product}
                key={key}
              >
                <div className="h-96 w-80 p-5 flex justify-center items-center flex-col bg-[#F6F6F6] shadow-md rounded-2xl gap-2 hover:shadow-lg">
                  <img
                    className="w-60 h-64"
                    src={product.imageUrl}
                    alt="product_Image"
                  />
                  <div className="flex justify-between items-center w-full">
                    <p className="text-slate-900 text-lg">
                      {product.price} INR
                    </p>
                    <FaRegHeart className="cursor-pointer" />
                  </div>
                  <div className="w-full">
                    <p className="text-slate-900 text-lg font-medium">
                      {product.title}
                    </p>
                  </div>
                </div>
              </Link>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
