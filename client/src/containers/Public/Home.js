import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Navigation, Search } from "./index";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  return (
    <div className="w-full flex flex-col items-center m-auto h-full ">
      <Header />
      <Navigation />
      <Search />
      <div className="w-8/12 flex flex-col items-start justify-start mt-3">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
