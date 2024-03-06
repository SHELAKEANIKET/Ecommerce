import React from "react";
import { RiHomeLine, RiShoppingCartLine,RiHeart3Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-center items-center gap-12 sm:gap-20 mt-5 py-5 bg-[#f6f6f6] fixed bottom-0 w-full">
      <div className="flex justify-center items-center flex-col gap-1 font-medium">
        <RiHomeLine className="text-xl"/>
        <Link to="/"><p className="cursor-pointer">Home</p></Link>
      </div>
      <div className="flex justify-center items-center flex-col gap-1 font-medium">
        <RiShoppingCartLine className="text-xl"/>
        <Link to="/cart"><p className="cursor-pointer">Cart</p></Link>
      </div> 
      <div className="flex justify-center items-center flex-col gap-1 font-medium">
        <RiHeart3Line className="text-xl"/>
       <Link to="/likedproducts"><p className="cursor-pointer">Liked</p></Link>
      </div>
      <div className="flex justify-center items-center flex-col gap-1 font-medium">
        <CgProfile className="text-xl"/>
       <Link to="/profile"><p className="cursor-pointer">Profile</p></Link>
      </div>
    </div>
  );
}

export default Footer;
