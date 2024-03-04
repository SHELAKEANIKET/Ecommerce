import React from "react";
import { RiHomeLine, RiShoppingCartLine,RiHeart3Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

function Footer() {
  return (
    <div className="flex justify-center items-center gap-12 sm:gap-20 mt-5 py-8 bg-[#f6f6f6]">
      <div className="flex justify-center items-center flex-col gap-2 font-medium">
        <RiHomeLine className="text-xl"/>
        <p className="cursor-pointer">Home</p>
      </div>
      <div className="flex justify-center items-center flex-col gap-2 font-medium">
        <RiShoppingCartLine className="text-xl"/>
        <p className="cursor-pointer">Cart</p>
      </div> 
      <div className="flex justify-center items-center flex-col gap-2 font-medium">
        <RiHeart3Line className="text-xl"/>
        <p className="cursor-pointer">Liked</p>
      </div>
      <div className="flex justify-center items-center flex-col gap-2 font-medium">
        <CgProfile className="text-xl"/>
        <p className="cursor-pointer">Profile</p>
      </div>
    </div>
  );
}

export default Footer;
