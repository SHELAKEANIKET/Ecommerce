import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout';
import Cart from './Cart';
import LikedProducts from './LikedProducts';
import Profile from './Profile';
import HomeLayout from './HomeLayout';


function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout/>}>
        <Route path="/" element={<HomeLayout/>}>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/likedproducts" element={<LikedProducts/>}/>
        <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
