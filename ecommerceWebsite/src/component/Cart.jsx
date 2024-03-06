import React from "react";
import { RxCross2 } from "react-icons/rx";

function Cart() {
  return (
    <div className="mb-20 py-10 px-5 sm:px-12 grid grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-12">
      <div className="shadow-md sm:col-span-8">
        <h2 className="py-4 px-8 text-xl font-bold">CART</h2>
        <div className="flex justify-start items-center">
          <div className="flex justify-start items-center bg-[#F6F6F6] shadow-lg w-full m-5 px-5 py-2 gap-6 sm:gap-32 min-h-40 h-40 sm:h-60 rounded-md relative">
            <RxCross2 className="absolute top-5 right-5 cursor-pointer font-bold text-lg" />
            <img
              className="size-20 sm:size-40"
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/40e9a096-e6cc-4c39-aec8-46a330f80681/invincible-3-road-running-shoes-jkhK7v.png"
              alt=""
            />
            <div className="sm:w-48 sm:text-wrap ">
              <p className="text-slate-900 text-sm sm:text-xl font-medium my-1">
                Air Jorden 3
              </p>
              <p className="text-slate-900 text-sm sm:text-lg font-medium my-1">
                Size : M
              </p>
              <p className="text-slate-900 text-sm sm:text-lg font-medium">
                20000 INR
              </p>
            </div>
            <div>
              <select className="py-2 pr-7 sm:pr-14 text-lg font-medium cursor-pointer pl-1 border-2 bg-[#F6F6F6] border-gray-400 rounded focus:outline-none">
                <option value="1" className="py-2">
                  1
                </option>
                <option value="2" className="py-2">
                  2
                </option>
                <option value="3" className="py-2">
                  3
                </option>
                <option value="4" className="py-2">
                  4
                </option>
                <option value="5" className="py-2">
                  5
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div className="flex justify-start items-center bg-[#F6F6F6] shadow-lg w-full m-5 px-5 py-2 gap-6 sm:gap-32 min-h-40 h-40 sm:h-60 rounded-md relative">
            <RxCross2 className="absolute top-5 right-5 cursor-pointer font-bold text-lg" />
            <img
              className="size-20 sm:size-40"
              src="https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7e77b952-3a96-4940-97c5-ce74e5ef07ac/image.jpg"
              alt=""
            />
            <div className="sm:w-48 sm:text-wrap">
              <p className="text-slate-900 text-sm sm:text-xl font-medium my-1">
                Men's Fleece Full-Zip Fitness Hoodie
              </p>
              <p className="text-slate-900 text-sm sm:text-lg font-medium my-1">
                Size : M
              </p>
              <p className="text-slate-900 text-sm sm:text-lg font-medium">
                20000 INR
              </p>
            </div>
            <div>
              <select className="py-2 pr-7 sm:pr-14 text-lg font-medium cursor-pointer pl-1 border-2 bg-[#F6F6F6] border-gray-400 rounded focus:outline-none">
                <option value="1" className="py-2">
                  1
                </option>
                <option value="2" className="py-2">
                  2
                </option>
                <option value="3" className="py-2">
                  3
                </option>
                <option value="4" className="py-2">
                  4
                </option>
                <option value="5" className="py-2">
                  5
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* summary details */}
      <div className="rounded-lg shadow-lg border-1 border-gray-600 sm:col-span-4 h-[360px] max-h-[380px]">
        <h2 className="py-4 px-8 text-xl font-bold">SUMMARY</h2>
        <div className="flex justify-between flex-col px-8">
          <div className="flex justify-between items-center py-4">
            <p className="text-xl font-medium">Subtotal</p>
            <p className="text-xl font-medium">20000 INR</p>
          </div>
          <div className="flex justify-between items-center py-4">
            <p className="text-lg font-medium text-gray-500">
              Estimated Delivery
            </p>
            <p className="text-lg font-medium text-gray-500">Free</p>
          </div>
          <div className="h-[2px] bg-black"></div>
          <div className="flex justify-between items-center py-5">
            <p className="text-xl font-medium">Total</p>
            <p className="text-xl font-medium">20000 INR</p>
          </div>
          <div className="h-[2px] bg-black"></div>
          <button className="w-full py-3 my-5 text-lg font-semibold bg-black rounded-lg text-white tracking-[1px]">
            BUY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
