import React from "react";

import { text } from "../../ultils/constants";
import { Province } from "../../components";
import { List } from "./index";
import { Pagination } from "./index";

const Homepages = () => {
  return (
    <div className="border border-red-500 w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HEADER}</h1>
        <p className="text-base text-gray-700">{text.DESCRIPTION}</p>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List />
          <Pagination />
        </div>

        <div className="w-[30%] border border-green-500">SideBar</div>
      </div>
    </div>
  );
};

export default Homepages;
