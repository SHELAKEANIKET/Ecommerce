import React from "react";
import Search from "./Search";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Search />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
